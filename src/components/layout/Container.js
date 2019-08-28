import React from 'react';
import classNames from 'classnames';

function Container({
    children,
    classList,
}) {
    const baseStyles = 'container mx-auto px-2 flex content-center';

    const classes = classNames(
        baseStyles,
        classList,
    );

    return (
        <div class={ classes }>
            { children }
        </div>
    );
}

export default Container;
