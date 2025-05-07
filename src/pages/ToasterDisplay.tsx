import { Col, Row, Space } from "antd";
import Toaster from "../components/toaster/Toaster";
import Button from "../components/button/Button";
import { showCustomToastSonner } from "../components/toaster/showCustomToastSonner";

const toasterTypes = ["info", "warning", "destructive", "success", "neutral"] as const;

const ToasterDisplay: React.FC = () => {
  return (
    <>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {toasterTypes.map((type) => (
          <Row gutter={16} align="top" key={type}>
            <Col span={4}>
              <strong>{type}</strong>
            </Col>
            <Col span={14}>
              <Toaster
                CustomType={type}
                message="Title"
                description="This is the toaster text"
                showIcon
                closable
                action={
                  <Space>
                    <Button Customtype="secondary">Button Label</Button>
                  </Space>
                }
              />
            </Col>
            <Col span={6}>
              <Button
                Customtype="secondary"
                onClick={() =>
                  showCustomToastSonner({
                    CustomType: type,
                    message: `${type.toUpperCase()} Toast`,
                    description: `This is a ${type} message.`,
                  })
                }
              >
                Show {type} Toast
              </Button>
            </Col>
          </Row>
        ))}
      </Space>
    </>
  );
};

export default ToasterDisplay;
