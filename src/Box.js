import React from 'react';

function Box({ color, width, height, removeBox }) {
    const boxStyle = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
    };

    const handleRemoveBox = () => {
        removeBox();
    }
    return (
        <div className="box" style={boxStyle}>
            <button className="remove-btn" onClick={handleRemoveBox}>
                X
            </button>
        </div>
    )
}


export default Box
