import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import "./gtt.css";

const GTT = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const lisentToScroll = () => {
    let heightToHide = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHide) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", lisentToScroll);
    return () => window.addEventListener("scroll", lisentToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="gpt3__gtt-btn">
          <p onClick={scrollToTopBtn}>
            <IoIosArrowRoundUp className="gpt3__gtt-btn_icon" />
          </p>
        </div>
      )}
    </>
  );
};

export default GTT;
