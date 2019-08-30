import React from 'react';
import classNames from 'classnames';
import * as styles from './styles';

function TableHeader({
    headings,
}) {
    const columnClasses = (
        'uppercase text-sm text-grey-primary'
    );

    const classes = classNames(
        styles.columnBaseStyles,
        columnClasses
    );

    return (
        <thead class="w-full">
            <tr class="w-full">
                {
                    headings.map(heading => <th class={ classes }>{ heading }</th>)
                }
            </tr>
        </thead>
    );
}

export default TableHeader;
