import React, {Component} from 'react';
import style from './style.css';

export default class ArticleListCell extends Component {
    render() {
        return (
            <div>
                <p>
                    <span>
                        <img src={require('./calendar.png')} alt="发表日期"/>
                        {/* {props.data.time} */}
                    </span>
                    <span>
                        <img src={require('./views.png')} alt="阅读数"/>
                        {/* {props.data.viewCount} */}
                    </span>
                    <span>
                        <img src={require('./comments.png')} alt="评论数"/>
                        {/* {props.data.commentCount} */}
                    </span>
                </p>
                <span className={style.lastSpan}>
                    阅读全文 <span>》</span>
                </span>
            </div>
        )
    }
}