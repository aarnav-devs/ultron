import {
  LayoutDashboard,
  Database,
  Brain,
  Rocket,
  FlaskConical,
  KeyRound,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Datasets", icon: Database },
  { name: "Models", icon: Brain },
  { name: "Deployments", icon: Rocket },
  { name: "Experiments", icon: FlaskConical },
  { name: "API Keys", icon: KeyRound },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-[#090b12] min-h-screen p-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        ULTRON
      </h1>

      <div className="mt-10 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-4 rounded-xl p-3 transition hover:bg-slate-800"
            >
              <Icon size={20} />
              {item.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
}