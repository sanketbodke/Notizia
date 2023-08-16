import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import LoadingAnimation from "./LoadingAnimation";
import ErrorPage from "./ErrorPage";
import "../styles/News.css";

export default function News(props) {
  const {
    data: news,
    isLoading,
    isError,
    refetch,
  } = useQuery(["news", props.category], () => {
    return Axios.get(
      `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=APIKEY`
    ).then((resp) => resp);
  });

  useEffect(() => {
    refetch();
  }, [props.category, refetch]);

  if (isLoading) {
    return (
      <>
        <LoadingAnimation />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }
  const articlesWithImage = news.data.articles.filter(
    (article) => article.urlToImage
  );

  return (
    <div className="article_container">
      {articlesWithImage.map((article, index) => (
        <div key={index} className="article">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="article_img">
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="article_info">
              <p>
                {article.author} - {article.publishedAt}
              </p>
              <p>{article.title}</p>
              <p>{article.content && article.content.slice(0, 200)}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
