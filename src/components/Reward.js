function Reward({ title, image, secondsRemaining }) {
    const styles = { divClasses: 'p-3 my-1 rounded-xl shadow-md flex justify-between items-center min-w-max' }

    return <div className={`${styles.divClasses} ${secondsRemaining <= 0 ? 'bg-green-100' : 'bg-orange-200'}`}>
        <div className='flex space-x-2 mx-1 items-center'>
            <div className="flex-shrink-0">
                <img className="h-6 w-6" src={image} alt="placeholder"></img>
            </div>
            <div className="font-medium text-black truncate">
                {title}
            </div>
        </div>
        <div>
            <p className="font-medium text-sm text-gray-600">
                {secondsRemaining <= 0 ? "Ready" : `${Math.floor(secondsRemaining)}s`}
            </p>
        </div>
    </div>
}

export default Reward;
