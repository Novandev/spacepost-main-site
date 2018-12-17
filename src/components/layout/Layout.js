import React from 'react';

import HeaderLayout from './Header'
import Footer from './Footer'
import './css/layout.css'

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div class="content-wrapper">
                <HeaderLayout/>
                <main>
                    {this.props.children}
                </main>
            <Footer/>

            </div>



        )
    }
}