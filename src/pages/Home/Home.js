import React from 'react'
import {Jumbotron,Button,Image} from 'react-bootstrap'
import './home.css'
import Spaceman from './images/Spaceman.png'
const Home =() =>{
    return(
        <div id={'home-wrapper'}>
            <Jumbotron id={'jumbotron1'}>
                    <h1 id={'jumbotron1-h1'}>Spacepost</h1>
                <img  id={'spaceman-img'}src={Spaceman}/>

            </Jumbotron>
            <Jumbotron id={'jumbotron2'}>
                <h2>Who We Are</h2>


            </Jumbotron>
        </div>
    )
}

export default Home;
