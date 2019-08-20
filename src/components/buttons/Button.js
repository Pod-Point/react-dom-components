import React from 'react';
import classNames from 'classnames';

function Button({
    title,
    fullwidth,
    bgClass,
    bgHoverClass,
    textColourClass,
    small,
    disabled,
    borderColourClass,
    onClick,
}) {
    const baseStyles = (
        "px-6 rounded text-center font-sans"
    );

    var classes = classNames(
        baseStyles,
        fullwidth && 'w-full',
        bgClass ? bgClass : 'bg-green-primary',
        textColourClass ? textColourClass : 'text-white',
        small ? 'py-2 text-sm' : 'py-3 text-base',
        borderColourClass && `${ borderColourClass } border-solid border rounded-md`,
        !disabled && `hover:${ bgHoverClass ? bgHoverClass : 'bg-green-1' }`,
        disabled && 'cursor-default',
    );

    return (
        <button className={ classes } onClick={ onClick } disabled={ disabled }>
            { title }
        </button>
    )
}

export default Button;
