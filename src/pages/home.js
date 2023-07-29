import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import "../styles/home.css";

export default function Home() {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(["news"], () => {
    return Axios.get(
      "https://newsapi.org/v2/top-headlines?category=general&country=us&apiKey=0a896ee86f6b404b8a695b5e43449f30"
    ).then((resp) => resp.data);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="home_container">
      <div className="headline">
        <div className="title_and_time">
          <p>Welcome to NewsOfIndia.com</p>
          <p>Saturday, 29 July</p>
        </div>
        <div className="headline_news">
          {news.articles.slice(0, 5).map((article) => (
            <>
              <div className="news" key={article.title}>
              <img src={article.urlToImage} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
