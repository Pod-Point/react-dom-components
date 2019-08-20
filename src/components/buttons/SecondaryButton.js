import React from 'react';
import Button from './Button';

function SecondaryButton({ ...props }) {

    // title,
    // url,
    // fullwidth,
    // bgClass,
    // bgHoverClass,
    // textColourClass,
    // small,
    // disabled,
    // borderColourClass,
    // onClick,
    return (
        <Button
            bgClass="bg-transparent"
            bgHoverClass="bg-gray-2"
            textColourClass="text-gray-primary"
            borderColourClass="border-gray-primary"
            { ...props }
        />
    )
}

export default SecondaryButton;
