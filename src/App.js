import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import RewardsComponent from "./components/RewardsComponent"

const ENDPOINT = process.env.WEBSOCKET_SERVER || "http://127.0.0.1:4001";

function App() {
  const [redemptions, setRedemptions] = useState({});

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("message", message => {
      const reward_id = message.data.updated_reward.id;
      setRedemptions(previous => ({ ...previous, [reward_id]: message }));
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div class="max-w-screen-lg mx-auto">
      <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3">
        <RewardsComponent redemptions={redemptions} />
      </div>
    </div>
  );
}

export default App;
