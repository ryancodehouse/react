import React from "react";

const CarouselPagination = ({ className, id, indexSize, setActiveIndex }) => {
    const handleClick = (e) => {
        setActiveIndex(Number(e.target.dataset.slide));
    };

    return (
        <div className={className || null}>
            {Array(indexSize).fill(true).map((item, index) => {
                return (
                    <button key={index}
                        type="button"
                        aria-controls={`${id}Viewport`}
                        aria-label={`Slide item ${index + 1} of ${indexSize}`}
                        onClick={handleClick}
                        data-slide={index}
                    ></button>
                );
            })}
        </div>
    );
};

export default CarouselPagination;
