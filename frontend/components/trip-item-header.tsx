import React from "react";

const TripItemHeader = () => {
    return(
        <div className="flex border-b-2 border-gray-300 mb-2">
            <div className="w-32 bg-gray-100 p-4 border-r flex items-center justify-center font-semibold">
            Day
            </div>
            <div className="flex-1 p-4 border-r flex items-center justify-center font-semibold">
            Activity
            </div>
            <div className="flex-1 p-4 border-r flex items-center justify-center font-semibold">
            Transportation
            </div>
            <div className="flex-1 p-4 flex items-center justify-center font-semibold">
            Accommodation
            </div>
        </div>
    )
}

export default TripItemHeader;