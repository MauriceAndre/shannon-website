import React, { useEffect, useRef, useState } from "react";
import NavigationDots from "./NaviationDots";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Children", React.Children.count(children));
  }, [children]);

  useEffect(() => {
    console.log("Current Page in View:", currentPage);
  }, [currentPage]);

  const scrollToPage = (pageIndex: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: pageIndex * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        ref={containerRef}
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "100vh",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for IE and Edge
        }}
        onScroll={(e) => {
          const scrollTop = e.currentTarget.scrollTop;
          const pageHeight = window.innerHeight;
          const newPage = Math.round(scrollTop / pageHeight);
          setCurrentPage(newPage);
        }}
      >
        {children}
      </div>
      <NavigationDots
        pageCount={React.Children.count(children)}
        currentPage={currentPage}
        onDotClick={scrollToPage}
      />
    </div>
  );
};

export default Container;
