import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import RewardsComponent from "./components/RewardsComponent";
import RewardsLoadingComponent from "./components/RewardsLoadingComponent";

const ENDPOINT = process.env.REACT_APP_WEBSOCKET_SERVER || "https://127.0.0.1:4001/";

const STREAMER = process.env.REACT_APP_TWITCH_STREAMER || "chowder_0"

function App() {
  const [redemptions, setRedemptions] = useState({});

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on(STREAMER, message => {
      const reward_id = message.data.updated_reward.id;
      setRedemptions(previous => ({ ...previous, [reward_id]: message }));
    });

    return () => socket.disconnect();
  }, []);

  if (Object.keys(redemptions).length === 0) {
    return <div class="max-w-screen-lg mx-auto">
      <RewardsLoadingComponent />
    </div>
  }

  return (
    <div class="max-w-screen-lg mx-auto">
      <RewardsComponent redemptions={redemptions} />
    </div>
  );
}

export default App;
