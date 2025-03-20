// import { Input as AntInput, Space } from "antd";
// import { useState } from "react";
// import { CustomComponentProps } from "./Input"; // Import the existing props
// import VisaIcon from "./icons/VisaIcon"; // Replace with your actual Visa/Mastercard icons
// import MasterCardIcon from "./icons/MasterCardIcon";

// const cardTypeIcons: Record<string, React.ReactNode> = {
//     visa: <VisaIcon />,
//     mastercard: <MasterCardIcon />,
//   };

// const detectCardType = (number: string) => {
//   if (/^4/.test(number)) return "visa";
//   if (/^5[1-5]/.test(number)) return "mastercard";
//   return null;
// };

// const CardInput: React.FC<Omit<CustomComponentProps, "type">> = ({ size = "small", ...props }) => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const cardType = detectCardType(cardNumber.replace(/\s/g, ""));

//   const formatCardNumber = (value: string) => {
//     return value
//       .replace(/\D/g, "") // Remove non-numeric characters
//       .replace(/(\d{4})/g, "$1 ") // Add space after every 4 digits
//       .trim(); // Remove trailing space
//   };

//   const formatExpiry = (value: string) => {
//     return value
//       .replace(/\D/g, "") // Remove non-numeric characters
//       .replace(/(\d{2})(\d{1,2})/, "$1/$2") // Insert `/` after MM
//       .slice(0, 5); // Limit to MM/YY format
//   };

//   return (
//     <Space.Compact  style={{ display: "flex", gap: 4, width: "100%" }}>
//       {/* Card Number Field */}
//       <AntInput
//         {...props}
//         value={cardNumber}
//         size={size}
//         onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
//         placeholder="Card Number"
//         suffix={cardType ? cardTypeIcons[cardType] : null}
//         maxLength={19} // 16 digits + 3 spaces
//       />

//       {/* Expiry Date Field */}
//       <AntInput
//         {...props}
//         value={expiry}
//         onChange={(e) => setExpiry(formatExpiry(e.target.value))}
//         placeholder="MM/YY"
//         maxLength={5}
//       />

//       {/* CVV Field */}
//       <AntInput
//         {...props}
//         value={cvv}
//         onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
//         placeholder="CVV"
//         maxLength={4} // 3 or 4 digits
//       />
//     </Space.Compact>
//   );
// };

// export default CardInput;
// import { Input as AntInput, Space } from "antd";
// import { useRef, useState } from "react";
// import { CustomComponentProps } from "./Input";
// import type { InputRef } from "antd";



// interface CardInputProps extends Omit<CustomComponentProps, "type"> {}
// const antSizeMapping = ["small", "middle", "large"] as const;
// type AntSize = (typeof antSizeMapping)[number];

// const CardInput: React.FC<CardInputProps> = ({
//   size = "small",
//   disabled,
//   status,
//   ...props
// }) => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");

//   const expiryRef = useRef<InputRef>(null);
//   const cvvRef = useRef<InputRef>(null);


//   const formatCardNumber = (value: string) => {
//     return value.replace(/\D/g, "").replace(/(\d{4})/g, "$1 ").trim();
//   };

//   const formatExpiry = (value: string) => {
//     return value.replace(/\D/g, "").replace(/(\d{2})(\d{1,2})/, "$1/$2").slice(0, 5);
//   };
//   const normalizedSize: AntSize = antSizeMapping.includes(size as AntSize) ? (size as AntSize) : "small";
//   return (
//     <Space.Compact>
//       <AntInput
//         {...props}
//         size={normalizedSize}
//         status={status}
//         disabled={disabled}
//         value={cardNumber}
//         inputMode="numeric"
//         onChange={(e) => {
//           const formatted = formatCardNumber(e.target.value);
//           setCardNumber(formatted);
//           if (formatted.replace(/\s/g, "").length >= 16) {
//             expiryRef.current?.focus();
//           }
//         }}
//         placeholder="Card Number"
//         suffix={<img src="/icons8-visa-card-48.png"></img>}
//         maxLength={19}
//       />
//       <AntInput
//         {...props}
//         ref={expiryRef}
//         status={status}
//         disabled={disabled}
//         value={expiry}
//         inputMode="numeric"
//         onChange={(e) => {
//           const formatted = formatExpiry(e.target.value);
//           setExpiry(formatted);
//           if (formatted.length >= 5) {
//             cvvRef.current?.focus();
//           }
//         }}
//         placeholder="MM/YY"
//         maxLength={5}
//       />
//       <AntInput
//         {...props}
//         ref={cvvRef}
//         status={status}
//         disabled={disabled}
//         value={cvv}
//         inputMode="numeric"
//         onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
//         placeholder="CVV"
//         maxLength={4}
//       />
//     </Space.Compact>
//   );
// };

// export default CardInput;
import { Input, Space } from "antd";
import { useState, useRef } from "react";
import type { InputRef } from "antd";

interface CardInputProps {
  size?: "small" | "middle" | "large";
  status?: "error" | "warning";
  disabled?: boolean;
  placeholder?:string|number
}

const CardInput: React.FC<CardInputProps> = ({ size = "middle", status, disabled ,placeholder}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const expiryRef = useRef<InputRef>(null);

  const getCardType = (number: string): string | undefined => {
    const visaRegex = /^4/;
    const masterCardRegex = /^5[1-5]/;

    if (visaRegex.test(number)) return "/icons8-visa-card-48.png";
    if (masterCardRegex.test(number)) return "/icons8-mastercard-48.png";
    return undefined; 
  };

  
  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{2})(\d{1,2})/, "$1/$2").slice(0, 5);
  };

  return (
    <Space.Compact  direction="horizontal" >
      <Input
        size={size}
        placeholder="Card Number"
        status={status}
        disabled={disabled}
        value={cardNumber}
        inputMode="numeric"
        onChange={(e) => {
          const formatted = formatCardNumber(e.target.value);
          setCardNumber(formatted);
          if (formatted.replace(/\s/g, "").length >= 16) {
            expiryRef.current?.focus();
          }
        }}
        style={{ flexGrow: 1, minWidth: 180 }}
        suffix={
          getCardType(cardNumber) && <img src={getCardType(cardNumber)} alt="Card Icon" width={24} />
        }
        maxLength={19} 
      />
      <Input
        size={size}
        placeholder="MM/YY"
        status={status}
        disabled={disabled}
        value={expiry}
        inputMode="numeric"
        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
        ref={expiryRef}
        style={{ width: 100 }}
        maxLength={5}
      />
      <Input
        size={size}
        placeholder="CVV"
        status={status}
        disabled={disabled}
        inputMode="numeric"
        onChange={(e) => e.target.value.replace(/\D/g, "").slice(0, 4)}
       style={{ width: 100}}
        maxLength={4}
      />
    </Space.Compact>
  );
};

export default CardInput;
