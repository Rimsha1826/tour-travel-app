import TripCard from "./TripCard";

const trips = [
  {
    id: 1,
    title: "Mountain Hiking Adventure",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
  },
  {
    id: 2,
    title: "Beach Sunset Tour",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400",
  },
  {
    id: 3,
    title: "City Exploration",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400",
  },
];

function RecentTrips() {
  return (
    <div className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Recent Trips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            image={trip.image}
            title={trip.title}
            location={trip.location}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentTrips;