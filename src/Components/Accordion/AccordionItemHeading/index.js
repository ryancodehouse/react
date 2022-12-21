import React from "react";
// import './accordion-item-heading.css';
import styles from './accordion-item-heading.module.css';

const AccordionItemHeading = ({ children, index, headingId, panelId, className, openClassName, isOpen, toggleOpen }) => {

    const handleOpen = () => {
        toggleOpen(index);
    };

    return (
        <button type="button"
            id={headingId}
            className={`${className || styles.button} ${isOpen ? openClassName || styles.buttonOpen : styles.buttonClosed}`.trim() || null}
            onClick={handleOpen}
            aria-controls={panelId}
            aria-expanded={isOpen}
        >
            {children}
            <span className={isOpen ? styles.arrowUp : styles.arrowDown}></span>
        </button>
    );
};

export default AccordionItemHeading;