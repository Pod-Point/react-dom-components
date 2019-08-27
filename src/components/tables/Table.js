import React from 'react';
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({
    headings,
    rowData,
}) {
    return (
        <table class="w-full">
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
