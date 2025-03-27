import React from "react";
import { ConfigProvider, Avatar as AntAvatar } from "antd";

const TestAvatar: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Avatar: {
            containerSize: 120, // Avatar size
            textFontSize: 100,  // Set the text font size
            colorBgContainer: "#1890ff", // Background color
            colorText: "#fff", // Text color
            fontSize:100
          },
        },
      }}
    >
      <AntAvatar >A</AntAvatar> 
    </ConfigProvider>
  );
};

export default TestAvatar;
