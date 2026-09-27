import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="max-w-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a34d31]">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-[#173c35]">Page not found</h1>
      <p className="mt-3 text-sm leading-6 text-[#63736d]">
        This address does not match a page in the current project foundation.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex border border-[#164e45] px-4 py-2.5 text-sm font-semibold text-[#164e45] hover:bg-[#e8efeb]"
      >
        Return home
      </Link>
    </section>
  );
}