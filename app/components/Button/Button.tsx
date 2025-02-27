import { motion } from "motion/react";
import styles from "./Button.module.scss";

type ButtonSize = "small" | "default" | "medium" | "large";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "default",
  className = "",
}) => {
  // Generate class names based on size
  const buttonClasses = `${styles.button} ${styles[size]} ${className}`;

  // Adjust motion values based on size
  const getShadowValues = () => {
    switch (size) {
      case "small":
        return {
          default: "5px 5px 0px black",
          hover: "4px 4px 0px black",
          tap: "1px 1px 0px black",
        };
      case "default":
        return {
          default: "6px 6px 0px black",
          hover: "5px 5px 0px black",
          tap: "1px 1px 0px black",
        };
      case "medium":
        return {
          default: "7px 7px 0px black", // Reduced from 8px
          hover: "5px 5px 0px black", // Reduced from 6px
          tap: "1px 1px 0px black",
        };
      case "large":
        return {
          default: "10px 10px 0px black",
          hover: "8px 8px 0px black",
          tap: "2px 2px 0px black",
        };
      default:
        return {
          default: "6px 6px 0px black",
          hover: "5px 5px 0px black",
          tap: "1px 1px 0px black",
        };
    }
  };

  const getScaleValues = () => {
    switch (size) {
      case "small":
        return { hover: 1.03, tap: 0.95 };
      case "default":
        return { hover: 1.04, tap: 0.94 };
      case "medium":
        return { hover: 1.05, tap: 0.93 }; // Slightly adjusted
      case "large":
        return { hover: 1.07, tap: 0.9 };
      default:
        return { hover: 1.04, tap: 0.94 };
    }
  };

  const shadows = getShadowValues();
  const scales = getScaleValues();

  return (
    <motion.button
      className={buttonClasses}
      whileHover={{
        scale: scales.hover,
        boxShadow: shadows.hover,
      }}
      whileTap={{
        scale: scales.tap,
        boxShadow: shadows.tap,
        y:
          size === "large"
            ? 5
            : size === "small"
            ? 2
            : size === "medium"
            ? 3
            : 2.5,
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
