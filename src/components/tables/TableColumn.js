import React from 'react';
import classNames from 'classnames';
import * as styles from './styles';

function TableColumn({
    children,
    classList,
}) {
    const classes = classNames(
        styles.columnBaseStyles,
        classList,
    );

    return (
        <td class={ classes }>
            { children }
        </td>
    );
}

export default TableColumn;
