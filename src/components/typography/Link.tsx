import React, { FunctionComponent } from 'react';
import LinkProps from '../../interfaces/components/typography/Link';
import classNames from 'classnames';

const Link: FunctionComponent<LinkProps> = ({
    title,
    url,
    classList,
    external,
}) => {
    const baseStyles = (
        'underline'
    );

    const classes = classNames(
        baseStyles,
        classList,
    );

    return (
        <a className={ classes } href={ url } target={ external ? '_blank' : '_self' }>
            { title }
        </a>
    );
};

export default Link;
