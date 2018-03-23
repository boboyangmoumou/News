import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import NotFound from '../../components/notFound/notFound';
import AdminManagerArticle from './../AdminManagerArticle/AdminManagerArticle';
import AdminManagerComment from './../AdminManagerComment/AdminManagerComment';
import AdminManagerTags from './../AdminManagerTags/AdminManagerTags';
import AdminNewArticle from './../AdminNewArticle/AdminNewArticle';
import AdminIndex from './../AdminIndex/AdminIndex';
export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="menuContainer">
                    <AdminMenu/>
                    <div className="contentContainer">
                        <Switch>
                            <Route exact path='/' component={AdminIndex}/>
                            <Route path='/AdminManagerTags' component={AdminManagerTags}/>
                            <Route path='/AdminManagerComment' component={AdminManagerComment}/>
                            <Route path='/AdminNewArticle' component={AdminNewArticle}/>
                            <Route path='/AdminManagerArticle' component={AdminManagerArticle}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Redirect to='/'/>
                </div>
            </div>
        )
    }
}