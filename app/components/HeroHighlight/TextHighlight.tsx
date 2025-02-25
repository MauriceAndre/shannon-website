import { cn } from "~/utils/ui";
import { motion } from "motion/react";

export const TextHighlight = ({
  children,
  className,
  duration = 0.5,
  ease = "linear",
  delay = 0.5,
  fromColor = "from-indigo-300",
  toColor = "to-purple-300",
  darkFromColor = "dark:from-indigo-500",
  darkToColor = "dark:to-purple-500",
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  ease?: string;
  delay?: number;
  fromColor?: string;
  toColor?: string;
  darkFromColor?: string;
  darkToColor?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration,
        ease,
        delay,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r ${fromColor} ${toColor} ${darkFromColor} ${darkToColor}`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
