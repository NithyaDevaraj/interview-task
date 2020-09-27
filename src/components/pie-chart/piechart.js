import React, { useState, useEffect } from 'react'
import './piechart.css'
import Doughnut from 'react-chartjs-2';

const data =
{
    'france-1': 4260,
    'france-2': 4260,
    'italy-1': 3970,
    'italy-2': 3970
};

function PieChart() {
    const chartLabels = [
        { data: 'france-1', label: 'France', color: '#55D8FE' },
        { data: 'france-2', label: 'France', color: '#FFDA83' },
        { data: 'italy-1', label: 'Italy', color: '#FF8373' },
        { data: 'italy-2', label: 'Italy', color: '#A3A0FB' },
    ]

    const [graphData, setgraphData] = useState();

    const getGraphData = () => {
        let dataSets = [{ data: [], backgroundColor: [], labels: [], borderWidth: 0 }]
        let labels = [];
        Object.keys(data).forEach((item) => {
            dataSets[0].data.push(data[item]);
            const label = chartLabels.find((el) => el.data === item);
            label && dataSets[0].backgroundColor.push(label.color);
            label && labels.push(label.data);
        })
        setgraphData({ datasets: dataSets, labels });
    }

    const options = {
        responsive: true,
        legend: {
            display: false
        },
        cutoutPercentage: 60
    };

    useEffect(() => {
        getGraphData();
    }, [])

    return (
        <div className="chart-wrapper">
            <div className="doughnut-heading">Sales Distribution</div>
            <Doughnut data={graphData} width={100} options={options} />
            <div className="chart-label-wrapper d-flex-between v-center d-wrap">
                {chartLabels.map((label) => (
                    <div className="chart-label-item-wrapper d-flex-between v-center">
                        <div className="chart-color-indicator-circle" style={{ border: `4px solid ${label.color}` }} />
                        <span className="chart-label">{label.label}</span>
                        <span className="chart-count">{`${data[label.data]} sales`}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChart
