import React from 'react';
import _ from 'lodash';
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
                    headings.map(heading => <th className={ classes } key={ _.uniqueId() }>{ heading }</th>)
                }
            </tr>
        </thead>
    );
}

export default TableHeader;
