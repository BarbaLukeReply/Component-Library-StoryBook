import { FC } from "react";
import Button, { ButtonProps } from "./Button";
import "../../tailwind.css";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = "small",
  text = "Button",
}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
      />
    </div>
  );
};

export default Example;
