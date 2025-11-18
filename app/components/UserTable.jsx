"use client";
import React, { useState } from 'react'
const users = [
  { name: "John Doe", email: "john@example.com", role: "Admin", joinedAt: "2022-05-15" },
  { name: "Jane Smith", email: "jane@example.com", role: "User", joinedAt: "2022-07-20" },
  { name: "Alen Doe", email: "alen@example.com", role: "User", joinedAt: "2022-07-21" },
  { name: "Dustin", email: "dustin@example.com", role: "User", joinedAt: "2022-07-21" },
];

export default function UserTable() {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm bg-white sm:min-w-full">
      <table className="min-w-full divide-y divide-gray-200 sm:min-w-full">
        <thead className="bg-gray-100">
          <tr>
            {["Name", "Email", "Role", "Joined At", "Actions"].map((heading) => (
              <th
                key={heading}
                className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-4 text-sm text-slate-900 font-medium">{user.name}</td>
              <td className="px-4 py-4 text-sm text-slate-600 font-medium">{user.email}</td>
              <td className="px-4 py-4 text-sm text-slate-600 font-medium">{user.role}</td>
              <td className="px-4 py-4 text-sm text-slate-600 font-medium">{user.joinedAt}</td>
              <td className="px-4 py-4 text-sm">
                {/* status */}
                 <label className='flex cursor-pointer select-none items-center'>
                  <div className='relative'>
                    <input
                      type='checkbox'
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className='sr-only'
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full  ${
                        isChecked ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center bg-gray-900 rounded-full bg-white bg-blue-900 transition ${
                        isChecked ? 'translate-x-full' : 'bg-blue-900'
                      }`}
                    ></div>
                  </div>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
