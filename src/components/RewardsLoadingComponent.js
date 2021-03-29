const LoadingMessageComponent = () => (
    <div>
        <div className="p-2 items-center leading-none flex">
            <span className="font-semibold font-sans text-gray-300 text-left flex-auto loading">
                Waiting for redemptions
            </span>
        </div>
    </div>

)

const PlaceholderRewardsComponent = () => (
    <div className="p-6 max-w-xs mx-4 my-2 rounded-xl shadow-md bg-blue-300">
        <div className="animate-pulse flex self-auto items-center space-x-4">
            <div className="flex-shrink-0">
                <div className="rounded-full bg-blue-100 h-12 w-12" />
            </div>
            <div className="space-y-2">
                <div className="h-4 w-24 bg-blue-100 rounded" />
                <div className="h-4 w-48 bg-blue-100 rounded" />
            </div>
        </div>
    </div>
)


const RewardsLoadingComponent = () => (
    <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col items-center">
            <LoadingMessageComponent />
            <PlaceholderRewardsComponent />
        </div>
    </div>
)

export default RewardsLoadingComponent;
