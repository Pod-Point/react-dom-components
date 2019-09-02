import React, { FunctionComponent } from 'react';
import ButtonProps from '../../interfaces/buttons/Button';
import classNames from 'classnames';
import * as styles from './styles';

const Button: FunctionComponent<ButtonProps> = ({
    type,
    title,
    fullwidth,
    small,
    disabled,
    onClick,
    classList,
    bgHoverClass,
}) => {
    let typeStyles;

    switch (type) {
        case 'primary':
            typeStyles = styles.primaryStyles;
            break;
        case 'secondary':
            typeStyles = styles.secondaryStyles;
            break;
        default:
            typeStyles = null;
    }

    const classes = classNames(
        styles.baseStyles,
        typeStyles && typeStyles.baseStyles,
        small
            ? `${styles.smallStyles.pY} ${styles.smallStyles.fontSize}`
            : `${styles.defaultStyles.pY} ${styles.defaultStyles.fontSize}`,
        fullwidth && 'w-full',
        !disabled && `hover:${bgHoverClass || typeStyles.bgHover}`,
        disabled && 'cursor-default',
        classList,
    );

    return (
        <button className={ classes } onClick={ onClick } disabled={ disabled }>
            { title }
        </button>
    );
}

export default Button;
