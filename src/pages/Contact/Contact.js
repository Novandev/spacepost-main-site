import React from 'react';
import './Contact.css'
import { FormGroup,FormControl,ControlLabel,Button } from 'react-bootstrap';
import { FaPhoneSquare,} from "react-icons/fa";
import { MdLocationOn,MdEmail } from "react-icons/md";

class Contact extends React.Component{




    render(){

        return(
            <section id='contact-section'>
                <h3 id='contact-header'>Contact Us</h3>
                <article id='contact-jumbotron'>

                </article>
                <article id='contact-call-to-action'>
                    <h3>Get in touch with us</h3>
                    <div id='contact-details'>
                        <div>
                            <FaPhoneSquare/> <p>6504850002</p>
                        </div>
                        <div>
                            <MdEmail/> <p>CONTACT@SPACEPOST.STUDIO</p>
                        </div>

                        <div>
                            <MdLocationOn/> <p>361 VERNON AVENUE, LOS ANGELES, CA, 90291, UNITED STATES</p>
                        </div>
                    </div>

                </article>
                <article>
                    <div>
                        <iframe width="100%" height="500" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=361%20VERNON%20AVENUE%2C%20LOS%20ANGELES%2C%20CA%2C%2090291%2C%20UNITED%20STATES&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>

                </article>
                    <article id='location-contact' >

                        <div id='contact-map-form'>
                            <div id='message-section'>
                                <h3>Send Us A Message</h3>
                                <p id='message-section-text'>Have an idea? Want to learn more? Just have some questions? </p>
                                <p>Feel free to send us a brief email and we will get back to you shortly.</p>
                            </div>
                            <div>
                                <form action="" id='contact-form'>
                                    <FormGroup className='form-group-flex'>

                                            <ControlLabel className='text-font'>Name</ControlLabel>
                                            <FormControl className='text-font-form'
                                                type="text"
                                                // value={this.state.value}
                                                placeholder="Enter text"
                                                // onChange={this.handleChange}
                                            />
                                            <ControlLabel className='text-font'>Email</ControlLabel>
                                            <FormControl className='text-font-form'
                                                type="text"
                                                // value={this.state.value}
                                                placeholder="Enter text"
                                                // onChange={this.handleChange}
                                            />
                                            <ControlLabel className='text-font'>Message</ControlLabel>
                                            <FormControl className='text-font-form'
                                                componentClass="textarea"
                                                // value={this.state.value}
                                                placeholder="Enter text"
                                                // onChange={this.handleChange}
                                            />

                                    </FormGroup>
                                    <Button className='text-font' id='contact-button-left' type="submit">Submit</Button>
                                </form>
                            </div>

                        </div>
                    </article>

            </section>

        )


    }
}


export default Contact;
