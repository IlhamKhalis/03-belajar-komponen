import Image from 'next/image'
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import Bio from "../components/bio";
import Todo from "../components/todolist";

function Home() {
  return (
    <div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default Home;
