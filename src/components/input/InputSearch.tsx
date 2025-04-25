import React from "react";
import { Input } from "antd";
import { InputProps } from "antd";
import BaseInputTheme from "./BaseInputTheme";
import SearchIcon from "../icons/SearchIcon";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Sizes } from "../foundation/Theme";

interface CustomSearchProps extends InputProps {
  customSize?: keyof typeof Sizes;
}

const Search: React.FC<CustomSearchProps> = ({ customSize, status, ...props }) => {
  const { themeMode } = useTheme();
  const iconSize = Sizes[customSize || 36]?.iconSize;

  return (
    <BaseInputTheme customSize={customSize} >
      <Input
        size="large"
        prefix={<SearchIcon size={iconSize} theme={themeMode} />}
        status={status === "error" ? "error" : undefined}
        {...props}
      />
    </BaseInputTheme>
  );
};

export default Search;
