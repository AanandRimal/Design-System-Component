import React from "react";
import Button from "../components/button/Button";
import Tooltip from "../components/tooltip/TootTip"; // Adjust path

const positions = [
  "topLeft", "top", "topRight",
  "bottomLeft", "bottom", "bottomRight",
  "left", "right"
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="p-6 rounded-2xl shadow-md min-w-[300px] max-w-[500px]">
    <h3 className="text-xl font-bold mb-11 text-neutral-800">{title}</h3>
    
    {/* Add space above buttons so top tooltips don't block the title */}
    <div className="flex flex-wrap gap-4 justify-center mt-6 pt-6 border-t border-neutral-200">
      {children}
    </div>
  </div>
);


const TooltipDisplay = () => {
  return (
    <div className="p-10 bg-neutral-100 min-h-screen">
      <div className="flex flex-wrap gap-12 justify-center">
        
        {/* Section 1 */}
        <Section title="Title Only">
          <Tooltip customTitle="Hello" arrow={false} open >
            <Button Customtype="primary">No Arrow</Button>
          </Tooltip>
          {positions.map((placement) => (
            <Tooltip key={placement} customTitle={`Hello (${placement})`} placement={placement as any}  >
              <Button Customtype="primary">{placement}</Button>
            </Tooltip>
          ))}
        </Section>

        {/* Section 2 */}
        <Section title="Title + Description">
          <Tooltip customTitle="Hello" customDescription="This is a description" arrow={false} open >
            <Button Customtype="primary">No Arrow</Button>
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
        </Section>
        
      </div>
    </div>
  );
};

export default TooltipDisplay;
