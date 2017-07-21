/**
 * Created by xiangliu on 22/07/2017.
 */
import React, {Component} from 'react';

import ShowPanel from '../ShowPanel';
import Header from '../Header';

import './style.css'
import Footer from "../Footer";

export default class MorePanel extends Component {
  render () {

    const mainData = this.props.mainData;
    const postsData = this.props.postsData;

    return (
      <div className="component-MorePanel">
        <Header data={mainData} />
        <ShowPanel data={postsData} title={this.props.title} label={this.props.label} maxItem={null} banner={mainData.banner[1]}/>
        <Footer/>
      </div>
    );
  }
}