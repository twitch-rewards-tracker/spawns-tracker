import RewardsListEntryComponent from "./RewardsListEntryComponent";

const RewardsComponent = ({ messages }) => {
  var values = Object.keys(messages).map(key => messages[key]).sort((a, b) => a.data.updated_reward.cost - b.data.updated_reward.cost);

  return <div className="flex flex-col">
    {values.map(message => (
      <RewardsListEntryComponent
        reward={message.data.updated_reward}
        key={message.data.updated_reward.id}
      />
    ))}
  </div>
}

export default RewardsComponent;
