import React, { FunctionComponent } from 'react';
import InputFieldProps from '../../interfaces/components/forms/InputField';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import FieldMessage from './FieldMessage';
import * as styles from './styles';

const InputField: FunctionComponent<InputFieldProps> = ({
    id,
    type,
    placeholder,
    label,
    message,
    disabled,
    error,
    classList,
}) => {
    const inputClasses = classNames(
        styles.inputBaseStyles,
        styles.textInputBaseStyles,
        disabled && 'bg-grey-2',
        error && 'border-red-primary',
        classList,
    );

    return (
        <div>
            <FieldLabel
                text={ label }
                classList="mb-2"
            />
            <input
                id={ id }
                type={ type || 'text' }
                className={ inputClasses }
                placeholder={ placeholder }
                disabled={ disabled }
            />
            <FieldMessage
                text={ message }
                error={ error }
                classList="mt-2"
            />
        </div>
    );
}

export default InputField;
