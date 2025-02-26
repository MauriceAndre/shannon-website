import { MetaFunction, useNavigate } from "@remix-run/react";
import { Marquee } from "~/components/Marquee/Marquee";
import Fullpage from "~/components/Fullpage/Fullpage";
import Page from "~/components/Fullpage/Page";
import { motion } from "motion/react";
import FAQ from "~/components/FAQ/FAQ";
import "./piano.css";
import BlockQuote from "~/components/BlockQuote/BlockQuote";

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

const Section = ({
  title,
  anchorName,
  children,
}: {
  title: string;
  anchorName: string;
  children: React.ReactNode;
}) => {
  return (
    <Page title={title} anchorName={anchorName}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </Page>
  );
};

const faqItems = [
  {
    question: "What ages do you teach?",
    answer: "I teach students of all ages, from young children to adults.",
  },
  {
    question: "Do I need my own piano?",
    answer:
      "While having your own piano is beneficial for practice, I also offer guidance on selecting the right instrument for your needs.",
  },
  {
    question: "How often are lessons?",
    answer:
      "Lessons are typically held once a week, but I can accommodate different schedules as needed.",
  },
  {
    question: "Can I take online lessons?",
    answer:
      "Yes, I offer both in-person and online lessons to suit your preferences.",
  },
];

export default function PianoPage() {
  const navigate = useNavigate();

  return (
    <Fullpage>
      <Page title="Intro" anchorName="intro">
        <iframe
          className="overlay-video"
          src="https://www.youtube.com/embed/s71I_EWJk7I?si=ihxM9L4f-CsleMLc&autoplay=1&mute=1&controls=0&start=16&loop=1"
          data-keepplaying="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ filter: "brightness(0.6)" }}
        ></iframe>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12 text-center">
            <h1
              className="text-8xl font-bold mb-4"
              style={{
                textShadow:
                  "0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(100,149,237,0.3)",
              }}
            >
              Piano
              <br />
              Lessons
            </h1>
            <p className="text-xl text-gray-200">
              Nurturing Musical Excellence for All Ages and Levels
            </p>
            <button className="bg-blue-600 text-white mt-6 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book Your First Lesson
            </button>
          </section>
          <motion.img
            className="absolute invert"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0 }}
            src="/music-note-1.png"
            style={{
              width: "11vw",
              maxWidth: "100px",
              top: "20%",
              left: "15%",
              zIndex: -1,
            }}
          />
          <motion.img
            className="absolute invert"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
            src="/music-note-3.png"
            style={{
              width: "8vw",
              maxWidth: "70px",
              top: "10%",
              left: "50%",
              zIndex: -1,
            }}
          />
          <motion.img
            className="absolute invert"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            src="/music-note-2.png"
            style={{
              width: "11vw",
              maxWidth: "100px",
              top: "20%",
              right: "13%",
              zIndex: -1,
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

      <Section title="Meet Your Teacher" anchorName="meet-your-teacher">
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
            <p className="text-lg leading-relaxed mb-4">
              Hello! 👋 I'm Shannon, and my passion for music has been a
              lifelong journey. From the moment I touched the keys, I knew that
              piano would be my calling. Teaching allows me to share this love
              and inspire others to find their own musical voice. Whether it's
              the thrill of mastering a new piece or the joy of expressing
              oneself through music, I am dedicated to nurturing each student's
              unique talents and fostering a deep appreciation for the art of
              piano.
            </p>
            <h3 className="mt-4 text-2xl">
              Here are some of my key achievements:
            </h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                ✨ 10 years of teaching experience
              </div>
              <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                🎓 ARCT in Piano Performance
              </div>
              <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                🎵 Bachelor of Music from UBC
              </div>
              <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                📚 Specialized in Classical, RCM, and Theory
              </div>
            </div>
          </motion.div>
        </section>
        <div className="flex justify-center">
          <motion.button
            className="bg-gray-600 text-white px-8 py-3 rounded-lg"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4B5563",
              rotate: "-2deg",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigate("/bio")}
          >
            Detailed Bio
          </motion.button>
        </div>
      </Section>

      <Section title="The Studio Experience" anchorName="studio-experience">
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <p className="text-lg leading-relaxed mb-4">
            Welcome to my home studio, a cozy and inspiring space featuring a
            beautiful grand piano. Located in the ❤️ of Calgary, this artistic
            environment is perfect for nurturing your musical journey. I provide
            comprehensive instruction that balances technique, musicianship, and
            expressive performance across both classical and contemporary
            styles. Students are encouraged to participate in concerts and
            studio recitals, offering valuable performance experience and
            boosting their confidence.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Each lesson plan is personalized to align with the student's goals
            and interests, ensuring a fun and engaging learning experience.
            Whether you're preparing for exams, competitions, or simply playing
            for enjoyment, my studio offers the ideal setting for your musical
            growth.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Lessons can be online or at Shannon's home studio. Lessons proceed
            on a weekly basis.
          </p>
          {/* <div className="flex justify-center">
            <img
              src="/tower.png"
              alt="Calgary Tower"
              style={{ maxWidth: "none", width: "1200px" }}
            />
          </div> */}
        </section>
      </Section>

      {/* <Section title="Lesson Scheduling" anchorName="lesson-scheduling">
        <section className="mb-12">
          <p className="mb-4">
            Lessons can be online or at Shannon's home studio. Lessons proceed
            on a weekly basis.
          </p>
          <p className="mb-4">
            It's never too late to start! Get a free trial lesson.
          </p>
        </section>
      </Section> */}

      <Section
        title="Meet Clementine - The Assistant"
        anchorName="meet-clementine"
      >
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex justify-center">
            <img
              // src="clementine-selfie-phone.png"
              src="clementine-selfie.jpg"
              alt="Clementine the cat"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <BlockQuote>
              Hi! 👋 I'm Clementine, the resident comfort coordinator. While
              Shannon handles the music, I ensure each student feels right at
              home. My specialties include purr-fect moral support and
              occasional piano bench companionship. 🐱
            </BlockQuote>
          </div>
        </section>
      </Section>

      <Section title="Student Reviews" anchorName="student-reviews">
        <section className="mb-12">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
        </section>
      </Section>

      <Section
        title="Start Your Musical Journey"
        anchorName="start-your-journey"
      >
        <section className="text-center">
          <p className="text-lg leading-relaxed mb-4">
            Embark on a musical adventure with me! I offer personalized piano
            lessons tailored to your goals and interests. Whether you're a
            beginner or an advanced player, my expertise and passion for
            teaching will guide you every step of the way.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Book Your First Lesson
          </button>
        </section>
      </Section>

      <Section title="Frequently Asked Questions" anchorName="faq">
        <section className="mb-12">
          <FAQ>
            {faqItems.map(({ question, answer }, index) => (
              <FAQ.Item
                key={index}
                itemKey={index}
                question={question}
                answer={answer}
              />
            ))}
          </FAQ>
        </section>
      </Section>
    </Fullpage>
  );
}

export const meta: MetaFunction = () => {
  const title = "Piano Lessons - Shannon Ding";
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
