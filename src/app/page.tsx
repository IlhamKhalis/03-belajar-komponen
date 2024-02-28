import Image from 'next/image'
import Profile from "../components/profile";

function Home() {
  return (
    <div>
      <h1>Ilmuwan yang luar biasa</h1>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default Home;
