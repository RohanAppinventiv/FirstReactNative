import { ScrollView, StyleSheet, Text, View } from "react-native";


const BarChart = (props) => {
    console.log("Props:", props)
    const {
        baseCanvasHeight = 300,
        xAxisHeight = 20,
        yAxisWidth = 35,
        yAxisLabelCount = 5,
        xAxisItemBlockWidth = 100,
        maxBarWidth,
        _barColors = ["#b4d5c9"],
        graphDirection = 'ltr',
        xAxisTextValues = [],
        data = [],
        yAxisTextValues = []

    } = props

    const yAxisBottomMargin = xAxisHeight;
    const renderCanvasHeight = baseCanvasHeight - xAxisHeight
    const yAxisArrayMax = (Math.ceil(Math.max(...data) / 100) * 100)
    const yAxisGap = yAxisArrayMax / (yAxisLabelCount - 1);
    const BASE_FACTOR = renderCanvasHeight / yAxisArrayMax
    const yLabels = yAxisTextValues.length ? yAxisArrayMax : (
        Array.from({ length: yAxisLabelCount }, (_, i) => i * yAxisGap)
    )
    const barColors = _barColors.concat(...Array.from({ length: data.length - _barColors.length }, (_, index) => _barColors[index % _barColors.length]))

    if (graphDirection != "ltr" && graphDirection != "rtl")
        throw new Error("Graph direction can only be either 'ltr' or 'rtl.'")


    if (maxBarWidth == "undefined")
        maxBarWidth = xAxisItemBlockWidth


    const YAxisView = () => (<View style={[styles.yAxis, { width: yAxisWidth }]}>
        <View style={[styles.axisOriginMargin, { width: 35, height: 20, }]} />
        <View style={styles.yAxisLabels}>
            {/* ALIGN CHANGE */}
            {yLabels.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
        </View>
    </View>);

    const XAxisView = () => (<View style={[styles.xAxis, { height: xAxisHeight }]}>
        {xAxisTextValues.map((item) => (
            <Text style={[styles.xAxisText, { width: xAxisItemBlockWidth }]}>{item}</Text>
        ))}
    </View>)

    const OverLayCanvas = () => (<View style={styles.overLayCanvas}>
        <View style={[styles.xAxisOverlay, { height: xAxisHeight }]} />
        <View style={styles.drawingCanvasBaseOverlay}>
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.1 }]} />
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.12 }]} />
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.15 }]} />
            <View style={[styles.drawingCanvasLineOverlay, { opacity: 0.2 }]} />
        </View>
    </View>)


    const BarView = () => (<View style={styles.graphCanvasView}>
        {/* Graph Canvas View here */}
        {data.map((item, index) => {
            let height = item * BASE_FACTOR
            let color = barColors[index]
            return <View style={[styles.barViewParent, { width: xAxisItemBlockWidth }]} >
                <View style={[styles.barViewItemStyle, { height: height, backgroundColor: color }]}></View>
            </View>
        })}

    </View>)
    return (<View style={[styles.parent, { height: baseCanvasHeight }]}>
        <YAxisView />
        <ScrollView bounces={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'column-reverse' }} horizontal={true}>
            <OverLayCanvas />
            <XAxisView />
            <BarView />
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
        borderTopWidth: 1,
        borderTopColor: 'grey',
        height: 20, //xAsixHeight
        flexDirection: 'row', //ALIGN CHANGE
    },
    xAxisText: {
        width: 100, //xAxisItemBlockWidth
        textAlign: 'center'
    },
    graphCanvasView: {
        flex: 1,
        flexDirection: 'row', //ALIGN CHANGE
        alignItems: 'flex-end'

    },
    yAxisLabels: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column-reverse',
        borderLeftColor: 'grey',
        borderRightWidth: 1
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
    barViewParent: {
        width: 100,//xAxisItemBlockWidth, 
        alignItems: "center"
    },
    barViewItemStyle: {
        width: 20,
        height: '100%',
        backgroundColor: 'teal',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    }

})
export default BarChart;