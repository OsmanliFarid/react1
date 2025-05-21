import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaSmile, FaRocket } from "react-icons/fa";

const Header = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [cart, Setcart] = useState([]);
  useEffect(() => {
    axios.get(url + "/cart").then(({ data }) => {
      Setcart(data);
    });
  }, []);

  return (
    <>
      <div className="bg-[#F1F6F1]">
        <div className="w-[80vw] m-[auto]">
          <div className="grid grid-cols-1 xl:grid-cols-2 pt-[80px] items-center ">
            <div className="">
              <h1 className="text-[48px] font-[600] text-black text-center xl:text-start">
                eStartup
              </h1>
              <p className="max-w-sm md:max-w-md  m-[auto] xl:m-[0px] xl:max-w-xl text-[#898686] p-[15px_0px]">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div className="flex items-center justify-center xl:justify-start gap-6">
                <a
                  href="#"
                  className="bg-[#84CC73] p-[10px_30px] rounded-[30px] text-[#fff] flex justify-center items-center"
                >
                  Get Started
                </a>
                <a href="#" className="text-[#84CC73] font-[700]">
                  Watch video
                </a>
              </div>
            </div>
            <div className="mt-[50px] xl:mt-[0px]">
              <img src="./public/Background.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 xl:gap-y-0 xl:grid-cols-4 mt-[50px] justify-items-center">
            {cart?.map(({ id, title, icon }) => {
              return (
                <>
                  <div
                    key={id}
                    className="w-sm sm:md xl:w-[261px] h-[271.8px] bg-[#fff] rounded-[15px] text-black hover:text-white hover:bg-green-700 duration-1000"
                  >
                    <h1 className="font-[500] text-[20px] flex justify-center items-center h-full">
                      {title}
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
