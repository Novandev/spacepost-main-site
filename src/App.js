import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import About from'./pages/About/About'
import Contact from'./pages/Contact/Contact'
import Labs from'./pages/Labs/Labs'
class App extends Component {
  render() {
    return (
        // Making sure that router is here to handle the main aspect of routing for single page apps
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/spacepostlabs" component={Labs} />
                <Route exact path="/contact" component={Contact} />
            </Layout>

            {/*<Route path="/about" component={About} />*/}
            {/*<Route path="/topics" component={Topics} />*/}
        </Router>
    );
  }
}

export default App;
