import { Link } from "@remix-run/react";
import styles from "./Program.module.scss";

interface ProgramProps {
  title: string;
  SvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url?: string;
  className?: string;
}

const Program = ({ title, SvgComponent, url, className }: ProgramProps) => (
  <div className={`${styles["container"]} space-y-5 ${className || ""}`}>
    {url ? (
      <Link to={url}>
        <div className={styles["title"]}>{title}</div>
        <SvgComponent className={styles["image"]} />
      </Link>
    ) : (
      <>
        <div className={styles["title"]}>{title}</div>
        <SvgComponent className={styles["image"]} />
      </>
    )}
  </div>
);

export default Program;
