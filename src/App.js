import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Home from './components/Home/Home'
class App extends Component {
  render() {
    return (
        // Making sure that router is here to handle the main aspect of routing for single page apps
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
            </Layout>

            {/*<Route path="/about" component={About} />*/}
            {/*<Route path="/topics" component={Topics} />*/}
        </Router>
    );
  }
}

export default App;
