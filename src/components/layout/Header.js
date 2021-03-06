import React from 'react';
import {Navbar,NavItem,Nav,NavDropdown} from 'react-bootstrap';
import {Link,NavLink}  from 'react-router-dom';
import './css/header.css'
import spaceman from '../../pages/Home/images/Spaceman.png'
class HeaderLayout extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(

            <header>
                    <Navbar id={'navbar'} inverse collapseOnSelect>
                        <div>
                            <Navbar.Header>
                                <Navbar.Brand id='navbar-brand-container'>
                                    <NavLink to="/" className="header-brand-link">
                                        <div id='brand-container'>
                                            <span ><img id='image-container' src={spaceman} alt=""/></span><p id='nav-brand-p'>Spacepost</p>
                                        </div>

                                    </NavLink>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav pullRight>
                                    <NavItem eventKey={1} className={'header-nav-item'} to="/spacepostlabs">
                                        <NavLink activeStyle={{color: '#D0D0D0',textDecoration: 'none'}}  to="/spacepostlabs"  className={'header-nav-link'}>Spacepost Labs</NavLink>
                                    </NavItem>
                                    <NavItem eventKey={2} className={'header-nav-item'} to="/about">
                                        <NavLink activeStyle={{color: '#D0D0D0',textDecoration: 'none'}}  to="/about" className={'header-nav-link'}> About</NavLink>
                                    </NavItem>
                                    <NavItem eventKey={1}  className={'header-nav-item'} to="/contact" >
                                        <NavLink activeStyle={{color: '#D0D0D0',textDecoration: 'none'}}  to="/contact" className={'header-nav-link'}>Contact</NavLink>

                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </div>

                    </Navbar>
            </header>
        )

    }



}
export default HeaderLayout;
