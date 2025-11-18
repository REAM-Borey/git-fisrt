import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StartCart";
import UserTable from "../components/UserTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard title="Total Users" value="1,200" icon="👥" color="text-blue-500" />
            <StatCard title="Revenue" value="$24,500" icon="💰" color="text-green-500" />
            <StatCard title="Active Sessions" value="30" icon="⚡" color="text-yellow-500" />
            <StatCard title="New Orders" value="76" icon="🛒" color="text-purple-500" />
          </div>

          {/* User Table */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">User Management</h2>
            <UserTable />
          </section>
        </main>
      </div>
    </div>
  );
}
