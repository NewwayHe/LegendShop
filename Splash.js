'use strict';

import React, {
  View,
  StyleSheet,
  Platform,
  Image,
  Text,
  Dimensions,
} from 'react-native';

import DataRepository from './data/DataRepository';
import Animated from 'Animated';
import Main from './MainScreen';

//设置本地存储
let repository = new DataRepository();
const WINDOW_WIDTH = Platform.OS==='ios'?Dimensions.get('window').width:Dimensions.get('screen').width;

//启动页，设置路由
export default class Splash extends React.Component {

  //更换封面图片
   fetchData() {
    repository.getCover()
      .then((result) => {
        if (result){
          this.setState({cover: result});
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
    repository.updateCover();
  }
   //定义首页图片获取的state
  constructor(props){
        super(props);
        this.state = {
            cover: null,
            bounceValue: new Animated.Value(1),
        };
  }
  //定义首页动画播放
  componentDidMount(){
    // this.fetchData();
    this.state.bounceValue.setValue(1);
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 1.2,
        duration: 3000,
      }
    ).start();

    let { navigator } = this.props;
    if(navigator){
        setTimeout(() => {
        navigator.replace({
        name: '首页',
        component: Main,
        });
      }, 3000);
    }
  }

  render() {
    let img, text;
    if (this.state.cover) {
      // img = {uri: this.state.cover.img};
      // text = this.state.cover.text;
      //暂时使用本地图片
      img = require('./image/splash.jpg');
      text = '';
    } else {
      img = require('./image/splash.jpg');
      text = '';
    }
    return (
      <View style={styles.container}>
        <Animated.Image
          source={img}
          style={{
            flex: 1,
            width: WINDOW_WIDTH,
            height: 1,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }} />
      </View>
    );
  }
}
//
let styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent',
  }
});
