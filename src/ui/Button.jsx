import PropTypes from "prop-types";
import classNames from "classnames";

function Button({ size, variation, children, onClick }) {
  const buttonClass = classNames(
    "rounded shadow-sm focus:outline-none transition-all duration-300",
    {
      // Size Variants
      "text-xs py-1 px-2 font-semibold uppercase": size === "small",
      "text-sm py-3 px-4 font-medium": size === "medium",
      "text-base py-3 px-6 font-medium": size === "large",

      // Variations
      "bg-brand-600 text-brand-50 hover:bg-brand-700": variation === "primary",
      "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50":
        variation === "secondary",
      "bg-red-700 text-red-100 hover:bg-red-800": variation === "danger",
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
