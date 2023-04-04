import {StyleSheet, Text, View} from "react-native";
import {PADDING} from "../../Constants/Constants";

export const Footer = () => {
    return (
        <View style={footerStyles.footerContent}>
            <Text style={footerStyles.footerText}>
                @ 2023 It-Incubator.io. All rights reserved
            </Text>
        </View>
    )
}

export const footerStyles = StyleSheet.create({
    footer: {
        marginHorizontal: -PADDING,
        backgroundColor: '#21201E'
    },
    footerContent: {
        paddingTop: 15,
        paddingBottom: 25,
        alignItems: 'center'
    },
    footerText: {
        color: '#fff'
    }
})