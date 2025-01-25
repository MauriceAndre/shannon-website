import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface PageProps {
  background: string;
  children?: React.ReactNode;
}

const Page = ({ background, children }: PageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "100vh",
        background,
        scrollSnapAlign: "start",
      }}
    >
      {children}
    </div>
  );
};

export default Page;
