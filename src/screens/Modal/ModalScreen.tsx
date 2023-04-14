import {Button, StyleSheet, Text, View} from "react-native";
import {useAppNavigation} from "../../hooks/useAppNavigation";

interface ModalScreenPropsType {
}

export const ModalScreen = ({}: ModalScreenPropsType) => {
    const navigation = useAppNavigation()

    return <View style={styles.container}>
        <Text>ModalScreen</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        flex: 1
    }
})