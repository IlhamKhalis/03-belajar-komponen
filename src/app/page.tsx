import Image from 'next/image'
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import Bio from "../components/bio";
import Todo from "../components/todolist";
import Mg from "../components/mygallery";
import Mp from "../components/myprofile";

function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <Mp />
    </section>
  );
}

export default Home;
