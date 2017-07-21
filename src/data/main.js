/**
 * Created by xiangliu on 21/07/2017.
 */
const main = {
  logo: require('/Users/xiangliu/Desktop/zhong_tv/src/img/logo.png'),
  titile: 'Zhong.TV',
  navList: [
    {
      name: '首页',
      path: '/',
    }, {
      name: '视频',
      path: '/videos',
    }, {
      name: '文章',
      path: '/posts',
    }, {
      name: '活动',
      path: '/#componentActivityPanel',
    }, {
      name: '我们',
      path: '/about',
    }
  ],
  iconLinks: [
    {
      name: 'Youtube',
      icon: require('../img/icon/youtube.svg'),
      link: 'https://www.youtube.com/channel/UCYpaEt_D5OB2aisQvNmPWrw',
    }, {
      name: 'Facebook',
      icon: require('../img/icon/facebook.svg'),
      link: 'https://www.facebook.com/stanleyyang22k',
    }, {
      name: 'Instagram',
      icon: require('../img/icon/instagram.svg'),
      link: 'https://www.instagram.com/zhongtv/',
    }, {
      name: 'Weibo',
      icon: require('../img/icon/sinaweibo.svg'),
      link: 'http://weibo.com/zhongtvnews?refer_flag=1001030102_',
    },
  ],
  banner: [
    {
      img: require('../img/banner/1.jpg'),
    }, {
      img: require('../img/banner/2.jpg'),
    }, {
      img: require('../img/banner/3.jpg'),
    }, {
      img: require('../img/banner/4.jpg'),
    }
  ],
};

export default main;