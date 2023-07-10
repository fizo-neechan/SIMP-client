import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import StockAnalysis from './StockAnalysis'
import Description from './Description'
import News from './News'

const Company = () => {

    const companyName = useParams().companyName
    const [companyInformation, setCompanyInformation] = useState({})
    const [stocks, setStocks] = useState([])
    const [prediction, setPrediction] = useState([])

    useEffect(() => {
        axios.get(`/stocks/${companyName}`, {})
            .then(response => {
                console.log(response.data);
                setCompanyInformation(response.data.companyInformation);
                setStocks(response.data.companyStocks);
                setPrediction(response.data.stocksPrediction);
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const convertDate = (unformatted) => {
        const date = new Date(unformatted);
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
          }).replace(/ /g, '-');
        return formattedDate;
    }

  return (
    <div className="container-fluid pt-4 px-4 mt-4">
	    <div className="row">
		    <div className="col-sm-12 col-md-8">
                <StockAnalysis
                    companyName={companyName}
                    prevStocks={stocks}
                    predStocks={prediction}/>

                <Description companyInformation={companyInformation}/>

                <div className="bg-light rounded p-4 mt-4 ">
                    <h3 className="mb-4">Previous Company stocks</h3>

                    <div>
                        <table id="dip-body" className="display table table-striped" style={{width:"100%", fontSize: "1rem"}}>
                            <thead className="thead-light">
                                <tr style={{fontWeight: "bold"}}>
                                    <th scope="col">Date</th>
                                    <th scope="col">Open</th>
                                    <th scope="col">High</th>
                                    <th scope="col">Low</th>
                                    <th scope="col">Close</th>
                                    <th scope="col">Volume</th>
                                    <th scope="col">Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stocks.map(stock => (
                                    <tr>
                                        <td>{convertDate(stock.stock_date)}</td>
                                        <td>{stock.open_price}</td>
                                        <td>{stock.high_price}</td>
                                        <td>{stock.low_price}</td>
                                        <td>{stock.close_price}</td>
                                        <td>{stock.volume}</td>
                                        <td style={{color: stock.change <= 0 ? "red":"green"}}>{stock.change}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <News />

        </div>
    </div>
  )
}

export default Company
