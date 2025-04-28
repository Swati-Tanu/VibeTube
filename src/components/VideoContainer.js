import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YOUTUBE_API from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((el) => (
        <Link key={el.id} to={"/watch?v=" + el.id}>
          <VideoCard info={el} />
        </Link>
      ))}
    </div>
  );
};



export default VideoContainer;
