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
        <p type="text" class={ labelClasses }>
            { text }
        </p>
    );
}

export default FieldLabel;
