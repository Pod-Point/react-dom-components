const baseStyles = (
    "px-6 rounded text-center font-sans"
);

const defaultStyles = {
    pY: 'py-3',
    fontSize: 'text-base',
};

const primaryStyles = {
    baseStyles: 'bg-green-primary text-white',
    bgHover: 'bg-green-1'
};

const secondaryStyles = {
    baseStyles: 'bg-transparent text-gray-primary border-gray-primary border-solid border rounded-md',
    bgHover: 'bg-gray-2'
}

const smallStyles = {
    pY: 'py-2',
    fontSize: 'text-sm',
};

export default {
    baseStyles,
    defaultStyles,
    primaryStyles,
    secondaryStyles,
    smallStyles
};
