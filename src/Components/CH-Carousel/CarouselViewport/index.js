import React, { cloneElement } from "react";
import "./index.css";

const CarouselViewport = ({ children, id, animated, className, indexSize, activeIndex, setActiveIndex }) => {
    const clonedChildren = React.Children.map(children, (child, index) => {
        return cloneElement(child, {
            key: index,
            index: index,
            indexSize: indexSize,
            activeIndex: activeIndex,
            setActiveIndex: setActiveIndex,
            animated: animated
        });
    });

    return (
        <div id={`${id}Viewport`}
            className={`carousel__viewport ${animated ? "carousel__viewport--animated" : ""} ${className || ""}`.trim()}
            aria-live="polite"
            style={animated ? { transform: `translate3d(-${activeIndex}00%, 0px, 0px)` } : null}
        >
            {clonedChildren}
        </div>
    );
};

export default CarouselViewport;
