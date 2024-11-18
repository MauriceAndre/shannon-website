import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { getUrlOriginWithPath } from "~/utils";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function PianoPage() {
  return (
    <div>
      <h1>English Tutoring</h1>
    </div>
  );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
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
      href: data?.canonicalUrl,
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
