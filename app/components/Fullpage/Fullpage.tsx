import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";
import Footer from "../Footer/Footer";
import Page from "./Page";

interface FullpageProps {
  children?: React.ReactNode;
  footer?: boolean;
}

const Fullpage = ({ children, footer = true }: FullpageProps) => {
  const childrenArray = React.Children.toArray(children);
  if (footer) {
    childrenArray.push(
      <Page footer title="Footer" anchorName="footer">
        <Footer />
      </Page>
    );
  }

  const navigationTooltips = getPropsValues<string>("title", childrenArray);
  const anchors = getPropsValues<string>("anchorName", childrenArray);

  return (
    <ReactFullpage
      licenseKey="H79NK-WQIQ8-KB7QH-JA2IH-XIMRL"
      scrollingSpeed={1000} /* Options here */
      credits={{ enabled: false }} /* Add this line */
      navigation={true}
      easing="easeInOutCubic"
      anchors={anchors}
      navigationTooltips={navigationTooltips}
      autoScrolling={true}
      fadingEffect={"sections"}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {React.Children.map(childrenArray, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { fullpageApi } as any);
              }
              return child;
            })}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

function getPropsValues<T>(propName: string, children: React.ReactNode): T[] {
  const values: T[] = [];

  function extractProps(node: React.ReactNode) {
    React.Children.forEach(node, (child) => {
      if (React.isValidElement(child)) {
        const propValue = child.props[propName];
        if (propValue !== undefined && propValue !== null && propValue !== "") {
          values.push(propValue as T);
        }
      }
    });
  }

  extractProps(children);
  return values;
}

export default Fullpage;
