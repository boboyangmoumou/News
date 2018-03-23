import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../containers/Home/Home';
import Page1 from '../containers/Page1/Page1';
import Page2 from '../containers/Page2/Page2';
import Page3 from '../containers/Page3/Page3';
import '../style/router.css'
export default class IndexRouter extends Component {
    render() {
        return(
            <Router>
                <div className="MainWrapper">
                    <ul>
                        <li><Link to="/">index</Link></li>
                        <li><Link to="/page1">page1</Link></li>
                        <li><Link to="/page2">page2</Link></li>
                        <li><Link to="/page3">page3</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                        <Route path="/page3" component={Page3}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
