/**
 * Created by xiangliu on 19/07/2017.
 */
import React, {Component} from 'react';

import ShowItem from '../ShowItem';

import './style.css';

export default class ShowPanel extends Component {
  render () {
    const data = this.props.data,
          title = this.props.title,
          label = this.props.label,
          banner = this.props.banner;

    const maxItem = this.props.maxItem;

    const filteredItems = data.filter((item) => {
      return item.label === label;
    })

    const itemList = filteredItems.map((item, index) => {
      if(index < maxItem || maxItem === null) {
        return <ShowItem data={item} key={index} />
      }
    });

    let buttonGroup;

    if(maxItem === null) {
      buttonGroup = null;
    } else {
      buttonGroup = (
        <div className="component-ShowPanel__moreBtn">
          <a href={this.props.path}>
            <span>更多</span>
            <span className="downArrow">&darr;</span>
          </a>
        </div>
      );
    }

    return (
      <div className="component-ShowPanel">
        <div className="component-ShowPanel__header">
          <img src={banner.img} alt="banner"/>
          <h1>{title}</h1>
        </div>
        <div className="wrap">
          <div className="component-ShowPanel__itemList">
            {itemList}
          </div>
          {buttonGroup}
        </div>
      </div>
    );
  }
}