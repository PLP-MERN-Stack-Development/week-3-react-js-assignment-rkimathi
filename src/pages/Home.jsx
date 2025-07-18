const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My React App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Built with Vite, React, Tailwind CSS v4, and React Router
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-600 mb-6">
            This is a modern React application with all the latest tools and best practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-blue-900 mb-2">⚡ Vite</h3>
              <p className="text-blue-700">Lightning fast development server</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-green-900 mb-2">🎨 Tailwind CSS</h3>
              <p className="text-green-700">Utility-first CSS framework</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-purple-900 mb-2">🚀 React Router</h3>
              <p className="text-purple-700">Declarative routing for React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home