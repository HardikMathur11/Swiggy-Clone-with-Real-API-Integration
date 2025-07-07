import { Link } from "react-router";
export default function Header() {
    return (
        <header className="bg-[#ff5200] font-serif">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-4 md:py-8 px-4">
                <img className="w-32 h-10 md:w-[160px] md:h-[48px] mb-4 md:mb-0" src='https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png' alt="" />
                <div className="text-white text-sm md:text-base font-bold gap-4 md:gap-10 flex flex-col md:flex-row items-center w-full md:w-auto">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
                    <a href="" className="border-white border-2 rounded-2xl py-2 px-3 md:py-3 md:px-4" target="_blank">Get the App</a>
                    <a className="border-black bg-black py-2 px-3 md:py-3 md:px-4 rounded-2xl" target="_blank" href="">Sign in</a>
                </div>
            </div>
            {/* Hero Section */}
            <div className="pt-8 md:pt-16 pb-4 md:pb-8 relative px-4">
                <img className="h-32 w-20 md:h-110 md:w-60 absolute top-0 left-0 hidden sm:block" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="h-32 w-20 md:h-110 md:w-60 absolute top-0 right-0 hidden sm:block" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                <div className="max-w-full md:max-w-[60%] text-2xl md:text-5xl text-white font-bold container mx-auto text-center z-10 relative">
                    Order Food and groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-full md:max-w-[70%] container mx-auto flex flex-col md:flex-row gap-3 md:gap-5 mt-6 md:mt-10 z-10 relative">
                    <input className="bg-white w-full md:w-[40%] text-base md:text-xl rounded-2xl px-2 py-3 md:py-4 mb-2 md:mb-0" placeholder="Delhi, India" />
                    <input className="bg-white w-full md:w-[55%] text-base md:text-xl rounded-2xl px-2 py-3 md:py-4" placeholder="Search for restaurant and items for more" />
                </div>
            </div>
            {/* Banner Section */}
            <div className="max-w-full md:max-w-[80%] container mx-auto flex flex-col md:flex-row gap-4 md:gap-0 px-4">
                <Link to="/restaurent" className="flex-1 mb-2 md:mb-0">
                    <img className="w-full" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png" alt="" />
                </Link>
                <a href="https://www.swiggy.com/dineout" className="flex-1">
                    <img className="w-full" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/8fa21ee7-affd-43a4-b14d-978c9b372159_DO2BU.png" alt="" />
                </a>
            </div>
        </header>
    );
}
