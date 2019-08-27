import React from 'react';

function TableHeader({
    headings,
}) {
    const columnClasses = (
        'py-2 uppercase text-sm text-grey-primary text-left'
    );

    return (
        <thead class="w-full">
            <tr class="w-full">
                {
                    headings.map(heading => <th class={ columnClasses }>{ heading }</th>)
                }
            </tr>
        </thead>
    );
}

export default TableHeader;
