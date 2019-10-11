export interface TableProps {
    headings?: string[];
    rowData: string[][];
    classList?: string;
}

export interface TableState {
    selectedId: number | null;
}
