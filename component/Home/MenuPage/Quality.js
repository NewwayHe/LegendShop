'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    PropTypes,
    ScrollView,
    StyleSheet,
    Platform,
} from 'react-native';

import Back from '../../Back'

export default class Quality extends React.Component {
    constructor(props) {
        super(props);
        this._onClick=this._onClick.bind(this);
    }
    _onClick() {
        this.props.navigatorQuality.pop();
    }
    render() {
        return (
          <View style={{flex: 1}}>
              <Back title='精品推荐' onClick={this._onClick}/>
              <View style={{flex:1,backgroundColor:'#F1F2F6',alignItems:'center',justifyContent:'center'}}>
                  <Text>精品推荐</Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',   // 水平排布
      justifyContent:'center',
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
      height: Platform.OS === 'ios' ? 50 : 50,   // 处理iOS状态栏
      backgroundColor: 'white',
      alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
});
