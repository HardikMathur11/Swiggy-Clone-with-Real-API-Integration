export default function Footer()
{
    return(
        <div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />

             <div className="px-4 py-10 max-w-7xl mx-auto space-y-12">
      {/* Cities with food delivery */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Cities with food delivery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <p>Order food online in Bangalore</p>
          <p>Order food online in Gurgaon</p>
          <p>Order food online in Hyderabad</p>
          <p>Order food online in Delhi</p>
          <p>Order food online in Mumbai</p>
          <p>Order food online in Pune</p>
          <p>Order food online in Kolkata</p>
          <p>Order food online in Chennai</p>
          <p>Order food online in Ahmedabad</p>
          <p>Order food online in Chandigarh</p>
          <p>Order food online in Jaipur</p>
          <p className="text-orange-600 font-semibold">Show More ▼</p>
        </div>
      </div>


        <div>
        <h2 className="text-2xl font-bold mb-4">Cities with grocery delivery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <p>Order grocery delivery in Bangalore</p>
          <p>Order grocery delivery in Gurgaon</p>
          <p>Order grocery delivery in Hyderabad</p>
          <p>Order grocery delivery in Delhi</p>
          <p>Order grocery delivery in Mumbai</p>
          <p>Order grocery delivery in Pune</p>
          <p>Order grocery delivery in Kolkata</p>
          <p>Order grocery delivery in Chennai</p>
          <p>Order grocery delivery in Ahmedabad</p>
          <p>Order grocery delivery in Chandigarh</p>
          <p>Order grocery delivery in Jaipur</p>
          <p className="text-orange-600 font-semibold">Show More ▼</p>
        </div>
      </div>
    </div>

            <footer className="bg-gray-100 text-gray-800">
      {/* Top Section with Categories */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Company */}
          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-3">Contact us</h3>
            <ul className="space-y-2 text-sm">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>

            <h3 className="font-bold mt-6 mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Available In */}
          <div>
            <h3 className="font-bold mb-3">Available in:</h3>
            <ul className="space-y-2 text-sm">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>
                <select className="mt-2 w-full border px-2 py-1 rounded">
                  <option>685 cities</option>
                  {/* Add more dynamically if needed */}
                </select>
              </li>
            </ul>
          </div>

          {/* Life at Swiggy & Social */}
          <div>
            <h3 className="font-bold mb-3">Life at Swiggy</h3>
            <ul className="space-y-2 text-sm">
              <li>Explore With Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>

            <h3 className="font-bold mt-6 mb-2">Social Links</h3>
            <div className="flex space-x-4 text-lg">
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - App Banner */}
      <div className="mt-8 border-t py-4 text-center text-sm text-gray-500">
        <p>© 2025 Swiggy Limited</p>
      </div>

      {/* App Download Banner */}
      <div className="bg-gray-100">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="Swiggy App Download"
          className="w-full object-cover"
        />
      </div>
    </footer>
        </div>
    )
}