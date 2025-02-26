import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const BlockQuote = ({
  children,
  author,
  accentColor = "rgb(59, 130, 246)",
}: {
  children: React.ReactNode;
  author?: string;
  accentColor?: string;
}) => {
  return (
    <div className="relative my-8">
      <div className="ml-6 relative">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="absolute -top-6 -left-3 w-8 h-8 opacity-40 z-10"
          style={{ color: accentColor }}
          size="2xl"
        />

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 pt-10">
          <p className="text-lg leading-relaxed italic">{children}</p>

          {author && (
            <p className="mt-4 text-right font-medium">
              <span className="text-gray-400">—</span> {author}
            </p>
          )}
        </div>

        <FontAwesomeIcon
          icon={faQuoteRight}
          className="absolute -bottom-6 right-4 w-8 h-8 opacity-40 z-10"
          style={{ color: accentColor }}
          size="2xl"
        />
      </div>
    </div>
  );
};

export default BlockQuote;
