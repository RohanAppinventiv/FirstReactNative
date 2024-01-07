import { useColorScheme } from "react-native";
import DefaultAppTheme from "./AppTheme";


export default function useTheme() {
    const theme =  useColorScheme();
    console.log("Current Theme:",theme)
    return theme === 'dark' ? DefaultAppTheme : DefaultAppTheme
}