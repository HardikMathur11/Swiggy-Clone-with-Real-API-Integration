import {dineoutRestaurants } from "../utils/DinningData";
import DineCard from "./DineCard";
export default function DineOptions ()
{
    return (
        <>
        <div className="w-[80%] mx-auto mt-20 mb-20">
            <p className="text-2xl font-bold">Discover best restaurents on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-12 p-4 bg-gray-100">
                {
                    dineoutRestaurants.map((RestData) => {
                        return <DineCard key={RestData?.info.id} RestData={RestData}></DineCard>
                    })
                }

            </div>
        </div>
        </> 
    )
}