import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";
import { LeftIcon } from "../components/icons/LeftIcon";
import LabeledInputText from "../components/input/Labeled/LabeledInputText";

const ModalDisplay = () => {
  const [modalConfig, setModalConfig] = useState<{
    open: boolean;
    variant: "default" | "divider";
    footerType: "right" | "stacked" | "stretch";
  } | null>(null);

  const openModal = (variant: "default" | "divider", footerType: "right" | "stacked" | "stretch") => {
    setModalConfig({ open: true, variant, footerType });
  };

  const closeModal = () => setModalConfig(null);

  const footerTypes: ("right" | "stacked" | "stretch")[] = ["right", "stacked", "stretch"];
  const variants: ("default" | "divider")[] = ["default", "divider"];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-4 items-center font-semibold">
        <div></div>
        {footerTypes.map((footerType) => (
          <div key={footerType} className="text-center capitalize">{footerType}</div>
        ))}
      </div>

      {/* Grid Rows */}
      {variants.map((variant) => (
        <div key={variant} className="grid grid-cols-4 gap-4 items-center">
          <div className="font-semibold capitalize">{variant}</div>
          {footerTypes.map((footerType) => (
            <Button
              key={`${variant}-${footerType}`}
              Customtype="primary"
              onClick={() => openModal(variant, footerType)}
            >
              Open
            </Button>
          ))}
        </div>
      ))}

      {modalConfig?.open && (
        <Modal
          open={modalConfig.open}
          variant={modalConfig.variant}
          footerType={modalConfig.footerType}
          onOk={closeModal}
          onCancel={closeModal}
          icon={<Button Customtype="secondary" Customsize={40} leftIcon={<LeftIcon />} />}
          title={"Modal"}
          description="This is a description text."
          customFooter={[
            <Button key="cancel" Customtype="secondary">Cancel</Button>,
            <Button key="submit" Customtype="primary">Submit</Button>,
          ]}
          content={
            <>
              <p>Are you sure you want to delete this contact? This action is not reversible.</p>
              <LabeledInputText type="text" placeholder="Enter your name" label="Name" />
              <LabeledInputText type="email" placeholder="Enter your email" label="Email" />
            </>
          }
        />
      )}
    </div>
  );
};

export default ModalDisplay;
