import React from "react";
import { Themes } from "../Foundation/theme"; 

interface SearchIconProps {
  size?: number;
  theme?: "light" | "dark";
}

const SearchIcon: React.FC<SearchIconProps> = ({ size = 20, theme = "light" }) => {
  const themeColors = Themes[theme].Text3Subtitle; 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={themeColors} 
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759" />
    </svg>
  );
};

export default SearchIcon; 