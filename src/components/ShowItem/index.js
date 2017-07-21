/**
 * Created by xiangliu on 19/07/2017.
 */
import React, {Component} from 'react';

import './style.css';

export default class ShowItem extends Component {
  render () {

    const item = this.props.data;

    const title = item.title,
          describe = item.describe;

    const maxTitle = 50,
          maxDetail = 70;

    let title_short,
        describe_short;

    if(title.length > maxTitle) {
      title_short = title.slice(0, maxTitle) + '...';
    } else {
      title_short = title;
    }

    if(describe.length > maxDetail) {
      describe_short = describe.slice(0, maxDetail) + '...';
    } else {
      describe_short = describe;
    }

    return (
      <div className="component-ShowItem">
        <div className="component-ShowItem__header">
          <span className="component-ShowItem__header__label">{item.label}</span>
          <span className="component-ShowItem__header__date">{item.date}</span>
        </div>
        <div className="component-ShowItem__image">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.title} />
          </a>
        </div>
        <div className="component-ShowItem__title">
          <span className="block"></span>
          <h2 title={title}><a href={item.link} target="_blank" rel="noopener noreferrer">{title_short}</a></h2>
        </div>
        <div className="component-ShowItem__describe">
          <p title={describe}>{describe_short}</p>
        </div>
      </div>
    );
  }
}