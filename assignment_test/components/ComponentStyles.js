
import { StyleSheet } from "react-native";
import DefaultAppTheme from "../Utils/themes/AppTheme";

export const buttonStyles = StyleSheet.create({
    addButtonStyle: {
        backgroundColor: DefaultAppTheme.colors.secondary,
        paddingHorizontal: DefaultAppTheme.spacings.large,
        paddingVertical: DefaultAppTheme.spacings.xsmall,
        borderRadius: 30,
        alignSelf: 'flex-start',

    },
    buttonTextStyle: {
        fontSize: DefaultAppTheme.fontSize.h5,
        color: DefaultAppTheme.colors.primaryColor,
        fontWeight: DefaultAppTheme.fontWeight.Light
        },
    quantityButtonBase: {
        backgroundColor: DefaultAppTheme.colors.secondary,
        borderRadius: 30,
        height: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    touchableBase: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    counterButtonStyle: {
        fontSize: DefaultAppTheme.fontSize.h3,
        color: DefaultAppTheme.colors.primaryColor,
        width: 20,
        fontWeight: DefaultAppTheme.fontWeight.SemiBold,
        alignSelf: 'center',
        textAlign: 'center'

    },
    quantityTextBase: {
        backgroundColor: DefaultAppTheme.colors.lightBaseColor, 
        width: 30,
        height: '100%',
        justifyContent: 'center'
    },
    quantityText: {
        fontSize: DefaultAppTheme.fontSize.h5,
        alignSelf: 'center',
        fontWeight: DefaultAppTheme.fontWeight.Bold
    
    }
});

export const cartFooterStyle = StyleSheet.create({
    footerSurface: {
        height: 60,
        width:"100%",
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: DefaultAppTheme.colors.colorAccent,
        position: 'absolute',
        bottom: 0
    },
    footerView1: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        padding: DefaultAppTheme.spacings.large,
        backgroundColor: DefaultAppTheme.colors.surfaceColor,
        width: '40%'
    },
    footerView2: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        padding: DefaultAppTheme.spacings.large,
        flex: 1
    },
    footerPriceText: {
        fontSize: DefaultAppTheme.fontSize.h2,
        fontWeight: DefaultAppTheme.fontWeight.SemiBold,
        color: DefaultAppTheme.colors.onSurfaceColor
    },
    footerCartText: {
        fontSize: DefaultAppTheme.fontSize.h2,
        fontWeight: DefaultAppTheme.fontWeight.Regular,
        color: DefaultAppTheme.colors.onSurfaceColor,
        alignSelf: 'center',

    },
    footerArrowIcon: {
        alignSelf: 'center',
        marginStart: DefaultAppTheme.spacings.small,
        marginTop: DefaultAppTheme.spacings.xsmall,
        width: 15,
        height: 15,
        tintColor: DefaultAppTheme.colors.onSurfaceColor,
    }
    
});

export const toolbarStyles = StyleSheet.create({
    toolbarSurface: {
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: DefaultAppTheme.spacings.medium,
        backgroundColor: DefaultAppTheme.colors.secondary,
        justifyContent: 'space-between'
    },
    toolbarView1: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    toolbarPrimaryImage: {
        width: 20,
        height: 20,
        tintColor: DefaultAppTheme.colors.primaryColor,
        marginEnd: 10
    },
    toolbarSearchIcon: {
        width: 10,
        height: 10,
        tintColor: DefaultAppTheme.colors.primaryColor,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    toolbarFilterIcon: {
        width: 15,
        height: 15,
        tintColor: DefaultAppTheme.colors.primaryColor,
        marginEnd: 5,
    },
    toolbarText: {
        fontSize: DefaultAppTheme.fontSize.h3,
        fontWeight: DefaultAppTheme.fontWeight.SemiBold,
        color: DefaultAppTheme.colors.primaryColor,
    },
    toolbarFilterText: {
        alignSelf: 'center',
        fontSize: DefaultAppTheme.fontSize.h4,
        fontWeight: DefaultAppTheme.fontWeight.Regular,
        color: DefaultAppTheme.colors.primaryColor,
        marginEnd: 10
    },
    toolBarView2: {
        flexDirection: 'row',
    }
});

export const productListStyle = StyleSheet.create({

    listItemContentContainer: {
        showsVerticalScrollIndicator: false
    },
    listItemSurface: {
        paddingHorizontal: DefaultAppTheme.spacings.medium,
        paddingVertical: DefaultAppTheme.spacings.medium,
        width: '100%',
        height: 'auto',
        flexDirection: 'row'
    },
    listItemImage: {
        height: 60,
        width: 60,
        borderColor: DefaultAppTheme.colors.divColor,
        borderWidth: 1,
        borderRadius: 5,
        padding: DefaultAppTheme.spacings.medium,
        resizeMode: 'contain'
    },
    listItemBaseView: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: DefaultAppTheme.spacings.medium,
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
        fontSize: DefaultAppTheme.fontSize.h3,
        fontWeight: DefaultAppTheme.fontWeight.Medium,
        width: '70%'
        },
    listItemSeperatorStyle: {
        width: '80%',
        backgroundColor: DefaultAppTheme.colors.divColor,
        height: 1,
        alignSelf: 'center'

    },
    addButtonStyle: {
        backgroundColor: DefaultAppTheme.colors.secondary,
        paddingHorizontal:  DefaultAppTheme.spacings.large,
        paddingVertical: DefaultAppTheme.spacings.xsmall,
        borderRadius: 30
    },
    buttonTextStyle: {
        fontSize: DefaultAppTheme.fontSize.h5,
        color: DefaultAppTheme.colors.primaryColor,
        fontWeight: DefaultAppTheme.fontWeight.Light
    },
    bottomDetailsViewColumn: {
        flexDirection: 'column',
        marginEnd: DefaultAppTheme.spacings.medium
    },
    detailsTextTitle: {
        fontSize: DefaultAppTheme.fontSize.h5,
        fontWeight: DefaultAppTheme.fontWeight.Regular,
        color: DefaultAppTheme.colors.strokeColor,
        textTransform: 'uppercase'
    },
    detailsTextValue: {
        marginTop: 3,
        fontSize: DefaultAppTheme.fontSize.h4,
        fontWeight: DefaultAppTheme.fontWeight.Regular,
        color: DefaultAppTheme.colors.onPrimary
    },
    boldDetailsTextValue: {
        fontWeight: DefaultAppTheme.fontWeight.ExtraBold
    },
    listFooterBase: {
        height: 70, 
        width: '100%', 
        justifyContent: 'center'
    },
    listFooterText: {
        fontSize: DefaultAppTheme.fontSize.h3,
        fontStyle: 'italic',
        alignSelf: 'center',
        color: DefaultAppTheme.colors.strokeColor,
    }
});