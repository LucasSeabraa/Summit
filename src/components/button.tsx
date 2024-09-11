import {
    Text,
    TextProps,
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
    title?: string
}

export function Button({
    title,
}: ButtonProps) {
    return (
    <TouchableOpacity>
    <View className="h-12 items-center justify-center flex-row w-full bg-orange-500 rounded-lg">
        
            <Text className="text-black font-bold ">{title}</Text>
        
    </View>
    </TouchableOpacity>
    )
}