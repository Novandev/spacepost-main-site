import React from 'react'
import {Jumbotron,Button,Image} from 'react-bootstrap'
import './home.css'
import Spaceman from './images/Spaceman.png'
const Home =() =>{
    return(
        <div id={'home-wrapper'}>
            <Jumbotron id={'jumbotron'}>
                    <h1 id={'jumbotron-h1'}>Spacepost</h1>
                <img  id={'spaceman-img'}src={Spaceman}/>

            </Jumbotron>
        </div>
    )
}

export default Home;