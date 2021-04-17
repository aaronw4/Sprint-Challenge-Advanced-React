import ReactEcharts from 'echarts-for-react';
import React from 'react';

const Graph = (props) => {
    var x = props.data.map(players => (
        players.name
    ))

    var y = props.data.map(players => (
        players.searches
    ))

    return(
        <ReactEcharts className='chart'
            style={{
                height: '600px',
                margin: '20px 0 0 0'
            }}
            option={{
                title: {
                    text: 'Number of Searches for Each Player',
                    textStyle: {
                        color: 'grey'
                    }
                },
                grid: {
                    bottom: 200
                },
                textStyle: {
                    color: 'grey'
                },
                tooltip: {
                    show: true
                },
                xAxis: {
                    type: 'category',
                    data: x,
                    axisLabel: {
                        interval: 0,
                        rotate: 55
                    }
                },
                yAxis: {
                    type: 'value',
                },
                series: [{
                    data: y,
                    type: 'line'
                }]
            }}
        />
    );
}

export default Graph
