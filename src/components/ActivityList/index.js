/**
 * Created by xiangliu on 20/07/2017.
 */
import React, {Component} from 'react';

import ActivityItem from '../ActivityItem';

import './style.css';

export default class ActivityList extends Component {
  render () {
    const data = this.props.data,
          title = this.props.title;

    const activityList = data.map((item, index) => {
      return <ActivityItem data={item} key={index} />
    });

    if(data.length !== 0) {
      return (
        <div className="component-ActivityList">
          <div className="component-ActivityList__header">
            <h2>{title}</h2>
          </div>
          <div className="component-ActivityList__list">
            {activityList}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}