import React from "react";

export interface ButtonProps {
  className?: string | undefined;
  children?: React.ReactNode;
  primary?: boolean;
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  primary = false,
  disabled = false,
}) => {
  let classes = "border";

  if (disabled) {
    classes += "bg-gray-600 text-white ";
  } else {
    if (primary) {
      classes += " bg-blue-600 text-white ";
      classes +=
        " hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out";
    } else {
      classes += " bg-white text-black ";
      classes +=
        " hover: hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out";
    }
  }

  return (
    <button
      disabled={disabled}
      className={`inline-block px-5 py-2 font-medium text-xs leading-tight rounded shadow-md ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
