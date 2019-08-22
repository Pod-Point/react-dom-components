import React from 'react';
import classNames from 'classnames';
import * as styles from './styles';

function Tag({
    type,
    title,
    classList,
}) {
    let typeStyles;

    switch (type) {
        case 'primary':
            typeStyles = styles.primaryStyles
            break;
        case 'secondary':
            typeStyles = styles.secondaryStyles
            break;
        default:
            typeStyles = null
    }

    var classes = classNames(
        styles.baseStyles,
        typeStyles,
        classList,
    );

    return (
        <div class={ classes }>
            { title }
        </div>
    )
}

export default Tag;
