import { useRef } from "react";
import type { MetaFunction } from "@remix-run/node";
import styles from "./_index.module.scss";
import PianoSvg from "~/components/icons/PianoSvg";
import BookSvg from "~/components/icons/BookSvg";
import Program from "~/components/Program/Program";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import FlipWords from "~/components/FlipWords/FlipWords";
import { TextHighlight } from "~/components/HeroHighlight/TextHighlight";

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
  return colors[day];
};

export default function Index() {
  const ref = useRef<IParallax>(null);
  const currentColor = getCurrentColor();

  return (
    <Parallax pages={2} ref={ref}>
      <ParallaxLayer offset={0} speed={0} style={{ zIndex: 0 }}>
        <div className="flex flex-col items-center p-8 h-full relative">
          <div className="flex justify-center items-center relative w-full h-full">
            <img
              src="/background.png"
              alt="Calgary"
              className={`${styles["hero-image-background"]} absolute`}
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 0 }}>
        <div className="flex flex-col items-center p-8 h-full relative">
          <div className="flex justify-center items-center relative w-full h-full">
            <img
              src="/clouds.png"
              alt="Calgary"
              className={`${styles["hero-image-clouds"]} absolute`}
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0} style={{ zIndex: 0 }}>
        <div className="flex flex-col items-center p-8 h-full relative">
          <div className="flex justify-center items-center relative w-full h-full">
            <img
              src="/tower.png"
              alt="Calgary"
              className={`${styles["hero-image-tower"]} absolute`}
              style={{
                filter: `drop-shadow(0 0 30px ${currentColor}) drop-shadow(0 0 60px ${currentColor})`,
              }}
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0} style={{ zIndex: 0 }}>
        <div className="flex flex-col items-center p-8 h-full relative">
          <div className="flex justify-center items-center relative w-full h-full">
            <img
              src="/calgary.png"
              alt="Calgary"
              className={`${styles["hero-image"]} absolute`}
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0} style={{ zIndex: 1 }}>
        <div className="flex flex-col items-center p-8 h-full relative">
          <div className="flex justify-center items-center relative w-full h-full">
            <div className="absolute text-center text-white">
              <h1 className="text-6xl font-bold md:mb-4">
                <span style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}>
                  <TextHighlight>
                    <FlipWords words={["Piano", "English"]} />
                  </TextHighlight>{" "}
                </span>
                <span
                  style={{
                    textShadow: "0 0 10px #000, 0 0 20px #000, 0 0 30px #000",
                  }}
                >
                  Lessons
                </span>
              </h1>
              <h2
                className="text-6xl font-light"
                style={{
                  textShadow: "0 0 10px #000, 0 0 20px #000, 0 0 30px #000",
                }}
              >
                in the <span className="text-red-500">♥</span> of
              </h2>
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={3} style={{ zIndex: 2 }}>
        <div className="flex flex-col items-center h-full relative">
          <button
            onClick={() => ref.current?.scrollTo(1)}
            className="bg-white text-black p-2 rounded-full w-40 border-2 border-black z-10"
          >
            Pick a class <br />
            <strong>↓</strong>
          </button>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0}>
        <div className="flex flex-col items-center content-center justify-around h-full">
          <h2 className="text-5xl font-bold mb-4">Pick a Class</h2>
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
