import React from 'react'
import {Jumbotron,Button,Image,Media, Carousel} from 'react-bootstrap'
import './home.css'
import Spaceman from './images/Spaceman.png';
import Vector from './images/physical-vector.jpg';
import NeuralNetwork from './images/Neuralnetwork.png'

const Home =() =>{
    return(
        <section id={'home-wrapper'}>
            <Jumbotron id={'jumbotron1'}>
                    <h1 id={'jumbotron1-h1'}>Spacepost</h1>
                <img  id={'spaceman-img'}src={Spaceman}/>

            </Jumbotron>
            <Jumbotron id={'jumbotron2'}>

                <h2>We engage in...</h2>

                    <h3 className={'engage-heading'}>Computational Mathematics</h3>
                        <div className={'media-body-jumbotron'}>
                            <img className='engage-img' src={Vector} alt="thumbnail" />

                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                        </div>

                <h3 className={'engage-heading'}>Machine Learning</h3>


                <div className={'media-body-jumbotron'}>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>

                        <img className='engage-img' src={NeuralNetwork} alt="thumbnail" />


                    </div>

                <h3 className={'engage-heading'}>Virtual and Augmented Reality</h3>


                <div className={'media-body-jumbotron'}>
                    <img className='engage-img' src={NeuralNetwork} alt="thumbnail" />
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                </div>


            </Jumbotron>
            <article className={'home-carousel'}>

                <h3>Portfolio</h3>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={Vector} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={NeuralNetwork} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={Vector} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </article>

        </section>
    )
}

export default Home;
