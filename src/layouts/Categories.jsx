import { Container, Menu, Icon} from 'semantic-ui-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {

    return (
        <div>
            <Container  >
                <Menu pointing vertical  icon="labeled" vertical style={{marginLeft:"20px"}}>

                    <Menu.Item name='Job Seekers'as={NavLink} to = "/jobSeeker"> <Icon circular inverted size ="huge" name="user circle" /> Job Seekers</Menu.Item> 
                    <Menu.Item as={NavLink} to = "/employers"> <Icon circular inverted name="users"/> Employers </Menu.Item>
                    <Menu.Item as={NavLink} to="/employee"> <Icon circular inverted name="user"/> Employee </Menu.Item>
                    <Menu.Item as={NavLink} to="/jobAdvertisement"> <Icon circular inverted name ="address card"/> Job Advertisements </Menu.Item> 

                </Menu>
            </Container>
        </div>
    )
}
