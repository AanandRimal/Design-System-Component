import React from "react";
import {  Divider, Space } from "antd";
import Table from "../components/table/Table";
import Alert from "../components/alerts/Alerts"
import { CustomAlertType } from "../components/alerts/Alerts";
import Button from "../components/button/Button";

const alertTypes: CustomAlertType[] = ["neutral", "info", "success", "warning", "error", "primary"];
const alertColumns = [
  { title: "Condition", dataIndex: "condition", key: "condition", width: 150 },
  { title: "Type", dataIndex: "type", key: "type", width: 150 },
  { title: "Alert", dataIndex: "alert", key: "alert" },
];

const generateAlertData = (condition: "filled" | "stroke") =>
  alertTypes.map((type) => {
    const buttonType =
      condition === "stroke" || type === "neutral"
        ? "secondary"
        : type === "error"
        ? "destructive"
        : type;

    return {
      key: `${condition}-${type}`,
      condition,
      type,
      alert: (
        <Alert
          className="text-base-regular"
          message={`This is a ${type} alert`}
          description="This is a Description Text"
          action={
            <Space>
              <Button Customtype={buttonType}>Button Label</Button>
            </Space>
          }
          closable
          Customtype={type}
          showIcon
          {...(condition === "stroke" && { stroke: true })}
        />
      ),
    };
  });

const alertData = [
  ...generateAlertData("filled"),
  { key: "separator", condition: "", type: "", alert: <Divider /> },
  ...generateAlertData("stroke"),
];

const AlertDisplay: React.FC = () => (
  <Table columns={alertColumns} dataSource={alertData} pagination={false} bordered />
);

export default AlertDisplay;
