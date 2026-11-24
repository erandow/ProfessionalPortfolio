import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell section-space page-heading">
      <h1>Page not found<span>.</span></h1>
      <Link href="/" className="button button-primary">Back to the workbench</Link>
    </div>
  );
}
