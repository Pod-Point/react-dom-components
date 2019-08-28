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
            <tbody>
                <TableRow rowData={ rowData } />
                <TableRow rowData={ rowData } selected />
                <TableRow rowData={ rowData } />
            </tbody>
        </table>
    );
}

export default Table;
