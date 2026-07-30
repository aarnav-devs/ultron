import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-slate-800 px-8">

      <div>
        <h2 className="text-2xl font-semibold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-5">

        <Search />

        <Bell />

        <div className="h-10 w-10 rounded-full bg-cyan-500" />

      </div>

    </nav>
  );
}