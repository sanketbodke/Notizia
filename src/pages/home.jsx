import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import LoadingAnimation from "../components/LoadingAnimation";
import ErrorPage from "../components/ErrorPage";

import "../styles/home.css";

export default function Home() {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];

  const currentDayName = dayNames[day];
  const monthName = monthNames[month];

  const { data: news, isLoading, isError } = useQuery(["news"], fetchNews);

  function fetchNews() {
    return Axios.get(
      "https://newsapi.org/v2/top-headlines?category=general&country=in&apiKey=0a896ee86f6b404b8a695b5e43449f30"
    ).then((response) => response.data.articles);
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const articlesWithImage = news.filter((article) => article.urlToImage);

  return (
    <div className="home_container">
      <div className="headline">
        <div className="title_and_time">
          <p>Welcome to Notizia</p>
          <p>{`${currentDayName}, ${date} ${monthName}`}</p>
        </div>
        <div className="headline_news">
          {articlesWithImage.slice(0, 6).map((article) => (
            <a
              href={article.url}
              key={article.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="news">
                {article.urlToImage && <img src={article.urlToImage} alt="img" />}
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
