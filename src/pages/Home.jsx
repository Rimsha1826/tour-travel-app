import Hero from "../components/Hero";
import PopularDestinations from "../components/PopularDestinations";
import RecentTrips from "../components/RecentTrips";

function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <RecentTrips />
    </div>
  );
}

export default Home;