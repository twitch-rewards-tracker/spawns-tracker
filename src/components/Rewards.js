import Reward from "./Reward";
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const DISPLAY_READY_COOLDOWNS = (process.env.REACT_APP_DISPLAY_READY_COOLDOWNS === "true");

const Rewards = ({ rewards }) => {
  const [secondsRemaining, setSecondsRemaining] = useState([])

  useEffect(() => {
    setSecondsRemaining(rewards
      .sort((a, b) => a.cost - b.cost)
      .map(reward => {
        const expires_at_time = new Date(Date.parse(reward.cooldown_expires_at));
        return (expires_at_time - Date.now()) / 1000;
      }))
  }, [rewards])

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondsRemaining(secondsRemaining.map(seconds => Math.max(0, seconds - 1)));
    }, 1000);
    return () => clearTimeout(timer);
  })

  return <div className="flex flex-col">
    {rewards.map((reward, i) => (
      (DISPLAY_READY_COOLDOWNS && secondsRemaining[i] > 0) ?
        <Reward
          title={reward.title}
          image={reward.image === null ? reward.default_image.url_1x : reward.image.url_1x}
          secondsRemaining={secondsRemaining[i]}
          key={reward.id}
        /> :
        <></>
    ))}
  </div>
}

Rewards.propTypes = {
  rewards: PropTypes.array
}

export default Rewards;
