import {View, ViewProps} from "react-native";

interface BoxPropsType extends ViewProps {
    bgr: string,
    width: number,
    height?: number,
    mt?: number,
    mb?: number,
    mr?: number,
    ml?: number
}

export const Box = ({ml, mr, mb, mt, children, bgr, height, width, ...restProps}: BoxPropsType) => {
    if (children) {
        return <View {...restProps} style={[restProps.style, {
            backgroundColor: bgr,
            height: height ? height : width,
            width,
            borderWidth: 1,
            marginTop: mt ? mt : undefined,
            marginBottom: mb ? mb : undefined,
            marginLeft: ml ? ml : undefined,
            marginRight: mr ? mr : undefined
        }]}>{children}</View>
    }
    return <View {...restProps} style={[restProps.style, {
        backgroundColor: bgr,
        height: height ? height : width,
        width,
        borderWidth: 1,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
        marginLeft: ml ? ml : undefined,
        marginRight: mr ? mr : undefined
    }]}/>
}