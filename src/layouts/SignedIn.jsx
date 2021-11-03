import React from 'react'
import { Dropdown, DropdownMenu, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>

                <Image avatar spaced="right" src =""/>
                <Dropdown pointing = "top left" text = "Ömer">
                    <Dropdown.Menu>
                        <Dropdown.Item text = "My Information" icon="info"/>
                        <Dropdown.Item text = "Sign Out" icon ="sign-out" onClick={signOut}/>
                    </Dropdown.Menu>
                </Dropdown>


            </Menu.Item>
        </div>
    )
}
