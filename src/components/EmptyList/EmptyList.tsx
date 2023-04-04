import {StyleSheet, Text, View} from "react-native";

export const EmptyList = () => {
    return (
        <View style={emptyListStyles.emptyListContent}>
            <Text style={emptyListStyles.emptyTitle}>Oops! This place look empty</Text>
            <Text style={emptyListStyles.emptySubTitle}>Refresh page or clear filter</Text>
        </View>
    )
}

export const emptyListStyles = StyleSheet.create({
    emptyListContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyTitle: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24
    },
    emptySubTitle: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24
    }
})