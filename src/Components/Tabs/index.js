import React, { cloneElement, useState } from "react";
import styles from './tabs.module.css';

const Tabs = ({ children, id, ariaLabel }) => {
    const pairsCount = Math.floor(children.filter(child => typeof child.type === "function" && (child.type.name === "Tab" || child.type.name === "TabPanel")).length / 2);
    // First tab is active and focused by default
    const [activeFocused, setActiveFocused] = useState({
        active: Array(pairsCount).fill(false).fill(true, 0, 1),
        focus: Array(pairsCount).fill(false).fill(true, 0, 1)
    });

    const wrapIndex = (index) => {
        if (index >= pairsCount) {
            return 0;
        } else if (index < 0 || index === "end") {
            return pairsCount - 1;
        }
        return index;
    };

    const setActiveFocus = (index, active, focus) => {
        const wrappedIndex = wrapIndex(index);
        const shouldChangeActive = (active && activeFocused.active.indexOf(true) !== wrappedIndex);
        const shouldChangeFocus = (focus && activeFocused.focus.indexOf(true) !== wrappedIndex);

        if (!shouldChangeActive && !shouldChangeFocus) {
            return;
        }

        // New state for active or focus will always be an array of false (deactivating other tabs), and a single true at the index
        const newState = Array(pairsCount).fill(false).fill(true, wrappedIndex, wrappedIndex + 1);

        setActiveFocused({
            ...activeFocused,
            ...(shouldChangeActive && { active: newState }),
            ...(shouldChangeFocus && { focus: newState })
        });
    };

    // Separate Tabs and TabPanels in 'children'
    const [tabs, tabPanels] = children.reduce((acc, child, index) => {
        if (typeof child.type !== "function") {
            return acc;
        }
        if (child.type.name === "Tab") {
            const accTabLength = acc[0].length;

            acc[0].push(cloneElement(child, {
                key: index,
                id: `${id}Tab${accTabLength}`,
                panelId: `${id}Panel${accTabLength}`,
                index: accTabLength,
                active: activeFocused.active[accTabLength],
                focus: activeFocused.focus[accTabLength],
                setActiveFocus: setActiveFocus
            }));
        }
        if (child.type.name === "TabPanel") {
            const accTabPanelLength = acc[1].length;

            acc[1].push(cloneElement(child, {
                key: index,
                id: `${id}Panel${accTabPanelLength}`,
                tabId: `${id}Tab${accTabPanelLength}`,
                active: activeFocused.active[accTabPanelLength],
            }));
        }
        return acc;
    }, [[], []]);

    return (
        <React.Fragment>
            <div className={styles.tabs} role="tablist" aria-label={ariaLabel}>
                {tabs}
            </div>
            {tabPanels}
        </React.Fragment>
    );
};

export default Tabs;
