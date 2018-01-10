import React from "react";
import PropTypes from "prop-types";


function Articles (props) {
    let articleDivs = props.articles.map((article, i) => {
 
            return (
                <div className="news-item" key={i}>
                    <div className="article-img">
                    <img src={article.urlToImage} /> 
                    </div>
                    <div className="article-title">{article.title}</div> 
                    <div className="article-description">{article.description}</div> 
                    <a href={article.url} target="blank" >View</a>
                </div>);
        
        });
        return (
            <div className="news-list">
                {articleDivs}
            </div>);
    
}

Articles.propTypes = {
    articles: PropTypes.array
};

export default Articles;