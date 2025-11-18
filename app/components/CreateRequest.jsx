// app/components/SignUpForm.jsx
"use client"; // Required for Next.js App Router

export default function CreateRequest() {
    const [selected, setSelected] = useState("");
  
    const options = [
      { id: "morning", label: "Morning", desc: "learn mmore time that you have many time for work" },
      { id: "afternoon", label: "Afternoon",desc: "learn mmore time that you have many time for work" },
      { id: "full-day", label: "Full Day",desc: "learn mmore time that you have many time for work" },
    ];
  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-12 px-4">
      <div className="relative container max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl leading-none bg-red-900"
          aria-label="Close"
          onClick={() => console.log('Close clicked')}
        >
          &times;
        </button>
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
          <p className="text-gray-500 mt-2">Fill in the details below to get started</p>
        </div>
        <form className="gap-2">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 transition duration-150 ease-in-out"
            />
          </div>
          {/* Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
          {/* Shift Options */}
          <main className="flex items-center justify-center bg-gray-50 mt-6 rounded-lg p-4">
            <div className="flex flex-col w-full">
              <p className="text-md font-bold text-gray-900 mb-2">Shift</p>
              <p className="text-gray-500 mb-4">
                Select the plan that best fits your needs:
              </p>
              <div className="flex flex-col md:flex-row gap-5">
                {options.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className={`relative cursor-pointer bg-white rounded-xl border-2 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 p-5 text-center shadow-md transition-all duration-200 hover:shadow-lg hover:border-blue-400
                      ${
                        selected === option.id
                          ? "border-blue-500 bg-blue-50 text-blue-600 shadow-lg"
                          : "border-gray-200 hover:border-blue-400 hover:shadow-lg"
                      }`}
                  >
                    {/* Radio button top-left */}
                    <input
                      type="radio"
                      id={option.id}
                      name="session"
                      value={option.id}
                      checked={selected === option.id}
                      onChange={() => setSelected(option.id)}
                      className="absolute top-3 left-3 w-5 h-5 accent-blue-600 cursor-pointer"
                    />

                    {/* Card Content */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-5xl mb-3">{option.icon}</div>
                      <h4 className="text-lg font-semibold">{option.label}</h4>
                      <p className="text-sm text-gray-500 mt-1">{option.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </main>
          {/* Remark */}
          <div className="mt-6">
            <label htmlFor="reasons" className="block text-sm font-medium text-gray-700 mb-1">
              Remark
            </label>
            <textarea
              id="reasons"
              rows="3"
              placeholder="Enter your reason here"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 transition duration-150 ease-in-out"
            ></textarea>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 sm:text-sm md:text-base">
            <button
              type="button"
              className="border border-gray-300 text-gray-700 bg-white rounded-lg py-2 px-4 sm:py-1 sm:px-5 md:py-2 md:px-6 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
              Cancel
            </button>
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
