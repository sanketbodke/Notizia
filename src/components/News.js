import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import LoadingAnimation from "./LoadingAnimation";

export default function News(props) {
  const {
    data: news,
    isLoading,
    isError,
    refetch, 
  } = useQuery(
    ["news", props.category], 
    () => {
      return Axios.get(
        `https://newsapi.org/v2/top-headnes?category=${props.category}&country=in&apiKey=0a896ee86f6b404b8a695b5e43449f30`
      ).then((resp) => resp);
    }
  );

  useEffect(() => {
    refetch();
  }, [props.category, refetch]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (isError) {
    return <LoadingAnimation />;
  }

  return (
    <div className="article_container">
      {news.data.articles.map((article, index) => (
        <div key={index} className="article">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="article_img">
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="article_info">
              <p>{article.title}</p>
              <p>{article.content && article.content.slice(0, 200)}</p>
              <p>
                {article.author} - {article.publishedAt}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
