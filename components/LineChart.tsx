import { Container, ScrollView } from "native-base"
import React from "react"
import { Dimensions } from "react-native";
import {
  AbstractChart,
    LineChart
  } from "react-native-chart-kit";
import { G, Svg, Text } from "react-native-svg";


const LineGraph = ({graphData}) => {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'none',
          },
        },
    };

    const labels = [];
    const data = [];

    if (graphData !== undefined && graphData.length > 0) {
        for (let pos = graphData.length-1 ; pos >= 0; pos--) {
          labels.push(graphData[pos].month);
          data.push(graphData[pos].points);
        }
    }
    
    const chartConfig = {
        backgroundColor: "#FFFFFF",
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => "#F89344",
        strokeWidth: 3, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false, // optional
        decimalPlaces: 0,
        labelColor: (opacity = 1) => "#000000",
      };

    const chartData = {
        labels,
        datasets: [
          {
            data
          },
        ],
      };

    // # of segments to divide the points data
    const segments = 3;

    const propLabels = {
      color: chartConfig.color,
      labelColor: chartConfig.labelColor,
      fontSize: 12,
      fill: chartConfig.labelColor(0.8),
    }

    /* LOGIC for the additional axis - INI */
    //Code based in AbstractChart.renderHorizontalLabels from https://github.com/indiespirit/react-native-chart-kit
    const yLabelsOffset = 12;
    let yLabel = '';
    const height = 220;
    const verticalLabelsHeightPercentage = 0.75;

    const extraAxis = new Array(segments + 1).fill(1).map((_, i) => {
      const label = ((Math.max(...data, 0) - Math.min(...data, 0) || 1) / segments) * i + Math.min(...data, 0);
      yLabel = label.toFixed(chartConfig.decimalPlaces);
      const basePosition = height * verticalLabelsHeightPercentage;
      const x = 0 + yLabelsOffset;
      const y = height * verticalLabelsHeightPercentage -
            (basePosition / segments) * i + 20;//20 is the top margin

      return (
        <Text
          origin={`${x}, ${y}`}
          x={x}
          y={y}
          key={Math.random()}
          textAnchor="start"
          {...propLabels}
        >{yLabel}</Text>
      )
    })

    /* LOGIC for the additional axis - END */

    return (
        <ScrollView
        horizontal={true}
        w={Dimensions.get("window").width-40} 
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        contentOffset={{ x: 320, y: 0}}
        >
            <LineChart data={chartData}
                chartConfig={chartConfig} 
                width={700}
                height={220}
                withHorizontalLines={false}
                segments={segments}
                fromZero={true}
                style={{
                    marginHorizontal: -30,
                    marginVertical: 20,
                    padding: 0
                }}
             />
             <Svg width={50} height={220}
              style={{
                marginHorizontal: 0,
                marginVertical: 20,
                padding: 0,
                backgroundColor: 'white'
              }}
             >
                <G height={220} translateX={-10}>
                  { extraAxis }
                </G>
             </Svg>
        </ScrollView>
    )
}

export default LineGraph