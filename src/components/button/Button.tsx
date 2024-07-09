import React from "react";
import "../../tailwind.css";
import { Button as ExternalButton } from "react-aria-components";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled = false,
  text,
  onClick,
  ...props
}) => {
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
    <ExternalButton
      type="button"
      onPress={onClick}
      className={`font-bold border-0 rounded-lg inline-block ${primaryClasses} ${sizeClasses} ${disabledClasses}`}
      isDisabled={disabled}
      {...props}
    >
      {text}
    </ExternalButton>
  );
};

export default Button;
