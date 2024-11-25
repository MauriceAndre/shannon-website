import styles from "./Spinner.module.scss";
import theme from "../../styles/theme.module.scss";

interface SpinnerProps {
  color?: string;
}

const Spinner = ({ color = theme.primaryColor }: SpinnerProps) => {
  return (
    <div
      className={styles.container}
      style={{ "--uib-color": color } as React.CSSProperties}
    >
      <div className={styles.cube}>
        <div className={styles.cube__inner}></div>
      </div>
      <div className={styles.cube}>
        <div className={styles.cube__inner}></div>
      </div>
      <div className={styles.cube}>
        <div className={styles.cube__inner}></div>
      </div>
    </div>
  );
};

export default Spinner;
