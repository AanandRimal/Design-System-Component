import React, { useState } from "react";
import Drawer from "../components/drawer/Drawer";
import Button from "../components/button/Button";
import { LeftIcon } from "../components/icons/LeftIcon";

const DrawerDisplay: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Button Customtype="primary" onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>

      <Drawer
       
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        icon={<Button Customtype="secondary" leftIcon={<LeftIcon/>}/>}
        title="Drawer Title"
        description="This is a drawer component."
        footerType="right"
        footer={[      <Button key="cancel" Customtype="secondary" >
          Button Label
        </Button>,
        <Button key="submit" Customtype="primary" >
          Button Label
        </Button>]}
      >
        <p>Drawer content goes here.</p>
      </Drawer>
    </div>
  );
};

export default DrawerDisplay;
