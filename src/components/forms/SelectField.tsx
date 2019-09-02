import React, { FunctionComponent } from 'react';
import SelectFieldProps from '../../interfaces/components/forms/SelectField';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import FieldMessage from './FieldMessage';
import * as styles from './styles';

// TODO: Add selected item? for default value
const SelectField: FunctionComponent<SelectFieldProps> = ({
    label,
    message,
    disabled,
    error,
    classList,
    data,
    onChange,
}) => {
    const selectClasses = classNames(
        styles.inputBaseStyles,
        styles.selectFieldBaseStyles,
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
            <div className="relative">
                <select
                    className={ selectClasses }
                    disabled={ disabled }
                    onChange={ onChange }
                >
                    { data.map(option => <option>{ option }</option>) }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7"><path d="M 12 1 L 1 1 L 6.5 6.5 L 12 1 L 6.5 6.5" fill="rgb(25, 25, 26)" stroke="rgb(25, 25, 26)" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
            <FieldMessage
                text={ message }
                error={ error }
                classList="mt-2"
            />
        </div>
    );
}

export default SelectField;
