import React from 'react';
import classNames from 'classnames';
import * as styles from './styles';

function FieldInformation({
    text,
    error,
    classList,
}) {
    const classes = classNames(
        styles.fieldInformationBaseStyles,
        error && 'text-red-primary',
        classList,
    );

    return (
        <p type="text" class={ classes }>
            { text }
        </p>
    );
}

export default FieldInformation;
