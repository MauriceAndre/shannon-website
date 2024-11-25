import theme from "../../styles/theme.module.scss";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  color?: string;
}

const Spinner = ({ color = theme.primaryColor }: SpinnerProps) => {
  return (
    <div
      className={styles.container}
      style={{ "--uib-color": color } as React.CSSProperties}
    >
      <div className={styles.half}></div>
      <div className={styles.half}></div>
    </div>
  );
};

export default Spinner;
