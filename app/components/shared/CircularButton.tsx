import React from "react";
interface CircularButtonProps {
  onClick?: () => void;
  bgColor?: string;
  extraStyles?: React.CSSProperties;
  iconColor?: string;
  title?: any;
}
const CircularButton: React.FC<CircularButtonProps> = ({
  onClick,
  title,
  extraStyles,
}) => {
  return (
    <button
      className="flex h-[52px] w-[52px] items-center justify-center rounded-[26px] bg-[#E9F4F1]"
      onClick={onClick}
      style={{ ...extraStyles }}
    >
      {title}
    </button>
  );
};

export default CircularButton;
