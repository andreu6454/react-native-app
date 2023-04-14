import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from "./src/constants/Constants";
import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./src/screens/Home/HomeScreen";
import {MainStackType} from "./src/screens/types";
import {DetailsScreen} from "./src/screens/Details/DetailsScreen";
import {SettingsScreen} from "./src/screens/Settings/SettingsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {ModalScreen} from "./src/screens/Modal/ModalScreen";
import {Shop} from "./src/screens/Shop/Shop";


const Drawer = createDrawerNavigator<MainStackType>();

const RootStack = createStackNavigator<MainStackType>();


// export default function App() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator>
//                 <Drawer.Screen name="Home" component={HomeScreen}/>
//                 <Drawer.Screen name="Settings">{(props) => <SettingsScreen {...props} age={21}/>
//                 }</Drawer.Screen>
//                 <Drawer.Screen name="Details" component={DetailsScreen}></Drawer.Screen>
//
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Home" component={HomeScreen}/>
                    <RootStack.Screen name="Details" component={DetailsScreen}/>
                    <RootStack.Screen name="Settings">{(props) => {
                        return <SettingsScreen {...props} age={21}/>
                    }}</RootStack.Screen>
                </RootStack.Group>
                <RootStack.Group screenOptions={{presentation: 'modal'}}>
                    <RootStack.Screen name="MyModal" component={Shop}/>
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        width: WIDTH,
        height: HEIGHT
    },
});
