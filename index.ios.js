'use strict';

import React, {
  AppRegistry,
  Navigator,
} from 'react-native';

import Splash from './Splash';
//定义默认路由导航器，以及路由切换页面时的传参方式
 export default class LegendShop extends React.Component {
  render() {
    let defaultName = 'Splash';
    let defaultComponent = Splash;
    return (
    <Navigator
      initialRoute={{ name: defaultName, component: defaultComponent }}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }} />
    );
  }
}
//这一步是应用入口
AppRegistry.registerComponent('LegendShop', () => LegendShop);
