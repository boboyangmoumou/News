import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import './AdminMenu.css';
const menus = [
    {url: '/', name: '首页', iconType:'home'},
    {url: '/newArticle', name: '发布文章', iconType:'file-text'},
    {url: '/managerTags', name: '标签管理', iconType: 'tags-o'},
    {url: '/managerArticle', name: '文章管理', iconType: 'edit'}
]

export default class AdminMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleClick = (e) => {
        
    }
    render() {
        return (
            <div>
                <Menu 
                    // selectedKeys={[this.props.url]}
                    mode = "inline"
                    theme = "dark"
                    onClick={({key}) => {
                        // this.props.changeUrl(key);
                        // this.props.history.push(`/admin${key}`)
                    }}
                >
                    {
                        menus.map((item, index) =>
                            <Menu.Item key={item.url}>
                                <Icon type={item.iconType} />
                                <span>{item.name}</span>
                            </Menu.Item>)
                    }
                </Menu>
            </div>
        )
    }
}