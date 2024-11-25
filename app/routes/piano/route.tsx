import { MetaFunction } from "@remix-run/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Marquee } from "~/components/Marquee/Marquee";

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
    <Parallax pages={6}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Piano Lessons</h1>
            <p className="text-xl text-gray-600">
              Nurturing Musical Excellence for All Ages and Levels
            </p>
          </section>
          <section className="mb-12 text-center">
            <p className="text-xl text-gray-600">
              Hi, I am Shannon, your dedicated piano teacher with over 10 years
              of experience. Join me in a musical journey where we explore the
              beauty of piano together.
            </p>
          </section>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src="/shannon.jpg"
                alt="Shannon teaching piano"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Meet Your Teacher</h2>
              <ul className="space-y-2">
                <li>✨ 10 years of teaching experience</li>
                <li>🎓 ARCT in Piano Performance</li>
                <li>🎵 Bachelor of Music from UBC</li>
                <li>📚 Specialized in Classical, RCM, and Theory</li>
              </ul>
              <div className="mt-4">
                <button
                  className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition"
                  onClick={() => (window.location.href = "/bio")}
                >
                  Detailed Bio
                </button>
              </div>
            </div>
          </section>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5}>
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
      </ParallaxLayer>

      <ParallaxLayer offset={2.5} speed={0.5}>
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
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5}>
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
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.5}>
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
      </ParallaxLayer>

      <ParallaxLayer offset={4.75} speed={0.5}>
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
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.5}>
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
      </ParallaxLayer>
    </Parallax>
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
