import { Link } from "react-router-dom";
import MilkDrink from "../../assets/images/product/sua_dau.webp";
import { IconHeart } from "../icons";

const CardItem = () => {
  return (
    <div className="w-full max-w-[250px]">
      <div>
        <Link to="#" className="block w-[250px] h-[250px]">
          <img src={MilkDrink} alt="" className="w-full h-full object-cover" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h4 className="hover:text-primary">
          <Link to="#">Sinh tố dâu tây</Link>
        </h4>
        {/* Price */}
        <div>
          <div className="flex items-center justify-center gap-x-3 mb-2">
            <span className="text-red-600">42.000đ</span>
            <span className="text-gray-500">
              <del>52.000đ</del>
            </span>
          </div>
          <div className="flex items-center gap-x-5">
            <button className="py-2 px-4 bg-primary text-white rounded-xl">
              Add to cart
            </button>
            <span className="p-3 bg-primary text-white rounded-lg">
              <IconHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
