import React from 'react'
import Button from '@material-ui/core/Button'
import './EachArticle.css'
import ScrollAnimation from 'react-animate-on-scroll'


const EachArticle = ({ article }) => {
    return (
        <ScrollAnimation ScrollAnimation animateIn='bounceInUp' className="each-article-container">
            <h3>{article.title}</h3>

            <div className="article-cover-image">
                <img src={article && article.cover_image} alt="Article" />
            </div>

            <div className="article-description">
                <p>{article && article.description}</p>
                <a href={article && article.url} target="_blank" rel="noopener noreferrer">
                    <Button color="primary" variant="outlined" >Read More On DevTo</Button>
                </a>
            </div>

        </ScrollAnimation>
    )
}

export default EachArticle