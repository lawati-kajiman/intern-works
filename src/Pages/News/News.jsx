import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { news } from "../../config/axios.config";
import "./News.scss";

const News = () => {
  const [News, setNews] = useState("tesla");
  const value = () => {
    if (News) {
      return news
        .get(`everything?q=${News}&from=2023-02-28&sortBy=publishedAt`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
    } else {
      console.log("no such value exist");
      return <p>No such value exist</p>;
    }
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["New", News],
    queryFn: value,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = (e) => {
    const value = e.target.value;
    clearTimeout(typingTimeout);

    // Set a new timeout to update the state after 500ms
    typingTimeout = setTimeout(() => {
      setNews(value);
    }, 500);
  };
  return (
    <>
      <div className="main-page">
        <h1>News of the world</h1>
        <div className="search-and-button">
          <TextField
            value={News}
            id="outlined-basic"
            label="Enter text for news"
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            sx={{ height: 50, width: 100, marginLeft: 1 }}
            variant="contained"
            onClick={value}
          >
            submit
          </Button>
        </div>
        <div className="news-feed">
          <h1>News Feed</h1>
          {data &&
            data.articles.map((datas) => (
              <div className="news-feed-card" key={datas.source.id}>
                <p>{datas.author}</p>
                <p>{datas.title}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default News;
