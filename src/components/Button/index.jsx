import Proptypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

function Button({
  content,
  icon,
  onClick = () => {},
  href,
  extraStyles = {},
  isDisabled = false,
  variant,
}) {
  const props = {
    style: extraStyles,
    className: classNames(
      "btn",
      styles.button,
      variant === "primary" && styles.primary,
      variant === "outline" && styles.outline,
      isDisabled && styles.disabled
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
  content: Proptypes.string.isRequired,
  onClick: Proptypes.func,
  icon: Proptypes.node,
  href: Proptypes.string,
  extraStyles: Proptypes.object,
  isDisabled: Proptypes.bool,
  variant: Proptypes.oneOf(["primary", "outline"]),
};

export default Button;
