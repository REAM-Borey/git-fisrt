// app/components/SignUpForm.jsx
"use client"; // Required for Next.js App Router
import WorkShift from "./WorkShift"
export default function SignUpForm() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-12 px-4">
      <div className="container max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
          <p className="text-gray-500 mt-2">Fill in the details below to get started</p>
        </div>
        <form className="gap-2">
          {/* First Name */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              title user name
            </label>
            <input
              type="text"
              id="title"
              placeholder="title"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 transition duration-150 ease-in-out"
            />
          </div>

          {/* Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start Date */}
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                    </label>
                    <input
                    type="date"
                    id="startDate"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 transition duration-150 ease-in-out"
                    />
                </div>
                {/* End Date */}
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                    </label>
                    <input
                    type="date"
                    id="endDate"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 transition duration-150 ease-in-out"
                    />
                </div>
            </div>
            {/* workshift */}
            <WorkShift/>
          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Remark
            </label>
            <textarea
              id="address"
              rows="3"
              placeholder="Enter your full address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 transition duration-150 ease-in-out"
            ></textarea>
          </div>
            <div className="md:col-span-2 mt-8 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 sm:text-sm md:text-base">
            {/* Cancel Button */}
                <button
                    type="button"
                    className="border border-gray-300 text-gray-700 bg-white rounded-lg py-2 px-4 sm:py-1 sm:px-5 md:py-2 md:px-6 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                >
                    Cancel
                </button>
                {/* Add New Button */}
                <button
                    type="button"
                    className="bg-blue-600 border border-blue-600 text-white rounded-lg py-2 px-4 sm:py-1 sm:px-5 md:py-2 md:px-6 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                    Add New
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
