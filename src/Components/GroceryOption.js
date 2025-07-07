import {GrocerGridCard} from "../utils/Grocery.js"
import GroceryCard from "./GroceryCard.js"

export default function GroceryOption()

{
    return(
        <>
        <div className=" w-[80%] container mx-auto mt-20">
            <h1 className="font-bold  text-2xl font-serif">Shop Groceries on Instamart</h1>
         < div className="container mx-auto mt-5 flex  flex-nowrap overflow-x-auto gap-3"> 
         {/* //default flex:wrap hota h tailwind me isliye nowrap likha */}
        {
         GrocerGridCard.map((FoodData) => {
              return   <GroceryCard key={FoodData.id} FoodData={FoodData}></GroceryCard>
        })
        }
            </div>
            </div>
        </>
    )
}