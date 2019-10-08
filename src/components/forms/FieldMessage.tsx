import React, { FunctionComponent } from 'react';
import FieldMessageProps from '../../interfaces/components/forms/FieldMessage';
import classNames from 'classnames';
import * as styles from './styles';

const FieldMessage: FunctionComponent<FieldMessageProps> = ({
    copy,
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
            { copy }
        </p>
    );
};

export default FieldMessage;
