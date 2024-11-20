import { MetaFunction } from "@remix-run/react";

export default function PianoPage() {
  return (
    <div>
      <h1>Piano Lessons</h1>
    </div>
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
