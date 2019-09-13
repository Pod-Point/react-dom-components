import React, { FunctionComponent } from 'react';
import ButtonProps from '../../interfaces/components/buttons/Button';
import classNames from 'classnames';
import * as styles from './styles';

const Button: FunctionComponent<ButtonProps> = ({
    kind,
    title,
    fullwidth,
    small,
    disabled,
    onClick,
    classList,
}) => {
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
        kindStyles && kindStyles.baseStyles,
        small
            ? `${styles.smallStyles.pY} ${styles.smallStyles.fontSize}`
            : `${styles.defaultStyles.pY} ${styles.defaultStyles.fontSize}`,
        fullwidth && 'w-full',
        disabled && `bg-grey-1 hover:bg-grey-1 cursor-default`,
        classList,
    );

    return (
        <button className={ classes } onClick={ onClick } disabled={ disabled }>
            { title }
        </button>
    );
}

export default Button;
