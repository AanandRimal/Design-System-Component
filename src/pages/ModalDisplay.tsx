import React, { useState } from "react";
import Modal from "../components/modal/Modal"
import Button from "../components/button/Button"
import { LeftIcon } from "../components/icons/LeftIcon"; 
import CustomInput from "../components/input/CustomInput";
const ModalDisplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button Customtype="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>

      {isModalOpen && (
        <Modal
        footerType="stretch"
          open={isModalOpen}
          onOk={() => {
            console.log("Confirmed!");
            setIsModalOpen(false); 
          }}
          onCancel={() => setIsModalOpen(false)}
          icon={
            <Button Customtype="secondary" Customsize={40} leftIcon={<LeftIcon />} />
          }
          title="Modal Title"
          description="This is a description."
          content={
            <>
              <p>Are you sure you want to delete this contact? This action is not reversible.</p>
            <CustomInput type="text" placeholder="Enter your name" label="Label" ></CustomInput>
            <CustomInput type="text" placeholder="Enter your name" label="Label"></CustomInput>
            
            </>
          }
          okText="Button Label"
          cancelText="Button Label" 
          okButtonProps={{
            type: "primary"
          }}  
          cancelButtonProps	={{
            type: "primary"
            
          }}   />
      )}
    </>
  );
};

export default ModalDisplay;
