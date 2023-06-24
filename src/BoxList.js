import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes([...boxes, newBox])
    };

    const removeBox = (index) => {
        const updatedBoxes = [...boxes];
        updatedBoxes.splice(index, 1)
        setBoxes(updatedBoxes)
    }

    return(
        <div>
           <h2>Box List</h2>
            {boxes.map((box, index) => (
                <Box
                    key={index}
                    color={box.color}
                    width={box.width}
                    removeBox={() => removeBox(index)}
                />
            ))}
            <NewBoxForm addBox={addBox} />
        </div>
    )
}

export default BoxList;
