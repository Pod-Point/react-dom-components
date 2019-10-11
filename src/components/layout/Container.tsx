import React, { FunctionComponent } from 'react';
import ContainerProps from '../../interfaces/components/layout/Container';
import classNames from 'classnames';

const Container: FunctionComponent<ContainerProps> = ({
    children,
    classList,
}) => {
    const baseStyles = 'container mx-auto px-2 flex content-center';

    const classes = classNames(
        baseStyles,
        classList,
    );

    return (
        <div className={ classes }>
            { children }
        </div>
    );
};

export default Container;
