import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { colors } from "./theme";

const colorTypes = Object.keys(colors) as (keyof typeof colors)[];

const ColorPalette: React.FC = () => {
  const { themeMode } = useTheme();
  const [selectedType, setSelectedType] = useState<keyof typeof colors>("primary");
  const [customHex, setCustomHex] = useState<string>("");
  const [colorValues, setColorValues] = useState<typeof colors>(colors);

  const handleHexChange = () => {
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(customHex)) return;

    setColorValues((prevColors) => ({
      ...prevColors,
      [selectedType]: {
        ...prevColors[selectedType],
        custom: customHex,
      },
    }));
  };

  const paletteStyles: Record<string, React.CSSProperties> = {
    container: {
      display: "flex",
      height: "100vh",
      backgroundColor: themeMode === "dark" ? "#1a1a1a" : "#f9f9fa",
      color: themeMode === "dark" ? "#fff" : "#000",
    },
    sidebar: {
      width: "250px",
      padding: "16px",
      background: themeMode === "dark" ? "#333" : "#fff",
      borderRight: "1px solid #ddd",
    },
    mainContent: {
      flex: 1,
      padding: "16px",
      overflowY: "auto",
    },
    button: {
      width: "100%",
      padding: "8px",
      backgroundColor: "#007AFF",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    colorCard: {
      width: "120px",
      padding: "10px",
      textAlign: "center",
      background: themeMode === "dark" ? "#333" : "#fff",
      borderRadius: "6px",
      border: "1px solid #ddd",
      boxShadow: themeMode === "dark" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
    },
    colorSwatch: {
      width: "100%",
      height: "60px",
      borderRadius: "4px",
      marginBottom: "6px",
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginBottom: "10px",
      background: themeMode === "dark" ? "#555" : "white",
      color: themeMode === "dark" ? "#fff" : "#000",
    },
    select: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      background: themeMode === "dark" ? "#555" : "white",
      color: themeMode === "dark" ? "#fff" : "#000",
      marginBottom: "10px",
    },
  };

  return (
    <div style={paletteStyles.container}>
      <div style={paletteStyles.sidebar}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>Color Editor</h2>
        <select
          style={paletteStyles.select}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as keyof typeof colors)}
        >
          {colorTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <input
          type="text"
          style={paletteStyles.input}
          placeholder="#HEX Color"
          value={customHex}
          onChange={(e) => setCustomHex(e.target.value)}
        />

        <button style={paletteStyles.button} onClick={handleHexChange}>Apply</button>
      </div>

      <div style={paletteStyles.mainContent}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Color Palette</h2>

        {Object.entries(colorValues).map(([type, shades]) => (
          <div key={type} style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>{type}</h3>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {Object.entries(shades).map(([shade, hex]) => (
                <div key={shade} style={paletteStyles.colorCard}>
                  <div style={{ ...paletteStyles.colorSwatch, backgroundColor: hex }}></div>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>{type}-{shade}</span>
                  <br />
                  <span style={{ fontSize: "12px", color: "#555" }}>{hex}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
