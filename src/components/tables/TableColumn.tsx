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
        <td className={ classes }>
            { children }
        </td>
    );
}

export default TableColumn;
