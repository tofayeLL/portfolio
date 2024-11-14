import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {



    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button when page is scrolled down
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };





    return (
        <div>
            <div>
                {
                    isVisible && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-10  lg:right-4 right-0 bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-900 transition"
                        >
                            <FaArrowUp size={22} />
                        </button>
                    )}


            </div>

        </div>
    );
};

export default ScrollToTop;