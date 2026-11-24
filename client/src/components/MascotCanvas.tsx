import { useEffect, useRef } from "react";
import { AmbientLight, AnimationMixer, Box3, Group, Mesh, OrthographicCamera, Scene, Texture, Vector3, WebGLRenderer } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function releaseModel(model: Group) {
  const textures = new Set<Texture>();
  model.traverse((object) => {
    if (!(object instanceof Mesh)) return;
    object.geometry.dispose();
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    for (const material of materials) {
      for (const value of Object.values(material)) {
        if (value instanceof Texture) textures.add(value);
      }
      material.dispose();
    }
  });
  textures.forEach((texture) => texture.dispose());
}

export default function MascotCanvas({ paused }: { paused: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused);
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return; // The poster underneath also serves browsers without WebGL.
    }
    const scene = new Scene();
    scene.add(new AmbientLight(0xffffff, Math.PI));
    const camera = new OrthographicCamera();
    camera.position.z = 4;
    let model: Group | undefined;
    let expression: AnimationMixer | undefined;
    let disposed = false;
    let previous = 0;
    let halfHeight = 1;
    const draw = () => {
      const { clientWidth: width, clientHeight: height } = canvas;
      if (!model || !width || !height || renderer.getContext().isContextLost()) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
      const halfWidth = halfHeight * width / height;
      Object.assign(camera, { left: -halfWidth, right: halfWidth, top: halfHeight, bottom: -halfHeight });
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
      canvas.dataset.ready = "true";
    };
    function animate(now: number) {
      if (model && !pausedRef.current && previous) {
        // A full turn takes 48 seconds. Discard time spent in a background tab.
        const seconds = Math.min(now - previous, 100) / 1000;
        expression?.update(seconds);
        model.rotation.y += seconds * 2 * Math.PI / 48;
        renderer.render(scene, camera);
      }
      previous = now;
    }
    function refreshLoop() {
      previous = 0;
      renderer.setAnimationLoop(model && !document.hidden && !renderer.getContext().isContextLost() ? animate : null);
    }
    function contextLost() {
      delete canvas!.dataset.ready;
      renderer.setAnimationLoop(null);
    }
    function contextRestored() { draw(); refreshLoop(); }
    const size = new ResizeObserver(draw);
    size.observe(canvas);
    canvas.addEventListener("webglcontextlost", contextLost);
    canvas.addEventListener("webglcontextrestored", contextRestored);
    document.addEventListener("visibilitychange", refreshLoop);
    new GLTFLoader().load("/mascot/erfan-suited.glb", ({ scene: loaded, animations }) => {
      if (disposed) { releaseModel(loaded); return; }
      const bounds = new Box3().setFromObject(loaded);
      halfHeight = bounds.getSize(new Vector3()).y * 0.513;
      loaded.position.sub(bounds.getCenter(new Vector3()));
      model = new Group();
      model.add(loaded);
      expression = new AnimationMixer(loaded);
      for (const clip of animations) expression.clipAction(clip).play();
      scene.add(model);
      draw();
      refreshLoop();
    }, undefined, () => { /* Keep the poster visible if the model could not load. */ });
    return () => {
      disposed = true;
      size.disconnect();
      document.removeEventListener("visibilitychange", refreshLoop);
      canvas.removeEventListener("webglcontextlost", contextLost);
      canvas.removeEventListener("webglcontextrestored", contextRestored);
      renderer.setAnimationLoop(null);
      expression?.stopAllAction();
      if (model) releaseModel(model);
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);
  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full opacity-0 data-[ready]:opacity-100" />;
}
