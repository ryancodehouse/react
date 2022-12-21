import React, { cloneElement, useState } from "react";

const AccordionItem = ({ children, index, id, isGroup, groupIsOpen, groupToggleOpen, initialOpen }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        React.Children.map(children, (child, i) => cloneElement(child, {
            key: i,
            index: index,
            headingId: `${id}Heading`,
            panelId: `${id}Panel`,
            isOpen: isGroup ? groupIsOpen : isOpen,
            toggleOpen: isGroup ? groupToggleOpen : toggleOpen
        }))
    );
};

export default AccordionItem;
