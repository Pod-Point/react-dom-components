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
                <tr class="bg-green-1">
                    <td colspan="3">
                        <table class="w-full">
                            <TableRow rowData={ rowData } />
                        </table>
                    </td>
                </tr>
                <tr class="bg-green-1">
                    <td colspan="3">
                        <table class="w-full">
                            <TableRow rowData={ rowData } />
                        </table>
                    </td>
                </tr>
                <tr class="bg-green-1">
                    <td colspan="3">
                        <table class="w-full">
                            <TableRow rowData={ rowData } />
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
