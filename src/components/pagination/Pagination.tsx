import React from "react";
import { Pagination as AntPagination, ConfigProvider, PaginationProps } from "antd";
import { useTheme } from "../../context-hook/ThemeProvider";
import { Themes } from "../foundation/Theme";
import CustomSelect from "../select/Select"; 

interface CustomPaginationProps extends PaginationProps {
  showTotalItems?: boolean;
  showRowsPerPage?: boolean;
}

const Pagination: React.FC<CustomPaginationProps> = (props) => {
  const { themeMode } = useTheme();
  const currentTheme = Themes[themeMode];

  const [pageSize, setPageSize] = React.useState<number>(props.pageSize || 10);
  const [current, setCurrent] = React.useState<number>(props.current || 1);

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrent(page);
    setPageSize(pageSize);
    props.onChange?.(page, pageSize);
  };

  const handlePageSizeChange = (newPageSize: any) => {
    const value = typeof newPageSize === "object" ? newPageSize.value : newPageSize;
    handlePageChange(1, value);
  };

  const renderTotalText = () => {
    if (!props.total || !current || !pageSize) return "";
    const start = (current - 1) * pageSize + 1;
    const end = Math.min(current * pageSize, props.total);
    return `${start}-${end} of ${props.total} `;
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: currentTheme.text.t1Title,
            colorBgTextHover: currentTheme.fill.f2,
            colorPrimaryHover: currentTheme.text.t2Component,
            itemActiveBg: currentTheme.fill.f3,
            colorText: currentTheme.text.t2Component,
            itemBg: currentTheme.background.bg1,
            lineWidth: 0,
            colorTextDisabled: currentTheme.text.t3Subtitle,
            itemSize:32,
            marginXS:0,
          },
        },
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
  
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

          <AntPagination
            {...props}
            className="text-base-medium font-medium"
            current={current}
            pageSize={pageSize}
            showSizeChanger={false}
            onChange={handlePageChange}
          />

 
          {props.showTotalItems && (
            <div
              style={{
                whiteSpace: "nowrap",
                color: currentTheme.text.t2Component,
                fontSize: 14,
                fontWeight: 500,
              }}
              className="text-base-medium font-medium"
            >
              {renderTotalText()}
            </div>
          )}
        </div>
        {props.showRowsPerPage && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="text-base-medium font-medium">
            <span
              style={{
                color: currentTheme.text.t2Component,
                fontSize: 14,
                fontWeight: 500,
              }}
              
            >
              Rows per page
            </span>
            <CustomSelect
              value={pageSize}
              onChange={handlePageSizeChange}
              options={[
                { label: "10", value: 10 },
                { label: "20", value: 20 },
                { label: "50", value: 50 },
                { label: "100", value: 100 },
              ]}
              customSize={36} // or your normal select size
            />
          </div>
        )}
      </div>

      <style>
        {`
          .ant-pagination-prev, .ant-pagination-next {
            border: 1px solid ${currentTheme.stroke.strong} !important;
            color: ${currentTheme.text.t3Subtitle};
          }
            .ant-pagination{
            display:flex;
            justify-content:center;
            align-items:center;
            gap:4px;
            }
        `}
      </style>

    </ConfigProvider> //used pagination and made gap although ant  d gave marginXS for margin but used gap as it is good 
  );
};

export default Pagination;
