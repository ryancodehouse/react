import React, { useEffect, useRef, useState } from "react";
// import "./index.css";
import styles from './accordion-item-panel.module.css';


const AccordionItemPanel = ({ children, panelId, headingId, className, openClassName, isOpen }) => {
    const self = useRef();
    const [isInitialised, setIsInitialised] = useState(false);

    const setHeight = (val) => {
        self.current.style.height = val;
    };

    const setVisibility = (val) => {
        self.current.style.visibility = val;
    };

    const handleTransitionEnd = () => {
        if (isOpen) {
            setHeight("auto");
        } else {
            setVisibility("hidden");
        }
    };

    useEffect(() => {
        setIsInitialised(true);
    }, []);

    useEffect(() => {
        setVisibility(isOpen ? "visible" : "hidden");
        if (isOpen) {
            setHeight("auto");
        }
    }, [isInitialised]);

    useEffect(() => {
        setHeight(self.current.scrollHeight + "px");
        if (isOpen) {
            setVisibility("visible");
        } else {
            /* eslint-disable no-unused-expressions */
            self.current.clientWidth;
            // "auto" -> "Npx" -> cause reflow and push the below to the end of the callstack to force close transition -> "null"
            setHeight(null);
        }
    }, [isOpen]);

    return (
        <div ref={self}
            id={panelId}
            className={`${styles.panel} ${className || ""} ${isOpen ? openClassName || "" : ""}`.trim() || null}
            onTransitionEnd={handleTransitionEnd}
            role="region"
            aria-labelledby={headingId}
        >
            {children}
        </div>
    );
};

export default AccordionItemPanel;
