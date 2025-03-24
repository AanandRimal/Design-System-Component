import React from "react";

interface HeadingRowProps {
  level: number;
}

const HeadingRow: React.FC<HeadingRowProps> = ({ level }) => {
    return (
      <div className="grid grid-cols-3 gap-x-12 items-center">
        <div className={` text-h${level}-medium  font-medium capitalize`}>
          {`This is  H${level} Medium`}
        </div>
        <div className={` text-h${level}-semibold  font-semibold capitalize`}>
          {`This is  H${level} SemiBold`}
        </div>
        <div className={` text-h${level}-bold  font-bold capitalize`}>
          {`This is H${level} Bold`}
        </div>
      </div>
    );
  };

  interface TextRowProps {
    size: string;
  } 
  
  const TextRow: React.FC<TextRowProps> = ({ size }) => {
    return (
      <div className="grid grid-cols-3 gap-x-12 items-center">
        <div className={`text-${size}-regular font-regular capitalize`}>
          {`This is Text ${size} Regular`}
        </div>
        <div className={`text-${size}-medium font-medium capitalize`}>
          {`This is Text ${size} Medium`}
        </div>
        <div className={`text-${size}-semibold  font-semibold capitalize`}>
          {`This is Text ${size} SemiBold`}
        </div>
      </div>
    );
  };
  

const TypographyShowcase: React.FC = () => {
  const headingLevels: number[] = [1, 2, 3, 4, 5, 6];
  const textSizes: string[] = ["large", "medium", "base", "small", "x-small"];

  return (
<div className="p-8 space-y-12 max-w-[1000px] mx-auto">
  <div>
    <h2 className="text-2xl font-bold mb-4">Headings</h2>
    <div className="grid grid-cols-3 gap-x-12 mb-2 font-semibold text-gray-500">
      <div>Medium</div>
      <div>SemiBold</div>
      <div>Bold</div>
    </div>
    <div className="space-y-4">
      {headingLevels.map((level) => (
        <HeadingRow key={level} level={level} />
      ))}
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-4">Text Sizes</h2>
    <div className="grid grid-cols-3 gap-x-12 mb-2 font-semibold text-gray-500">
      <div>Regular</div>
      <div>Medium</div>
      <div>SemiBold</div>
    </div>
    <div className="space-y-4">
      {textSizes.map((size) => (
        <TextRow key={size} size={size} />
      ))}
    </div>
  </div>
</div>

  );
};

export default TypographyShowcase;
