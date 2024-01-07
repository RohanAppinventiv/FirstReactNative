import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './ComponentStyles';


const AppButton = ({ buttonText, callback}) => {
    return <TouchableOpacity style={buttonStyles.addButtonStyle} onPress={callback}>
        <Text style={buttonStyles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
}

export const QuantityIncrementButton = ({ count , incrementCallback, decrementCallback}) => {
    return (
        <View style={buttonStyles.quantityButtonBase}>
            <TouchableOpacity style={buttonStyles.touchableBase} onPress = {decrementCallback}>
                <Text style ={buttonStyles.counterButtonStyle}>-</Text>
                </TouchableOpacity>
            <View style={buttonStyles.quantityTextBase}>
                <Text style={buttonStyles.quantityText}>{count}</Text>
                </View>
            <TouchableOpacity style={buttonStyles.touchableBase} onPress = {incrementCallback}>
                <Text style ={buttonStyles.counterButtonStyle}>+</Text>
                </TouchableOpacity>
        </View>
    )
}
export default AppButton;