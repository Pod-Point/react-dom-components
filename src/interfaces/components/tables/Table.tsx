export interface TableProps {
    headings?: string,
    rowData: Array<Array<string>>,
    classList?: string,
}

export interface TableState {
    selectedId: number,
}
