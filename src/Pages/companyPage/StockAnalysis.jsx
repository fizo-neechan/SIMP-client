
import { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts'
import './stockChart.css'

const StockAnalysis = ({companyName, prevStocks, predStocks}) => {

    const [options, setOptions] = useState({})

    useEffect(() => {

        const prev = []
        const pred = []


        // prevStocks.forEach((stock) => {
        //     prev.push({
        //         x: new Date(stock.stock_date),
        //         y: stock.close_price
        //     });
        // });

        if(predStocks.length > 0 & prevStocks.length > 0){
            for(let i = 0; i < 30; i++) {
                prev.push({
                    x: new Date(prevStocks[i].stock_date),
                    y: prevStocks[i].close_price
                })
            }
    
            predStocks.forEach((stock) => {
                pred.push({
                    x: new Date(stock.pred_date),
                    y: stock.close_prediction
                });
            });
        }

        setOptions({
            theme: 'light1',
            axisY: {
                text: "Closing prices",
            },
            toolTip: {
                shared: true
            },
            data: [
                {
                    type: "area",
                    name: "Previous",
                    showInLegend: true,
                    xValueFormatString: "DD MMM YYYY",
                    yValueFormatString: "#,###.##Rs",
                    dataPoints: prev,
                },
                {
                    type: "area",
                    name: "Prediction",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "#,###.##Rs",
                    dataPoints: pred,
                }
            ],
            scales: [
                {grid: {
                    display: false,
                }}
            ]
        });



    }, [prevStocks, predStocks])
    
    
  return (
    <div className="bg-light rounded p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fadeInLeft">Stock Analysis</h2>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="stock-description">
                    <h1 className="mb-1">{companyName}</h1>
                </div>
            </div>
        </div>

        <div className="charts-section spad" style={{width: "100%"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <CanvasJSReact.CanvasJSChart options={options} className="stock-chart"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StockAnalysis
