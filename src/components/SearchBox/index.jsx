import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { tourList } from "~/data";

function SearchBox() {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    // khi ma chua nhan enter ma thoat thi no se mat di du lieu dang nhap
    const handleClickOutside = (event) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current?.contains(event?.target)
      ) {
        setIsVisible(false);
        setInputValue("");
      }
    };
    document?.addEventListener("mousedown", handleClickOutside);
    return () => document?.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value.trim() === "") {
      setIsInputActive(false);
      setIsVisible(e.target.value && suggestions?.length > 0);
    } else {
      const n = tourList.filter((tour) =>
        tour.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setIsVisible(true);
      setSuggestions(n);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const url = `/search?q=${inputValue}`;
      navigate(url);
      setIsVisible(false);
    }
  };

  const handleActivateInput = () => {
    setIsInputActive(true);
  };

  const handleSearchClick = (suggestion) => {
    setInputValue("");
    handleSearchSelect(suggestion);
    setIsVisible(false);
  };

  const handleSearchSelect = (suggestion) => {
    setSuggestions([]);
    //khi click vao day la den trang detail cua san pham
    navigate(`/tour/detail/${suggestion?.id}`);
  };

  const handleFocus = () => {
    if (inputValue && suggestions?.length > 0) {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["search_input"]}>
          <div className="">
            <div className="w-full h-full" ref={dropdownRef}>
              {isInputActive ? (
                <>
                  <div className="w-full h-full">
                    <input
                      type="text"
                      placeholder="Search for tours"
                      autoFocus
                      value={inputValue}
                      className="bg-transparent w-full h-full outline-none"
                      onChange={handleOnChange}
                      onKeyDown={handleKeyDown}
                      onFocus={handleFocus}
                    />
                    {isVisible && (
                      <ul className="absolute z-50 bg-white rounded-md shadow-md">
                        {suggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            onClick={() => handleSearchClick(suggestion)}
                            className=" px-4 py-2 cursor-pointer hover:bg-gray-100"
                          >
                            {suggestion.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              ) : (
                <div
                  onClick={handleActivateInput}
                  className="w-full h-full flex items-center cursor-pointer z-10"
                >
                  <TypeAnimation
                    sequence={[
                      "Nhập tour mà bạn muốn đi",
                      1000,
                      "Dinh Độc Lập",
                      1000,
                      "Phố đi bộ Nguyễn Huệ",
                      1000,
                      "Nhà Thờ Đức Bà",
                      1000,
                      "Thảo Cầm Viên",
                      1000,
                      "Bến Nhà Rồng",
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
        </div>

        <button
          className={styles["search_btn"]}
          onClick={() => navigate(`/search?q=${inputValue}`)}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}

export default SearchBox;
