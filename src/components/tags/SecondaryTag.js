import React from 'react';
import Tag from './Tag';

function SecondaryTag({ ...props }) {
    return (
        <Tag
            bgClass="bg-transparent"
            textColourClass="text-gray-primary"
            borderColourClass="border-gray-primary"
            { ...props }
        />
    )
}

export default SecondaryTag;
