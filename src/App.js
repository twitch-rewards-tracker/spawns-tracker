import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Rewards from "./components/Rewards";
import Loading from "./components/Loading";

const ENDPOINT = process.env.REACT_APP_WEBSOCKET_SERVER || "https://127.0.0.1:4001/";

const STREAMER = process.env.REACT_APP_TWITCH_STREAMER || "chowder_0"

function App() {
  const [rewards, setRewards] = useState({});

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on(STREAMER, message => {
      const reward = message.data.updated_reward
      setRewards(previous => ({ ...previous, [reward.id]: reward }));
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto p-3">
      {Object.keys(rewards).length === 0 ? <Loading /> : <Rewards rewards={Object.values(rewards)} />}
    </div>
  );
}

export default App;
