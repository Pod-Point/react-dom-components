export interface TableProps {
    headings?: Array<string>,
    rowData: Array<Array<string>>,
    classList?: string,
}

export interface TableState {
    selectedId: number | null,
}
