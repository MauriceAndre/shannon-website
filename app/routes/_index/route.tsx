import { useRef } from "react";
import type { MetaFunction } from "@remix-run/node";
import styles from "./_index.module.scss";
import PianoSvg from "~/components/icons/PianoSvg";
import BookSvg from "~/components/icons/BookSvg";
import Program from "~/components/Program/Program";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

export const meta: MetaFunction = () => {
  return [
    { title: "Shannon Ding - Home Page" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const colors = [
  "#34e3ff", // Sunday
  "#37dd00", // Monday
  "#ff0e72", // Tuesday
  "#8f5cff", // Wednesday
  "#ffa91f", // Thursday
  "#f50000", // Friday
  "#c247ff", // Saturday
];

const getCurrentColor = () => {
  const day = new Date().getDay();
  return colors[6];
};

export default function Index() {
  const ref = useRef<IParallax>(null);
  const currentColor = getCurrentColor();

  return (
    <Parallax pages={1.6} ref={ref}>
      <ParallaxLayer offset={0} speed={1.2} style={{ zIndex: 2 }}>
        <div className="flex flex-col items-center p-8 h-full relative">
          <div className="flex justify-center items-center relative w-full h-full">
            <img
              src="/background.png"
              alt="Calgary"
              className={`${styles["hero-image-background"]} absolute`}
              style={
                {
                  // filter: `drop-shadow(0 0 5px ${currentColor}) drop-shadow(0 0 10px ${currentColor})`,
                }
              }
            />
            <img
              src="/clouds.png"
              alt="Calgary"
              className={`${styles["hero-image-clouds"]} absolute`}
            />
            <img
              src="/tower.png"
              alt="Calgary"
              className={`${styles["hero-image-tower"]} absolute`}
              style={{
                filter: `drop-shadow(0 0 30px ${currentColor}) drop-shadow(0 0 60px ${currentColor})`,
              }}
            />
            <img
              src="/calgary.png"
              alt="Calgary"
              className={`${styles["hero-image"]} absolute`}
            />
          </div>
          <div className="flex-grow"></div>
          <button
            onClick={() => ref.current?.scrollTo(1)}
            className="bg-white text-black p-2 rounded-full mt-2 w-40 border-2 border-black z-10"
          >
            Pick a class <br />
            <strong>↓</strong>
          </button>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={0.5}>
        <div className="flex flex-col items-center content-center justify-around h-full">
          <h2 className="text-5xl font-bold mb-4">Pick a class</h2>
          <div className="flex flex-col md:flex-row justify-around content-center w-full">
            <Program
              className="w-full md:w-1/2 mb-4 md:mb-0"
              title="Piano Lessons"
              SvgComponent={PianoSvg}
              url="piano"
            />
            <Program
              className="w-full md:w-1/2"
              title="English Tutoring"
              SvgComponent={BookSvg}
              url="english"
            />
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
