"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

const MOCK_HERO = {
  title: "Before they sold out",
  description:
    "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.",
  image:
    "https://img.freepik.com/premium-photo/set_1046379-627.jpg",
};

interface HeroData {
  title: string;
  description: string;
  image: string;
}

const Hero = () => {
  const [hero, setHero] = useState<HeroData>(MOCK_HERO);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await api("/hero"); 
        if (res?.status && res?.data) {
          setHero(res.data);
        }
      } catch (error) {
        console.warn("Using mock hero data");
      }
    };

    fetchHero();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-6 py-10 md:flex-row flex-col items-center">
        
        {/* TEXT */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            {hero.title}
          </h1>

          <p className="mb-8 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex gap-4">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </button>

            <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <Image
            className="object-cover object-center rounded-lg"
            alt="hero"
            src={hero.image}
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
