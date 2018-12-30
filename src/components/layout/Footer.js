import React from 'react';
import './css/footer.css';
import { NavLink} from 'react-router-dom';
import {FormGroup,FormControl, ControlLabel} from 'react-bootstrap'
import { FaFacebook,FaInstagram, FaTwitterSquare} from "react-icons/fa";
const Footer = ()=>{
        const thisYearsDate = new Date().getFullYear()
    console.log(thisYearsDate)
        return(

            <footer>
                <section id='subscribe-wrapper'>
                    <form>
                        <h4>Subscribe to stay current on the latest from us</h4>
                        <FormGroup
                            controlId="formBasicText"
                        >
                            <ControlLabel>Email:</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="blank@blank.com"
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </form>
                        <h4>Spacepost LLC &copy; {thisYearsDate}</h4>
                </section>
                <section id='social-wrapper'>
                        <h2>Connect With Us</h2>
                        <article id='social-network'>
                            <a className='social-gliph' href='https://www.facebook.com/'><FaFacebook/></a>
                            <a className='social-gliph' href='https://www.facebook.com/'><FaInstagram/></a>
                            <a className='social-gliph' href='https://www.facebook.com/'><FaTwitterSquare/></a>
                        </article>

                </section>
                <section id='footer-links'>
                        <NavLink className='footer-nav-link' to='/'>Home</NavLink>
                        <NavLink className='footer-nav-link' to='/spacepostlabs'>Spacepost Labs</NavLink>
                        <NavLink className='footer-nav-link' to='/about'>About</NavLink>
                        <NavLink className='footer-nav-link' to='/contact'>Contact</NavLink>
                </section>

            </footer>
        )


}

export default Footer;
