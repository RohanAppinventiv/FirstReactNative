import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {  useState } from "react";

const SegmentedTabs = ({durations}) => {
    const [selectedTabIdx, setSelectedTab] = useState(0)
    const clickHandler = (index) => {
      console.log("Index:", index)
    }

    const selectedView = () =>  {
        return <View>
            
        </View>
    }
    return (<View style = {styles.parent}>
        {durations.map((item,index) => (
            index == durations.length - 1?
            <TouchableOpacity key={index} onPress={()=>clickHandler(index)}><Text style ={[styles.tabsNormal]}>{item}</Text></TouchableOpacity> :
            <TouchableOpacity key={index} onPress={()=>clickHandler(index)} style={styles.viewSeparator} ><Text style ={[styles.tabsNormal]}>{item}</Text></TouchableOpacity>
        ))}
    </View>);
}

const styles = StyleSheet.create({
    parent: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingHorizontal: 15,
        alignSelf: 'center',
        borderRadius: 20
    },
    tabsNormal: {
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        fontWeight: '700',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    viewSeparator: {
        borderRightColor: 'white',
        borderRightWidth: 1
    }

})

export default SegmentedTabs;