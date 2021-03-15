import { useEffect, useState } from "react";

function RewardsListEntryComponent({ message }) {
    const calculateSecondsRemaining = (cooldown_expires_at) => {
        const expires_at_time = new Date(Date.parse(cooldown_expires_at));
        return ((expires_at_time - Date.now()) / 1000);
    }

    const [secondsRemaining, setSecondsRemaining] = useState(calculateSecondsRemaining(message.data.updated_reward.cooldown_expires_at));

    useEffect(() => {
        const timer = setTimeout(() => {
            setSecondsRemaining(calculateSecondsRemaining(message.data.updated_reward.cooldown_expires_at));
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    })

    const styles = { divClasses: 'p-6 max-w-xs mx-4 my-2 rounded-xl shadow-md flex self-auto items-center space-x-4' }

    return <div class={`${styles.divClasses} ${secondsRemaining <= 0 ? 'bg-green-50' : 'bg-yellow-100'}`}>
        <div class="flex-shrink-0">
            <img class="h-10 w-10" src={message.data.updated_reward.image.url_2x} alt="placeholder"></img>
        </div>
        <div>
            <div class="text-lg font-medium text-black">{message.data.updated_reward.title}</div>
            <p class="text-gray-500">{secondsRemaining <= 0 ? "Ready to spawn" : `${Math.floor(secondsRemaining)} seconds remaining`}</p>
        </div>
    </div>
}

export default RewardsListEntryComponent;
