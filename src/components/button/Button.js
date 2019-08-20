import React from 'react';
import classNames from 'classnames';

function Button({
    title,
    url,
    fullwidth,
    bgClass,
    bgHoverClass,
    textColourClass,
    small,
}) {
    const baseStyles = (
        "py-3 px-6 rounded text-center cursor-pointer font-sans"
    );

    var classes = classNames(
        baseStyles,
        fullwidth ? 'block' : 'inline-block',
        bgClass ? bgClass : 'bg-green-primary',
        textColourClass ? textColourClass : 'text-white',
        `hover:${bgHoverClass ? bgHoverClass : 'bg-green-1'}`,
    );

    return (
        <a href={ url } className={ classes }>
            { title }
        </a>
    )
}

export default Button;
