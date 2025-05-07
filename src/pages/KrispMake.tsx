import { useState } from "react";
import {  Typography as Type, Divider, Menu,ConfigProvider,Space} from "antd";
import { Icon } from "@iconify/react";
import { useTheme } from "../context-hook/ThemeProvider";
import ColorPalette from "../components/foundation/ColorPalette";
import Typography from "../components/foundation/Typography";
import { Themes } from "../components/foundation/Theme";
import Switch from "../components/switch/Switch"
import Breadcrumb from "../components/breadcrumbs/BreadCrumbs";
import Avatar from "../components/avatars/Avatar";
import BadgeDisplay from "./BadgeDisplay";
import TabDisplay from "./TabDisplay";
import Pagination from "../components/pagination/Pagination";
import "./scrollbar.css"
import ModalDisplay from "./ModalDisplay";
import DrawerDisplay from "./DrawerDisplay";
import ButtonDisplay from "./ButtonDisplay";
import InputDisplay from "./InputDisplay";
import ToasterDisplay from "./ToasterDisplay";
import DropdownDisplay from "./Dropdowndisplay"
import BannerDisplay from "./BannerDisplay";
import TooltipDisplay from "./TooltipDisplay";
import ProgressWithLabel from "../components/progress-bar/ProgressWithLabel";
import SpinnerDisplay from "./SpinnerDisplay";
import CheckboxDisplay from "./CheckBoxDisplay";
import TableDisplayComponent from "../components/table/TableDisplay";
import Table from "../components/table/Table";
import Slider from "../components/sliders/Slider";
import ButtonGroupDisplay from "./ButtonGroupDisplay";
import dayjs from 'dayjs';
import CustomDatePicker from "../components/date-picker/Date-Picker";
import { LeftIcon } from "../components/icons/LeftIcon";
import ButtonDoc from "../component-docs/ButtonDoc";
import Tabs from "../components/tabs/Tabs";
import InputDoc from "../component-docs/InputDoc";
import AvatarDoc from "../component-docs/AvatarDoc";
import AlertDisplay from "./AlertDisplay";
import AlertDoc from "../component-docs/AlertDoc";
import BadgeDoc from "../component-docs/BadgeDoc";
import BannerDoc from "../component-docs/BannerDoc";
import ButtonGroupDoc from "../component-docs/ButtonGroupDoc";
import CheckboxDoc from "../component-docs/CheckBoxDoc";
import ColorSystemDoc from "../component-docs/ColorDoc";
import DrawerDoc from "../component-docs/DrawerDoc";
import ModalDoc from "../component-docs/ModalDoc";
import PaginationDoc from "../component-docs/PaginationDoc";
import ProgressDoc from "../component-docs/ProgressBarDoc";
import RadioDisplay from "./RadioDisplay";
import RadioDoc from "../component-docs/RadioDoc";
import SliderDoc from "../component-docs/SliderDoc";
import SpinnerDoc from "../component-docs/SpinnerDoc";
import SwitchDisplay from "./SwitchDisplay";
import SwitchDoc from "../component-docs/SwitchDpc";
import TableDoc from "../component-docs/TableDoc";
import TabsDoc from "../component-docs/TabDoc";
import ToasterDoc from "../component-docs/ToasterDoc";
import TooltipDoc from "../component-docs/ToolTipDoc";
import TypographyDoc from "../component-docs/TypographyDoc";
import DropdownDoc from "../component-docs/Dropdown";
import CustomDatePickerr from "./DateSelector";
import {Toaster as SonnerToaster} from "sonner";
import { DatePicker } from "antd";
import PaginatedDemo from "./PaginationDemo";

