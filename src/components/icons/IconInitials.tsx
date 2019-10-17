import React, { FunctionComponent } from 'react';
import IconInitialsProps from '../../interfaces/components/icons/IconInitials';
import classNames from 'classnames';

const IconInitials: FunctionComponent<IconInitialsProps> = ({
    initials,
    bgColour,
    textColour,
    classList,
    size,
}) => {
    const baseStyles = (
        'rounded-full text-xs text-center leading-loose'
    );

    const classes = classNames(
        baseStyles,
        textColour,
        !bgColour ? 'bg-green-2' : bgColour,
        classList,
        !size ? 'h-6 w-6' : size,
    );

    return (
        <div className={ classes }>
            { initials }
        </div>
    );
};

export default IconInitials;
