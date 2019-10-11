import React, { FunctionComponent } from 'react';
import TableColumnProps from '../../interfaces/components/tables/TableColumn';
import classNames from 'classnames';
import * as styles from './styles';

const TableColumn: FunctionComponent<TableColumnProps> = ({
    children,
    classList,
}) => {
    const classes = classNames(
        styles.columnBaseStyles,
        classList,
    );

    return (
        <td className={ classes }>
            { children }
        </td>
    );
}

export default TableColumn;
