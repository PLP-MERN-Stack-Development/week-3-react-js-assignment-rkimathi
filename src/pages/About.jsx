const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            This is the about page of our React application. Here you can learn more about
            our project, team, and mission.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We strive to create amazing web applications using modern technologies and
            best practices. Our goal is to deliver exceptional user experiences while
            maintaining clean, maintainable code.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>React 18 - Modern React with hooks and concurrent features</li>
            <li>Vite - Next generation frontend tooling</li>
            <li>Tailwind CSS v4 - Utility-first CSS framework</li>
            <li>React Router - Declarative routing for React</li>
            <li>pnpm - Fast, disk space efficient package manager</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About