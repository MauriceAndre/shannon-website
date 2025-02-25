import { MetaFunction } from "@remix-run/react";
import { motion } from "motion/react";
import Page from "~/components/Fullpage/Page";
import Fullpage from "~/components/Fullpage/Fullpage";

export default function AboutPage() {
  return (
    <Fullpage>
      <Page title="Section 1" anchorName="section1">
        <div className="flex flex-col items-center justify-center h-screen">
          <motion.h1>Page 1</motion.h1>
        </div>
      </Page>
      <Page title="Bio" anchorName="bio">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1>Bio</h1>
        </div>
      </Page>
    </Fullpage>
  );
}

export const meta: MetaFunction = ({ data }) => {
  const title = "Portfolio App - About Page";
  const description = "Welcome to the Portfolio App About Page";
  const imageUrl = "https://my-portfolio/image.png";

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      tagName: "link",
      rel: "canonical",
    },
    {
      property: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: imageUrl,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: imageUrl,
    },
  ];
};
