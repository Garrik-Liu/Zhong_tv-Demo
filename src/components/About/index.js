/**
 * Created by xiangliu on 22/07/2017.
 */
import React, { Component } from 'react';

import Header from '../Header';

import './style.css';
import Footer from "../Footer/index";

export default class About extends Component {
  render () {
    return (
      <div className="component-About">
        <Header data={this.props.mainData} />
        <div className="component-About__main">
          <div className="wrap">
            <h1>THIS IS WHAT WE DO</h1>
            <p>China's 1st ever multi-faceted hip hop / r&b / pop entertainment faction. We facilitate and produce audio and video content for online, advertisers and event campaigns. We also take video submissions from indie artists all over China.</p>
            <p>Our claim to fame is starting the whole digital music video wave back in 2010, within China's hip hop community. We have produced over 50 original videos. Our youku platform ( Chinese version of Youtube ) has over 60 million total views and promote very heavily on our Sina Weibo ( Chinese version of Twitter ).</p>
            <p>We also create digital / video campaigns for brands targeted at Chinese youths. We've worked with the likes of WESC, Beats by Dre, Oakley, Nixon, Vans, Jordan Brand, Marshall Headphones, Urbanears...</p>
            <p>We are also getting into producing cool and original shows in the very near future.</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}