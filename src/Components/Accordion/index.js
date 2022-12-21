import React, { cloneElement, useState } from "react";

const AccordionGroup = ({ children }) => {
    const [openItems, setOpenItems] = useState(React.Children.map(children, child => child.props.initialOpen));

    const groupToggleOpen = (index) => {
        setOpenItems(Array(children.length).fill(false).fill(!openItems[index], index, index + 1));
    };

    return (
        React.Children.map(children, (child, i) => cloneElement(child, {
            key: i,
            index: i,
            isGroup: true,
            groupIsOpen: openItems[i],
            groupToggleOpen: groupToggleOpen
        }))
    );
};

export default AccordionGroup;
