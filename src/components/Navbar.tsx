import {
  Bell,
  Bolt,
  Heart,
  House,
  LogOut,
  Mail,
  Podcast,
  Search,
  SlidersHorizontal,
  User,
  WalletMinimal,
} from "lucide-react";

const Navbar = () => {
  return (
    // {/* three sections  */}
    <div className="h-full grid md:grid-cols-[1fr_3fr_1fr] bg-[#F5F5F5]">
      {/* navbar */}
      <div className="h-full py-6 px-4 flex flex-col ">
        {/* Logo Section */}
        <h1 className="border-0 rounded-lg bg-white text-2xl uppercase font-medium p-4 text-center">
          LOGO
        </h1>

        {/* Navigation Box */}
        <div className="flex flex-col justify-between bg-white pt-6 rounded-lg h-full mt-6">
          <nav>
            <ul className="space-y-6">
              <li className="flex items-center space-x-3 font-semibold text-black border-l-4 border-[#88c2bb] pl-4">
                <House />
                <span>Home</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 pl-4">
                <Bell />
                <span>Notifications</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 pl-4">
                <Heart />
                <span>Shop</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 pl-4">
                <Mail />
                <span>Conversation</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 pl-4">
                <WalletMinimal />
                <span>Wallet</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 pl-4">
                <Podcast />
                <span>Subscription</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 pl-4">
                <User />
                <span>My Profile</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 pl-4">
                <Bolt />
                <span>Settings</span>
              </li>
            </ul>
          </nav>

          {/* Logout Button at the Bottom */}
          <div className="flex items-center space-x-3 text-[#3cd3c1] pl-4 cursor-pointer py-4">
            <LogOut />
            <span>Log out</span>
          </div>
        </div>
      </div>

      {/* feed page */}
      <div className="h-full py-6 px-4">
        <div className="w-full flex items-center bg-white rounded-lg px-6 py-1">
          <div className="w-full flex items-center">
            <Search />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border-0 placeholder:text-gray-400 rounded-lg text-md p-4 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <SlidersHorizontal />
            <span className="text-lg">Filters</span>
          </div>
        </div>
      </div>
      {/* Right Menu | Artist cards */}
      <div className="h-full py-6 px-4">
      <h1 className="border-0 rounded-lg bg-[#88C2BB] text-white text-lg uppercase font-medium p-4 text-center">
          Become a Seller
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
