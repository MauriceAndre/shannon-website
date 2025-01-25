interface NavigationDotsProps {
  pageCount: number;
  currentPage: number | null;
  onDotClick: (pageIndex: number) => void;
}

const NavigationDots = ({
  pageCount,
  currentPage,
  onDotClick,
}: NavigationDotsProps) => {
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      {Array.from({ length: pageCount }).map((_, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          onClick={() => onDotClick(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onDotClick(index);
            }
          }}
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: currentPage === index ? "#000" : "#ccc",
            margin: "5px 0",
            cursor: "pointer",
            border: "2px solid #fff", // Added border
          }}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
