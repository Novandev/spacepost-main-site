import React from 'react';
import {Image} from 'react-bootstrap';

import './About.css';
import Stanley from './images/stanley.png';
import Novan from './images/Novan.jpg';
import CompanyLogo from './images/company-logo.jpg';
class About extends React.Component{




    render(){

        return(
            <section id='about'>
                <article id='our-vision'>
                    <h2>Spacepost......insert tag line here</h2>
                    <div>
                        <h3>History</h3>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                    <div>
                        <h3>Our Vision</h3>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>


                </article>
                <article id='team'>
                    <h2>Our Team</h2>
                    <div id='team-section'>
                        <div>
                            <Image className='team-img' src={Stanley} responsive />
                            <h3>Stanley</h3>
                            <h4>Founder</h4>
                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla</p>
                        </div>
                        <div>
                            <Image className='team-img' src={Novan} responsive />
                            <h3>Novan</h3>
                            <h4>Developer</h4>
                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla</p>
                        </div>
                        <div>
                            <Image className='team-img' src={Stanley} responsive />
                            <h3>Stanley</h3>
                            <h4>Founder</h4>
                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla</p>
                        </div>
                        <div>
                            <Image className='team-img' src={Novan} responsive />
                            <h3>Novan</h3>
                            <h4>Developer</h4>
                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla</p>
                        </div>
                        <div>
                            <Image className='team-img' src={Stanley} responsive />
                            <h3>Stanley</h3>
                            <h4>Founder</h4>
                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla</p>
                        </div>
                        <div>
                            <Image className='team-img' src={Novan} responsive />
                            <h3>Novan</h3>
                            <h4>Developer</h4>
                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla</p>
                        </div>
                    </div>

                </article>
                <article id='collaborators'>
                    <h2>Collaborators</h2>
                    <h3>We would like to acknowledge the following individuals and corporations for their contributions to Spacepost LLC</h3>
                    <div id='collab-grid'>
                        <div><img src={CompanyLogo} alt=""/></div>
                        <div><img src={CompanyLogo} alt=""/></div>
                        <div><img src={CompanyLogo} alt=""/></div>
                        <div><img src={CompanyLogo} alt=""/></div>
                        <div><img src={CompanyLogo} alt=""/></div>
                        <div><img src={CompanyLogo} alt=""/></div>

                    </div>
                </article>
            </section>

        )
    }
}


export default About;
