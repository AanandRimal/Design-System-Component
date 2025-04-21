import {Alert ,AlertProps,ConfigProvider} from "antd"
import styled from "styled-components";
import { Themes } from "../foundation/Theme";
import { useTheme } from "../../context-hook/ThemeProvider";
interface BannerProps extends AlertProps {
    Customtype?:"primary" | "info" | "success" | "warning" | "destructive" ;
}

const StyledBannerWrapper = styled.div`
  width: 1200px;
  &.centered-content {
    .ant-alert {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center; 
      gap:8px
     
    }
.ant-alert-content {
    flex: initial;
}

  .ant-alert-close-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  
  }

    .ant-alert-action {
      align-self: center;
      margin-left: 4px;
    }
  }

  .ant-alert-icon {
   display: flex;
    align-items: center;  
    justify-content: center;
  }

  .ant-alert-close-icon {
   align-self: center;
    margin-left: 12px;
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
      withDescriptionPadding:"8px 16px",
      marginSM:isSingleContent? 0: 12,
      marginXS:0,
    },
},
}}
>

<StyledBannerWrapper className={isSingleContent ? "centered-content" : ""}>
      <Alert
        type={bannerprops.type || "info"}
        {...bannerprops}
        icon={ isSingleContent? bannerprops.icon:<div style={{borderRadius:"99px",height:"40px", width:"40px",backgroundColor:themeTypeKey.hover}}>{bannerprops.icon}</div>}
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