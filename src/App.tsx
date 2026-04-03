function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="font-bold text-lg">MyGallery</h1>
        <div className="flex gap-6 text-gray-600">
          <p>Start</p>
          <p>Photos</p>
          <p>Docs</p>
          <p>Support</p>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="grid grid-cols-3 items-center px-10 py-16 gap-10">

        {/* LEFT PLACEHOLDER GRID */}
        <div className="grid grid-cols-4 gap-3 opacity-60">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 rounded-lg h-12"
            ></div>
          ))}
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Photo Gallery
          </h1>
          <p className="text-gray-600 mb-6">
            Store and explore your favorite photos easily.
          </p>

          <input
            type="text"
            placeholder="Search photos..."
            className="w-full px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* RIGHT PLACEHOLDER GRID */}
        <div className="grid grid-cols-4 gap-3 opacity-60">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 rounded-lg h-12"
            ></div>
          ))}
        </div>

      </div>

      {/* FEATURED SECTION */}
      <div className="px-10 pb-16">
        <h2 className="text-xl font-semibold mb-6">Featured Photos</h2>

        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 h-48 rounded-xl flex items-center justify-center text-gray-500"
            >
              Photo {i + 1}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App