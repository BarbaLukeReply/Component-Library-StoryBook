import "../../tailwind.css";

import React, { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  // Define Tailwind classes for different props
  const primaryClasses = primary
    ? "text-white bg-red-500 hover:bg-red-700"
    : "text-black bg-pink-300 hover:bg-pink-400";
  const sizeClasses =
    size === "small"
      ? "px-6 py-2 text-sm"
      : size === "medium"
        ? "px-8 py-3 text-base"
        : "px-10 py-4 text-lg";
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-bold border-0 rounded-lg inline-block ${primaryClasses} ${sizeClasses} ${disabledClasses}`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
