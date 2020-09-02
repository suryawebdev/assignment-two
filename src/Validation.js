import React from 'react';

const validation = (props) => {
    let message = "Text too Long ..!";

    if (props.textLength <= 5) {
        message = "Text too Short ..!";
    }
    return (
        <div>
            <p>{props.textLength}</p>
            <p>{message}</p>
        </div>
    );
};

export default validation;