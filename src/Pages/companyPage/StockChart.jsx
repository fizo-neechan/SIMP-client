import React from 'react'
import Chart from "chartjs"

export default class StockChart extends React.Component {

    componentDidMount() {

        const ctx = document.getElementById("sales-revenue");
        new Chart(ctx, {
            type: "line",
            data: {
                labels: this.props.dates.reverse().concat(this.props.pred_dates),
                datasets: [{
                        label: "Previous",
                        data: this.props.vals.reverse(),
                        backgroundColor: "rgba(0, 156, 255, .5)",
                        fill: true
                    },
                    {
                        label: "Prediction",
                        data: this.props.null_dates,
                        backgroundColor: "rgba(0, 156, 0, 0.5)",
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            display: true,
                            stepSize: 12
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });

        console.log("Rendered...");
        console.log("dates", this.props.dates);
    }

    render() {
        return (
            <canvas id="sales-revenue"></canvas>
        )
    }
}