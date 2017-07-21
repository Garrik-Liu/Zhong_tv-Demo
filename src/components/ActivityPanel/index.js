/**
 * Created by xiangliu on 20/07/2017.
 */
import React, {Component} from 'react';

import ActivityList from '../ActivityList';

import './style.css';

export default class ActivityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      search: '',
      searchResult: [],
    }
    this.search = this.search.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  search(enter, data) {
    let result = [];
    data.forEach((item) => {
      if(item.title.indexOf(enter) !== -1 && enter !== '') {
         result.push(item);
      }

      return result;
    });

    this.setState({
      searchResult: result,
    });
  }

  setSearch(enter) {
    this.setState({
      search: enter,
    });
  }

  render () {
    const data = this.props.data,
          title = this.props.title,
          banner = this.props.banner;

    return (
      <div className="component-ActivityPanel" id="componentActivityPanel">
        <div className="component-ActivityPanel__header">
          <img src={banner.img} alt="banner"/>
          <h1>{title}</h1>
        </div>
        <div className="wrap">
          <div className="component-ActivityPanel__SearchBar">
            <form className="component-ActivityPanel__SearchBar__form">
              <select className="component-ActivityPanel__SearchBar__select">
                <option>天津</option>
                <option>北京</option>
                <option>南京</option>
                <option>上海</option>
                <option>山东</option>
                <option>河南</option>
              </select>
              <input type="text"
                     className="component-ActivityPanel__SearchBar__enter"
                     onChange={(item) => {
                       this.setSearch(item.target.value);
                     }}
                     onKeyUp={(event) => {
                       this.search(this.state.search, data);
                     }}
              />
              {/*<span className="component-ActivityPanel__SearchBar__search" onClick={() => {*/}
                {/*this.search(this.state.search, data);*/}
              {/*}}>搜索</span>*/}
            </form>
          </div>
          <div className="component-ActivityPanel__list">
            <ActivityList data={this.state.searchResult} title={'相关'} />
            <ActivityList data={data} title={'同城'} />
            <ActivityList data={data} title={'最热'} />
          </div>
        </div>
      </div>
    );
  }
}