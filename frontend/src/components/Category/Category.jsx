import { useRef } from "react";
import { AiOutlineFolderOpen, AiOutlineSave } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FiStar } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  { name: "HB Select", count: 19, icon: <FiStar /> },
  { name: "Apparels & Accessories", count: 12998, icon: "👗" },
  { name: "Automobiles", count: 13728, icon: "🚗" },
  { name: "Beauty & Health", count: 13348, icon: "💄" },
  { name: "Books & Learning", count: 2156, icon: "📚" },
  { name: "Business & Industrial", count: 11507, icon: "🏢" },
  { name: "Computers & Peripherals", count: 47621, icon: "💻" },
  { name: "Electronics, TVs, & More", count: 31056, icon: "📺" },
  { name: "Events & Happenings", count: 388, icon: "🎉" },
];

const trendingItems = [
  {
    name: "Bakery Outlet Space in...",
    price: "₹ 25,000",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Property on sale Godawari...",
    price: "₹ 3,90,00,000",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Ghar Bhada Ma Commercial...",
    price: "₹ 2,80,000",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Dio scooter",
    price: "₹ 85,000",
    condition: "Used",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "2022 skoda kushaq style...",
    price: "₹ 47,50,000",
    condition: "Like New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  {
    name: "Sleeping 18 kg Full Doll Sex...",
    price: "₹ 41,999",
    condition: "Brand New",
    imageUrl:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/120347/yamaha-ray-right-side-view2.jpeg?isig=0&q=80",
  },
  
];

function Category() {
    const gridRef = useRef(null); // Ref to the grid container

    // Function to handle scrolling left
    const scrollLeft = () => {
      if (gridRef.current) {
        gridRef.current.scrollBy({
          left: -200, // Adjust scroll distance as needed
          behavior: 'smooth' // Optional smooth scrolling
        });
      }
    };
  
    // Function to handle scrolling right
    const scrollRight = () => {
      if (gridRef.current) {
        gridRef.current.scrollBy({
          left: 200, // Adjust scroll distance as needed
          behavior: 'smooth' // Optional smooth scrolling
        });
      }
    };
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex border-4">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto border-r-4 border-gray-300">
        <div className="text-lg font-bold mb-4 flex items-center space-x-2 sticky top-0 bg-gray-100  p-2 border-b-4 border-gray-300">
          <AiOutlineFolderOpen size={24} />
          <div>Category</div>
        </div>
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex items-center justify-between p-2 hover:bg-gray-200 rounded cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                {category.icon} <span>{category.name}</span>
              </span>
              <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 overflow-y-auto border-l-4 border-gray-300">
        {/* Top Navigation */}
        <div className="sticky top-0 bg-white  p-2 border-b-4 border-gray-300">
          <div className="flex items-center space-x-10">
            <div className="flex items-center  space-x-10 ">
              <div className="text-lg w-[130px] ">Top Categories</div>
            </div>
            <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
              <button className="px-2 py-2 border rounded">
                Electronics, TVs & More
              </button>
              <button className="px-2 py-2 border rounded">
                Mobile & Accessories
              </button>

              <button className="px-2 py-2 border rounded">
                Mobile Phones & Accessories
              </button>
              <button className="px-2 py-2 border rounded">
                Apparels & Accessories
              </button>
              <button className="px-2 py-2 border rounded">
                Beauty & Health
              </button>
              <button className="px-2 py-2 border rounded">
                Books & Learning
              </button>
              <button className="px-2 py-2 border rounded">
                Business & Industrial
              </button>
              <button className="px-2 py-2 border rounded">
                Computers & Peripherals
              </button>
              <button className="px-2 py-2 border rounded">
                Events & Happenings
              </button>
            </div>
            <div className="flex items-center flex-row space-x-1">
              <AiOutlineSave size={24} />
              <div className="text-lg ">saved</div>
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <BiTrendingUp size={24} />
            <div>Trending</div>
          </h2>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <div>Boost Ads</div>
          </h2>
        </div>

        <div className="overflow-x-auto">
      <div className="flex items-center">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={scrollLeft} // Call scrollLeft function on click
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <div ref={gridRef} className="grid grid-cols-6 gap-4">
          {trendingItems.map((item, index) => (
            <div
              key={index}
              className="border p-2 rounded shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-gray-600">{item.condition}</div>
              <div className="text-lg font-bold">{item.price}</div>
            </div>
          ))}
        </div>
        <button
          className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={scrollRight} // Call scrollRight function on click
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Category;
