import React from "react";
import { useTheme } from "../../context-hook/ThemeProvider";
import { colors, Themes } from "./Theme";

const ColorPalette = () => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];
  const colorTypes = Object.keys(colors) as (keyof typeof colors)[];

  // Color Shade Rows
  const renderColorShades = (type: keyof typeof colors) => (
    <div key={type} className="flex flex-col md:flex-row items-start mb-16">
      {/* Label */}
      <div className="w-full md:w-24 text-left md:text-right text-sm font-semibold capitalize pb-4 md:pt-6">
        {type}
      </div>

      {/* Grid of swatches */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 min-w-full">
          {Object.entries(colors[type]).map(([shade, hex]) => (
            <div
              key={shade}
              className="rounded-md border p-2 text-center flex flex-col items-center gap-2 min-w-[120px]"
              style={{ border: `1px solid ${currentTheme.stroke.strong}` }}
            >
              <div
                className="h-10 sm:h-20 w-full rounded"
                style={{ backgroundColor: hex }}
              ></div>
              <div className="text-xs font-medium w-full">{shade}</div>
              <div className="text-[10px] w-full whitespace-normal break-all px-1">{hex}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Themed Palette Section
  const renderThemedPalette = (
    categoryName: string,
    lightSet: Record<string, string>,
    darkSet: Record<string, string>
  ) => (
    <div key={categoryName} className="space-y-2 mb-10" style={{ color: currentTheme.text.t2Component }}>
      <h4 className="text-sm font-semibold mb-4 capitalize">{categoryName}</h4>

      {/* Headers */}
      <div className="grid grid-cols-3 gap-2 px-2 text-[10px] mb-2">
        <div></div>
        <div className="text-center">Light</div>
        <div className="text-center">Dark</div>
      </div>

      {/* Color rows */}
      <div className="space-y-4">
                  {Object.entries(lightSet).map(([key, lightLabel]) => {
          const darkLabel = darkSet?.[key] ?? "-";
          return (
            <div
              key={key}
              className="grid grid-cols-3 gap-2 items-center border rounded p-2 md:p-4"
              style={{ border: `1px solid ${currentTheme.stroke.strong}` }}
            >
              {/* Color Name */}
              <div className="text-xs font-medium pr-1">{key}</div>

              {/* Light Swatch + Label */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded border"
                  style={{ backgroundColor: lightLabel, border: `1px solid ${currentTheme.stroke.strong}` }}
                ></div>
                <div className="text-[10px] text-center w-full px-1 break-all">
                  {lightLabel}
                </div>
              </div>

              {/* Dark Swatch + Label */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded border"
                  style={{ backgroundColor: darkLabel, border: `1px solid ${currentTheme.stroke.strong}` }}
                ></div>
                <div className="text-[10px] text-center w-full px-1 break-all">
                  {darkLabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full p-2 sm:p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Color Shades Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Primitive Colors Set</h2>
          <div>
            {colorTypes.map(renderColorShades)}
          </div>
        </div>

        {/* Themed Palette Section */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Secondary Themed Colors</h2>
          <div>
            {Object.entries(currentTheme).map(([categoryName, lightSet]) => {
              const darkTheme = Themes[themeMode === "light" ? "dark" : "light"];
              const darkSet = darkTheme[categoryName as keyof typeof darkTheme];

              if (
                typeof lightSet === "object" &&
                !Array.isArray(lightSet) &&
                Object.values(lightSet).every((v) => typeof v === "string")
              ) {
                return renderThemedPalette(
                  categoryName,
                  lightSet as Record<string, string>,
                  darkSet as Record<string, string>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;