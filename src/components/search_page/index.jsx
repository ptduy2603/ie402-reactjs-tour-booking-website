import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(
    location.pathname === "/search"
  );
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value.trim() === "") {
      setIsInputActive(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const url = `/search?q=${inputValue}`;
      navigate(url);
    }
  };

  const handleActivateInput = () => {
    setIsInputActive(true);
  };
  return (
    <div className="">
      {/* <div>
        {isSearchPage ? (
          <Link
            to={"/"}
            className="flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md"
          >
            <FaArrowLeft size={20} />
          </Link>
        ) : (
          <button className="flex justify-center items-center h-full p-3 group-focus-within:text-primary-200">
            <IoSearch size={22} />
          </button>
        )}
      </div> */}
      <div className="w-full h-full">
        {isInputActive ? (
          <div className="w-full h-full">
            <input
              type="text"
              placeholder="Search for atta dal and more."
              autoFocus
              value={inputValue}
              className="bg-transparent w-full h-full outline-none"
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        ) : (
          <div
            onClick={handleActivateInput}
            className="w-full h-full flex items-center cursor-pointer z-10"
          >
            <TypeAnimation
              sequence={[
                "Nhập tên địa chỉ mà bạn muốn tới",
                1000,
                "Huế - Đà Nẵng - Hội An",
                1000,
                "Đà Lạt",
                1000,
                "Nha Trang",
                1000,
                "Hội An",
                1000,
                "Quy Nhơn",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
