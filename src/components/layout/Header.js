import React from 'react';
import {Navbar,NavItem,Nav,NavDropdown} from 'react-bootstrap';
import './css/header.css'
class HeaderLayout extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(

            <header>
                    <Navbar id={'navbar'} inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                
                                <a href="#brand">SpacePost</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    Projects
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    About
                                </NavItem>
                                <NavItem eventKey={1} href="#">
                                    Team
                                </NavItem>
                                <NavItem eventKey={1} href="#">
                                    Contact
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </header>
        )

    }



}
export default HeaderLayout;