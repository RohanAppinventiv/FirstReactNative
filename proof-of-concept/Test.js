import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
const COLORS = ['red', 'Yellow', 'blue']
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    detail: {
      color: 'Red',
    },
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    detail: {
      color: 'yellow',
    },
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    detail: {
      color: 'blue',
    },
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {item.title}: {item.detail.color}
    </Text>
  </View>
);

const App = () => {
  const [products, setProducts] = useState(DATA);
  const [colors, setColors] = useState(COLORS);

  useEffect(()=>{
    setProducts(DATA)
  },[])

  const itemRow = ({ item, index }) => {
    console.log("Re-rendered Index:", index)
    return <Item item={item} />;
  };

  const clickHandler = () => {

    products[2].detail= Object.assign({color:'green'});
    console.log('Clicked!', products);
    const newColor = [...colors]
   // colors[2] = "green"
    setColors(newColor);
    setProducts(products);
    
    // const newList = [...products]
    // newList[2].detail= Object.assign({color:'green'});
    // console.log('Clicked!', newList);
    // setProducts(newList);

  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={itemRow}
        extraData={colors}
        keyExtractor={(item)=> item.id}
      />
      <Button title="Click" onPress={() => clickHandler()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
