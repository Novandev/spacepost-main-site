import React from 'react';
import {Image} from 'react-bootstrap';

import './About.css'
import Stanley from './images/stanley.png';
import Novan from './images/Novan.jpg'
class About extends React.Component{




    render(){

        return(
            <section id='about'>
                <article id='our-vision'>
                    <h2>Spacepost......insert tag line here</h2>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

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
                <article id='acknowledgements'>
                    <h2>acknowledgements</h2>

                </article>
            </section>

        )
    }
}


export default About;
