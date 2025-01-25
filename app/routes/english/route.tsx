import { MetaFunction } from "@remix-run/react";
import Container from "~/components/Page/Container";
import Page from "~/components/Page/Page";

export default function EnglishPage() {
  return (
    <Container>
      <Page background="#000000">
        <h1>Page 1</h1>
      </Page>
      <Page background="#DD0000">
        <h1>Page 2</h1>
      </Page>
      <Page background="#FFCC00">
        <h1>Page 3</h1>
      </Page>
      <Page background="#00CC00">
        <h1>Page 4</h1>
      </Page>
    </Container>
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
