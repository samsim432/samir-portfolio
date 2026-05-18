import "./ui.css";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
}) {
  const className = `ui-btn ${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}