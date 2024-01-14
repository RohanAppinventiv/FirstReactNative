import { SafeAreaView, View } from "react-native";
import SegmentedTabs from "./component/segmentedTabs";
import BarChart from "./component/BarChart";
import DotChart from "./component/DotPlotChart";

const App = () => {
    const durations = ['Day', 'Week', 'Month', '6M', 'Year']
    return <>
        <SafeAreaView style={{ flex: 0, backgroundColor: 'lightblue' }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {durations.length > 0 && <SegmentedTabs durations={durations} />}
                <View style={{ marginEnd: 20, marginStart: 10 }}>
                    <DotChart
                        baseCanvasHeight={300}
                        xAxisHeight={20}
                        yAxisWidth={35}
                        yAxisLabelCount={5}
                        xAxisItemBlockWidth={100}
                        maxBarWidth={100}
                        dotDiameter = {20}
                        dotColorsArr={["#b4d5c9"]}
                        graphDirection={'ltr'}
                        mealStatus = {[,,true,,true,,,true,,true,true]}
                        xAxisTextValues={["12AM", "2AM", "4AM", "6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM", "10PM"]}
                        data={[0, 10, 385, 44, 134, 123, 150, 190, 35, 23, 99, 301]}
                        yAxisTextValues={[]}
                    />
                </View>
            </View>
        </SafeAreaView>
    </>
}

export default App;