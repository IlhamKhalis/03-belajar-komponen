import Image from 'next/image'
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

function Home() {
  return (
    <div>
      <h1>Ilmuwan yang luar biasa</h1>
      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
