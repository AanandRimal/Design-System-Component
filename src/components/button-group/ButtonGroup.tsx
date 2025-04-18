import React from "react";
import classNames from "classnames";
import Button from "../button/Button";

type ButtonGroupType = "solid" | "outline";
type CustomSize = 32 | 36 | 40 | 44 | 48;

interface ButtonGroupProps {
  type: ButtonGroupType;
  customSize?: CustomSize;
  className?: string;
  buttons: {
    label: string;
    leftIcon?: React.ReactNode;
    onClick?: () => void;
  }[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  type,
  customSize,
  className,
  buttons,
}) => {
  return (
    <div className={classNames("inline-flex", className)}>
      {buttons.map((btn, index) => {
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;

        return (
            <Button
            key={index}
            Customtype={type === "solid" ? "primary" : "secondary"}
            Customsize={customSize}
            leftIcon={btn.leftIcon}
            onClick={btn.onClick}
            className={classNames(
              index > 0 && "-ml-px", // prevent double border
              isFirst && "rounded-r-none", // remove right radius from first
              isLast && "rounded-l-none", // remove left radius from last
              !isFirst && !isLast && "rounded-none", // remove radius for middle buttons
            )}
          >
            {btn.label}
          </Button>
          
          
        );
      })}
    </div>
  );
};

export default ButtonGroup;
