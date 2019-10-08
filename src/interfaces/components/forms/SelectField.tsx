export default interface SelectFieldProps {
    label?: string;
    message?: string;
    disabled?: boolean;
    error?: string;
    classList?: string;
    data: string[];
    onChange: any;
    selectedOption: string;
}
