import React from 'react';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import FieldInformation from './FieldInformation';
import * as styles from './styles';

function InputField({
    placeholder,
    label,
    message,
    disabled,
    error,
    classList,
}) {
    const inputClasses = classNames(
        styles.inputBaseStyles,
        disabled && 'bg-grey-2',
        error && 'border-red-primary',
        classList,
    );

    return (
        <>
            <FieldLabel text={ label } />
            <input
                type="text"
                class={ inputClasses }
                placeholder={ placeholder }
                disabled={ disabled }
            />
            <FieldInformation text={ message } error={ error } />
        </>
    );
}

export default InputField;
