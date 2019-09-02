import React, { FunctionComponent } from 'react';
import FieldMessageProps from '../../interfaces/forms/FieldMessage';
import classNames from 'classnames';
import * as styles from './styles';

const FieldMessage: FunctionComponent<FieldMessageProps> = ({
    text,
    classList,
    error,
}) => {
    const classes = classNames(
        styles.fieldMessageBaseStyles,
        error && 'text-red-primary',
        classList,
    );

    return (
        <p className={ classes }>
            { text }
        </p>
    );
}

export default FieldMessage;
