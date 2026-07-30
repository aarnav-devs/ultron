import DashboardLayout from "@/components/layout/dashboard-layout";
import StatsCard from "@/components/dashboard/stats-card";

export default function Home() {
  return (
    <DashboardLayout>

      <div>

        <h1 className="mb-8 text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatsCard
            title="Projects"
            value="0"
            subtitle="Create your first project"
          />

          <StatsCard
            title="Datasets"
            value="0"
            subtitle="Upload a CSV"
          />

          <StatsCard
            title="Models"
            value="0"
            subtitle="No models trained"
          />

          <StatsCard
            title="Deployments"
            value="0"
            subtitle="Nothing deployed"
          />

        </div>

      </div>

    </DashboardLayout>
  );
}