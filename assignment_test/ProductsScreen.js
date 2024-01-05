import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Toolbar from './components/Toolbar';
import AppColor from './Utils/ColorScheme';
import CartFooter from './components/CartFooter';
import ProductList from './components/ProductList';

const ProductScreen = () => {

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const onCartTotalChanged = (totalAmount, totalItem) =>{
        console.log("OnCartChanged: ", totalAmount, totalItem)
        setTotalAmount(totalAmount)
        setTotalItems(totalItem)
    }

    useEffect(() => {
        console.log(TAG + ": onMount")
    }, []);

    return (
        <>
        <SafeAreaView style={style.safeAreaTop} />
        <SafeAreaView style={style.safeAreaBottom}>
            <View style={style.parent}>
                <Toolbar />
                 <ProductList onCartTotalChanges={onCartTotalChanged}/>
                 {totalItems > 0 && (<CartFooter totalItem={totalItems} totalPrice={totalAmount}/>)}
            </View>
        </SafeAreaView>
        </>
    )

}

const style = StyleSheet.create({
    safeAreaTop: {
        flex: 0,
        backgroundColor: AppColor.secondary
    },
    safeAreaBottom: {
        flex: 1,
        backgroundColor: AppColor.colorAccent
    },
    parent: {
        flex: 1,
        backgroundColor: AppColor.primary
    },
})

const TAG = ProductScreen.name

export default ProductScreen;