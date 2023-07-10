import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import decreaseImage from '../img/decrease.png'
import increaseImage from '../img/increase.png'

const Table = () => {

    let navigate = useNavigate();
    const [stocks, setStocks] = useState([])
    useEffect(() => {
        axios.get("/", {})
            .then(response => {
                setStocks(response.data.data)
            })
    }, [])

  return (
    <section className="diptable counts scrollsnap">
        <div data-aos="fade-right" data-aos-delay="20">
            <div className="py-5 mt-5">
                <div className="container">
                    <div className="data-table-container diptable">
                        <table id="dip-body" className="display table table-striped rounded" style={{width:"100%"}}>
                            <thead className='thead-light'>
                                <tr style={{fontWeight: "bold"}}>
                                    <th scope="col">Company Name</th>
                                    <th scope="col"></th>
                                    <th scope="col">Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stocks.map(stock => (
                                    <tr key={stock.company_id} onClick={() => navigate(`/stocks/${stock.company_name}`)} name={stock.company_id}>
                                        <td>{stock.company_name}</td>
                                        <td><img src={stock.change < 0 ? decreaseImage:increaseImage} style={{width: "30px"}}/></td>
                                        <td style={{color: stock.change < 0 ? 'red': 'green'}} >{stock.change}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Table
