import React from 'react';
import classNames from 'classnames';
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({
    headings,
    rowData,
    classList,
}) {
    const baseClasses = (
        'w-full'
    );

    const classes = classNames(
        baseClasses,
        classList,
    );

    return (
        <table class={ classes }>
            <TableHeader headings={ headings } />
            {
                rowData.map((data, key) => <TableRow key={ `row-${key}` } rowData={ data } />)
            }
        </table>
    );
}

export default Table;
