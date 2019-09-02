import React, { FunctionComponent } from 'react';
import FieldLabelProps from '../../interfaces/forms/FieldLabel';
import classNames from 'classnames';
import * as styles from './styles';

const FieldLabel: FunctionComponent<FieldLabelProps> = ({
    text,
    classList,
    error,
}) => {
    const labelClasses = classNames(
        styles.fieldLabelBaseStyles,
        classList,
        error && 'text-red-primary',
    );

    return (
        <label className={ labelClasses }>
            { text }
        </label>
    );
}

export default FieldLabel;
