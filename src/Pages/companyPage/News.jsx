import axios from 'axios'
import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState([])
    const [score, setScore] = useState(-1)

    const getScore = () => {
        let netScore = 0;
        news.forEach(n => {
            netScore += Number(n.sentiment_score);
        });
        console.log("score", netScore)
        return netScore;
    }

    const getScoreColor = () => {
        if(score <= -0.25) {
            return "red";
        }else if (score <= 0.25) {
            return "orange";
        }else {
            return "green";
        }
    }

    useEffect(() => {
        axios.get("/news", {})
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.log(error);
            })

        setScore(getScore());
    }, [])

  return (
    <div className="col-sm-12 col-md-4">
        <div className="bg-light text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h4>Economical Index:</h4>
                <span>
                    <h1 style={{color: getScoreColor()}}>{score}</h1>
                </span>
            </div>

            <div>
                <table id="dip-body" className="display table table-striped" style={{width:"100%", fontSize: "1rem"}}>
                    <thead className="thead-light">
                        <tr style={{fontWeight: "bold"}}>
                            <th scope="col">News title</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                            {news.map(n => (
                                <tr key={n.news_id} onClick={() => window.open(n.link, "_blank")}>
                                    <td>{n.sentiment_title}</td>
                                    <td>{n.sentiment_score}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default News
