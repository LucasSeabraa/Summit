import { TextInput, View , TextInputProps} from "react-native"
import { ReactNode } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import clsx from 'clsx'

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = {
    children: ReactNode
    variant?: Variants
}

function Input({ children, variant = "primary" }: InputProps){
    return(
    <View 
        className={clsx(
            "w-full h-14 border rounded-lg border-gray-600 flex-row items-center gap-2",
        {
            "h-14 px-4 rounded-lg border border-gray-300": variant !== "primary",
        },
        {"bg-gray-300": variant === "secondary",},
        {"bg-gray-300": variant === "tertiary",}
    )}
>    
    { children }
    </View>
    )
}

function Field({...rest }: TextInputProps){
    return(
        <TextInput 
        className="flex-1 text-gray-300 text-lg font-regular"
        placeholderTextColor={colors.gray[300]}
        {...rest}
        />
    ) 
}

Input.Field = Field

export { Input } 