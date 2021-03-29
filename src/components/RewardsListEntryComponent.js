import { useEffect, useState } from "react";

function RewardsListEntryComponent({ reward }) {
    const calculateSecondsRemaining = (cooldown_expires_at) => {
        const expires_at_time = new Date(Date.parse(cooldown_expires_at));
        return ((expires_at_time - Date.now()) / 1000);
    }

    const [secondsRemaining, setSecondsRemaining] = useState(calculateSecondsRemaining(reward.cooldown_expires_at));

    useEffect(() => {
        const timer = setTimeout(() => {
            setSecondsRemaining(calculateSecondsRemaining(reward.cooldown_expires_at));
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    })

    const styles = { divClasses: 'p-3 my-1 rounded-xl shadow-md flex justify-between items-center min-w-max' }

    return <div className={`${styles.divClasses} ${secondsRemaining <= 0 ? 'bg-green-100' : 'bg-orange-200'}`}>
        <div className='flex space-x-2 mx-1 items-center'>
            <div className="flex-shrink-0">
                <img className="h-6 w-6" src={reward.image.url_1x} alt="placeholder"></img>
            </div>
            <div className="font-medium text-black truncate">
                {reward.title}
            </div>
        </div>
        <div>
            <p className="font-medium text-sm text-gray-600">
                {secondsRemaining <= 0 ? "Ready" : `${Math.floor(secondsRemaining)}s`}
            </p>
        </div>
    </div>
}

export default RewardsListEntryComponent;
