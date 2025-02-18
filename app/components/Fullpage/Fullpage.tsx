import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";

interface FullpageProps {
  children?: React.ReactNode;
}

const Fullpage = ({ children }: FullpageProps) => {
  const navigationTooltips = getPropsValues<string>("title", children);
  const anchors = getPropsValues<string>("anchorName", children);

  return (
    <ReactFullpage
      //fullpage options
      // licenseKey={process.env.FULLPAGE_API_KEY}
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
            {React.Children.map(children, (child) => {
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
        if (child.props.children) {
          extractProps(child.props.children);
        }
      }
    });
  }

  extractProps(children);
  return values;
}

export default Fullpage;
