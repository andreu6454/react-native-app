import {StyleSheet, Text, View} from "react-native";
import {StackSettingsProps} from "../types";

interface SettingsScreenPropsType extends StackSettingsProps {
    age: number
}

export const SettingsScreen = ({age, route}: SettingsScreenPropsType) => {
    const params = route.params

    return <View style={styles.container}>
        <Text>SettingsScreen</Text>
        {params &&
            <>
                <Text>name:{params.name}</Text>
                <Text>isDoneCourse:{params.isDoneCourse.toString()}</Text>
                <Text>myAge:{params.myAge}</Text>
            </>
        }
        <Text>age:{age}</Text>
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