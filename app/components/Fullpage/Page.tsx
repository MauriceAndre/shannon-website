import { fullpageApi as FullpageApi } from "@fullpage/react-fullpage";

interface PageProps {
  title: string;
  anchorName: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  fullpageApi?: FullpageApi;
  footer?: boolean;
  className?: string;
}

const Page = ({ children, style, footer, className }: PageProps) => {
  return (
    <div
      className={`section ${footer ? "fp-auto-height" : ""} ${className || ""}`}
      style={{ width: "100vw", ...style }}
    >
      {children}
    </div>
  );
};

export default Page;
