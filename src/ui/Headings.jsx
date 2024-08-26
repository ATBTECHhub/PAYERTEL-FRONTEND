import PropTypes from "prop-types";
import classNames from "classnames";

function Heading({ as: Tag, children, className }) {
  const headingClasses = classNames(className, {
    "text-3xl font-semibold": Tag === "h1",
    "text-2xl font-semibold": Tag === "h2",
    "text-2xl font-medium": Tag === "h3",
    "text-3xl font-semibold text-center": Tag === "h4",
    "leading-relaxed": true, // Applies consistent line height across all tags
  });

  return <Tag className={headingClasses}>{children}</Tag>;
}

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4"]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
