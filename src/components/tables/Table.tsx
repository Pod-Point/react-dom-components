import React, { FunctionComponent } from 'react';
import TableProps from '../../interfaces/components/tables/Table'
import classNames from 'classnames';
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table: FunctionComponent<TableProps> = ({
    headings,
    rowData,
    classList,
}) => {
    const baseClasses = (
        'w-full'
    );

    const classes = classNames(
        baseClasses,
        classList,
    );

    return (
        <table className={ classes }>
            <TableHeader headings={ headings } />
            {
                rowData.map((data, key) => <TableRow key={ `row-${key}` } rowData={ data } />)
            }
        </table>
    );
}

export default Table;
