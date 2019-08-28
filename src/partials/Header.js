import React from 'react';
import Container from '../components/layout/Container';
import Button from '../components/buttons/Button';
import IconInitials from '../components/icons/IconInitials';

function Header({
    projectName,
    userName,
}) {
    return (
        <header class="bg-grey-dark">
            <Container>
                <div class="py-2 pr-4 self-center">
                    <h2 class="text-white text-lg font-medium">Pod Point</h2>
                    <h3 class="text-grey-2 text-base font-medium">{ projectName }</h3>
                </div>
                <div class="py-2 flex-1 self-center">
                    <Button
                        type="primary"
                        title="Add RFID Cards"
                        small
                    />
                </div>
                <div class="py-2 self-center flex">
                    <p class="pr-2 text-white">{ userName.firstName }</p>
                    <IconInitials
                        initials={ `${userName.firstName.charAt(0)}${userName.lastName.charAt(0)}` }
                    />
                </div>
            </Container>
        </header>
    );
}

export default Header;
