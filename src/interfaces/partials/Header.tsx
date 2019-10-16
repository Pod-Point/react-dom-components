export default interface HeaderProps {
    projectName?: string;
    userName: {
        firstName: string,
        lastName: string,
    };
    buttonText?: string;
    buttonClick?: any;
}
