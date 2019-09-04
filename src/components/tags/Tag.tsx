import React from 'react';
import classNames from 'classnames';
import * as styles from './styles';

function Tag({
    kind,
    title,
    classList,
}) {
    let kindStyles;

    switch (kind) {
        case 'primary':
            kindStyles = styles.primaryStyles;
            break;
        case 'secondary':
            kindStyles = styles.secondaryStyles;
            break;
        default:
            kindStyles = null;
    }

    const classes = classNames(
        styles.baseStyles,
        kindStyles,
        classList,
    );

    return (
        <div className={ classes }>
            { title }
        </div>
    );
}

export default Tag;
