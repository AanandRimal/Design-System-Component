import { useState } from "react";
import { ReactNode } from "react";
import {  Typography as Type, Divider, Menu, Table,ConfigProvider,Space } from "antd";
import { Icon } from "@iconify/react";
import Button from "./components/button/Button"; 
import { useTheme } from "./contexthook/ThemeProvider";
import ColorPalette from "./components/foundation/ColorPalette";
import CheckBox from "./components/checkbox/CheckBox";
import Input from "./components/input/Input";
import Typography from "./components/foundation/Typography";
import PasswordInput from "./components/input/PasswordInput";
import CustomInput from "./components/input/CustomInput";
import {LeftIcon,RightIcon} from "./components/icons/LeftIcon";
import { GoogleIcon,AppleIcon } from "./components/icons/Icon";
import { Themes } from "./components/foundation/Theme";
import Radio from "./components/Radio";
import Switch from "./components/switch/Switch"
import Alert from "./components/alerts/Alerts"
import { ExtendedAlertType } from "./components/alerts/Alerts";
import Breadcrumb from "./components/breadcrumbs/BreadCrumbs";
import Avatar from "./components/avatars/Avatar";
import Badge from "./components/badge/Badge";
import BadgeTable from "./BadgeDisplay";
import MyComponent from "./TabItems";
const { Title } = Type;
const components = [ "Colors","Typography","Avatar", "Button","Checkbox", "Input", "Radio Button","Switch/Toggle","Alert","Breadcrumb","Badges","Tabs"];
export default function KrispMake() {
  const { themeMode, toggleTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<string>("Button");
  const [showBottomLabel, setShowBottomLabel] = useState<boolean>(true);

  const sizes: number[] = [32, 36, 40, 44, 48];
  type CustomButtonType = "primary" | "secondary" | "success" | "info" | "destructive" | "warning" |"social" ;
  type CustomInputType = "text"|"password"| "search"|"otp"| "textarea" | "select" | "card";
  const inputSizes : number[] =[32, 36, 40, 44, 48];
const buttonTypes: CustomButtonType[] = ['primary', 'secondary', 'success', 'info', 'destructive', 'warning'] 
const inputTypes:CustomInputType[]= ['text', 'password', 'search', 'otp', 'textarea','select','card']
const alertTypes: ExtendedAlertType[] = ["neutral", "info", "success", "warning", "error", "primary"];


const currentTheme=Themes[themeMode]
const inputColumns = [
  { 
    title: (
      <Space>
        <span>Type</span>
        <Switch 
          checked={showBottomLabel} 
          onChange={(checked) => setShowBottomLabel(checked)} 
        />
      </Space>
    ), 
    dataIndex: "type", 
    key: "type", 
    width: 150 
  },
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Default", dataIndex: "default", key: "default"  },
  { title: "Filled", dataIndex: "filled", key: "filled" },
  { title: "Disabled", dataIndex: "disabled", key: "disabled"},
  { title: "Error", dataIndex: "error", key: "error"}
];

  const columns = [
    { title: "Type", dataIndex: "Customtype", key: "type", width: 150 },
    { title: "Size", dataIndex: "Customsize", key: "size", width: 100 },
    { title: "Default", dataIndex: "default", key: "default" },
    { title: "Hover", dataIndex: "hover", key: "hover" },
    { title: "Clicked", dataIndex: "clicked", key: "clicked" },
    { title: "Loading", dataIndex: "loading", key: "loading" },
    { title: "Disabled", dataIndex: "disabled", key: "disabled" },
  ];
  const checkboxSizes = [16, 20, 24];
  const checkboxColumns = [
    { title: "Size", dataIndex: "size", key: "size", width: 100 },
    { title: "Default", dataIndex: "default", key: "default" },
    { title: "Indeterminate", dataIndex: "indeterminate", key: "indeterminate" },
    { title: "Disabled", dataIndex: "disabled", key: "disabled" },
  ];
  const radioSizes = [16, 20, 24];

const radioColumns = [
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Default", dataIndex: "default", key: "default" },
  { title: "Checked", dataIndex: "checked", key: "checked" },
  { title: "Disabled", dataIndex: "disabled", key: "disabled" },
];

const switchSizes = [20, 24];

const switchColumns = [
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Default", dataIndex: "default", key: "default" },
  { title: "Checked", dataIndex: "checked", key: "checked" },
  { title: "Default: Disabled", dataIndex: "defaultDisabled", key: "defaultDisabled" },
  { title: "Checked: Disabled", dataIndex: "checkedDisabled", key: "checkedDisabled" },
];

const alertColumns = [
  { title: "Condition", dataIndex: "condition", key: "condition", width: 150 },
  { title: "Type", dataIndex: "type", key: "type", width: 150 },
  { title: "Alert", dataIndex: "alert", key: "alert" },
];
const avatarSizesList = [14, 20, 24, 32, 36, 40, 48, 64, 80, 120];
const avatarColumns = [
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Image", dataIndex: "image", key: "image" },
  { title: "Initials", dataIndex: "initials", key: "initials" },
  { title: "Avatar", dataIndex: "avatar", key: "avatar" },
];
  const countryOptions = [
    { value: "us", label: "+997 United States", img: "https://flagcdn.com/w40/us.png" },
    { value: "gb", label: "United Kingdom", img: "https://flagcdn.com/w40/gb.png" },
    { value: "in", label: "India", img: "https://flagcdn.com/w40/in.png" },
  ];
  interface ButtonData {
    key: string;
    Customtype: string;
    Customsize: number | string;
    default:ReactNode,
    hover: ReactNode;
    clicked: ReactNode;
    loading: ReactNode;
    disabled: ReactNode;
  }

  interface InputData {
    key: string;
    type: string;
    size: number | string;
    default: ReactNode;
    filled: ReactNode;
    disabled: ReactNode;
    error: ReactNode;
  }
  
  const data: ButtonData[] = [];
  buttonTypes.forEach((type) => {
    sizes.forEach((size, index) => {
      data.push({
        key: `${type}-${size}`,
        Customtype: index === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "", 
        Customsize:size,
        default: <Button Customtype={type} Customsize={size} leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>Button Label</Button>,
        hover: <Button Customtype={type} Customsize={size} leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>Button Label</Button>,
        clicked: <Button Customtype={type} Customsize={size} leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>Button Label</Button>,
        loading: <Button Customtype={type} Customsize={size} loading>Button Label</Button>,
        disabled: <Button Customtype={type} Customsize={size} disabled leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>Button Label</Button>
      });
    });
    data.push({ key: `${type}-spacer`, Customtype: "", Customsize: "", default: <></>, hover: <></>, clicked: <></>, loading: <></>, disabled: <></> });
  });

  sizes.forEach((size, index) => {
    data.push({
      key: `social-google-${size}`,
      Customtype: index === 0 ? "Social (Google)" : "", 
      Customsize:size,
      default: <Button Customtype="social" Customsize={size} leftIcon={<GoogleIcon />}>Sign in with Google</Button>,
      hover: <Button Customtype="social" Customsize={size} leftIcon={<GoogleIcon />}>Sign in with Google</Button>,
      clicked: <Button Customtype="social" Customsize={size} leftIcon={<GoogleIcon />}>Sign in with Google</Button>,
      loading: "", 
      disabled: <Button Customtype="social" Customsize={size} disabled leftIcon={<GoogleIcon />}>Sign in with Google</Button>
    });
  });
  data.push({ key: "social-google-spacer", Customtype: "", Customsize: "", default: <></>, hover: <></>, clicked: <></>, loading: <></>, disabled: <></> });
  sizes.forEach((size, index) => {
    data.push({
      key: `social-apple-${size}`,
      Customtype: index === 0 ? "Social (Apple)" : "", 
      Customsize:size,
      default: <Button Customtype="social" Customsize={size} leftIcon={<AppleIcon />}>Sign in with Apple</Button>,
      hover: <Button Customtype="social" Customsize={size} leftIcon={<AppleIcon />}>Sign in with Apple</Button>,
      clicked: <Button Customtype="social" Customsize={size} leftIcon={<AppleIcon />}>Sign in with Apple</Button>,
      loading: "",
      disabled: <Button Customtype="social" Customsize={size} disabled leftIcon={<AppleIcon />}>Sign in with Apple</Button>
    });
  });
  data.push({ key: "social-apple-spacer", Customtype: "", Customsize: "", default: <></>, hover: <></>, clicked: <></>, loading: <></>, disabled: <></> });
  const inputData: InputData[] = [];

inputTypes.forEach((type, typeIndex) => {
  if (typeIndex !== 0) {
    inputData.push({
      key: `spacer-${type}`,
      type: "",
      size: "",
      default: <div className="h-8" />,
      filled: "",
      disabled: "",
      error: "",
    });
  }

  if (type === "otp" || type === "textarea") {
    inputData.push({
      key: `${type}-no-size`,
      type: type.charAt(0).toUpperCase() + type.slice(1),
      size: "-",
      default: <CustomInput type={type} placeholder="Place Holder Text" label="Label"bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
      filled: <CustomInput type={type} value="Place Holder Text" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
      disabled: <CustomInput type={type} disabled placeholder="Place Holder Text" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
      error: <CustomInput type={type} status="error" placeholder="Error" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} />,
    });
  } else if (type === "search") {
    inputSizes.forEach((size, index) => {
      inputData.push({
        key: `${type}-${size}`,
        type: index === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "",
        size,
        default: <Input type="search" size={size} placeholder="Search..." />,
        filled: <Input type="search" size={size} value="Search Query" />,
        disabled: <Input type="search" size={size} disabled placeholder="Search..." />,
        error: "-",
      });
    });
  } else if (type === "card") {
    inputData.push({
      key: `${type}-no-size`,
      type: type.charAt(0).toUpperCase() + type.slice(1),
      size: "-",
      default: <Input type="card" placeholder="7777786766" />,
      filled: <Input type="card" value="7777786766" />,
      disabled: <Input type="card" disabled placeholder="7777786766" />,
      error: <Input type="card" status="error" placeholder="Invalid Card" />,
    });
  
  } else if (type === "select") {
    inputSizes.forEach((size, index) => {
      inputData.push({
        key: `${type}-${size}`,
        type: index === 0 ? "Select" : "",
        size,
        default: <CustomInput type={type} size={size} defaultValue={{ value: "us", label: "TextPlaceholder" }} options={countryOptions}  bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        filled: <CustomInput type={type} size={size} defaultValue="Text Placeholder" options={countryOptions}  label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        disabled:  <CustomInput type={type} size={size} defaultValue={{ value: "us", label: "TextPlaceholder" }} options={countryOptions}  label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} />,
        error:   <CustomInput type={type} size={size} defaultValue={{ value: "us", label: "TextPlaceholder" }} status="error" options={countryOptions}  label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
      });
    });
  } else {
    inputSizes.forEach((size, index) => {
      inputData.push({
        key: `${type}-${size}`,
        type: index === 0 ? type.charAt(0).toUpperCase() + type.slice(1) : "",
        size,
        default: type === "password" ? <PasswordInput size={size} placeholder="Enter your Password" /> : <CustomInput type={type} size={size} placeholder="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        filled: type === "password" ? <PasswordInput size={size} value="Enter your Password" /> : <CustomInput type={type} size={size} value="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
        disabled: type === "password" ? <></> : <CustomInput type={type} size={size} disabled placeholder="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined} />,
        error: type === "password" ? <PasswordInput size={size} status="error" placeholder="Error" /> : <CustomInput type={type} size={size} status="error" placeholder="Text Placeholder" label="Label" bottomLabel={showBottomLabel ? "This is required" : undefined}/>,
      });
    });
  }
});
const checkboxData = checkboxSizes.map((size) => ({
  key: `checkbox-${size}`,
  size,
  default: <CheckBox size={size} >This is the CheckBox Label</CheckBox>,
  indeterminate: <CheckBox size={size} indeterminate > This is the CheckBox Label</CheckBox>,
  disabled: <CheckBox size={size} disabled > This is the CheckBox Label</CheckBox>
}));
const radioData = radioSizes.map((size) => ({
  key: `radio-${size}`,
  size,
  default: <Radio size={size} >This is the Radio Label</Radio>,
  checked: <Radio size={size} checked > This is the Radio Label</Radio>,
  disabled: <Radio size={size} disabled>This is the RadioLabel</Radio>,
}));
const switchData = switchSizes.map((size) => ({
  key: `switch-${size}`,
  size,
  default:// <Space>
 <Switch size={size} />
,
  checked: <Switch size={size} checked />,
  defaultDisabled: <Switch size={size} disabled />,
  checkedDisabled: <Switch size={size} checked disabled />,
}));

