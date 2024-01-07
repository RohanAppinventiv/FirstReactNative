import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import UnderDevelopmentAlert from './Alert';
import { cartFooterStyle } from './ComponentStyles';


const CartFooter = ({totalPrice, totalItem}) => {


    const getTrimmedPrice = (amount) =>"$"+amount.toFixed(2);
    const getItemInFormat = (count) => 'VIEW CART ('+String(count).padStart(2, 0)+")"
    return (
        <View style={cartFooterStyle.footerSurface} >
            <View style={cartFooterStyle.footerView1}>
                <Text numberOfLines = {1} style ={cartFooterStyle.footerPriceText}>{getTrimmedPrice(totalPrice)}</Text>
            </View>
            <View style={cartFooterStyle.footerView2}>
                <Text style ={cartFooterStyle.footerCartText}>{getItemInFormat(totalItem)}</Text>
                <TouchableOpacity onPress={()=>UnderDevelopmentAlert()}><Image source={require('../../assets/cart_right_arrow.png')} style={cartFooterStyle.footerArrowIcon} /></TouchableOpacity>
            </View>
        </View>
    );
}


export default CartFooter;