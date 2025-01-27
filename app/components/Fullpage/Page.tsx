import { fullpageApi as FullpageApi } from "@fullpage/react-fullpage";

interface PageProps {
  title?: string;
  anchorName?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  fullpageApi?: FullpageApi;
}

const Page = ({ children, style }: PageProps) => {
  return (
    <div className="section" style={{ width: "100vw", ...style }}>
      {children}
    </div>
  );
};

export default Page;
