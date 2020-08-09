import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EachArticle from './each_article/EachArticle'
import './Articles.css'
import ScrollAnimation from 'react-animate-on-scroll'



const Articles = () => {
    const [articlesData, setArticlesData ] = useState([])

    useEffect(() =>{
        axios.get('https://dev.to/api/articles?username=sulaimonolaniran')
        .then((response) =>{
            setArticlesData(response.data)
            //console.log(response.data)
        })
    }, [])

    return (

        <div className="articles-container" >
            <ScrollAnimation animateIn="tada" ><h1>My <span className="style-word-span" >Articles</span></h1></ScrollAnimation>
            <div className="articles-listing-container">
            {
                articlesData && articlesData.map((article) =>{
                    return(
                        <React.Fragment key={article.id} >
                            <EachArticle article={article} />
                        </React.Fragment>
                    )
                })
            }
            </div>

        </div>
    )
}

export default Articles