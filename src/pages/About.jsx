function About() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About TravelGo</h1>
      <p className="text-gray-600 mb-6">
        TravelGo is a travel agency dedicated to making your dream destinations a reality.
        With years of experience in the industry, we craft personalized travel packages
        that fit every budget and lifestyle.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-500 mt-2">Happy Travelers</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-bold text-blue-600">50+</h3>
          <p className="text-gray-500 mt-2">Destinations</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-2xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-500 mt-2">Years Experience</p>
        </div>
      </div>
    </div>
  );
}

export default About;