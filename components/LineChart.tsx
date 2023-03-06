import { Container, ScrollView } from "native-base"
import React from "react"
import { Dimensions } from "react-native";
//import { Chart } from 'react-native-chartjs';
//import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'react-native-chartjs';
import {
    LineChart
  } from "react-native-chart-kit";


const LineGraph = ({graphData}) => {

  //  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
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
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => "#F89344",
        strokeWidth: 3, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false, // optional
        decimalPlaces: 0,
        labelColor: (opacity = 1) => "#000000",
      };

    /*console.log('labels', labels)
    console.log('data', data)*/

    const chartData = {
        labels,
        datasets: [
          {
            data
          },
        ],
      };

    /*function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  
      );
    }

    const box = document.querySelector('ScrollView');

    document.addEventListener('scroll', function () {
      const messageText = isInViewport(box) ?
          'The box is visible in the viewport' :
          'The box is not visible in the viewport';
  
      console.log(messageText)
  
    }, {
        passive: true
    });*/

    return (
        <ScrollView
        horizontal={true}
        w={Dimensions.get("window").width-40} 
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        contentOffset={{ x: 310, y: 0}}
        >
            {/*<Line options={options} data={chartData} />*/}
            <LineChart data={chartData}
                chartConfig={chartConfig} 
                width={700} // from react-native
                height={220}
                withHorizontalLines={false}
                /*withHorizontalLabels={false}*/
                segments={3}
                style={{
                    marginHorizontal: 0,
                    marginVertical: 20,
                    padding: 0
                }}
             />
        </ScrollView>
    )
}

export default LineGraph