import React from "react";

export interface TextProps {
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  tag: TextTag = "p",
  className = "",
  ...props
}) => {
  return <TextTag className={className}>{children}</TextTag>;
};

export default Text;
