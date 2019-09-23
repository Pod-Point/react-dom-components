import React, { FunctionComponent } from 'react';
import FieldLabelProps from '../../interfaces/components/forms/FieldLabel';
import classNames from 'classnames';
import * as styles from './styles';

const FieldLabel: FunctionComponent<FieldLabelProps> = ({
    copy,
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
            { copy }
        </label>
    );
}

export default FieldLabel;
