import React, { useState } from 'react';
import { Text, View, Switch, Dimensions } from 'react-native';
import { LineChart, PieChart } from "react-native-chart-kit";
import { data, useScreenDimensions } from '../conststants/global'
import Svg, { Circle } from 'react-native-svg';

const Charts = () => {

    const dim = Dimensions.get("screen")

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const screenDimensions = useScreenDimensions();

    if (isEnabled) {
        return (
            <View style={{backgroundColor: "rgb(242, 242, 242)", height: dim.height}}>
                <View style={ screenDimensions.isLandscape ? { flex: 0, alignItems: "center", justifyContent: "center", marginTop: '5%'} : {flex: 0, alignItems: "center", justifyContent: "center", marginTop: '30%',}}>
                    <Text>Main Chart</Text>
                    <Switch
                        trackColor={{ false: "rgb(242, 242, 242)", true: "#000" }}
                        thumbColor={isEnabled ? "rgb(242, 242, 242)" : "#000"}
                        ios_backgroundColor="#000"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={ screenDimensions.isLandscape ? {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 10} : {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: '15%'}}
                    />
                    <PieChart
                        data={[
                            { percent: 45, color: '#19e6d8' },
                            { percent: 5, color: '#c9a0dc' },
                            { percent: 25, color: '#f6ce09' },
                            { percent: 25, color: '#b3c7c4' },
                        ]}
                        hasLegend={false}
                        width={ dim.width }
                        height={ screenDimensions.isLandscape ? dim.height / 1.8: dim.height / 3 }
                        chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` }}
                        style={{ alignItems: "center", marginLeft: '50%' }}
                        accessor="percent"
                        absolute
                    />
                    <View style={ screenDimensions.isLandscape ? { zIndex: 1, position: 'absolute', paddingLeft: '39.5%', top: '43.7%' } :  { zIndex: 1, position: 'absolute', paddingLeft: '35.5%', top: '51.7%' }}>
                        <Svg height="180" width="200">
                            <Circle cx="50" cy="50" r="50" fill="white" />
                        </Svg>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{backgroundColor: "rgb(242, 242, 242)", height: dim.height}}>
                <View style={ screenDimensions.isLandscape ? { backgroundColor: "rgb(242, 242, 242)", flex: 0, alignItems: "center", justifyContent: "center", marginTop: '5%'} : {backgroundColor: "rgb(242, 242, 242)", flex: 0, alignItems: "center", justifyContent: "center", marginTop: '30%',}}>
                    <Text>Pie Chart</Text>
                    <Switch
                        trackColor={{ false: "#000", true: "rgb(242, 242, 242)" }}
                        thumbColor={isEnabled ? "#000" : "rgb(242, 242, 242)"}
                        ios_backgroundColor="#000"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={ screenDimensions.isLandscape ? {backgroundColor: "rgb(242, 242, 242)", flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 10} : {backgroundColor: "rgb(242, 242, 242)", flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: '15%'}}

                    />
                    <LineChart
                        data={{ datasets: [{ data: data }] }}
                        width={ screenDimensions.isLandscape ? dim.width : dim.width * 1.27 }
                        height={ screenDimensions.isLandscape ? dim.height / 4.5 : dim.height / 6 }
                        chartConfig={{
                            backgroundColor: "rgb(242, 242, 242)",
                            backgroundGradientFrom: "rgb(242, 242, 242)",
                            backgroundGradientTo: "rgb(242, 242, 242)",
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            propsForDots: {r: "0", strokeWidth: "0", stroke: "#000", barPercentage: '1'}
                        }}
                        // style={ screenDimensions.isLandscape ? {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginLeft: -50,} : {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}
                        style={screenDimensions.isLandscape ? {marginTop: '5%', marginLeft: 0} : {marginLeft: '-5%', marginTop: '15%'}}
                        withInnerLines={false}
                        withOuterLines={false}
                        withHorizontalLabels={false}
                        withVerticalLabels={false}
                        bezier
                    />
                </View>
            </View>
        )
    }
}

export default Charts
