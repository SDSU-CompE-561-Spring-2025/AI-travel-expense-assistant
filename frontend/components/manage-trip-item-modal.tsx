"use client"

import React, { useState } from "react";
import DatePicker from "react-datepicker"
import { CalendarIcon, ArrowRightIcon, ChevronDown  } from "lucide-react"

type ManageTripItemModalProps = {
    onClose: () => void;
};

export default function ManageTripItemModal({ onClose }: ManageTripItemModalProps){
    const [itemTitle, setItemTitle] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [activityType, setActivityType] = useState("");
    const [activityCost, setActivityCost] = useState("");
    const [activityDescription, setActivityDescription] = useState("");
    const [activityExternalLink, setActivityExternalLink] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Trip item created: ", {itemTitle});

        // TODO: Backend API call

        onClose();
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Manage Trip Item</h2>

            {/* ────────────── ITEM TITLE ────────────── */}
            <div className="flex flex-col gap-0.5">
                <h3 className="text-s">Item Title</h3>
                <input 
                    type="text"
                    value={itemTitle}
                    onChange={(e) => setItemTitle(e.target.value)}
                    placeholder="Item Title"
                    required 
                    className="block w-full bg-gray-100 border-0 border-b border-gray-300 p-2 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
                <p className="text-xs text-gray-400">ex: Day trip to Hong Kong Disneyland!</p>
            </div >

            {/* ────────────── ACTIVITY DATE ────────────── */}
            <div className="flex flex-col gap-0.5">
                <h3 className="text-s">Activity Date</h3>

                <div className="mt-2 flex items-center">
                    {/* Start Date */}
                    <div className="flex items-center bg-gray-100 border-0 border-b border-gray-300 p-2 placeholder-gray-400 focus:outline-none focus:border-gray-500 ">
                        <DatePicker 
                            selected={startDate}
                            onChange={(d) => setStartDate(d)}
                            dateFormat="MMM d, YYY"
                            placeholderText="Start Date"
                            required 
                            className="w-32 bg-transparent focus:outline-none"
                        />
                        <CalendarIcon className="w-5 h-5 text-gray-500 mr-2"/>
                    </div>
                    {/* Arrow Icon */}
                    <div className="p-2 rounded">
                        <ArrowRightIcon className="w-5 h-5 text-gray-500" />
                    </div>

                    {/* End Date */}
                    <div className="flex items-center bg-gray-100 border-0 border-b border-gray-300 p-2 placeholder-gray-400 focus:outline-none focus:border-gray-500 ">
                        <DatePicker 
                            selected={endDate}
                            onChange={(d) => setEndDate(d)}
                            dateFormat="MMM d, YYY"
                            placeholderText="End Date"
                            required 
                            className="w-32 bg-transparent focus:outline-none"
                        />
                        <CalendarIcon className="w-5 h-5 text-gray-500 mr-2"/>
                    </div>

                </div>
            </div>

            {/* ────────────── ACTIVITY TYPE & COST ────────────── */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-s">Activity Type</h3>
                    <div className="relative">
                        <select
                            id="activityType"
                            value={activityType}
                            onChange={(e) => setActivityType(e.target.value)}
                            required
                            className="
                                block w-full
                                bg-gray-100
                                border-0 border-b border-gray-300
                                p-2 pr-8
                                text-gray-700
                                focus:outline-none focus:border-gray-500
                                appearance-none
                            "
                        >
                            <option value="" disabled>Select one...</option>
                            <option value="flight">Flight</option>
                            <option value="hotel">Hotel</option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="attraction">Attraction</option>
                            <option value="activity">Activity</option>
                            <option value="drink">Drink</option>
                            <option value="coffee">Coffee</option>
                            <option value="other">Other...</option>
                        </select>

                        <ChevronDown size={16} className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                    </div>
                </div >

                {/* Activity Cost */}
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-s">Activity Cost</h3>
                    <div className="relative">
                    <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                            id="activityCost"
                            type="number"
                            min="0"
                            step="0.01"
                            inputMode="decimal"
                            placeholder="0.00"
                            required
                            value={activityCost}
                            onKeyDown={(e) => {
                                if (["-", "e", "E", "+"].includes(e.key)) e.preventDefault();
                            }}
                            onChange={(e) => {
                                const v = e.target.value;
                                if (/^\d*\.?\d{0,2}$/.test(v)) {
                                setActivityCost(v);
                                }
                            }}
                            className="
                                block w-full
                                bg-gray-100
                                border-0 border-b border-gray-300
                                p-2 pl-6
                                text-gray-700
                                placeholder-gray-400
                                focus:outline-none focus:border-gray-500
                            "
                        >
                        </input>
                    </div>
                </div>
            </div>

            {/* ────────────── ACTIVITY DESCRIPTION ────────────── */}
            <div className="flex flex-col gap-0.5">
                <h3 className="text-s">Activity Description</h3>
                
                <textarea
                    id="activityDescription"
                    rows={3}
                    value={activityDescription}
                    onChange={(e) => setActivityDescription(e.target.value)}
                    placeholder="Short description of this activity..."
                    className="
                        block w-full
                        bg-gray-100
                        border-0 border-b border-gray-300
                        p-2
                        placeholder-gray-400
                        focus:outline-none focus:border-gray-500
                        resize-y
                    "
                />
            </div>

            {/* ────────────── EXTERNAL WEBSITE LINK ────────────── */}
            <div className="flex flex-col gap-0.5">
                <h3 className="text-s">External Website Link</h3>
                
                <input
                    id="activityExternalLink"
                    type="url"
                    value={activityExternalLink}
                    onChange={(e) => setActivityExternalLink(e.target.value)}
                    placeholder="https://www.disneyland.hk"
                    pattern="https?://.*"
                    className="
                        block w-full
                        bg-gray-100
                        border-0 border-b border-gray-300
                        p-2
                        placeholder-gray-400
                        focus:outline-none focus:border-gray-500
                    "
                />
            </div>

            {/* ────────────── CANCEL & SAVE BUTTONS ────────────── */}
            <div className="flex justify-end gap-2">
                <button
                type="button"
                onClick={onClose}
                className="
                px-6 
                py-2 
                border-2 
                border-purple-500 
                text-purple-500 
                rounded-lg
                bg-white 
                hover:bg-purple-50 
                transition-colors
                focus:outline-none
                focus:ring-2
                focus:ring-purple-300"
                >
                Cancel
                </button>

                <button
                type="submit"
                className="px-6 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500"
                >
                Save
                </button>                    
            </div>
        </form>
        </>
    );
} 