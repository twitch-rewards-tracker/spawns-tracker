import Reward from "./Reward";
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const Rewards = ({ rewards }) => {
  rewards = rewards.sort((a, b) => a.cost - b.cost)

  const [secondsRemaining, setSecondsRemaining] = useState(rewards.map(reward => {
    const expires_at_time = new Date(Date.parse(reward.cooldown_expires_at));
    return (expires_at_time - Date.now()) / 1000;
  }))

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondsRemaining(secondsRemaining.map((seconds) => seconds - 1));
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  })

  return <div className="flex flex-col">
    {rewards.map((reward, i) => (
      <Reward
        title={reward.title}
        image={reward.image.url_1x}
        secondsRemaining={secondsRemaining[i]}
        key={reward.id}
      />
    ))}
  </div>
}

Rewards.propTypes = {
  rewards: PropTypes.array
}

export default Rewards;
