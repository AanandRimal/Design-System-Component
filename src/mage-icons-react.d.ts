declare module "mage-icons-react" {
    import { FC, SVGProps } from "react";
  
    export interface IconProps extends SVGProps<SVGSVGElement> {
      size?: number | string;
    }
  
    export const Search: FC<IconProps>;
    export default Search;
  }
  