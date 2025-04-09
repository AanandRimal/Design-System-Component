import { useState } from "react";
import {  Typography as Type, Divider, Menu, Table,ConfigProvider,Space} from "antd";
import { Icon } from "@iconify/react";
import { useTheme } from "../contexthook/ThemeProvider";
import ColorPalette from "../components/foundation/ColorPalette";
import Button from "../components/button/Button";
import CheckBox from "../components/checkbox/CheckBox";
import Typography from "../components/foundation/Typography";
import { Themes } from "../components/foundation/Theme";
import Radio from "../components/Radio";
import Switch from "../components/switch/Switch"
import Alert from "../components/alerts/Alerts"
import { CustomAlertType } from "../components/alerts/Alerts";
import Breadcrumb from "../components/breadcrumbs/BreadCrumbs";
import Avatar from "../components/avatars/Avatar";
import BadgeTable from "./BadgeDisplay";
import TabDisplay from "./TabDisplay";
import Pagination from "../components/pagination/Pagination";
import "./scrollbar.css"
import ModalDisplay from "./ModalDisplay";
import DrawerDisplay from "./DrawerDisplay";
import ButtonDisplay from "./ButtonDisplay";
import InputDisplay from "./InputDisplay";
import ToasterDisplay from "./ToasterDisplay";
import DropdownDisplay from "./Dropdowndisplay"
import BannerGrid from "./BannerDisplay";
import { LeftIcon } from "../components/icons/LeftIcon";
const { Title } = Type;
const components = [ "Colors","Typography","Avatar", "Button","Checkbox", "Input", "Radio Button","Switch/Toggle","Alert","Breadcrumb","Badges","Tabs","Pagination","Modal","Drawer","Toaster","Banner","Dropdown"];
export default function KrispMake() {
 
  const { themeMode, toggleTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<string>("Button");
const alertTypes: CustomAlertType[] = ["neutral", "info", "success", "warning", "error", "primary"];
const currentTheme=Themes[themeMode]
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
          Customtype={type}
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
        colorText: currentTheme.text.t1Title, 
        colorBgContainer: currentTheme.background.bg1,
        headerBg: currentTheme.background.bg1,
        headerColor: currentTheme.text.t1Title,
        rowHoverBg: "none",
        borderColor: currentTheme.stroke.strong,
      },
      Menu:{
        darkItemBg:currentTheme.background.bg1,
        darkItemSelectedBg:currentTheme.primary.default,
        itemSelectedBg:currentTheme.primary.accentBg,
        itemActiveBg:currentTheme.primary.focus,
        itemSelectedColor:currentTheme.primary.stroke


        
      }
    },
  }}
>
    <div style={{ 
      display: "flex", 
      minHeight: "100vh", 
      background: currentTheme.background.bg1,
      color: currentTheme.text.t1Title,
      marginLeft: "250px", 
      overflowY:"auto"
    }}>
<div style={{ 
    minWidth: "250px", 
    height: "100vh", 
    display: "flex",
    flexDirection: "column",
    position: "fixed",  
    top: 0,
    left: 0,
    background: currentTheme.background.bg1, 
    padding: "16px", 
    boxShadow: `4px 0 4px ${currentTheme.background.bg2Hover}`
}}>
    <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/krispmake.png" alt="Logo" style={{ width: "30px", height: "30px", marginRight: "5px"}} />
        <Title level={3} style={{ margin: 0, color: currentTheme.text.t1Title }}>KrispMake</Title>
    </div>
    <Divider style={{ background: themeMode === "dark" ? "#444" : "#ddd" }} />
    <div       className="scrollable-menu" //scroll bar lai color dina classname

        style={{ 
            flexGrow: 1, 
            overflowY: "auto",
            paddingBottom: "10px",
            "--scrollbar-bg": currentTheme.background.bg1,  
            "--scrollbar-thumb": currentTheme.fill.f2, 
        } as React.CSSProperties}
           
  
    >
        <Menu
            selectedKeys={[selectedComponent]} 
            onClick={(e) => setSelectedComponent(e.key)} 
            theme={themeMode === "dark" ? "dark" : "light"}
            style={{ background: currentTheme.background.bg1, color: currentTheme.text.t1Title }}
        >
            {components.map((component) => (
                <Menu.Item key={component}>{component}</Menu.Item>
            ))}
        </Menu>
    </div>
    <Divider style={{ background: themeMode === "dark" ? "#444" : "#ddd", margin: "10px 0" }} />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <p style={{ margin: 0 }}>Dark Mode</p>
        <Switch checked={themeMode === "dark"} onChange={toggleTheme} />
    </div>
</div>
      <div style={{ flex: 1, padding: "16px", background:currentTheme.background.bg1 }}>
        <Title level={3} style={{ margin: 0, color: currentTheme.text.t1Title }}>{selectedComponent}</Title>
        <Divider style={{ background: themeMode === "dark" ? "#444" : "#ddd" }} />
        






{selectedComponent === "Button" && (
<>
<ButtonDisplay/>
<Button Customtype="primary" Customsize={40} leftIcon={<LeftIcon/>}></Button>

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
<InputDisplay/>
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
   <TabDisplay/>
)
}
{selectedComponent==="Pagination"&& (
  <> 
  <Pagination defaultCurrent={1} total={50} />
        
        </>
)
}
{selectedComponent === "Modal" && (
  <>
<ModalDisplay/>
  </>
)}
{selectedComponent === "Drawer" && (
  <>
<DrawerDisplay/>
  </>
)}
{selectedComponent=== "Toaster" && (
  <>
<ToasterDisplay/>
  </>
) }
{selectedComponent=== "Dropdown" && (
  <>

<DropdownDisplay/>
  </>
) }
{selectedComponent=== "Banner" && (
  <>

<BannerGrid />
  </>
) }
        </div>
        </div>
      </div>
    </div>
    </ConfigProvider>
  );

}

