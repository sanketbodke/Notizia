import React from "react";
import { useParams } from "react-router-dom";
import News from "./News"; 

const NewsSearch = () => {
  const { query } = useParams();

  return (
    <div>
      <News category={query} />
    </div>
  );
};

export default NewsSearch;
