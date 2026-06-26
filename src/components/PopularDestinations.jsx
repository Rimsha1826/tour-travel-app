import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: 1,
    title: "Paris, France",
    price: "$899",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
  },
  {
    id: 2,
    title: "Bali, Indonesia",
    price: "$649",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400",
  },
  {
    id: 3,
    title: "Santorini, Greece",
    price: "$1099",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400",
  },
  {
    id: 4,
    title: "Kyoto, Japan",
    price: "$1299",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400",
  },
];

function PopularDestinations() {
  return (
    <div className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            image={dest.image}
            title={dest.title}
            price={dest.price}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularDestinations;