import {ReactNode} from "react";
import {View, ViewProps} from "react-native";

interface VStackPropsType extends ViewProps {
    children: ReactNode
}

export const VStack = ({children, ...restProps}: VStackPropsType) => {
    return <View {...restProps}>
        {children}
    </View>
}