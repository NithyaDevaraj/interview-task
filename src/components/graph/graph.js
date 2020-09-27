import React from 'react'
import './graph.css'

import { Line } from 'react-chartjs-2'

function Graph() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Products sold',
                fill: false,
                lineTension: 0.1,
                borderColor: '#A3A1FB',
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'bevel',
                pointBorderColor: '#A3A1FB',
                pointBackgroundColor: 'white',
                pointBorderWidth: 2,
                lineTension: 0.5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#A3A1FB',
                pointRadius: 6,
                pointHitRadius: 10,
                data: [15, 10, 15, 18, 15, 24]
            },
            {
                label: 'Total views',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#fff',
                borderColor: '#54D8FF',
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.1,
                borderJoinStyle: 'round',
                pointBorderWidth: 2,
                lineTension: 0.5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#54D8FF',
                pointRadius: 6,
                pointHitRadius: 10,
                data: [19, 8, 16, 12, 16, 10]
            }
        ]
    };
    const labels = [
        { data: 'productsSold', label: 'Products sold', color: '#A3A1FB' },
        { data: 'totalViews', label: 'Total views', color: '#54D8FF' }
    ]
    let options = {
        scales: {
            yAxes: [{
                ticks: {
                    max: 25,
                    min: 5,
                    stepSize: 5,
                    callback: function (value, index, values) {
                        return '$' + value + 'k';
                    }
                }
            }]
        },
        responsive: true,
        legend: {
            display: false
        },
    }
    return (
        <div className="graph-wrapper">
            <div className="d-flex-between v-center">
                <div className="line-chart-heading">Statistics</div>
                <button className="line-chart-btn">
                    <span className="line-chart-text">Last 6 months</span>
                </button>
            </div>
            <Line data={data} width={100} options={options} />
            <div className="label-wrapper d-flex-between v-center d-wrap">
                {labels.map((label) => (
                    <div className="label-item-wrapper d-flex-between v-center">
                        <div className="color-indicator" style={{ backgroundColor: label.color }} />
                        <span className="label">{label.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Graph
