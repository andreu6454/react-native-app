import * as React from "react";
import Svg, {Path, SvgProps} from "react-native-svg";

const MenuIcon = (props: SvgProps & { colorFill?: string }) => (
    <Svg
        width={18}
        height={12}
        viewBox="0 0 18 12"
        fill="none"
        {...props}
    >
        <Path
            d="M1 12C0.447716 12 0 11.5523 0 11C0 10.4477 0.447715 10 1 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H1ZM1 7C0.447716 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H1ZM1 2C0.447716 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1Z"
            fill={props.colorFill ? props.colorFill : "#000"}
        />
    </Svg>
);
export default MenuIcon;