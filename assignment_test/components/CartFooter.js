import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import AppColor from '../Utils/ColorScheme';
import Spacing, { IconSizes, Sizes } from '../Utils/Spacing';
import UnderDevelopmentAlert from './Alert';


const CartFooter = ({totalPrice, totalItem}) => {


    const getTrimmedPrice = (amount) =>"$"+amount.toFixed(2);
    const getItemInFormat = (count) => 'VIEW CART ('+String(count).padStart(2, 0)+")"
    return (
        <View style={styles.footerSurface} >
            <View style={styles.footerView1}>
                <Text numberOfLines = {1} style ={styles.footerPriceText}>{getTrimmedPrice(totalPrice)}</Text>
            </View>
            <View style={styles.footerView2}>
                <Text style ={styles.footerCartText}>{getItemInFormat(totalItem)}</Text>
                <TouchableOpacity onPress={()=>UnderDevelopmentAlert()}><Image source={require('../../assets/cart_right_arrow.png')} style={styles.footerArrowIcon} /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerSurface: {
        height: 60,
        width:"100%",
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: AppColor.colorAccent,
        position: 'absolute',
        bottom: 0
    },
    footerView1: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        padding: Spacing.boxPadding,
        backgroundColor: AppColor.surfaceColor,
        width: '40%'
    },
    footerView2: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        padding: Spacing.boxPadding,
        flex: 1
    },
    footerPriceText: {
        fontSize: Sizes.xlarge,
        fontWeight: '600',
        color: AppColor.onSurfaceColor
    },
    footerCartText: {
        fontSize: Sizes.xlarge,
        fontWeight: '400',
        color: AppColor.onSurfaceColor,
        alignSelf: 'center',

    },
    footerArrowIcon: {
        alignSelf: 'center',
        marginStart: 10,
        marginTop: 5,
        width: IconSizes.small,
        height: IconSizes.small,
        tintColor: AppColor.onSurfaceColor,
    }
    
})
export default CartFooter;