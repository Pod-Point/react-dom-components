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
        <thead className="w-full">
            <tr className="w-full">
                {
                    headings.map(heading => <th className={ classes }>{ heading }</th>)
                }
            </tr>
        </thead>
    );
}

export default TableHeader;
