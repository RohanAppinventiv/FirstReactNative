import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import AppButton, { QuantityIncrementButton } from "./Buttons";
import { productListStyle } from "./ComponentStyles";

const ProductList = ({ onCartTotalChanges }) => {

    const [productList, setProducts] = useState([]);


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
          <ActivityIndicator size="large" color={DefaultAppTheme.colors.surfaceColor} />
        </View>
    }

    const ItemDetailView = ({ title, value, newStyle }) => {
        return <View style={productListStyle.bottomDetailsViewColumn}>
            <Text style={productListStyle.detailsTextTitle}>{title}</Text>
            <Text style={[productListStyle.detailsTextValue, newStyle]}>{value}</Text>
        </View>
    }

    const listFooter = () => {
        return (<View style={productListStyle.listFooterBase}>
            <Text style={productListStyle.listFooterText}>------End of List------</Text>
        </View>)
    }

    const itemSeparator = () => <View style={productListStyle.listItemSeperatorStyle}/>

    const rowItem = ({ item, index }) => {
        return (
            <View style={productListStyle.listItemSurface}>
                <View>
                    <Image source={{ uri: item.image }} style={productListStyle.listItemImage}></Image>
                </View>
                <View style={productListStyle.listItemBaseView}>
                    <View style={productListStyle.listItemBaseColums1}>
                        <Text numberOfLines = {2} ellipsizeMode="tail"  style={productListStyle.productItemName}>{item.title}</Text>
                         {item.qty == 0? (<AppButton buttonText={"Add"} callback={() => clickIncrement(index)} />): 
                         ( <QuantityIncrementButton count={item.qty} incrementCallback={() => clickIncrement(index)} decrementCallback={() => clickDecrement(index)}/>)}
                    </View>
                    <View style={productListStyle.listItemBaseColums2}>
                        <ItemDetailView title={"UOM"} value={"01"} />
                        <ItemDetailView title={"Pack Size"} value={"01"} />
                        <ItemDetailView title={"Per Unit"} value={"$"+item.price} />
                        <ItemDetailView title={"Total"} value={"$"+((item.qty * item.price).toFixed(2))} newStyle={productListStyle.boldDetailsTextValue} />

                    </View>
                </View>
            </View>
        )
    }

    return <FlatList
        contentContainerStyle={productListStyle.listItemContentContainer}
        data={productList}
        renderItem={rowItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={itemSeparator}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={productList.length > 0 ? listFooter : null}
    />
};

export default ProductList;