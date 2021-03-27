import RewardsListEntryComponent from "./RewardsListEntryComponent";

const RewardsComponent = ({ redemptions }) => {
  var values = Object.keys(redemptions).map(key => redemptions[key]).sort((a, b) => a.data.updated_reward.cost - b.data.updated_reward.cost);
  return <div class="flex flex-col">
    {values.map(redemption => (
      <RewardsListEntryComponent message={redemption} key={redemption.data.updated_reward.id} />
    ))}
  </div>
}

export default RewardsComponent;
