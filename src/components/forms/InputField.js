import React from 'react';
import * as styles from './styles';

function InputField({
    placeholder,
}) {
    return (
        <input
            type="text"
            class={ styles.inputBaseStyles }
            placeholder={ placeholder }
        />
    );
}

export default InputField;
