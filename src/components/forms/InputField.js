import React from 'react';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import FieldMessage from './FieldMessage';
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
        styles.textInputBaseStyles,
        disabled && 'bg-grey-2',
        error && 'border-red-primary',
        classList,
    );

    return (
        <>
            <FieldLabel
                text={ label }
                classList="mb-2"
            />
            <input
                type="text"
                class={ inputClasses }
                placeholder={ placeholder }
                disabled={ disabled }
            />
            <FieldMessage
                text={ message }
                error={ error }
                classList="mt-2"
            />
        </>
    );
}

export default InputField;
