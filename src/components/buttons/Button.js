import React from 'react';
import classNames from 'classnames';
import styles from './styles';

function Button({
    type,
    title,
    fullwidth,
    small,
    disabled,
    onClick,
    classList,
    bgHoverClass,
}) {
    let typeStyles;

    switch (type) {
        case 'primary':
            typeStyles = styles.primaryStyles.baseStyles
            break;
        case 'secondary':
            typeStyles = styles.secondaryStyles.baseStyles
            break;
        default:
            typeStyles = null
    }

    var classes = classNames(
        styles.baseStyles,
        typeStyles,
        small ?
            `${ styles.smallStyles.pY } ${ styles.smallStyles.fontSize }` :
            `${ styles.defaultStyles.pY } ${ styles.defaultStyles.fontSize }`,
        fullwidth && 'w-full',
        !disabled && `hover:${ bgHoverClass ? bgHoverClass : typeStyles.bgHover }`,
        disabled && 'cursor-default',
        classList,
    );

    return (
        <button className={ classes } onClick={ onClick } disabled={ disabled }>
            { title }
        </button>
    )
}

export default Button;
