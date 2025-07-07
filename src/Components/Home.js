import Header from './Header';
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import DineOptions from "./DineOptions";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
     <Header></Header>
     <FoodOption></FoodOption>
     <GroceryOption></GroceryOption>
     <DineOptions></DineOptions>
     <Footer></Footer>
    </>
  );
}