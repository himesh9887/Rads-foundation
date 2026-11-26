import { forwardRef } from "react";
import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 shadow-soft",
  secondary:
    "bg-navy-800 text-white hover:bg-navy-700 active:bg-navy-900",
  outline:
    "border-2 border-navy-700 text-navy-800 hover:bg-navy-800 hover:text-white bg-transparent",
  outlineLight:
    "border-2 border-white/70 text-white hover:bg-white hover:text-navy-900 bg-transparent",
  ghost: "text-navy-700 hover:bg-navy-100/70",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base sm:text-lg",
};

/**
 * Universal Button component. Renders a <button>, an internal <Link>, or a
 * plain <a> depending on the props passed, while keeping consistent styling.
 */
const Button = forwardRef(
  (
    {
      to,
      href,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "right",
      fullWidth = false,
      className = "",
      children,
      ...rest
    },
    ref
  ) => {
    const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none select-none ${
      VARIANTS[variant] || VARIANTS.primary
    } ${SIZES[size] || SIZES.md} ${fullWidth ? "w-full" : ""} ${className}`;

    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <Icon size={18} strokeWidth={2} aria-hidden="true" />
        )}
        <span>{children}</span>
        {Icon && iconPosition === "right" && (
          <Icon size={18} strokeWidth={2} aria-hidden="true" />
        )}
      </>
    );

    if (to) {
      return (
        <Link ref={ref} to={to} className={classes} {...rest}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a ref={ref} href={href} className={classes} {...rest}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} type={rest.type || "button"} className={classes} {...rest}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
