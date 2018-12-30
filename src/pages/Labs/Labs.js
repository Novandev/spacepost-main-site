import React from 'react';
import { Row,Col, Nav,NavItem,Tab, Jumbotron } from 'react-bootstrap'

import './Labs.css';
class Labs extends React.Component{




    render(){

        return(
            <section>
                <Jumbotron id='projects-jumbotron'>
                    <h3>Spacepost Labs</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel. Lorem mollis aliquam ut porttitor leo a diam. Quis blandit turpis cursus in hac. Sed ullamcorper morbi tincidunt ornare massa eget. Rhoncus dolor purus non enim praesent. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Condimentum lacinia quis vel eros donec ac odio. In est ante in nibh. Ultricies mi eget mauris pharetra et. Ultrices eros in cursus turpis massa tincidunt dui. Risus nullam eget felis eget nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat pretium nibh ipsum consequat.</p>
                </Jumbotron>
                <article id='project-section'>
                    <Tab.Container id="" defaultActiveKey="first">
                        <Row className="clearfix">
                            <Col sm={4}>
                                <Nav bsStyle="pills" stacked>
                                    <NavItem eventKey="first">Project 1</NavItem>
                                    <NavItem eventKey="second">Project 2</NavItem>
                                    <NavItem eventKey="third">Project 2</NavItem>
                                </Nav>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="first">Project 1 content</Tab.Pane>
                                    <Tab.Pane eventKey="second">Project 2 content</Tab.Pane>
                                    <Tab.Pane eventKey="third">Project 3 content</Tab.Pane>
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
