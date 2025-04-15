import React from "react";
import  Button  from "../components/button/Button"
import Tooltip from "../components/tooltip/TootTip"; // Adjust path if needed


const positions = [
  "topLeft",
  "top",
  "topRight",
  "bottomLeft",
  "bottom",
  "bottomRight",
  "left",
  "right",
];

const TooltipDisplay = () => {
  return (
    <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
      <div>
        <h3>Title Only</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          <Tooltip customTitle="Hello" arrow={false} open>
            <Button Customtype="primary">no-arrow</Button>
          </Tooltip>
          <Tooltip title="hello">test</Tooltip>

          {positions.map((placement) => (
            <Tooltip key={placement} customTitle={`Hello (${placement})`} placement={placement as any}>
              <Button Customtype="primary">{placement}</Button>
            </Tooltip>
          ))}
        </div>
      </div>

      <div>
        <h3>Title + Description</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Tooltip
            customTitle="Hello"
            customDescription="This is a description"
            arrow={false}
            open
          >
            <Button Customtype="primary">no-arrow</Button>
          </Tooltip>
          {positions.map((placement) => (
            <Tooltip
              key={placement}
              customTitle={`Hello (${placement})`}
              customDescription="This is a description"
              placement={placement as any}
            >
              <Button Customtype="primary">{placement}</Button>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TooltipDisplay;
