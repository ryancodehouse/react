import React, { cloneElement, useState } from "react";
import "./index.css";

const Carousel = ({ children, id, className, ariaLabel, loop, animated }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const indexSize = React.Children.map(children, child => {
        if (typeof child.type === "function" && child.type.name === "CarouselViewport") {
            return child.props.children;
        }
    }).length;

    const controlActiveIndex = (index) => {
        const wrapIndex = () => {
            if (index >= indexSize) {
                return 0;
            } else if (index < 0) {
                return indexSize - 1;
            }
            return index;
        };

        const clampIndex = () => {
            if (index >= indexSize) {
                return indexSize - 1;
            } else if (index < 0) {
                return 0;
            }
            return index;
        };

        setActiveIndex(loop ? wrapIndex(index) : clampIndex(index));
    };

    const clonedChildren = React.Children.map(children, (child, index) => {
        return cloneElement(child, {
            key: index,
            id: id,
            indexSize: indexSize,
            activeIndex: activeIndex,
            setActiveIndex: controlActiveIndex,
            animated: animated
        });
    });

    return (
        <section id={id}
            className={`carousel ${className || ""}`.trim()}
            aria-roledescription="carousel"
            aria-label={ariaLabel}
        >
            {clonedChildren}
        </section>
    );
};

export default Carousel;
