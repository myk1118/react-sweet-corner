import React from 'react';

const Money = (props) => {
    return (
        <div>
            ${(props.money / 100).toFixed(2)}
        </div>
    )
}

export default Money;
