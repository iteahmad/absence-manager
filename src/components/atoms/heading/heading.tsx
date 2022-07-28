import React from "react";

export interface HeadingProps {
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  tag: HeadingTag = "h1",
  className = "",
  ...props
}) => {
  let classNameByTag = "font-medium leading-tight mt-0 mb-2 text-blue-600";
  switch (HeadingTag) {
    case "h2":
      classNameByTag += " text-4xl";
      break;
    case "h3":
      classNameByTag += " text-3xl";
      break;
    case "h4":
      classNameByTag += " text-2xl";
      break;
    case "h5":
      classNameByTag += " text-xl";
      break;
    case "h6":
      classNameByTag += " text-base";
      break;
    default:
      classNameByTag =
        "font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600";
      break;
  }

  return (
    <HeadingTag className={classNameByTag + " " + className}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
