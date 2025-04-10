import { Space } from "antd";
import Spin from "../components/spinner/Spin"; // adjust this import to your path

const SpinnerDisplay = () => {
  return (
    <Space direction="vertical" size={50}>
      {/* Default Size Section */}
      <Space direction="horizontal" size={10}>
        {[50, 30, 20, 90].map((percent, index) => (
          <div key={index} style={{ textAlign: "center" }}>
  
            <Spin percent={percent} />
          </div>
        ))}
      </Space>

      {/* Custom Sizes Section */}
      <Space direction="horizontal" size={10}>
        {[{ size: 20, percent: 50 }, { size: 24, percent: 30 }, { size: 36, percent: 20 }, { size: 40, percent: 90 }].map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 8 }}>{item.size}px</div>
            <Spin percent={item.percent} customSize={item.size} />
          </div>
        ))}
      </Space>
    </Space>
  );
};

export default SpinnerDisplay;
