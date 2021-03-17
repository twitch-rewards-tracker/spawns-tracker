const LoadingMessageComponent = () => (
    <div>
        <div class="p-2 items-center leading-none flex">
            <span class="font-bold text-gray-600 text-left flex-auto loading">Waiting for redemptions</span>
        </div>
    </div>

)

const PlaceholderRewardsComponent = () => (
    <div class="p-6 max-w-xs mx-4 my-2 rounded-xl shadow-md bg-blue-50">
        <div class="animate-pulse flex self-auto items-center space-x-4">
            <div class="flex-shrink-0">
                <div class="rounded-full bg-blue-200 h-12 w-12" />
            </div>
            <div class="space-y-2">
                <div class="h-4 w-24 bg-blue-200 rounded" />
                <div class="h-4 w-48 bg-blue-200 rounded" />
            </div>

        </div>
    </div>
)


const RewardsLoadingComponent = () => (
    <div class="flex h-screen justify-center items-center">
        <div class="flex flex-col items-center">
            <LoadingMessageComponent />
            <PlaceholderRewardsComponent />
        </div>

    </div>

)

export default RewardsLoadingComponent;
