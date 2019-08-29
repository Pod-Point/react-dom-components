import React from 'react';
import classNames from 'classnames';
import FieldLabel from './FieldLabel';

function ToggleSwitch({
    label,
    active,
    onChange,
}) {
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
        <div class="flex">
            <label class={ wrapperClasses }>
                <input
                    type="checkbox"
                    class={ checkboxBaseStyles }
                    checked={ active }
                    onChange={ onChange }
                />
                <span class={ switchClasses }></span>
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
