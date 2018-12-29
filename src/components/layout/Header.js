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
                                <Link to="/" className="header-brand-link"> <p id='nav-brand-p'>Spacepost</p></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} className={'header-nav-item'}>
                                    <Link to="/spacepostlabs"  className={'header-nav-link'}>Spacepost Labs</Link>
                                </NavItem>
                                <NavItem eventKey={2} href="/about" className={'header-nav-item'}>
                                    <Link to="/about" className={'header-nav-link'}> About</Link>
                                </NavItem>
                                <NavItem eventKey={1} href="/contact" className={'header-nav-item'}>
                                    <Link to="/contact" className={'header-nav-link'}>Contact</Link>

                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </header>
        )

    }



}
export default HeaderLayout;
