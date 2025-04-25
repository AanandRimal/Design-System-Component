import React, { useState } from "react";
import Tabs from "../components/tabs/Tabs"; // Import the custom Tabs component
import Badge from "../components/badge/Badge"; // Import Badge component
import TabCustomIcon from "../components/icons/TabCustomIcon";

const TabDisplay: React.FC = () => {
  const [boxactiveKey,setboxActiveKey]=useState<string>("1");
  const [underlineactiveKey,setunderlineActiveKey]=useState<string>("1");
  const [ghostactiveKey,setghostActiveKey]=useState<string>("1");
    const tabItems = [
      {
        key: "1",
        label: "Home",
        customIcon: <Badge  > 22 </Badge>,
        icon: <TabCustomIcon/>,
        children:"Content for Settingshome" ,
      },
      {
        key: "2",
        label: "Setting",
        customIcon: <Badge  > 22 </Badge>,
        children: "Content for Settings",
      },
      {
        key: "3",
        label: "Profile",
        customIcon: <Badge  > 22 </Badge>,
        children: "Content for Settingsprofile",
      },
      {
        key: "4",
        label: "Notify",
        customIcon: <Badge  > 22 </Badge>,
        children: "Content for Settingsnotify",
      },
      {
        key: "5",
        label: "Message",
        customIcon:  <Badge  > 22 </Badge>,
        children: "Content for Settings",
      },
    ];
    
    return (
      <div className="grid grid-cols-2 gap-6 p-4" >
        <div>
          <h2 className="text-lg font-semibold mb-4" >Box Tab</h2>
          <Tabs Customtype="box" items={tabItems} activeKey={boxactiveKey} onChange={setboxActiveKey} ></Tabs>
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Underline Tab</h2>
          <Tabs Customtype="underline" items={tabItems} activeKey={underlineactiveKey} onChange={setunderlineActiveKey} />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Ghost Tab</h2>
          <Tabs Customtype="ghost" items={tabItems} activeKey={ghostactiveKey} onChange={setghostActiveKey} />
        </div>
      </div>
    );
  };
  

export default TabDisplay;
