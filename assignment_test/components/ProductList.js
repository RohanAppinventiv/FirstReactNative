import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import Spacing, { Sizes } from "../Utils/Spacing";
import AppColor from "../Utils/ColorScheme";
import AppButton, { QuantityIncrementButton } from "./Buttons";

const ProductList = ({ onCartTotalChanges }) => {

    const [selectedProducts, setSelectedProducts] = useState(new Map());
    const [productList, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log("onMount: ")
        callFetchApi();
    }, []);

    useEffect( ()=> {
        const result = productList.reduce((accumulator, product) => {
            if (product.qty > 0) {
              accumulator.totalCount++; 
              accumulator.totalSum += product.qty * product.price;
            }
            return accumulator;
          }, { totalCount: 0, totalSum: 0 })

          console.log("Price: ",result.totalSum)
          console.log("totalItem: ",result.totalCount)

          onCartTotalChanges(result.totalSum, result.totalCount);

    }, [productList])

    const updateCartTotal = (id, price, qty) => {
        const newMap = {...selectedProducts}
        if(newMap.has(id)){

        }
        // setSelectedProducts(map => )
    }

    const clickIncrement = (index) => {
        const newList = [...productList];
        const newData = { ...newList[index], qty: newList[index].qty + 1 }
        newList[index] = newData;
        console.log("Increment Clicked", index)
        setProducts(newList)

    }
    const clickDecrement = (index) => {
        const newList = [...productList];
        newList[index] = { ...newList[index], qty: newList[index].qty - 1 };
        console.log("Decrement Clicked", index)
        setProducts(newList)
    }

    function callFetchApi(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(response => {
            const modifiedResponse = response.map(item => ({ ...item, qty: 0 }));
            console.log("DATA: ", modifiedResponse[0])
            setProducts(modifiedResponse);
        })
    }
    const renderActivityIndicator = () => {
       return <View style={{flex: 1, marginBottom: 60, justifyContent: "center", alignSelf: 'center'}}>
          <ActivityIndicator size="large" color={AppColor.surfaceColor} />
        </View>
    }

    const ItemDetailView = ({ title, value, newStyle }) => {
        return <View style={styles.bottomDetailsViewColumn}>
            <Text style={styles.detailsTextTitle}>{title}</Text>
            <Text style={[styles.detailsTextValue, newStyle]}>{value}</Text>
        </View>
    }

    const listFooter = () => {
        return (<View style={styles.listFooterBase}>
            <Text style={styles.listFooterText}>------End of List------</Text>
        </View>)
    }

    const itemSeparator = () => <View style={styles.listItemSeperatorStyle}/>

    const rowItem = ({ item, index }) => {
        return (
            <View style={styles.listItemSurface}>
                <View>
                    <Image source={{ uri: item.image }} style={styles.listItemImage}></Image>
                </View>
                <View style={styles.listItemBaseView}>
                    <View style={styles.listItemBaseColums1}>
                        <Text numberOfLines = {2} ellipsizeMode="tail"  style={styles.productItemName}>{item.title}</Text>
                         {item.qty == 0? (<AppButton buttonText={"Add"} callback={() => clickIncrement(index)} />): 
                         ( <QuantityIncrementButton count={item.qty} incrementCallback={() => clickIncrement(index)} decrementCallback={() => clickDecrement(index)}/>)}
                    </View>
                    <View style={styles.listItemBaseColums2}>
                        <ItemDetailView title={"UOM"} value={"01"} />
                        <ItemDetailView title={"Pack Size"} value={"01"} />
                        <ItemDetailView title={"Per Unit"} value={"$"+item.price} />
                        <ItemDetailView title={"Total"} value={"$"+((item.qty * item.price).toFixed(2))} newStyle={styles.boldDetailsTextValue} />

                    </View>
                </View>
            </View>
        )
    }

    return <FlatList
        contentContainerStyle={styles.listItemContentContainer}
        data={productList}
        renderItem={rowItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={itemSeparator}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={productList.length > 0 ? listFooter : null}
    />
};

const styles = StyleSheet.create({

    listItemContentContainer: {
        showsVerticalScrollIndicator: false
    },
    listItemSurface: {
        paddingHorizontal: Spacing.innerPadding,
        paddingVertical: Spacing.verticalItemPadding,
        width: '100%',
        height: 'auto',
        flexDirection: 'row'
    },
    listItemImage: {
        height: 60,
        width: 60,
        borderColor: AppColor.divColor,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        resizeMode: 'contain'
    },
    listItemBaseView: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: Spacing.innerPadding,
    },
    listItemBaseColums1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItemBaseColums2: {
        marginTop: 5,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    productItemName: {
        fontSize: Sizes.large,
        fontWeight: '500',
        width: '70%'
        },
    listItemSeperatorStyle: {
        width: '80%',
        backgroundColor: AppColor.divColor,
        height: 1,
        alignSelf: 'center'

    },
    addButtonStyle: {
        backgroundColor: AppColor.secondary,
        paddingHorizontal: Spacing.buttonHorizontalPadding,
        paddingVertical: Spacing.buttonVerticalPadding,
        borderRadius: Spacing.buttonRadius
    },
    buttonTextStyle: {
        fontSize: Sizes.small,
        color: AppColor.primary,
        fontWeight: '300'
    },
    bottomDetailsViewColumn: {
        flexDirection: 'column',
        marginEnd: 15
    },
    detailsTextTitle: {
        fontSize: Sizes.small,
        fontWeight: '400',
        color: 'lightgrey',
        textTransform: 'uppercase'
    },
    detailsTextValue: {
        marginTop: 3,
        fontSize: Sizes.medium,
        fontWeight: '400',
        color: AppColor.onPrimary
    },
    boldDetailsTextValue: {
        fontWeight: '800'
    },
    listFooterBase: {
        height: 70, 
        width: '100%', 
        justifyContent: 'center'
    },
    listFooterText: {
        fontSize: 14,
        fontStyle: 'italic',
        alignSelf: 'center',
        color: AppColor.strokeColor,
    }
});

// export default React.memo(RecipeList,()=>{
//  return false;
// });
export default ProductList;