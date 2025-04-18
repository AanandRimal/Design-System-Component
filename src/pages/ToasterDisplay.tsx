import { Col, Row, Space } from "antd";
import Toaster from "../components/toaster/Toaster";
import Button from "../components/button/Button"

const toasterTypes = ["info", "warning", "destructive", "success","neutral"] as const;

const ToasterDisplay: React.FC = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {toasterTypes.map((type) => (
        <Row gutter={16} align="top" key={type}>
          <Col span={4}>
            <strong>{type}</strong>
          </Col>
          <Col span={20}>
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
        </Row>
      ))}
    </Space>
  );
};

export default ToasterDisplay;
