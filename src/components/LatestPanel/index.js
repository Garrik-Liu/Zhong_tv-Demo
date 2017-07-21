/**
 * Created by xiangliu on 20/07/2017.
 */
import React, {Component} from 'react';

import ShowItem from '../ShowItem';

import './style.css'

export default class LatestPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }

  render () {
    const data = this.props.data,
          title = this.props.title,
          activitiesData = this.props.activitiesData;

    let header = null;

    if(title !== '') {
      header = <div className="component-LatestPanel__header">{title}</div>;
    }

    const latest2 = data.map((item, index) => {
      if(index < 2) {
        return <ShowItem data={item} />
      }
    });

    const latest4 = data.map((item, index) => {
      if(index > 1 && index < 6) {
        return <ShowItem data={item} />
      }
    });

    const activitiesList = activitiesData.map((item, index) => {
      return (
        <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
          <li>
            <time className="wordBlock" dateTime="">时间：{item.date.year}-{item.date.month}-{item.date.date}, {item.date.beginTime} - {item.date.endTime}</time>
            <span className="wordBlock">活动：{item.title}</span>
            <span className="wordBlock">地点：{item.location.detail}</span>
          </li>
        </a>
      );
    });

    console.log(activitiesList)

    return (
      <div className="component-LatestPanel">
        {header}
        <div className="wrap">
          <div className="component-LatestPanel__main">
            <div className="component-LatestPanel__main__latests-weibo">
              <div className="component-LatestPanel__main__activities-latest">
                {/*<div className="component-LatestPanel__main__activities">*/}
                  {/*<div className="component-LatestPanel__main__activities__location">*/}
                    {/*<select>*/}
                      {/*<option>天津</option>*/}
                      {/*<option>北京</option>*/}
                      {/*<option>南京</option>*/}
                      {/*<option>上海</option>*/}
                      {/*<option>山东</option>*/}
                      {/*<option>河南</option>*/}
                    {/*</select>*/}
                  {/*</div>*/}
                  {/*<div className="component-LatestPanel__main__activities__detail">*/}
                    {/*<ul>*/}
                      {/*{activitiesList}*/}
                    {/*</ul>*/}
                  {/*</div>*/}
                {/*</div>*/}
                <div className="component-LatestPanel__main__latestsOf2">
                  {latest2}
                </div>
              </div>
              <div className="component-LatestPanel__main__weiboShow"><iframe title="weiboShow" width="100%" height="550" className="share_self"  frameBorder="0" scrolling="no" src={"http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=550&fansRow=1&ptype=1&speed=0&skin=5&isTitle=1&noborder=1&isWeibo=1&isFans=0&uid=6014817515&verifier=bbd679ff&dpc=1"}></iframe></div>
            </div>
            <div className="component-LatestPanel__main__latestsOf4">
              {latest4}
            </div>
          </div>
        </div>
      </div>
    );
  }
}