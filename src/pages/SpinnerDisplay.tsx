import { Space } from "antd";
import Spin from "../components/spinner/Spin";
import LoadingCircle from "../components/icons/LoadingCircle"; // adjust this import to your path
const spinnerSizes : (  20 | 24 | 36 | 40 )[] = [20,24,36,40];
const SpinnerDisplay = () => {
  return (
    <Space direction="vertical" size={50}>
      {/* Default Size Section */}
          <div  style={{ textAlign: "center", display: "flex", gap: 20 }}>
  
          <Spin tip="Loading" indicator={<LoadingCircle customSize={20}/>} />
          <Spin indicator={<LoadingCircle customSize={24}/>}/>
            <Spin indicator={<LoadingCircle customSize={40}/>}/>
          </div>

      {/* Custom Sizes Section */}
      <Space direction="horizontal" size={50}>
        {spinnerSizes.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 8 }}>{item}px</div>
            <Spin  customSize={item}  indicator={<LoadingCircle customSize={item}/>} />
          </div>
        ))}
      </Space>
    </Space>
  );
};

export default SpinnerDisplay;
