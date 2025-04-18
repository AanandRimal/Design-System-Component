// import React from "react";
// import ButtonGroup from "../components/button-group/ButtonGroup";
// import { LeftIcon } from "../components/icons/LeftIcon";

// const sizes: (32 | 36 | 40 | 44)[] = [32, 36, 40, 44];

// const sampleButtons = [
//   { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
//   { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
//   { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
//   { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
// ];

// const ButtonGroupDisplay: React.FC = () => {
//   return (
//     <div className="p-6 space-y-10">
//       {/* Solid Buttons */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Solid</h2>
//         <div className="flex flex-col space-y-6">
//           {sizes.map((size) => (
//             <div key={`solid-${size}`}>
//               <div className="text-sm text-gray-500 mb-1">Size: {size}</div>
//               <ButtonGroup
//                 type="solid"
//                 customSize={size}
//                 buttons={sampleButtons}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Outline Buttons */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Outline</h2>
//         <div className="flex flex-col space-y-6">
//           {sizes.map((size) => (
//             <div key={`outline-${size}`}>
//               <div className="text-sm text-gray-500 mb-1">Size: {size}</div>
//               <ButtonGroup
//                 type="outline"
//                 customSize={size}
//                 buttons={sampleButtons}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ButtonGroupDisplay;
import React from "react";
import ButtonGroup from "../components/button-group/ButtonGroup";
import { LeftIcon } from "../components/icons/LeftIcon";
import { useTheme } from "../context-hook/ThemeProvider";
import { Themes } from "../components/foundation/Theme";

const sizes: (32 | 36 | 40 | 44 |48)[] = [32, 36, 40, 44, 48];

const sampleButtons = [
  { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
  { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
  { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
  { label: "Button Label", leftIcon: <LeftIcon />, onClick: () => {} },
];

const ButtonGroupDisplay: React.FC = () => {
const { themeMode } = useTheme();
const currentTheme = Themes[themeMode];
  return (
    <div className="grid grid-cols-2 gap-14 p-4" style={{color:currentTheme.text.t1Title}}>
      {/* Solid Column */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Solid</h2>
        <div className="flex flex-col gap-4">
          {sizes.map((size) => (
            <div key={`solid-${size}`}>
              <div className="text-sm mb-1" >Size: {size}</div>
              <ButtonGroup
                type="solid"
                customSize={size}
                buttons={sampleButtons}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Outline Column */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Outline</h2>
        <div className="flex flex-col gap-4">
          {sizes.map((size) => (
            <div key={`outline-${size}`}>
              <div className="text-sm mb-1">Size: {size}</div>
              <ButtonGroup
                type="outline"
                customSize={size}
                buttons={sampleButtons}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonGroupDisplay;
