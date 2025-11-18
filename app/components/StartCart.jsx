"use client";

export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-5 flex items-center justify-between hover:shadow-md transition">
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
      </div>
      <div className={`text-3xl ${color}`}>{icon}</div>
    </div>
  );
}
