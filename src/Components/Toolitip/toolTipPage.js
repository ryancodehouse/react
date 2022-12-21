import React from "react";
import Tooltip from "./index";

function ToolTipPage() {
    return (
        <div>
            <div className="tooltip__container">
                <Tooltip className="tooltip__item" content="Click this for page four" direction="top">
                    <button className="tooltip__button">Top Left</button>
                </Tooltip>
                <Tooltip className="tooltip__item" content="Click this for page four" direction="bottom">
                    <button className="tooltip__button">Top Left</button>
                </Tooltip>
            </div>
            <div className="tooltip__container tooltip__bottom">
                <Tooltip className="tooltip__item" content="Click this for page four" direction="right" delay={3000}>
                    <button className='tooltip__button'>Bottom Left</button>
                </Tooltip>
                <Tooltip className="tooltip__item" content="Click this for page four" direction="right">
                    <button className="tooltip__button">Bottom Left</button>
                </Tooltip>
            </div>
        </div>
    );
}

export default ToolTipPage;