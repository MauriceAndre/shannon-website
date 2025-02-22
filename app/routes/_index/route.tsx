import type { MetaFunction } from "@remix-run/node";
import styles from "./_index.module.scss";
import { motion } from "motion/react";
import PianoSvg from "~/components/icons/PianoSvg";
import BookSvg from "~/components/icons/BookSvg";
import Program from "~/components/Program/Program";
import FlipWords from "~/components/FlipWords/FlipWords";
import { TextHighlight } from "~/components/HeroHighlight/TextHighlight";
import Fullpage from "~/components/Fullpage/Fullpage";
import Page from "~/components/Fullpage/Page";
import Footer from "~/components/Footer/Footer";

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
  const currentColor = getCurrentColor();

  return (
    <Fullpage>
      <Page title="Home" anchorName="home">
        <div className="relative h-screen">
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <img
              src="/background.png"
              alt="Calgary"
              className={`${styles["hero-image-background"]} absolute`}
            />
            <motion.img
              src="/clouds.png"
              alt="Calgary"
              className={`${styles["hero-image-clouds"]} absolute`}
              initial={{ scale: 0.5 }}
              transition={{ duration: 4, ease: [0.42, 0, 0.58, 1] }}
              whileInView={{ scale: [0.5, 1] }}
              viewport={{ once: false }}
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

        <div className="absolute bottom-8 w-full flex flex-col items-center text-center">
          <p className="text-white mb-2">Pick a Class</p>
          <a href="#pick-a-class">
            <motion.img
              src="/arrow-down.svg"
              className="cursor-pointer invert"
              alt="Scroll down"
              style={{ width: "40px" }}
              whileHover={{ filter: "invert(1) drop-shadow(0 0 10px white)" }}
              animate={{
                y: [0, 10, 10, 10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  times: [0, 0.5, 0.5, 0.5, 1],
                  repeatDelay: 1,
                },
              }}
            />
          </a>
        </div>
      </Page>

      <Page title="Pick a Class" anchorName="pick-a-class">
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
      </Page>

      <Page footer title="Footer" anchorName="footer">
        <Footer />
      </Page>
    </Fullpage>
  );
}
