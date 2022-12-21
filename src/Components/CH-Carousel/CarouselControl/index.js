import React from "react";

const CarouselControl = ({ children, id, className, direction, activeIndex, setActiveIndex }) => {
    const getAriaLabel = () => {
        switch (direction) {
            case "left":
                return "Previous Slide";
            case "right":
                return "Next Slide";
            default:
                return null;
        }
    };

    const handleClick = () => {
        let directionIndex = 0;

        switch (direction) {
            case "left":
                directionIndex = -1;
                break;
            case "right":
                directionIndex = 1;
                break;
            default:
                break;
        }
        setActiveIndex(activeIndex + directionIndex);
    };

    return (
        <button type="button"
            className={className || null}
            aria-controls={`${id}Viewport`}
            aria-label={getAriaLabel()}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default CarouselControl;
