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

    const styles = { divClasses: 'p-3 my-1 rounded-xl shadow-md flex justify-between items-center min-w-max' }

    return <div class={`${styles.divClasses} ${secondsRemaining <= 0 ? 'bg-green-100' : 'bg-orange-200'}`}>
        <div class='flex space-x-2 mx-1 items-center'>
            <div class="flex-shrink-0">
                <img class="h-6 w-6" src={message.data.updated_reward.image.url_1x} alt="placeholder"></img>
            </div>
            <div class="font-medium text-black truncate">{message.data.updated_reward.title}</div>
        </div>
        <div>
            <p class="font-medium text-sm text-gray-600">{secondsRemaining <= 0 ? "Ready" : `${Math.floor(secondsRemaining)}s`}</p>
        </div>
    </div>
}

export default RewardsListEntryComponent;
