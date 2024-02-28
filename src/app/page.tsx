import Image from 'next/image'
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import Bio from "../components/bio";

function Home() {
  return (
    <div>
      <div>
        <Bio />
      </div>
    </div>
  );
}

export default Home;
