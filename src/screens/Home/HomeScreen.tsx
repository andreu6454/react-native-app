import {Button, StyleSheet, Text, View} from "react-native";
import {useAppNavigation} from "../../hooks/useAppNavigation";

type HomeScreenPropsType = {

}
export const HomeScreen = ({}:HomeScreenPropsType) => {
    const navigation = useAppNavigation()

    return <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button title={"Jump to DetailsScreen"} onPress={()=>{
            navigation.navigate('Details')}
        }/>
        <Button title={"Jump to Settings"} onPress={()=>{
            navigation.navigate('Settings')}
        }/>
        <Button
            onPress={() => navigation.navigate('MyModal')}
            title={"Open shop"}
        />
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