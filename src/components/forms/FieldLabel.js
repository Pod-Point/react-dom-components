import React from 'react';
import * as styles from './styles';

function FieldLabel({
    text,
}) {
    return (
        <p type="text" class={ styles.fieldLabelBaseStyles }>
            { text }
        </p>
    );
}

export default FieldLabel;
