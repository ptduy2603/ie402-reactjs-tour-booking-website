import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function GoToTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isButtonVisible && (
        <button
          onClick={handleButtonClick}
          className="btn font-semibold p-4 fixed right-4 bottom-4 shadow-lg text-5xl hover:bg-[rgba(0,0,0,.1)] rounded-full transition-all"
          aria-label="Go to top"
          title="Go to top"
        >
          <FontAwesomeIcon
            icon={faCircleArrowUp}
            className="text-[--primary-color]"
          />
        </button>
      )}
    </>
  );
}

export default GoToTopButton;
