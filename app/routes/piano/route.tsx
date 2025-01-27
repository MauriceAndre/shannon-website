import { MetaFunction } from "@remix-run/react";
import { Marquee } from "~/components/Marquee/Marquee";
import Fullpage from "~/components/Fullpage/Fullpage";
import Page from "~/components/Fullpage/Page";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Sarah",
    body: "Shannon's patience and expertise helped me achieve my RCM Grade 8 with honors!",
  },
  {
    name: "Michael",
    body: "My daughter loves her lessons, especially with Clementine keeping her company!",
  },
];

const ReviewCard = ({ name, body }: { name: string; body: string }) => {
  return (
    <div className="h-full px-2.5">
      <div className="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-6">
        <div className="pb-4 font-light text-white/75">{body}</div>
        <div className="mt-auto flex items-center gap-4">
          <div className="flex flex-col text-sm">
            <div className="text-white">- {name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PianoPage() {
  return (
    <Fullpage>
      <Page title="Intro" anchorName="intro">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12 text-center">
            <h1 className="text-8xl font-bold mb-4">Piano Lessons</h1>
            <p className="text-xl text-gray-200">
              Nurturing Musical Excellence for All Ages and Levels
            </p>
            {/* <div style={{ height: "200px" }}></div> */}
          </section>
          {/* <section className="mb-12 text-center">
            <p className="text-xl text-gray-600">
              Hi, I am Shannon, your dedicated piano teacher with over 10 years
              of experience. Join me in a musical journey where we explore the
              beauty of piano together.
            </p>
          </section> */}
          <motion.img
            className="absolute invert"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0 }}
            src="/music-note-1.png"
            style={{
              width: "100px",
              top: "20%",
              left: "15%",
            }}
          />
          <motion.img
            className="absolute invert"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
            src="/music-note-3.png"
            style={{
              width: "70px",
              top: "10%",
              left: "50%",
            }}
          />
          <motion.img
            className="absolute invert"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            src="/music-note-2.png"
            style={{
              width: "100px",
              top: "30%",
              right: "15%",
            }}
          />
        </div>
        {/* <img
          src="/piano-keyboard.svg"
          alt="Piano keyboard"
          style={{
            position: "absolute",
            bottom: "15%",
            left: 0,
            width: "100%",
          }}
        /> */}
        <div className="absolute bottom-8 w-full flex flex-col items-center text-center">
          <p className="text-white mb-2">
            Let's explore the beauty of piano together.
          </p>
          <a href="#meet-your-teacher">
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

      <Page title="Meet Your Teacher" anchorName="meet-your-teacher">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <motion.img
                src="/shannon.jpg"
                alt="Shannon teaching piano"
                className="rounded-lg shadow-lg"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: "easeInOut",
                  duration: 1,
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Meet Your Teacher</h2>
              <ul className="space-y-2">
                <li>✨ 10 years of teaching experience</li>
                <li>🎓 ARCT in Piano Performance</li>
                <li>🎵 Bachelor of Music from UBC</li>
                <li>📚 Specialized in Classical, RCM, and Theory</li>
              </ul>
              <div className="mt-4">
                <motion.button
                  className="bg-gray-600 text-white px-8 py-3 rounded-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => (window.location.href = "/bio")}
                >
                  Detailed Bio
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>
      </Page>

      <Page title="The Studio Experience" anchorName="studio-experience">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              The Studio Experience
            </h2>
            <p className="mb-4">
              Welcome to my home studio, featuring a beautiful grand piano in a
              warm, inspiring environment. Nestled in the ❤️ of Calgary, where
              the city's vibrant energy meets a cozy, artistic atmosphere, I
              provide personalized lessons tailored to each student's goals and
              learning style.
            </p>
          </section>
        </div>
      </Page>

      <Page title="Lesson Scheduling" anchorName="lesson-scheduling">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Lesson Scheduling</h2>
            <p className="mb-4">
              Lessons can be online or at Shannon's home studio. Lessons proceed
              on a weekly basis.
            </p>
            <p className="mb-4">
              It's never too late to start! Get a free trial lesson.
            </p>
          </section>
        </div>
      </Page>

      <Page title="Meet Clementine" anchorName="meet-clementine">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Meet Clementine - Your Feline Teaching Assistant
            </h2>
            <div className="flex items-center gap-6  text-black">
              <img
                src="clementine-selfie.jpg"
                alt="Clementine the cat"
                className="w-48 h-48 rounded-full object-cover"
              />
              <p className="italic">
                "Hi! I'm Clementine, the resident comfort coordinator. While
                Shannon handles the music, I ensure each student feels right at
                home. My specialties include purr-fect moral support and
                occasional piano bench companionship. 🐱"
              </p>
            </div>
          </section>
        </div>
      </Page>

      <Page title="Student Reviews" anchorName="student-reviews">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
            <Marquee pauseOnHover className="[--duration:20s]">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </Marquee>
          </section>
        </div>
      </Page>

      <Page title="Start Your Musical Journey" anchorName="start-your-journey">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Begin Your Musical Journey?
            </h2>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book Your First Lesson
            </button>
          </section>
        </div>
      </Page>

      <Page title="Frequently Asked Questions" anchorName="faq">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">
                  What ages do you teach?
                </h3>
                <p>
                  I teach students of all ages, from young children to adults.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Do I need my own piano?
                </h3>
                <p>
                  While having your own piano is beneficial for practice, I also
                  offer guidance on selecting the right instrument for your
                  needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  How often are lessons?
                </h3>
                <p>
                  Lessons are typically held once a week, but I can accommodate
                  different schedules as needed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Can I take online lessons?
                </h3>
                <p>
                  Yes, I offer both in-person and online lessons to suit your
                  preferences.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Page>
    </Fullpage>
  );
}

export const meta: MetaFunction = () => {
  const title = "Piano Lessons with Shannon - Classical & RCM Piano Teacher";
  const description =
    "Experience exceptional piano instruction with Shannon, an ARCT-certified teacher with 10 years of experience. Offering lessons for all ages and levels in a welcoming environment with Clementine, our feline teaching assistant.";
  const imageUrl = "/images/shannon-piano.jpg";

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical" },
    { property: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
};
