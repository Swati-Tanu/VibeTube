import React from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store?.app?.isMenuOpen)

  if (!isMenuOpen) return null;

    return (
      <div className="p-5 shadow-lg w-100">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Live</li>
          <li>Videos</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    );
};

export default Sidebar;
