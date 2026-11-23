"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

export function SpringDemo() {
  const [stiffness, setStiffness] = useState(180);
  const [damping, setDamping] = useState(18);
  const [atEnd, setAtEnd] = useState(false);
  const reducedMotion = useReducedMotion();
  const marker = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marker.current) return;
    const controls = animate(marker.current, { x: atEnd ? "100%" : "0%" }, reducedMotion
      ? { duration: 0 }
      : { type: "spring", stiffness, damping });
    return () => controls.stop();
  }, [atEnd, stiffness, damping, reducedMotion]);

  return (
    <section className="spring-demo" aria-labelledby="spring-title">
      <h2 id="spring-title">Spring playground</h2>
      <p>Stiffness controls how strongly the marker is pulled toward its target. Damping controls how quickly it settles.</p>
      <div className="spring-track" aria-hidden="true">
        <div ref={marker} className="spring-travel"><div className="spring-marker" /></div>
      </div>
      <div className="spring-controls">
        <label>
          <span>Stiffness <span aria-hidden="true">{stiffness}</span></span>
          <input type="range" min={60} max={400} step={10} value={stiffness} onChange={(event) => setStiffness(event.target.valueAsNumber)} />
        </label>
        <label>
          <span>Damping <span aria-hidden="true">{damping}</span></span>
          <input type="range" min={4} max={40} value={damping} onChange={(event) => setDamping(event.target.valueAsNumber)} />
        </label>
      </div>
      <button className="button button-primary" type="button" onClick={() => setAtEnd(!atEnd)}>
        {atEnd ? "Move to start" : "Move to end"}
      </button>
      {reducedMotion && <p className="spring-motion-note">Reduced motion is enabled. The marker moves directly to its target.</p>}
    </section>
  );
}
