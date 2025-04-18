import { Space } from "antd";
import Spin from "../components/spinner/Spin";
import LoadingCircle from "../components/icons/LoadingCircle"; // adjust this import to your path

const SpinnerDisplay = () => {
  return (
    <Space direction="vertical" size={50}>
      {/* Default Size Section */}
          <div  style={{ textAlign: "center", display: "flex", gap: 20 }}>
  
          <Spin indicator={<LoadingCircle size={20}/>}/>
          <Spin indicator={<LoadingCircle size={24}/>}/>
            <Spin indicator={<LoadingCircle size={40}/>}/>
          </div>

      {/* Custom Sizes Section */}
      <Space direction="horizontal" size={50}>
        {[{ size: 20}, { size: 24 }, { size: 36 }, { size: 40 }].map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 8 }}>{item.size}px</div>
            <Spin  customSize={item.size}  indicator={<LoadingCircle size={item.size}/>} />
          </div>
        ))}
      </Space>
    </Space>
  );
};

export default SpinnerDisplay;
