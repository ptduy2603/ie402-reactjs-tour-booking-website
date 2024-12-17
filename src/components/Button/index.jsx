import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classnames from "classnames";
import { Link } from "react-router-dom";

function Button({
  content,
  icon,
  onClick = () => {},
  href,
  extraStyles = {},
  classNames,
  isDisabled = false,
  variant,
}) {
  const props = {
    style: extraStyles,
    className: classnames(
      "btn",
      styles.button,
      variant === "primary" && styles.primary,
      variant === "outline" && styles.outline,
      isDisabled && styles.disabled,
      classNames
    ),
    onClick: isDisabled ? undefined : onClick,
    "aria-disabled": isDisabled,
  };

  if (href) {
    return (
      <Link to={href} {...props}>
        {icon}
        {content}
      </Link>
    );
  }

  return (
    <button {...props} disabled={isDisabled}>
      {icon}
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  href: PropTypes.string,
  classNames: PropTypes.string,
  extraStyles: PropTypes.object,
  isDisabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "outline"]),
};

export default Button;
