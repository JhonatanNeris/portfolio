import React from "react";

type ButtonVariant = "solid" | "outline" | "danger";

type Props = {
  name?: string;
  onClick?: () => void;
  href?: string; // <-- link opcional
  target?: "_blank" | "_self"; 
  variant?: ButtonVariant;
};

const Button = ({
  name,
  onClick,
  href,
  target = "_blank",
  variant = "solid",
}: Props) => {
  const baseStyles =
    "cursor-pointer px-6 py-3 rounded-xl font-[500] transition-colors inline-block";

  const variants: Record<ButtonVariant, string> = {
    solid:
      "bg-gradient-to-r from-blue-500 to-blue-800 text-white hover:to-blue-500",
    outline:
      "border border-white hover:bg-accent",
    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {name}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
