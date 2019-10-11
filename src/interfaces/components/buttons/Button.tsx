export default interface ButtonProps {
    kind?: 'primary' | 'secondary';
    title: string;
    fullwidth?: boolean;
    small?: boolean;
    disabled?: boolean;
    onClick: any;
    classList?: string;
}
