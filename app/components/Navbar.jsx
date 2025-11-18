"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow-sm px-6 py-3 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-800">🔔</button>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=8"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700 font-medium">Borey Reun</span>
        </div>
      </div>
    </nav>
  );
}
