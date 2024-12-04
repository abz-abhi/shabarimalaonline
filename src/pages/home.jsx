import Bground from "../components/backgroud";
import Wish from "../components/wish";
import LatestUpdates from "../components/updates";

function Home() {
  return (
    <div className="max-w-[2000px]">
      <Bground />
      <Wish />
      <LatestUpdates />
    </div>
  );
}

export default Home;