import React from 'react';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import FieldInformation from './FieldInformation';
import * as styles from './styles';

function SelectField({
    placeholder,
    label,
    message,
    disabled,
    error,
    classList,
    data,
    onChange,
}) {
    const selectClasses = classNames(
        styles.inputBaseStyles,
        styles.selectFieldBaseStyles,
        disabled && 'bg-grey-2',
        error && 'border-red-primary',
        classList,
    );

    return (
        <>
            <FieldLabel text={ label } />
            <select
                type="text"
                class={ selectClasses }
                placeholder={ placeholder }
                disabled={ disabled }
                onChange={ onChange }
            >
                { data.map(option => <option>{ option }</option>) }
            </select>
            <FieldInformation text={ message } error={ error } />
        </>
    );
}

export default SelectField;
