function Service() {
  const services = [
    {
      id: 1,
      title: "Flight Booking",
      desc: "Get the best deals on domestic and international flights worldwide.",
    },
    {
      id: 2,
      title: "Hotel Reservation",
      desc: "Choose from thousands of hotels, resorts, and stays at great prices.",
    },
    {
      id: 3,
      title: "Tour Packages",
      desc: "Customized tour packages for families, couples, and solo travelers.",
    },
  ];

  return (
    <div className="px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;