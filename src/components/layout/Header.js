import React from 'react';
import {Navbar,NavItem,Nav,NavDropdown} from 'react-bootstrap';
import {Link}  from 'react-router-dom';
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
                                <Link to="#brand"id={'header-nav-brand'} ><p >Spacepost</p></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#" className={'header-nav-link'}>
                                    Projects
                                </NavItem>
                                <NavItem eventKey={2} href="#" className={'header-nav-link'}>
                                    About
                                </NavItem>
                                <NavItem eventKey={1} href="#" className={'header-nav-link'}>
                                    Team
                                </NavItem>
                                <NavItem eventKey={1} href="#" className={'header-nav-link'}>
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
