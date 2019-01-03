import React from 'react';
import { Row,Col, Nav,NavItem,Tab, Jumbotron } from 'react-bootstrap'

import './Labs.css';
class Labs extends React.Component{




    render(){

        return(
            <section id='labs-wrapper'>
                <Jumbotron id='projects-jumbotron'>
                    <h3 id='labs-header'>Spacepost Labs</h3>
                    <p className='text-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel. Lorem mollis aliquam ut porttitor leo a diam. Quis blandit turpis cursus in hac. Sed ullamcorper morbi tincidunt ornare massa eget. Rhoncus dolor purus non enim praesent. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Condimentum lacinia quis vel eros donec ac odio. In est ante in nibh. Ultricies mi eget mauris pharetra et. Ultrices eros in cursus turpis massa tincidunt dui. Risus nullam eget felis eget nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat pretium nibh ipsum consequat.</p>
                </Jumbotron>
                <article id='project-section'>
                    <Tab.Container id="" defaultActiveKey="first">
                        <Row className="clearfix">
                            <Col sm={4}>
                                <Nav bsStyle="pills" stacked>
                                    <NavItem eventKey="first">Project 1</NavItem>
                                    <NavItem eventKey="second">Project 2</NavItem>
                                    <NavItem eventKey="third">Project 3</NavItem>
                                </Nav>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="first">
                                        <h2>Project 1 content</h2>
                                        <h3>Project Tag Line</h3>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ebyz8xxoK1w"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                        <div className='project-summary'>
                                            <p className='text-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel. Lorem mollis aliquam ut porttitor leo a diam. Quis blandit turpis cursus in hac. Sed ullamcorper morbi tincidunt ornare massa eget. Rhoncus dolor purus non enim praesent. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Condimentum lacinia quis vel eros donec ac odio. In est ante in nibh. Ultricies mi eget mauris pharetra et. Ultrices eros in cursus turpis massa tincidunt dui. Risus nullam eget felis eget nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat pretium nibh ipsum consequat.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2>Project 2 content</h2>
                                        <h3>Project Tag Line</h3>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ebyz8xxoK1w"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                        <div className='project-summary'>
                                           <p className='text-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel. Lorem mollis aliquam ut porttitor leo a diam. Quis blandit turpis cursus in hac. Sed ullamcorper morbi tincidunt ornare massa eget. Rhoncus dolor purus non enim praesent. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Condimentum lacinia quis vel eros donec ac odio. In est ante in nibh. Ultricies mi eget mauris pharetra et. Ultrices eros in cursus turpis massa tincidunt dui. Risus nullam eget felis eget nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat pretium nibh ipsum consequat.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2>Project 3 content</h2>
                                        <h3>Project Tag Line</h3>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ebyz8xxoK1w"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                        <div className='project-summary'>
                                            <p className='text-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel. Lorem mollis aliquam ut porttitor leo a diam. Quis blandit turpis cursus in hac. Sed ullamcorper morbi tincidunt ornare massa eget. Rhoncus dolor purus non enim praesent. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Condimentum lacinia quis vel eros donec ac odio. In est ante in nibh. Ultricies mi eget mauris pharetra et. Ultrices eros in cursus turpis massa tincidunt dui. Risus nullam eget felis eget nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat pretium nibh ipsum consequat.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </article>


            </section>

        )
    }
}


export default Labs
