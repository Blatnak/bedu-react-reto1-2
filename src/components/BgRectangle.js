import React from "react";
import Rectangle from './Rectangle';

const BgRectangle = () => {
    return (
        <div className='bgRectangle'>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
        </div>
    )
};

export default BgRectangle;