import Image from 'next/image'
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import Bio from "../components/bio";
import Todo from "../components/todolist";
import Mg from "../components/mygallery";
import Mp from "../components/myprofile";
import Mp2 from "../components/myprofilev2";

function Home() {
  return (
    <section>
      <Mp2 />
    </section>
  );
}

export default Home;
