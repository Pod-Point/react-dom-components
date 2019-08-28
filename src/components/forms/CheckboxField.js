import React from 'react';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';
import * as styles from './styles';

function CheckboxField({
    label,
    error,
    classList,
    onChange,
    checked,
}) {
    const checkboxClasses = classNames(
        'form-checkbox',
        styles.inputBaseStyles,
        styles.checkboxFieldBaseStyles,
        classList,
        error && 'text-red-primary',
    );

    return (
        <div class="flex">
            <input
                type="checkbox"
                class={ checkboxClasses }
                onChange={ onChange }
                checked={ checked }
            />
            <FieldLabel
                text={ label }
                classList="flex-1"
                error={ error }
            />
        </div>
    );
}

export default CheckboxField;