const { Title } = Type;
const components = [
  "Alert",
  "Avatar",
  "Badges",
  "Banner",
  "Breadcrumb",
  "Button",
  "ButtonGroup",
  "Checkbox",
  "Colors",
  "DatePicker",
  "Drawer",
  "Dropdown",
  "Input",
  "Modal",
  "Pagination",
  "ProgressBar",
  "Radio Button",
  "Slider",
  "Spinner",
  "Switch/Toggle",
  "Table",
  "Tabs",
  "Toaster",
  "ToolTip",
  "Typography",
];
export default function KrispMake() {
  const { themeMode, toggleTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState<string>("Button");
const currentTheme=Themes[themeMode]
const avatarSizesList = [14, 20, 24, 32, 36, 40, 48, 64, 80, 120];
const avatarColumns = [
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Image", dataIndex: "image", key: "image" },
  { title: "Initials", dataIndex: "initials", key: "initials" },
  { title: "Avatar", dataIndex: "avatar", key: "avatar" },
];

const avatarData = avatarSizesList.map((size) => ({
  key: `avatar-${size}`,
  size,
  image: <Avatar customSize={size} src={<img src={"./Female 2.png"} alt="avatar" />} dot />,
  initials: <Avatar customSize={size} dot>Kdssdcsdcsdds</Avatar >,
  avatar: <Avatar customSize={size} icon={  <Icon
    icon="mage:user-fill"
  />}  dot/>, 
}));
  return (
    <ConfigProvider
  theme={{
    components: {
      Table: {

      },
      Menu:{
        darkItemBg:currentTheme.background.bg1,
        darkItemSelectedBg:currentTheme.primary.default,
        itemSelectedBg:currentTheme.primary.default,
        itemActiveBg:currentTheme.primary.focus,
        itemSelectedColor:currentTheme.background.bg1,
        


        
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
        <Title level={3} style={{ margin: 0, background: "linear-gradient(90deg, #8548FF, #EA66FF)", WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent", }}>
       KrispMake
      </Title>
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
<div className="p-4">

      <Tabs defaultActiveKey="display" items={ [
  {
    key: 'display',
    label: 'Display',
    children: <ButtonDisplay />,
  },
  {
    key: 'docs',
    label: 'Docs',
    children: <ButtonDoc />,
  },
]} />
    </div>

</>
)}
   <div>
   {selectedComponent === "Checkbox" && (
    <>
    <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <CheckboxDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <CheckboxDoc />,
},
]} />
</div>
  </>
)}
        </div>
        <div >
        {selectedComponent === "Input" && (
          <>
<div className="p-4">

      <Tabs defaultActiveKey="display" items={ [
  {
    key: 'display',
    label: 'Display',
    children: <InputDisplay />,
  },
  {
    key: 'docs',
    label: 'Docs',
    children: <InputDoc />,
  },
]} />
    </div>

</>
          
)}
</div>
{selectedComponent === "Colors" && 
<>
<div className="p-4">

      <Tabs defaultActiveKey="display" items={ [
  {
    key: 'display',
    label: 'Display',
    children: <ColorPalette />,
  },
  {
    key: 'docs',
    label: 'Docs',
    children: <ColorSystemDoc/>,
  },
]} />
    </div>

</>}
{selectedComponent==="Typography"&&
 <>
 <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <Typography />,
},
{
key: 'docs',
label: 'Docs',
children: <TypographyDoc/>,
},
]} />
</div>

</>
}

  {selectedComponent==="Radio Button"&&(
    <>   
{/* <Button  type="success" size={100}>elllll</Button>
<Button type="destructive" >Help me</Button>
<Button type="warning" size="large">help me testing </Button> */}
<div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <RadioDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <RadioDoc/>,
},
]} />
</div>
    </>
  )}
   {selectedComponent === "Switch/Toggle" && (
  <>
  <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <SwitchDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <SwitchDoc/>,
},
]} />
</div>
  </>
)}
   
   {selectedComponent === "Alert" && (
    <>
<div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <AlertDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <AlertDoc />,
},
]} />
</div>

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
    {
      title: 'An Application',
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
  <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <Table columns={avatarColumns} dataSource={avatarData} pagination={false} bordered />,
},
{
key: 'docs',
label: 'Docs',
children: <AvatarDoc/>,
},
]} />
</div>

 
 </>
)}
   {selectedComponent === "Badges" && (
    <>
      <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <BadgeDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <BadgeDoc />,
},
]} />
</div>   
 </>
)}
{selectedComponent==="Tabs"&& (
  <>
     <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children:    <TabDisplay/>,
},
{
key: 'docs',
label: 'Docs',
children: <TabsDoc />,
},
]} />
</div> 
  </>
)
}
{selectedComponent==="Pagination"&& (
  <> 
  <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <PaginatedDemo/>,
},
{
key: 'docs',
label: 'Docs',
children: <PaginationDoc />,
},
]} />
</div>  

 
        </>
)
}
{selectedComponent === "Modal" && (
  <>
     <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <ModalDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <ModalDoc />,
},
]} />
</div>

  </>
)}
{selectedComponent === "Drawer" && (
  <>
     <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <DrawerDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <DrawerDoc />,
},
]} />
</div>
  </>
)}
{selectedComponent=== "Toaster" && (
  <>
     <div className="p-4">
     <SonnerToaster
      position="top-right"
      richColors
      closeButton
      expand={true}
      duration={4000}
    />
<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <ToasterDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <ToasterDoc />,
},
]} />
</div>
  </>
) }
{selectedComponent=== "Dropdown" && (
  <>
 <div className="p-4">

<Tabs defaultActiveKey="display" destroyInactiveTabPane  items={ [
{
key: 'display',
label: 'Display',
children: <DropdownDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <DropdownDoc />,
},
]} />
</div>  
  </>
) }
{selectedComponent=== "Banner" && (
  <>
      <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <BannerDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <BannerDoc />,
},
]} />
</div>  
  </>
) }
{selectedComponent=== "ToolTip" && (
  <>
     <div className="p-4">

<Tabs defaultActiveKey="display"    destroyInactiveTabPane items={ [
{
key: 'display',
label: 'Display',
children: <TooltipDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <TooltipDoc />,
},
]} />
</div> 
  </>
) }
{selectedComponent=== "ProgressBar" && (
  <>
       <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children:  <Space direction="vertical" size={50} style={{ width: 500 }}>
<ProgressWithLabel percent={70} label="Label" />
<ProgressWithLabel percent={50} bottomLabel="Help Text" />
<ProgressWithLabel percent={85} label="Label" bottomLabel="HelpText" />
<ProgressWithLabel percent={40} />
</Space>
},
{
key: 'docs',
label: 'Docs',
children: <ProgressDoc />,
},
]} />
</div>  


  </>
) }
{selectedComponent=== "Spinner" && (
  <>
  <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <SpinnerDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <SpinnerDoc />,
},
]} />
</div>  
  </>
) }
{selectedComponent=== "Table" && (
  <>
    <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <TableDisplayComponent/>,
},
{
key: 'docs',
label: 'Docs',
children: <TableDoc />,
},
]} />
</div>  

  </>
) }
{selectedComponent=== "Slider" && (
  <>
   <div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children:  <Space direction="vertical" size={50} style={{ width: 500 }}>
<Slider defaultValue={15} style={{ width: 100 }} />
<Slider defaultValue={30}   style={{ width: 300 }} />
<Slider defaultValue={40}  style={{ width: 400 }}  />
<Slider defaultValue={50}  style={{ width: 500 }}  />
<Slider defaultValue={80}  style={{ width: 600 }}  />
<Slider defaultValue={100}  style={{ width: 700 }}  />
</Space>
},
{
key: 'docs',
label: 'Docs',
children: <SliderDoc />,
},
]} />
</div>  

  </>
) }
{selectedComponent=== "ButtonGroup" && (

  <>  
<div className="p-4">

<Tabs defaultActiveKey="display" items={ [
{
key: 'display',
label: 'Display',
children: <ButtonGroupDisplay />,
},
{
key: 'docs',
label: 'Docs',
children: <ButtonGroupDoc />,
},
]} />
</div>

  </>  
)}
{selectedComponent=== "DatePicker" && (

<>  
<CustomDatePicker type="range"
  rangePickerProps={{
    defaultOpen:true,
    placeholder: ["Start date", "End date"],
    presets: [
      { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
      { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
      { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
      { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
    ],
    superNextIcon:<LeftIcon/>,
    nextIcon:<LeftIcon/>,
    prevIcon:<LeftIcon/>

  }}

/>
<CustomDatePickerr mode="range"   rangePickerProps={{
    defaultOpen:true}}/>
<CustomDatePickerr
  mode="single"
  datePickerProps={{
    defaultOpen: true,
    presets: [
      { label: 'Today', value: dayjs() },
      { label: 'Yesterday', value: dayjs().subtract(1, 'day') },
      { label: '7 Days Ago', value: dayjs().subtract(7, 'day') },
    ],
  }}
/>

<CustomDatePickerr
  mode="range"
  rangePickerProps={{
    defaultOpen:true,
    placeholder: ["Start date", "End date"],
    presets: [
      { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
      { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
      { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
      { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
    ],
    superNextIcon:<LeftIcon/>,
    nextIcon:<LeftIcon/>,
    prevIcon:<LeftIcon/>

  }}

/>

</>  
)}
        </div>

      </div>
    </div>
    </ConfigProvider>
  );

}

