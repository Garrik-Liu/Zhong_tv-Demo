import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SlideShow from './components/SlideShow';
import ShowPanel from './components/ShowPanel';
import ActivityPanel from './components/ActivityPanel';
import LatestPanel from './components/LatestPanel';
import Footer from './components/Footer';

class App extends Component {
  render() {

    const mainData = this.props.mainData;
    const postsData = this.props.postsData;
    const activitiesData = this.props.activitiesData;
    const slidesData = this.props.slidesData;

    return (
      <div className="App">
        <Header data={mainData}/>
        <SlideShow data={slidesData} />
        <LatestPanel data={postsData} activitiesData={activitiesData}  title={''} banner={mainData.banner[0]}/>
        <ShowPanel data={postsData} title={'视频'} path={'/videos'} label={'Video'} maxItem={8} banner={mainData.banner[1]}/>
        <ShowPanel data={postsData} title={'文章'} path={'/posts'} label={'Post'} maxItem={8} banner={mainData.banner[2]}/>
        <ActivityPanel data={activitiesData} title={'演出 & 活动'} banner={mainData.banner[3]}/>
        <Footer />
      </div>
    );
  }
}

export default App;
