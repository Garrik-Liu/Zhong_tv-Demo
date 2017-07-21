/**
 * Created by xiangliu on 19/07/2017.
 */
import React, {Component} from 'react';

import './style.css';

export default class Header extends Component {

  render() {
    const data = this.props.data;
    const iconLinks = data.iconLinks;

    const navList = data.navList.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.path}>{item.name}</a>
        </li>
      );
    });
    const logo = data.logo;

    const iconLinkList = iconLinks.map((item) => {
      return(
        <li>
          <a href={item.link}>
            <img src={item.icon}></img>
          </a>
        </li>
      );
    });

    return (
      <div className="component-Header">
        <div className="wrap">
          <div className="component-Header__logo-icons">
          <div className="component-Header__logo"><a href="/"><img src={logo} alt="zhong.tv" /></a></div>
          <div className="component-Header__iconLinks">
            {/*<ul>*/}
              {/*{iconLinkList}*/}
            {/*</ul>*/}
          </div>
          </div>
          <nav className="component-Header__nav">
            {navList}
          </nav>
        </div>
      </div>
    );
  }
}