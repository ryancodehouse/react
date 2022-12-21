import React from "react";

const CarouselSlide = ({ children, className, index, indexSize, activeIndex, animated }) => {
    return (
        <div role="group"
            className={className || null}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${indexSize}`}
            hidden={(index !== activeIndex && !animated) ? true : null}
            style={{ minWidth: "100%" }}
        >
            {children}
        </div>
    );
};

export default CarouselSlide;
