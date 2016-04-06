'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    PropTypes,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';

export default class MinePage extends React.Component {


    constructor(props) {
        super(props);

    }

    _onClick() {

    }

    render() {
        return (
          <View style={{flex: 1}}>
            <View style={styles.container}>
                <Image source={require('../image/icon_title_back_@2x.png')} style={styles.back}/>
                <Text style={{fontSize:12,marginLeft:120}}>
                  个人中心
                </Text>
            </View>
              <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                  <Text>个人中心</Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',   // 水平排布
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
      height: Platform.OS === 'ios' ? 50 : 50,   // 处理iOS状态栏
      backgroundColor: 'white',
      alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  back:{
    width:15,
    height:12,
  },
});
