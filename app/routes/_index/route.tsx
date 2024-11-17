import type { MetaFunction } from "@remix-run/node";
import styles from "./_index.module.scss";
import PianoSvg from "~/components/icons/PianoSvg";

export const meta: MetaFunction = () => {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className={styles.root}>
      <PianoSvg className={styles["piano-image"]} />
    </div>
  );
}
