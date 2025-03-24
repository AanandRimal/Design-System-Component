import React from "react";
interface HeadingRowProps {
  level: number;
}
const HeadingRow: React.FC<HeadingRowProps> = ({ level }) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center">
      <div className={`font-medium text-h${level}-medium capitalize`}>{`h${level} Medium`}</div>
      <div className={`font-semibold text-h${level}-semibold capitalize`}>{`h${level} SemiBold`}</div>
      <div className={`font-bold text-h${level}-bold capitalize`}>{`h${level} Bold`}</div>
    </div>
  );
};
interface TextRowProps {
  size: string;
}
const TextRow: React.FC<TextRowProps> = ({ size }) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center">
      <div className={`text-${size}-regular capitalize`}>{`${size} Regular`}</div>
      <div className={`text-${size}-medium capitalize`}>{`${size} Medium`}</div>
      <div className={`text-${size}-semibold capitalize`}>{`${size} SemiBold`}</div>
    </div>
  );
};
  const TypographyShowcase: React.FC = () => {
  const headingLevels: number[] = [1, 2, 3, 4, 5, 6];
  const textSizes: string[] = ["large", "medium", "base", "small", "x-small"];
  return (
    <div className="p-8 space-y-12">
      {/* Headings Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Headings</h2>
        <div className="grid grid-cols-4 gap-4 mb-2 font-semibold text-gray-500">
          <div>Medium</div>
          <div>SemiBold</div>
          <div>Bold</div>
          <div></div>
        </div>
        <div className="space-y-4">
          {headingLevels.map((level) => (
            <HeadingRow key={level} level={level} />
          ))}
        </div>
      </div>
      {/* Text Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Text Sizes</h2>
        <div className="grid grid-cols-4 gap-4 mb-2 font-semibold text-gray-500">
          <div>Regular</div>
          <div>Medium</div>
          <div>SemiBold</div>
          <div></div>
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
