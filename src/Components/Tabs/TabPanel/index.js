import React from "react";
import styles from './TabPanel.module.css'

const TabPanel = ({ children, id, tabId, className, active }) => {
    return (
        <div role="tabpanel"
            id={id}
            className={styles.panel || null}
            aria-labelledby={tabId}
            tabIndex="0"
            hidden={!active}
        >
            {children}
        </div>
    );
};

export default TabPanel;
