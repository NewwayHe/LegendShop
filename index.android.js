'use strict';

import React, {
  AppRegistry,
  Navigator,
} from 'react-native';

import Splash from './Splash';
//定义启动页和路由
 export default class Legendshop extends React.Component {
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
AppRegistry.registerComponent('Legendshop', () => Legendshop);
