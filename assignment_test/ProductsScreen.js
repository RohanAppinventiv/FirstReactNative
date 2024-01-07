import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Toolbar from './components/Toolbar';
import CartFooter from './components/CartFooter';
import ProductList from './components/ProductList';
import DefaultAppTheme from './Utils/themes/AppTheme';

const ProductScreen = () => {

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const onCartTotalChanged = (totalAmount, totalItem) => {
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
                    <ProductList onCartTotalChanges={onCartTotalChanged} />
                    {totalItems > 0 && (<CartFooter totalItem={totalItems} totalPrice={totalAmount} />)}
                </View>
            </SafeAreaView>
        </>
    )

}

const style = StyleSheet.create({
    safeAreaTop: {
        flex: 0,
        backgroundColor: DefaultAppTheme.colors.secondary
    },
    safeAreaBottom: {
        flex: 1,
        backgroundColor: DefaultAppTheme.colors.colorAccent
    },
    parent: {
        flex: 1,
        backgroundColor: DefaultAppTheme.colors.primaryColor
    },
})

const TAG = ProductScreen.name

export default ProductScreen;