import Button from "~/components/Button/Button";
import Fullpage from "~/components/Fullpage/Fullpage";
import Page from "~/components/Fullpage/Page";

export default function ContactPage() {
  return (
    <Fullpage>
      <Page title="Contact" anchorName="contact">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1>Contact</h1>
          <Button>Contact Me</Button>
        </div>
      </Page>
    </Fullpage>
  );
}