const generateAlertData = (condition: "filled" | "stroke") => {
  return alertTypes.map((type) => {
    const buttonType =  condition === "stroke" ? "secondary" : type === "error" ? "destructive" : type === "neutral" ? "secondary" : type;
    return {
      key: `${condition}-${type}`,
      condition,
      type,
      alert: (
        <Alert
          className="text-base-regular"
          message={`This is a ${type} alert`}
          description={"This is a Description Text"}
          action={
            <Space>
          <Button Customtype={buttonType}>Button Label</Button>
          </Space>}
          closable
          type={type}
          showIcon
          {...(condition === "stroke" ? { stroke: true } : {})}
        />
      ),
    };
  });
};

const alertData = [
  ...generateAlertData("filled"),
  { key: "separator", condition: "", type: "", alert: <Divider /> },
  ...generateAlertData("stroke"),
];

const avatarData = avatarSizesList.map((size) => ({
  key: `avatar-${size}`,
  size,
  image: <Avatar customSize={size} src={<img src={"./Female 2.png"} alt="avatar" />} dot />,
  initials: <Avatar customSize={size} dot>K</Avatar >,
  avatar: <Avatar customSize={size} icon={  <Icon
    icon="mage:user-fill"
  />}  dot/>, 
}));

  return (
    <ConfigProvider
  theme={{
    components: {
      Table: {
        colorText: currentTheme.text, 
        colorBgContainer: currentTheme.Bg1,
        headerBg: currentTheme.Bg1,
        headerColor: currentTheme.text,
        rowHoverBg: "none",
        borderColor: currentTheme.stroke.strong,
      },
      Menu:{
        darkItemBg:currentTheme.Bg1
      }
    },
  }}
>
    <div style={{ 
      display: "flex", 
      minHeight: "100vh", 
      background: currentTheme.Bg1,
      color: currentTheme.text,
      marginLeft: "250px", 
      overflowY:"auto"
    }}>
      <div style={{ 
        minWidth: "250px", 
        height: "100vh", 
        overflow:"hidden",
        position: "fixed",  
        top: 0,
        left: 0,
        background: currentTheme.Bg1, 
        padding: "16px", 
    boxShadow: `4px 0 4px ${currentTheme.Bg2Hover}`,
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/krispmake.png" alt="Logo" style={{ width: "30px", height: "30px", marginRight: "5px"}} />
          <Title level={3} style={{ margin: 0, color: currentTheme.text }}>KrispMake</Title>
        </div>
        <Divider style={{ background: themeMode === "dark" ? "#444" : "#ddd" }} />
 
    

        <Menu
          selectedKeys={[selectedComponent]} 
          onClick={(e) => setSelectedComponent(e.key)} 
          theme={themeMode === "dark" ? "dark" : "light"}
        >
          {components.map((component) => (
            <Menu.Item key={component}>{component}</Menu.Item>
          ))}
        </Menu>
        <Divider style={{ background: themeMode === "dark" ? "#444" : "#ddd" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ margin: 0 }}>Dark Mode</p>
          <Switch checked={themeMode === "dark"} onChange={toggleTheme} />
        </div>
      </div>
      
      <div style={{ flex: 1, padding: "16px", background:currentTheme.Bg1 }}>
        <Title level={3} style={{ margin: 0, color: currentTheme.text }}>{selectedComponent}</Title>
        <Divider style={{ background: themeMode === "dark" ? "#444" : "#ddd" }} />
        
        {selectedComponent === "Button" && (
<>
 <Table columns={columns} dataSource={data} pagination={false} bordered  />

</>
)}
   <div>
   {selectedComponent === "Checkbox" && (
  <Table columns={checkboxColumns} dataSource={checkboxData} pagination={false} bordered />
)}
        </div>
        <div >
        {selectedComponent === "Input" && (
          <>
         <Table
  columns={inputColumns}
  dataSource={inputData}
  pagination={false}
  bordered
  scroll={{ x: "100%" }} 
  style={{ maxWidth: "100%" }} 
/>
          </>
          
)}
</div>
{selectedComponent === "Colors" && <ColorPalette />}
{selectedComponent==="Typography"&& <Typography/>}

  {selectedComponent==="Radio Button"&&(
    <>   
{/* <Button  type="success" size={100}>elllll</Button>
<Button type="destructive" >Help me</Button>
<Button type="warning" size="large">help me testing </Button> */}

    <Table columns={radioColumns} dataSource={radioData} pagination={false} bordered />
    </>
  )}
   <div>
   {selectedComponent === "Switch/Toggle" && (
  <Table columns={switchColumns} dataSource={switchData} pagination={false} bordered />
)}
        </div>
        <div>
   {selectedComponent === "Alert" && (
    <>
    <Alert type="success" showIcon stroke></Alert>
     <Table
     columns={alertColumns}
     dataSource={alertData}
     pagination={false}
     bordered
   />
   </>
)}
   <div>
   {selectedComponent === "Breadcrumb" && (
  <Breadcrumb     items={[
    {
      title: 'Application Center',
      href: '',
    },
    {
      title: 'Application List',
      href: '',
    },
    {
      title: 'An Application',
    },
  ]}/>
)}
        </div>
        <div>
   {selectedComponent === "Avatar" && (
    <>
 <Table columns={avatarColumns} dataSource={avatarData} pagination={false} bordered />
 </>
)}
   {selectedComponent === "Badges" && (
    <>
{/* <Badge type="filled" status="success" icon={  <Avatar customSize={14} src={<img src={"./Female 2.png"} alt="avatar" />}  />}>dfdvdfdf</Badge>
          <Badge type="solid" status="destructive"  icon={  <Icon
          icon="mage:select-box"/>}>dfdvdfdf</Badge>
            <Badge type="solid" status="destructive"  icon={  <Icon
          icon="mage:select-box"/>}>dfdvdfdf</Badge>
          <Badge type="stroke" status="destructive"  size={20} dot >dfdvdfdf</Badge>
          <Badge type="filled" status="destructive"  size={24} dot>dfdvdfdf</Badge>
          <Badge type="solid" status="success"  size={24} dot>dfdvdfdf</Badge> */}
          <BadgeTable />
         
 </>
)}
{selectedComponent==="Tabs"&& (
   <MyComponent></MyComponent>
)
}
        </div>
        </div>

      </div>
    </div>
    </ConfigProvider>
  );

}

