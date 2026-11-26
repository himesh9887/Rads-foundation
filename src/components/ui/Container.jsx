const WIDTHS = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[90rem]",
};

export default function Container({
  children,
  className = "",
  width = "default",
  as: Tag = "div",
}) {
  return (
    <Tag
      className={`mx-auto w-full container-px ${WIDTHS[width] || WIDTHS.default} ${className}`}
    >
      {children}
    </Tag>
  );
}
