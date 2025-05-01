import React from "react";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"; // You can replace with any icon set
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";

type CustomPaginationProps = {
  current: number;
  pageSize: number;
  total: number;
  pageSizeOptions?: number[];
  onChange: (page: number, pageSize: number) => void;
  loading?: boolean;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  pageSize,
  total,
  pageSizeOptions = [10, 20, 50, 100],
  onChange,
  loading = false,
  prevIcon = <LeftOutlined />,
  nextIcon = <RightOutlined />,
}) => {
  const { themeMode } = useTheme();
  const theme = Themes[themeMode];

  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || loading) return;
    onChange(newPage, pageSize);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(1, parseInt(e.target.value));
  };

  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (current <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (current >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", current - 1, current, current + 1, "...", totalPages);
      }
    }

    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          disabled={loading}
          style={{
            padding: "4px 10px",
            margin: "0 4px",
            background: page === current ? theme.fill.f3 : theme.background.bg1,
            color: theme.text.t2Component,
            border: `1px solid ${theme.stroke.strong}`,
            borderRadius: 4,
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: page === current ? 600 : 400,
          }}
        >
          {page}
        </button>
      ) : (
        <span key={index} style={{ margin: "0 4px", color: theme.text.t3Subtitle }}>
          {page}
        </span>
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        fontFamily: "inherit",
        opacity: loading ? 0.6 : 1,
        pointerEvents: loading ? "none" : "auto",
      }}
    >
      {/* Left: Pagination controls */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => handlePageChange(current - 1)}
          disabled={current === 1 || loading}
          style={{
            padding: "4px 8px",
            marginRight: 8,
            background: theme.background.bg1,
            border: `1px solid ${theme.stroke.strong}`,
            borderRadius: 4,
            color: theme.text.t3Subtitle,
            cursor: current === 1 || loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {prevIcon}
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(current + 1)}
          disabled={current === totalPages || loading}
          style={{
            padding: "4px 8px",
            marginLeft: 8,
            background: theme.background.bg1,
            border: `1px solid ${theme.stroke.strong}`,
            borderRadius: 4,
            color: theme.text.t3Subtitle,
            cursor: current === totalPages || loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {nextIcon}
        </button>
      </div>

      {/* Right: Rows per page + Total */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <label htmlFor="page-size" style={{ color: theme.text.t2Component }}>
          Rows per page
        </label>
        <select
          id="page-size"
          value={pageSize}
          onChange={handlePageSizeChange}
          disabled={loading}
          style={{
            padding: "4px 8px",
            background: theme.background.bg1,
            border: `1px solid ${theme.stroke.strong}`,
            borderRadius: 4,
            color: theme.text.t2Component,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <span style={{ color: theme.text.t3Subtitle }}>{`Total: ${total}`}</span>
      </div>
    </div>
  );
};

export default CustomPagination;

