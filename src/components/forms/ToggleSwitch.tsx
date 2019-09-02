import React, { FunctionComponent } from 'react';
import ToggleSwitchProps from '../../interfaces/components/forms/ToggleSwitch';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';

const ToggleSwitch: FunctionComponent<ToggleSwitchProps> = ({
    label,
    active,
    onChange,
}) => {
    const wrapperBaseStyles = 'inline-block relative w-10 h-6 mr-2';
    const checkboxBaseStyles = 'w-0 h-0 opacity-0';

    const wrapperClasses = classNames(
        wrapperBaseStyles,
    );

    const switchClasses = classNames(
        'toggle-switch',
        active && 'toggle-switch-active',
    );

    return (
        <div className="flex">
            <label className={ wrapperClasses }>
                <input
                    type="checkbox"
                    className={ checkboxBaseStyles }
                    checked={ active }
                    onChange={ onChange }
                />
                <span className={ switchClasses }></span>
            </label>
            { label && <FieldLabel
                text={ label }
                classList="flex-1"
            />
            }
        </div>
    );
}

export default ToggleSwitch;
