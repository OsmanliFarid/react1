import axios from "axios";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Navbar = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [navbar, SetNavbar] = useState([]);
  useEffect(() => {
    axios.get(url + "/navbar").then(({ data }) => {
      SetNavbar(data);
    });
  }, []);
  const [bars, Setbars] = useState(true);
  const Show = () => {
    Setbars(!bars);
  };
  const [click, Setclick] = useState(1);
  const ShowClick = (id) => {
    Setclick(id);
  };
  return (
    <>
      <div className="container w-[80vw] m-[auto]">
        <div className="flex items-center h-[80px] justify-between">
          <div className="Logo">
            <h1 className="flex">
              <span className="text-[#71C55D] text-[30px] font-[700]">e</span>
              <h1 className="text-[#000] text-[30px] font-[700]">Startup</h1>
            </h1>
          </div>
          <div className="">
            <div className="links hidden md:flex gap-5 md:black">
              {navbar?.map(({ id, title, href, drop }) => {
                return (
                  <a
                    key={id}
                    href={href}
                    className={`${
                      click === id ? "text-[#8DD17D] " : "text-black "
                    }font-[600] font-sans text-[18px]`}
                    onClick={() => ShowClick(id)}
                  >
                    {title}
                    {drop}
                  </a>
                );
              })}
            </div>
            <div className="bars">
              <FaBars className="md:hidden" onClick={Show} />
            </div>
          </div>
        </div>
        <div
          className={`${
            bars ? "opacity-100" : " opacity-0"
          } flex flex-col fixed right-0 bg-white p-[10px] w-[25%] md:hidden`}
        >
          {navbar?.map(({ id, title, href, drop }) => {
            return (
              <a
                key={id}
                href={href}
                className="font-[400] font-sans text-[18px]"
              >
                {title}
                {drop}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Navbar;
