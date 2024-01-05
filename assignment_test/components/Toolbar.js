import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppColor from '../Utils/ColorScheme';
import Spacing, { IconSizes, Sizes } from '../Utils/Spacing';
import UnderDevelopmentAlert from './Alert';


const Toolbar = () => {
    return (
        <View style={styles.toolbarSurface}>
            <View style={styles.toolbarView1}>
               <TouchableOpacity onPress={()=>UnderDevelopmentAlert()}><Image source={require('../../assets/menus.png')} style={styles.toolbarPrimaryImage} /></TouchableOpacity>
                <Text style={styles.toolbarText}>Products</Text>
            </View>
            <View style={styles.toolBarView2} >
                <TouchableOpacity onPress={()=>UnderDevelopmentAlert()}><Image source={require('../../assets/filter.png')} style={styles.toolbarFilterIcon} /></TouchableOpacity>
                <Text style={styles.toolbarFilterText}>FILTER</Text>
                <TouchableOpacity onPress={()=>UnderDevelopmentAlert()} style={{alignSelf: 'center'}}><Image source={require('../../assets/search_icon.png')} style={styles.toolbarSearchIcon} /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    toolbarSurface: {
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: Spacing.innerPadding,
        backgroundColor: AppColor.secondary,
        justifyContent: 'space-between'
    },
    toolbarView1: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    toolbarPrimaryImage: {
        width: IconSizes.medium,
        height: IconSizes.medium,
        tintColor: AppColor.primary,
        marginEnd: 10
    },
    toolbarSearchIcon: {
        width: IconSizes.xsmall,
        height: IconSizes.xsmall,
        tintColor: AppColor.primary,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    toolbarFilterIcon: {
        width: IconSizes.small,
        height: IconSizes.small,
        tintColor: AppColor.primary,
        marginEnd: 5,
    },
    toolbarText: {
        fontSize: Sizes.large,
        fontWeight: '500',
        color: AppColor.primary,
    },
    toolbarFilterText: {
        alignSelf: 'center',
        fontSize: Sizes.medium,
        fontWeight: '400',
        color: AppColor.primary,
        marginEnd: 10
    },
    toolBarView2: {
        flexDirection: 'row',
    }
})
export default Toolbar;