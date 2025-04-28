import React, { useEffect, useState } from "react";
import ChatMessge from "./ChatMessge";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store?.chat?.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Polling!");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((el, index) => (
          <ChatMessge key={index} name={el.name} message={el.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mr. X",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-14 py-2 bg-green-300 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
