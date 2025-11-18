"use client";

export default function Sidebar() {
  return (
    <aside className="bg-gradient-to-b from-gray-800 to-gray-900 text-white w-64 min-h-screen p-6 hidden md:block">
      <h1 className="text-xl font-bold mb-10">⚡ AdminBoard</h1>
      <nav className="flex flex-col space-y-3">
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-lg">🏠 Dashboard</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-lg">👥 Users</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-lg">📦 Products</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-lg">📊 Analytics</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-lg">⚙️ Settings</a>
      </nav>
    </aside>
  );
}
