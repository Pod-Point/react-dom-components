import React, { FunctionComponent } from 'react';
import CheckboxProps from '../../interfaces/components/forms/Checkbox';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import * as styles from './styles';

const CheckboxField: FunctionComponent<CheckboxProps> = ({
    label,
    error,
    classList,
    onChange,
    checked,
}) => {
    const checkboxClasses = classNames(
        'form-checkbox',
        styles.inputBaseStyles,
        styles.checkboxFieldBaseStyles,
        classList,
        error && 'text-red-primary',
    );

    return (
        <div className="flex">
            <input
                type="checkbox"
                className={ checkboxClasses }
                onChange={ onChange }
                checked={ checked }
            />
            { label && <FieldLabel
                copy={ label }
                classList="flex-1"
                error={ error }
            /> }
        </div>
    );
};

export default CheckboxField;
