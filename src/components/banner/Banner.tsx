import {Alert ,AlertProps,ConfigProvider} from "antd"
import styled from "styled-components";
import { Themes } from "../foundation/Theme";
import { useTheme } from "../../contexthook/ThemeProvider";
interface BannerProps extends AlertProps {
    Customtype?:"primary" | "info" | "success" | "warning" | "destructive" ;
}

const StyledBannerWrapper = styled.div`
  width: 1200px;
  &.centered-content {
    .ant-alert {
      display: flex;
      align-items: center;
      text-align: center; 
      gap:8px
    }

    .ant-alert-icon,
    .ant-alert-close-icon {
      position: static;
      top: auto;
      align-self: center;
      margin-left:400px

    }

    .ant-alert-action {
      margin-top: 0;
      align-self: center;
    }
  }

  .ant-alert-icon {
    position: relative;
    top: 13px;
  }

  .ant-alert-close-icon {
    position: relative;
    top: 13px;
    margin-left: 10px;
  }

  .ant-alert-action {
    margin-top: 6px;
  }
`;


const Banner :React.FC <BannerProps> =({Customtype="info",...bannerprops}) =>{
    const {themeMode}=useTheme();
    const themeTypeKey=Themes[themeMode][Customtype] || Themes[themeMode].primary;
    const isSingleContent = !!bannerprops.message !== !!bannerprops.description;

  

    
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

<StyledBannerWrapper className={isSingleContent ? "centered-content" : ""}>
      <Alert
        type={bannerprops.type || "info"}
        {...bannerprops}
        message={
          bannerprops.message && (
            <span className="text-large-semibold font-semibold">{bannerprops.message}</span>
          )
        }
        description={
          bannerprops.description && (
            <span className="text-base-medium font-regular">{bannerprops.description}</span>
          )
        }
        banner
      />
    </StyledBannerWrapper>
  </ConfigProvider>
);
}
export default Banner;