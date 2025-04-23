import React, { useState } from "react";
import Modal from "../components/modal/Modal"
import Button from "../components/button/Button"
import { LeftIcon } from "../components/icons/LeftIcon"; 
import LabeledInputText from "../components/input/Labeled/LabeledInputText";
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
            <LabeledInputText type="text" placeholder="Enter your name" label={"Label"} ></LabeledInputText>
            <LabeledInputText type="text" placeholder="Enter your name" label="Label"></LabeledInputText>
            
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
