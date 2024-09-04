import "@/styles/global.css"

import { View, StatusBar } from "react-native"
 
import { Slot } from "expo-router"

import { Loading } from "@/components/loading"

import{
    useFonts,
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
} from "@expo-google-fonts/inter"

export default function Layout(){

    const [fotnsLoaded] = useFonts({
        Inter_500Medium,
        Inter_400Regular,
        Inter_600SemiBold,
    })

    if (!fotnsLoaded) {
        return <Loading />
    }

    return (
    <View className="flex-1 bg-summer-100">

        <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
        />

        <Slot />
    
    </View>
)
}