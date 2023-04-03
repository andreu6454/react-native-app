import React, {ReactNode} from "react";
import {ScrollView, View, ViewProps} from "react-native";
import {PADDING, WIDTH} from "../Constants/Constants";

interface HStackPropsType extends ViewProps {
    children: ReactNode
}

export const HStack = ({children, ...restProps}: HStackPropsType) => {
    let sumWidth = 0
    React.Children.forEach(children, (child, index) => {
        if (!React.isValidElement(child)) return
        const {width} = child.props
        sumWidth += width
    })
    if ((WIDTH - PADDING * 2) < sumWidth) {
        return <ScrollView
            {...restProps}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[restProps.style, {marginHorizontal: -PADDING}]}
        >
            {children}
        </ScrollView>
    }
    return <View {...restProps} style={[restProps.style, {flexDirection: 'row', justifyContent: 'space-between'}]}>
        {children}
    </View>
}