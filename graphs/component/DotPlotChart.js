import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DotChart = (props) => {
    console.log("Props:", props)
    const {
        baseCanvasHeight = 300,
        xAxisHeight = 20,
        yAxisWidth = 35,
        yAxisLabelCount = 5,
        xAxisItemBlockWidth = 100,
        dotDiameter = 20,
        dotColorsArr = ["#b4d5c9"],
        graphDirection = 'ltr',
        xAxisTextValues = [],
        data = [],
        mealStatus = [],
        yAxisTextValues = []

    } = props

    const dotRadius = dotDiameter / 2;
    const yAxisBottomMargin = 2 * xAxisHeight;
    const renderCanvasHeight = baseCanvasHeight - yAxisBottomMargin
    const yAxisArrayMax = (Math.ceil(Math.max(...data) / 100) * 100)
    const yAxisGap = yAxisArrayMax / (yAxisLabelCount - 1);
    const BASE_FACTOR = renderCanvasHeight / yAxisArrayMax
    const yLabels = yAxisTextValues.length ? yAxisArrayMax : (
        Array.from({ length: yAxisLabelCount }, (_, i) => i * yAxisGap)
    )
    const dotColors = dotColorsArr.concat(...Array.from({ length: data.length - dotColorsArr.length }, (_, index) => dotColorsArr[index % dotColorsArr.length]))

    if (graphDirection != "ltr" && graphDirection != "rtl")
        throw new Error("Graph direction can only be either 'ltr' or 'rtl.'")


    const onPressDot = (event) => {
        let coord = event.nativeEvent
        console.log("X: ", coord.pageX, "Y: ", coord.pageY)
    }

    const YAxisView = () => (<View style={[styles.yAxis, { width: yAxisBottomMargin }]}>
        <View style={[styles.axisOriginMargin, { width: 35, height: yAxisBottomMargin }]} />
        <View style={styles.yAxisLabelsParent}>
            {/* ALIGN CHANGE */}
            {yLabels.map((item, index) => (
                <Text style={styles.yAxisLabelStyle} key={index}>{item}</Text>
            ))}
        </View>
    </View>);

    const XAxisView = () => (<View style={[styles.xAxis, { height: yAxisBottomMargin}]}>
        {xAxisTextValues.map((item,index) => (
         <View>
            <Text style={[styles.xAxisText, { width: xAxisItemBlockWidth }]}>{item}</Text>
                {mealStatus[index] &&
                    <Image source={require('../../assets/food.webp')} style={[styles.dotViewItemStyle,{backgroundColor: '#de5f13', alignSelf: 'center', marginTop: 5}]}/>
                    }
            </View>
        ))}
    </View>)

    const OverLayCanvas = () => (<View style={styles.overLayCanvas}>
        <View style={[styles.xAxisOverlay, { height: yAxisBottomMargin }]} />
        <View style={styles.drawingCanvasBaseOverlay}>
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.1 }]} />
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.12 }]} />
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.15 }]} />
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.2 }]} />
        </View>
    </View>)


    const DotView = () => (<View style={styles.graphCanvasView}>
        {/* Graph Canvas View here */}
        {data.map((item, index) => {
            if (item === 0) 
                return <View style={[styles.dotViewParent, { width: xAxisItemBlockWidth }]} />
            
            let marginBottom = (item * BASE_FACTOR) - dotRadius
            let color = dotColors[index]
            return <View style={[styles.dotViewParent, { width: xAxisItemBlockWidth }]} >
                <TouchableOpacity onPress={onPressDot}>
                    <View style={[styles.dotViewItemStyle, { width: dotDiameter, height: dotDiameter, borderRadius: dotRadius, backgroundColor: color, marginBottom: marginBottom < 0 ? 0 : marginBottom }]} />
                </TouchableOpacity>
            </View>
        })}

    </View>)
    return (<View style={[styles.parent, { height: baseCanvasHeight }]}>
        <YAxisView />
        <ScrollView bounces={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'column-reverse' }} horizontal={true}>
            <OverLayCanvas />
            <XAxisView />
            <DotView />
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    parent: {
        width: '100%',
        height: 300, // baseCanvasheight
        flexDirection: 'row' //ALIGN CHANGE
    },
    yAxis: {
        width: 35, //yAxisWidth
        flexDirection: 'column-reverse'
    },
    axisOriginMargin: {
        width: 35, //yAxisWidth
        height: 20, //xAxisHeight
    },
    viewDivision1: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    xAxis: {
        borderTopColor: 'grey',
        height: 20, //xAsixHeight
        flexDirection: 'row', //ALIGN CHANGE
    },
    xAxisText: {
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '700',
        width: 100, //xAxisItemBlockWidth
        textAlign: 'center'
    },
    graphCanvasView: {
        flex: 1,
        flexDirection: 'row', //ALIGN CHANGE
        alignItems: 'flex-end'

    },
    yAxisLabelsParent: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column-reverse',
        borderLeftColor: 'grey',

    },
    yAxisLabelStyle: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: '700'
    }
    ,
    overLayCanvas: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        flexDirection: 'column-reverse'
    },
    xAxisOverlay: {
        width: '100%',
        height: 20 //xAxisHeight
    },
    drawingCanvasBaseOverlay: {
        width: '100%',
        flex: 1,
        flexDirection: 'column-reverse'
    },
    drawingCanvasLineOverlay: {
        backgroundColor: '#de5f13',
        opacity: 1,
        height: '25%',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#e8e7e3',
        borderStyle: 'solid',
        borderRadius: 1
    },
    dotViewParent: {
        width: 100,//xAxisItemBlockWidth, 
        alignItems: "center"
    },
    dotViewItemStyle: {
        width: 20,
        height: 20,
        backgroundColor: 'teal',
        borderRadius: 20
    }

})
export default DotChart;