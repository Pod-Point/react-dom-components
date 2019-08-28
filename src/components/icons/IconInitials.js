import React from 'react';
import classNames from 'classnames';

function IconInitials({
    initials,
    bgColour,
    textColour,
    classList,
    size,
}) {
    const baseStyles = (
        'rounded-full text-xs text-center leading-loose'
    );

    const classes = classNames(
        baseStyles,
        textColour,
        !bgColour ? 'bg-green-2' : bgColour,
        classList,
        !size ? 'h-6 w-6' : size,
    );

    return (
        <div class={ classes }>
            { initials }
        </div>
    );
}

export default IconInitials;
