import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Menu from '../Components/menu/menu';
import Carousels from '../../components/carousel/carousel.js';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import notFound from '../../components/notFound/notFound';
export default class front extends Component {
    constructor(props) {
        super()
    }
    render() {
        return(
            <div>
                <Carousels/>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path={`/detail/:id`} component={Detail}/>
                    <Route path={`/:tag`} component={Home}/>
                    <Route component={notFound}/>
                </Switch>
            </div>
        )
    }   
}