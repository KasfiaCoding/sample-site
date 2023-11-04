import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="min-h-[100vh] w-full bg-[#0F0d0d] pt-14">
      <div data-aos="fade-left">
        <h1 className="text-white text-8xl font-medium font-DM ml-80">
          Moon Star
        </h1>
      </div>
      <div data-aos="fade-right">
        <h1 className="text-white text-8xl font-medium font-DM ml-[600px]">
          Digital Products
        </h1>
      </div>
      <div data-aos="zoom-in"
      className="flex justify-center mt-16">
        <video
          className="w-3/4"
          autoPlay
          muted
          loop
          src="/src/assets/stock-footage-camera-zoom-to-arcade-machine-screen-a-retro-arcade-room-d-animation-render-isolated-closeup.webm"
        ></video>
      </div>
    </div>
  );
};

export default Home;
