import React from 'react';
import classNames from 'classnames';

function Tag({
    title,
    bgClass,
    textColourClass,
    borderColourClass,
}) {
    const baseStyles = (
        "inline-block px-2 rounded text-center font-sans border-solid border text-xs uppercase"
    );

    var classes = classNames(
        baseStyles,
        bgClass ? bgClass : 'bg-green-primary',
        textColourClass ? textColourClass : 'text-white',
        borderColourClass ? borderColourClass : 'border-green-primary',
    );

    return (
        <div className={ classes }>
            { title }
        </div>
    )
}

export default Tag;
