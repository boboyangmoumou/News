import React, {Component} from 'react';
import NotFoundImg from './404.png';
import pageStyle from './notFound.css';

export default class notFound extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className={pageStyle.container}>
                <img src = {NotFoundImg} title="/"/>
            </div>
        )
    }
}