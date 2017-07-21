/**
 * Created by xiangliu on 20/07/2017.
 */
import React, {Component} from 'react';

import './style.css';

export default class ActivityItem extends Component {
  render() {

    const data = this.props.data;

    const title = data.title,
          date = data.date,
          location = data.location,
          posterImg = data.img;

    const maxTitle = 30,
          maxLocation = 15;

    let title_short,
        location_short,
        date_word,
        date_day;

    switch(date.day) {
      case 0:
        date_day = '日';
        break;
      case 1:
        date_day = '一';
        break;
      case 2:
        date_day = '二';
        break;
      case 3:
        date_day = '三';
        break;
      case 4:
        date_day = '四';
        break;
      case 5:
        date_day = '五';
        break;
      case 6:
        date_day = '六';
        break;
      default:
        break;
    }

    if(title.length > maxTitle) {
      title_short = title.slice(0, maxTitle) + '...';
    } else {
      title_short = title;
    }

    if(location.detail.length > maxLocation) {
      location_short = location.detail.slice(0, maxLocation) + '...';
    } else {
      location_short = location.detail;
    }

    date_word = date.month + '月' + date.date + '日 周' + date_day + ' ' + date.beginTime + ' - ' + date.endTime;

    return (
      <div className="component-ActivityItem">
        <div className="component-ActivityItem__image">
          <a href={data.link} target="_blank" rel="noopener noreferrer"><img src={posterImg} alt="activity01" /></a>
        </div>
        <div className="component-ActivityItem__detail">
          <h2 title={title}><a href={data.link} target="_blank" rel="noopener noreferrer">{title_short}</a></h2>
          <time className="wordBlock">{date_word}</time>
          <p className="wordBlock" title={location.area + ' ' + location.detail}>{location_short}</p>
        </div>
      </div>
    );
  }
}
