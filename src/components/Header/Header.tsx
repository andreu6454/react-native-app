import {Platform, Pressable, StyleSheet, View} from "react-native";
import {PADDING} from "../../constants/Constants";
import {BasketIcon} from "../../../SVG_icons/BasketIcon";
import MenuIcon from "../../../SVG_icons/MenuIcon";

export const Header = () => {
    return <View style={headerStyles.headerContent}>
        <Pressable>
            <MenuIcon colorFill={'#fff'}/>
        </Pressable>
        <Pressable>
            <BasketIcon colorFill={'#fff'}/>
        </Pressable>
    </View>
}

export const headerStyles = StyleSheet.create({
    header: {
        borderWidth: 1,
        marginHorizontal: -PADDING,
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#21201E',
        marginBottom: 19
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12
    }
})