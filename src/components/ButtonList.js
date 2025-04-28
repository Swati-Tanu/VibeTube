import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Game",
  "Live",
  "Songs",
  "Sitcom",
  "Movies",
  "Sports",
  "Cooking",
  "Coding",
  "Web series",
  "Mixes",
  "News",
  "Watched",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((el, index) => {
        return <Button key={index} name={el} />;
      })}
    </div>
  );
};

export default ButtonList;
