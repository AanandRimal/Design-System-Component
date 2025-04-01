import React, { useState } from "react";
import Tabs from "./components/tabs/Tabs"; // Import the custom Tabs component
import Badge from "./components/badge/Badge"; // Import Badge component

const MyComponent: React.FC = () => {
  const [boxactiveKey,setboxActiveKey]=useState<string>("1");
  const [underlineactiveKey,setunderlineActiveKey]=useState<string>("1");
    const tabItems = [
      {
        key: "1",
        label: "Home",
        icon: <Badge  > 22 </Badge>,
        children:"Content for Settingshome" ,
      },
      {
        key: "2",
        label: "Setting",
        icon: <Badge  > 22 </Badge>,
        children: "Content for Settings",
      },
      {
        key: "3",
        label: "Profile",
        icon: <Badge  > 22 </Badge>,
        children: "Content for Settingsprofile",
      },
      {
        key: "4",
        label: "Notify",
        icon: <Badge  > 22 </Badge>,
        children: "Content for Settingsnotify",
      },
      {
        key: "5",
        label: "Message",
        icon: <Badge  > 22 </Badge>,
        children: "Content for Settings",
      },
    ];
  
    return (
      <div className="grid grid-cols-2 gap-6 p-4">
        {/* Box Tabs Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Box Tab</h2>
          <Tabs Customtype="box" items={tabItems} activeKey={boxactiveKey} onChange={setboxActiveKey} ></Tabs>
        </div>
  
        {/* Underline Tabs Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Underline Tab</h2>
          <Tabs Customtype="underline" items={tabItems} activeKey={underlineactiveKey} onChange={setunderlineActiveKey} />
        </div>
      </div>
    );
  };
  

export default MyComponent;
