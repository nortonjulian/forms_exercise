import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
    const [color, setColor] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { color, width, height }
        addBox(newBox);
        setColor('')
        setWidth('')
        setHeight('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorInput">Color:</label>
            <input
             type="text"
             id="colorInput"
             value={color}
             onChange={(e) => setColor(e.target.value)}
            />

            <label htmlFor="sizeInput">Width:</label>
            <input
             type="text"
             id="widthInput"
             value={width}
             onChange={(e) => setWidth(e.target.value)}
            />

            <label htmlFor="sizeInput">Height:</label>
            <input
             type="text"
             id="heightInput"
             value={height}
             onChange={(e) => setHeight(e.target.value)}
            />

            <button type="submit">Add Box</button>
        </form>
    );
}

export default NewBoxForm;
