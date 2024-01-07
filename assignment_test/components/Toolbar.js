import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import UnderDevelopmentAlert from './Alert';
import { toolbarStyles } from './ComponentStyles';


const Toolbar = () => {
    return (
        <View style={toolbarStyles.toolbarSurface}>
            <View style={toolbarStyles.toolbarView1}>
               <TouchableOpacity onPress={()=>UnderDevelopmentAlert()}><Image source={require('../../assets/menus.png')} style={toolbarStyles.toolbarPrimaryImage} /></TouchableOpacity>
                <Text style={toolbarStyles.toolbarText}>Products</Text>
            </View>
            <View style={toolbarStyles.toolBarView2} >
                <TouchableOpacity onPress={()=>UnderDevelopmentAlert()}><Image source={require('../../assets/filter.png')} style={toolbarStyles.toolbarFilterIcon} /></TouchableOpacity>
                <Text style={toolbarStyles.toolbarFilterText}>FILTER</Text>
                <TouchableOpacity onPress={()=>UnderDevelopmentAlert()} style={{alignSelf: 'center'}}><Image source={require('../../assets/search_icon.png')} style={toolbarStyles.toolbarSearchIcon} /></TouchableOpacity>
            </View>
        </View>
    );
}



export default Toolbar;