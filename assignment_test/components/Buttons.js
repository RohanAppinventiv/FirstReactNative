import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppColor from '../Utils/ColorScheme';
import Spacing, { Sizes } from '../Utils/Spacing';

const AppButton = ({ buttonText, callback}) => {
    return <TouchableOpacity style={styles.addButtonStyle} onPress={callback}>
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
}

export const QuantityIncrementButton = ({ count , incrementCallback, decrementCallback}) => {
    return (
        <View style={styles.quantityButtonBase}>
            <TouchableOpacity onPress = {decrementCallback} style={styles.touchableBase}><Text style ={styles.counterButtonStyle}>-</Text></TouchableOpacity>
            <View style={styles.quantityTextBase}><Text style={styles.quantityText}>{count}</Text></View>
            <TouchableOpacity onPress = {incrementCallback} style={styles.touchableBase}><Text style ={styles.counterButtonStyle}>+</Text></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    addButtonStyle: {
        backgroundColor: AppColor.secondary,
        paddingHorizontal: Spacing.buttonHorizontalPadding,
        paddingVertical: Spacing.buttonVerticalPadding,
        borderRadius: Spacing.buttonRadius,
        alignSelf: 'flex-start',

    },
    buttonTextStyle: {
        fontSize: Sizes.small,
        color: AppColor.primary,
        fontWeight: '300'
        },
    quantityButtonBase: {
        backgroundColor: AppColor.secondary,
        borderRadius: Spacing.buttonRadius,
        height: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    touchableBase: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    counterButtonStyle: {
        fontSize: Sizes.small,
        color: AppColor.primary,
        width: 20,
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center'

    },
    quantityTextBase: {
        backgroundColor: '#F0F0F0', 
        width: 30,
        height: '100%',
        justifyContent: 'center'
    },
    quantityText: {
        fontSize: Sizes.small,
        alignSelf: 'center',
        fontWeight: '800'
    
    }
});

export default AppButton;