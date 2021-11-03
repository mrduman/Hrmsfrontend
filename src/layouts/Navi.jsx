import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';


export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>

            <Menu inverted size='top'>
                <Container>
                    <Menu.Item name='home'> <Icon name="home" />  Home  </Menu.Item>
                    <Menu.Item >
                        <Dropdown pointing="top left">
                            <Dropdown.Menu>
                                <Dropdown.Item text="Our History" icon="history" />
                                <Dropdown.Item text="Location" icon="location arrow" />
                                <Dropdown.Item text="Contact" icon="phone square" />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Icon name="globe" />  About us  </Menu.Item>

                    <Menu.Menu position='right'>
                        <CartSummary />

                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}
