import React, { useEffect, useRef, useState } from "react";
import "./tooltip.css";

const topDirection = "top";
const rightDirection = "right";
const leftDirection = "left";
const bottomDirection = "bottom";
let timeout;
let tooltipRect;

const Tooltip = (props) => {

    const [active, setActive] = useState(false);
    const [tooltipDirection, setToolTipDirection] = useState(topDirection);
    const tooltipRef = useRef();

    useEffect(() => {
        getPosition(tooltipRef.current);
    }, [active]);

    const getPosition = (tooltip) => {

        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (tooltip) {
            tooltipRect = tooltip.getBoundingClientRect();
        }

        if (tooltipRect.top < 0) {
            setToolTipDirection(bottomDirection);
        }

        if (tooltipRect.bottom > viewportHeight) {
            setToolTipDirection(topDirection);
        }

        if (tooltipRect.right > viewportWidth) {
            setToolTipDirection(leftDirection);
        }

        if (tooltipRect.left < 0) {
            setToolTipDirection(rightDirection);
        }
    }

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
            getPosition(tooltipRef.current);
        }, props.delay || 400);
    };

    const hideTip = () => {
        setActive(false);
        clearInterval(timeout);
    };

    return (
        <div
            aria-live="polite"
            className={props.className}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
            onFocus={showTip}
            onBlur={hideTip}
        >
            {props.children}
            <div className={`tooltip ${!active && "tooltip__hidden"} ${tooltipDirection || props.topDirection}`} aria-label="tooltip" ref={tooltipRef}>
                {props.content}
            </div>
        </div>
    );
};

export default Tooltip;
