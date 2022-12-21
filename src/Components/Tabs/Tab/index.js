import React, { useEffect, useRef, useState } from "react";
import styles from './tab.module.css';

const Tab = ({ children, id, panelId, className, activeClassName, index, focus, active, setActiveFocus }) => {
    const self = useRef();
    const [isInitialised, setIsInitialised] = useState(false);

    const handleKeyUp = (e) => {
        switch (e.key) {
            case "Tab":
                break;
            case "Enter":
            case " ":
                setActiveFocus(index, true, false);
                break;
            case "ArrowLeft":
                setActiveFocus(index - 1, false, true);
                break;
            case "ArrowRight":
                setActiveFocus(index + 1, false, true);
                break;
            case "End":
                setActiveFocus("end", false, true);
                break;
            case "Home":
                setActiveFocus(0, false, true);
                break;
            default:
                break;
        }
    };

    const setCurrentAsActive = () => {
        setActiveFocus(index, true, true);
    };

    useEffect(() => {
        setIsInitialised(true);
    }, []);

    useEffect(() => {
        if (focus && isInitialised) {
            self.current.focus();
        }
    }, [focus]);

    return (
        <button ref={self}
            role="tab"
            type="button"
            id={id}
            onClick={setCurrentAsActive}
            onKeyUp={handleKeyUp}
            className={(`${styles.button || ""} ${active ? className || styles.active : ""}`).trim() || null}
            aria-selected={active}
            aria-controls={panelId}
            tabIndex={focus ? null : -1}
        >
            {children}
        </button>
    );
};

export default Tab;
