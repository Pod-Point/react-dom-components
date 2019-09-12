import React, { FunctionComponent } from 'react';
import HeaderProps from '../interfaces/partials/Header';
import Container from '../components/layout/Container';
import Button from '../components/buttons/Button';
import IconInitials from '../components/icons/IconInitials';

const Header: FunctionComponent<HeaderProps> = ({
    projectName,
    userName,
}) => {
    return (
        <header className="bg-grey-dark">
            <Container>
                <div className="py-2 pr-4 self-center">
                    <h2 className="text-white text-lg font-medium">Pod Point</h2>
                    <h3 className="text-grey-2 text-base font-medium">{ projectName }</h3>
                </div>
                <div className="py-2 flex-1 self-center">
                    <Button
                        kind="primary"
                        title="Add RFID Cards"
                        small
                        onClick={ false }
                    />
                </div>
                <div className="py-2 self-center flex">
                    <p className="pr-2 text-white">{ userName.firstName }</p>
                    <IconInitials
                        initials={ `${userName.firstName.charAt(0)}${userName.lastName.charAt(0)}` }
                    />
                </div>
            </Container>
        </header>
    );
}

export default Header;
