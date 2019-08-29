import React from 'react';
import classNames from 'classnames';
import * as styles from './styles';

function FieldLabel({
    text,
    classList,
    error,
}) {
    const labelClasses = classNames(
        styles.fieldLabelBaseStyles,
        classList,
        error && 'text-red-primary',
    );

    return (
        <label type="text" class={ labelClasses }>
            { text }
        </label>
    );
}

export default FieldLabel;
