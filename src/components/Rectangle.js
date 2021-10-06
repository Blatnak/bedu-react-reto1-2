import React from "react";
import GrayRectangle from "./GrayRectangle";
import Circle from "./Circle";

const Rectangle = () => {
    return (
        <div className='rectangle'>
            <GrayRectangle/>
            <Circle/>
            <GrayRectangle/>
        </div>
    )
};

export default Rectangle