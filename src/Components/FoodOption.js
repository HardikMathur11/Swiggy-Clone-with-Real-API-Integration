import { imageGridCards } from '../utils/FoodData';
import FoodCard from './FoodCard';

export default function FoodOption() {
    return (

    <>
    <div className="max-w-[80%] container mx-auto flex flex-wrap mt-20 gap-x-15 pl-15 ">
{
    imageGridCards.map((FoodData) => {
      return   <FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>
})
}
    </div>
    </>
    )
}