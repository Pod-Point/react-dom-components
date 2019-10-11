import React, { FunctionComponent } from 'react';
import SelectFieldProps from '../../interfaces/components/forms/SelectField';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import FieldMessage from './FieldMessage';
import * as styles from './styles';
import { IconDropdown } from '../../assets';

const SelectField: FunctionComponent<SelectFieldProps> = ({
    label,
    message,
    disabled,
    error,
    classList,
    data,
    onChange,
    selectedOption,
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
            {
                label && (
                    <FieldLabel
                        copy={ label }
                        classList="mb-2"
                    />
                )
            }
            <div className="relative">
                <select
                    className={ selectClasses }
                    disabled={ disabled }
                    onChange={ onChange }
                >
                    { data.map((option) => <option selected={ selectedOption === option }>{ option }</option>) }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <img src={IconDropdown} alt="arrow-dropdown" />
                </div>
            </div>
            {
                message && (
                    <FieldMessage
                        copy={ message }
                        error={ error }
                        classList="mt-2"
                    />
                )
            }
        </div>
    );
};

export default SelectField;
