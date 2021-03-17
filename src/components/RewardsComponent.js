import RewardsListEntryComponent from "./RewardsListEntryComponent";

const RewardsComponent = ({ redemptions }) => {
  var values = Object.keys(redemptions).map(key => redemptions[key]).sort((a, b) => a.data.updated_reward.cost - b.data.updated_reward.cost);
  return <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3">
    {values.map(redemption => (
      <RewardsListEntryComponent message={redemption} />
    ))}
  </div>
}

export default RewardsComponent;
