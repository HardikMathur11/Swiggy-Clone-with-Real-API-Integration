 export default function GroceryCard({FoodData}) {
    return(
        <div className="flex-none"> 
        {/* //to 0 shrink , no shrink and no grow
        // //flex:none is used to prevent the flex item from growing or shrinking, keeping it at its original size. */}
        <a href={FoodData?.action?.link}>
        <img className=" w-40 h-50 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+FoodData?.imageId} alt="image" />
        </a>
        <h2 className="text-center font-medium">{FoodData?.action?.text}</h2>
        </div>
    )
}

// React Fragment (<>...</>) is valid — but…
// Fragment ka matlab hota hai:
// “Don't render an extra DOM node, but return multiple elements.”

// Lekin jab tu use karta hai fragments:


// <>
//   <a>...</a>
//   <h2>...</h2>
// </>
// To ye sibling elements browser me aise render hote hain, aur agar parent container ne flex, grid, overflow, ya gap-x-5 lagaya hai, to layout break ho jaata hai.