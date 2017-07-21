import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import MorePanel from './components/MorePanel';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';

import mainData from './data/main';
import postsData from './data/posts';
import activitiesData from './data/activities';
import slidesData from './data/slides';

const Home = () => (
  <App
    mainData={mainData}
    postsData={postsData}
    activitiesData={activitiesData}
    slidesData={slidesData}
  />
);

const Videos = () => (
  <MorePanel
    mainData={mainData}
    postsData={postsData}
    title={'视频'}
    label={'Video'}
  />
);

const Posts = () => (
  <MorePanel
    mainData={mainData}
    postsData={postsData}
    title={'文章'}
    label={'Post'}
  />
);

const AboutPage = () => (
  <About mainData={mainData} />
);

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/videos" component={Videos}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/about" component={AboutPage}/>
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
