import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Menu} from 'antd';
import style from './style.css'
const Frontmenus = [
    {url: '/', name: '首页', iconType:'home'},
    {url: '/detail', name: '详情', iconType:'file-text'},
    {url: '/tag', name: '标签', iconType: 'tags-o'},
    {url: '/notFound', name: '404', iconType: 'edit'}
]
export default class Menus extends Component {

    render() {
        return(
            // <Menu
            //     mode="horizontal"
            //     class={style.MenuContainer}
            //     onclick={this.handleClick}
            // >
            //     {
            //         Frontmenus.map((item,index) => (
            //             <Menu.Item key={item.url}>
            //                 {item.name}
            //             </Menu.Item>
            //         ))                    
            //     }
            // </Menu>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/detail">详情</Link></li>
                </ul>
            </div>            
        )
    }
}