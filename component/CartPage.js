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

export default class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }
    _onClick() {

    }
    render() {
        return (
          <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={{fontSize:12}}>
                  购物车
                </Text>
            </View>
              <View style={{flex:1,backgroundColor:'#F1F2F6',alignItems:'center',justifyContent:'center'}}>
                  <Text>购物车</Text>
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
