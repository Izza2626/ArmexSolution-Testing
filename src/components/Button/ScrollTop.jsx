import { FaArrowUp } from "react-icons/fa";
import "./ScrollTop.css";

const ScrollTop = () => {

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    document.body.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scroll-top-btn" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;