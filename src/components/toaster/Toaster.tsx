import {ConfigProvider,Alert,AlertProps} from "antd";
import styled from "styled-components";
import { useTheme } from "../../contexthook/ThemeProvider";
import {Themes} from "../foundation/Theme";
interface ToasterProps extends AlertProps {
CustomType?:"primary"|"success"|"warning"|"destructive"|"info" //? cheked now it is optional then only 
}
const Toaster:React.FC<ToasterProps> =({CustomType="info", ...alertprops }) =>{
const {themeMode}=useTheme();
const themeTypeKey=Themes[themeMode][CustomType] || Themes[themeMode].primary;
const StyledAlert = styled(Alert)`
.ant-alert-icon {
  position: relative;
  top:13px; 
}
.ant-alert-close-icon {
  position: relative;
  top: 13px;
  margin-left:10px;
}
width:400px;
.ant-alert-action {
  margin-top: 6px;
}


`;
return(
<ConfigProvider 
 theme={{
  token:{
  },
  components:{
  Alert:{
            colorInfo: themeTypeKey.textcolor,
            colorInfoHover: themeTypeKey.hover,
            colorInfoActive: themeTypeKey.default,
            colorInfoBg: themeTypeKey.default,
            colorInfoBorder:  "none",
            colorText:themeTypeKey.textcolor,
            colorTextHeading:themeTypeKey.textcolor,
            withDescriptionIconSize:20,
          colorIcon:themeTypeKey.textcolor,
          fontSizeIcon:16,
          withDescriptionPadding:"10px 12px",
          marginSM:8,
          marginXS:0,
  },
  },
 }}
 >
 <StyledAlert
    
    type={alertprops.type || "info"}
    {...alertprops}
    message={<span className="text-large-semibold font-semibold">{alertprops.message}</span>}
    description={<span className="text-base-medium font-regular">{alertprops.description}</span>}
  />
</ConfigProvider>
);
};
export  default Toaster;
