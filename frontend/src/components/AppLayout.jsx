import { Link, NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#f3f5f2] text-[#172b27]">
      <header className="border-b border-[#d9e1dc] bg-white/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="NITRR Digital Twin home">
            <span className="grid size-10 place-items-center bg-[#164e45] text-sm font-bold text-white">
              DT
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-wide">NITRR</span>
              <span className="block text-xs text-[#63736d]">Digital Twin</span>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `border-b-2 px-2 py-2 text-sm font-medium ${
                  isActive
                    ? "border-[#d26b42] text-[#172b27]"
                    : "border-transparent text-[#63736d] hover:text-[#172b27]"
                }`
              }
            >
              Home
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Outlet />
      </main>

      <footer className="border-t border-[#d9e1dc] px-5 py-5 text-center text-xs text-[#63736d]">
        NITRR Digital Twin · Project foundation
      </footer>
    </div>
  );
}