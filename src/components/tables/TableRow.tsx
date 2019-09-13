import React, { FunctionComponent } from 'react';
import { TableRowProps } from '../../interfaces/components/tables/TableRow';
import _ from 'lodash';
import classNames from 'classnames';
import TableColumn from './TableColumn';

const TableRow: FunctionComponent<TableRowProps> = ({
    rowData,
    selected,
    handleClick,
}) => {
    const classes = classNames(
        selected && 'bg-grey-4'
    );

    return (
        <tr className="w-full cursor-pointer" onClick={ handleClick }>
            {
                rowData.map(data =>
                    <TableColumn
                        classList={ classes }
                        key={ _.uniqueId() }
                    >
                        { data }
                    </TableColumn>)
            }
        </tr>
    );
}

export default TableRow;
