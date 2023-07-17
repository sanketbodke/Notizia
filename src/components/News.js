import React, { useEffect, useState } from "react";
import Axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=de5e89cbe76c436b8202a8a115b9b9ae"
        );
        setArticles(response.data.articles);
      } catch (error) {
        setError("Error fetching news articles. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="article_container">
      {error && <p>{error}</p>}
      {articles.map((article, index) => (
        <div key={index} className="article">
          <div className="article_img">
            <img src={article.urlToImage} alt={article.title} />
          </div>
          <div className="article_info">
            <p>{article.author}</p>
            <p>{article.content}</p>
            <p>{article.publishedAt}</p>
            <a href={article.url}>Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
