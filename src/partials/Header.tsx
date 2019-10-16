import React, { FunctionComponent } from 'react';
import HeaderProps from '../interfaces/partials/Header';
import Container from '../components/layout/Container';
import Button from '../components/buttons/Button';
import IconInitials from '../components/icons/IconInitials';

const Header: FunctionComponent<HeaderProps> = ({
    projectName,
    userName,
    buttonText,
    buttonClick,
}) => {
    return (
        <header className="bg-grey-dark">
            <Container>
                <div className="py-2 pr-4 flex flex-1 self-center">
                    <div>
                        <h2 className="text-white text-lg font-medium">Pod Point</h2>
                        { projectName && <h3 className="text-grey-2 text-base font-medium">{ projectName }</h3> }
                    </div>
                    { buttonText && (
                        <div className="pl-2 self-center">
                            <Button
                                kind="primary"
                                title={ buttonText }
                                small
                                onClick={ buttonClick }
                            />
                        </div>
                    )}
                </div>
                { userName && (
                    <div className="py-2 self-center flex content-between">
                        <p className="pr-2 text-white">{ userName.firstName }</p>
                        <IconInitials
                            initials={ `${userName.firstName.charAt(0)}${userName.lastName.charAt(0)}` }
                        />
                    </div>
                )}
            </Container>
        </header>
    );
};

export default Header;
