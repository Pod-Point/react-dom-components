export default interface ButtonProps {
    type: 'primary' | 'secondary',
    title: string,
    fullwidth: boolean,
    small: boolean,
    disabled: boolean,
    onClick: any,
    classList: string,
    bgHoverClass: string,
}
