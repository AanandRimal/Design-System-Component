import React from "react";
import { Table } from "antd";
import Badge from "../components/badge/Badge"; 
import Avatar from "../components/avatars/Avatar";
import { Icon } from "@iconify/react";

const badgeSizes: (20 | 24 |28)[] = [20, 24,28];
const badgeTypes: ("stroke" | "filled" | "solid")[] = ["stroke", "filled", "solid"];
const badgeStatuses: ("success" | "info" | "warning" | "destructive")[] = ["success", "info", "warning", "destructive"];

const badgeColumns = [
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Type", dataIndex: "type", key: "type", width: 150 },
  { title: "Success", dataIndex: "success", key: "success" },
  { title: "Info", dataIndex: "info", key: "info" },
  { title: "Warning", dataIndex: "warning", key: "warning" },
  { title: "Destructive", dataIndex: "destructive", key: "destructive" },
  { title: "Neutral", dataIndex: "neutral", key: "neutral" },
];

const badgeData: any[] = [];

badgeSizes.forEach((size) => {
  badgeTypes.forEach((type, typeIndex) => {
    ["dot", "icon", "avatar"].forEach((variation, rowIndex) => {
      const row: Record<string, any> = {
        key: `${size}-${type}-${variation}`,
        size: rowIndex === 0 ? size : "", // Only show size for the first row of each type
        type: rowIndex === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "", // Show type once per group
      };

      badgeStatuses.forEach((status) => {
        let badgeContent;
        if (variation === "dot") {
          badgeContent = <Badge type={type} status={status} size={size} dot>Badge</Badge>;
        } else if (variation === "icon") {
          badgeContent = <Badge type={type} status={status} size={size} icon={<Icon icon="mage:select-box"/>}>Badge</Badge>;
        } else {
          badgeContent = <Badge type={type} status={status} size={size} icon={<Avatar customSize={16} src={<img src={"./Female 2.png"} alt="avatar" />}  />}>Badge</Badge>;
        }
        row[status] = badgeContent;
      });

      badgeData.push(row);
    });

    // Add an empty row after each type for spacing
    badgeData.push({ key: `${size}-${type}-spacer`, size: "", type: "", success: "", info: "", warning: "", destructive: "", neutral: "" });
  });
});

const BadgeTable: React.FC = () => {
  return <Table columns={badgeColumns} dataSource={badgeData} pagination={false} bordered />;
};

export default BadgeTable;
