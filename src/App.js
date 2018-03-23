import React, {Component,PropTypes} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import Loading from './components/loading/loading';
import Admin from './containers/admin/admin';
import Front from './containers/fornt/fornt';
// import {Layout} from 'antd';
import './style/layout.css'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/404" component={NotFound}/>
                        <Route path="/admin" component={Admin}/>
                        <Route component={Front}/>
                        {<Loading/>}
                    </Switch>
                </div>
            </Router>
        )
    }
}