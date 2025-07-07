import { useSelector } from "react-redux";
import { Link } from "react-router"; // ✅ use react-router-dom instead of "react-router"

export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
            alt="Swiggy"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="text-orange-500 font-extrabold text-2xl sm:text-3xl tracking-tight">
            Swiggy
          </span>
        </Link>

        {/* Cart */}
        <Link
          to="/Checkout"
          className="relative text-lg sm:text-xl font-medium text-gray-700 hover:text-orange-500 transition duration-200"
        >
          Cart
          <span className="ml-1 bg-orange-500 text-white text-xs sm:text-sm px-2 py-0.5 rounded-full font-semibold">
           {`(${counter})`}
          </span>
        </Link>
      </div>
    </header>
  );
}
