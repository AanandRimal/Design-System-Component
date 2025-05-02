import {ConfigProvider,Alert,AlertProps} from "antd";
import styled from "styled-components";
import { useTheme } from "../../context-hook/ThemeProvider";
import {Themes} from "../foundation/Theme";
interface ToasterProps extends AlertProps {
CustomType?:"primary"|"success"|"warning"|"destructive"|"info"|"neutral" //? cheked now it is optional then only 
}
const Toaster:React.FC<ToasterProps> =({CustomType="info", ...alertprops }) =>{
const {themeMode}=useTheme();
const currentTheme=Themes[themeMode];
const themeTypeKey=(currentTheme as any)[ CustomType]  || Themes[themeMode].primary;
const StyledAlert = styled(Alert)`
.ant-alert-icon {
align-self: center;
}
.ant-alert-close-icon {
align-self: center;
  margin-left:10px;
}
width:400px;
.ant-alert-action {
align-self: center;
}


`;
return(
<ConfigProvider 
 theme={{
  token:{
  },
  components:{
  Alert:{
            colorInfo:  CustomType === "neutral" ? currentTheme.text.t2Component :themeTypeKey.textcolor,
            colorInfoHover: CustomType === "neutral" ? currentTheme.fill.f1:themeTypeKey.hover,
            colorInfoActive:  CustomType === "neutral" ? currentTheme.text.t3Subtitle :themeTypeKey.default,
            colorInfoBg:  CustomType === "neutral" ? currentTheme.background.bg2 : themeTypeKey.default,
            colorInfoBorder: CustomType === "neutral" ? currentTheme.stroke.strong: "none",
            colorText:CustomType === "neutral" ? currentTheme.text.t3Subtitle :themeTypeKey.textcolor,
            colorTextHeading:  CustomType === "neutral" ? currentTheme.text.t2Component :themeTypeKey.textcolor,
            withDescriptionIconSize:20,
          colorIcon: themeTypeKey.textcolor,
          fontSizeIcon:16,
          withDescriptionPadding:"10px 12px",
          marginSM:8,
          marginXS:0,
  },
  },
 }}
 >
 <StyledAlert
  style={{ boxShadow: '0px 9px 8px 0px rgba(0, 0, 0, 0.10)' }}
    type={alertprops.type || "info"}
    {...alertprops}
    message={<span className="text-large-semibold font-semibold">{alertprops.message}</span>}
    description={<span className="text-base-medium font-regular">{alertprops.description}</span>}
  />
</ConfigProvider>
);
};
export  default Toaster;
