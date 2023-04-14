import {Button, StyleSheet, Text, View} from "react-native";
import {useAppNavigation} from "../../hooks/useAppNavigation";

type DetailsScreenPropsType = {

}
export const DetailsScreen = ({}:DetailsScreenPropsType) => {
    const navigation = useAppNavigation()

    return <View style={styles.container}>
        <Text>DetailsScreen</Text>
        <Button title={"Jump to SettingsScreen"} onPress={()=>{
            navigation.navigate('Settings',{name: 'Andrey', myAge: 21, isDoneCourse: false})
        }}/>
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