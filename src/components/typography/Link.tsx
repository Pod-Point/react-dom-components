import React from 'react';
import classNames from 'classnames';

function Button({
    title,
    url,
    classList,
    external,
}) {
    const baseStyles = (
        'underline'
    );

    const classes = classNames(
        baseStyles,
        classList,
    );

    return (
        <a className={ classes } href={ url } target={ external && '_blank' }>
            { title }
        </a>
    );
}

export default Button;
