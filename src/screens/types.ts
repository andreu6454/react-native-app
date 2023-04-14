import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type MainStackType = {
    Home: undefined,
    Details: undefined,
    Settings: {
        myAge: number,
        isDoneCourse: boolean,
        name: string
    } | undefined,
    MyModal: undefined,
    Shop: undefined
}

export type StackSettingsProps = NativeStackScreenProps<MainStackType, 'Settings'>