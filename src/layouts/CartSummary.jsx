import React from 'react'
import {  Dropdown , DropdownDivider, Icon} from 'semantic-ui-react'


export default function CartSummary() {
    return (
        <div>

<Dropdown item text='Language' >
                        
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Deutsch</Dropdown.Item>
                            <Dropdown.Item>Türkisch</Dropdown.Item>
                           
                        </Dropdown.Menu>
                    </Dropdown>

        </div>
    )
}
