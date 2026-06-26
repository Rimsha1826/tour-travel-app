function Hero() {
  return (
    <div
      className="relative flex flex-col items-center text-center px-6 py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200')",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
          Explore The World <br /> With Us
        </h1>
        <p className="text-gray-200 max-w-xl mb-8">
          Discover breathtaking destinations and create unforgettable memories with our curated travel packages.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;