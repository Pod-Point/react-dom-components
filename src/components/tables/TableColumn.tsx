import React, { FunctionComponent } from 'react';
import TableColumnProps from '../../interfaces/components/tables/TableColumn';
import classNames from 'classnames';
import columnBaseStyles from './styles';

const TableColumn: FunctionComponent<TableColumnProps> = ({
    children,
    classList,
}) => {
    const classes = classNames(
        columnBaseStyles,
        classList,
    );

    return (
        <td className={ classes }>
            { children }
        </td>
    );
}

export default TableColumn;
