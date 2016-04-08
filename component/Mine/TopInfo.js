
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
  Dimensions,
} from 'react-native';

const WINDOW_WIDTH = Platform.OS==='ios'?Dimensions.get('window').width:Dimensions.get('screen').width;

export default class TopInfo extends React.Component {

    static propTypes = {
        data: PropTypes.object,  // Tag
    };

    constructor(props) {
        super(props);
    }

    _onClickLogin() {

    }

    _onClickItem(){

    }

    _onClickManager(){

    }

    render() {
        return (
        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row'}}>
            <Image source={require('../../image/mine/icon_member.png')} style={styles.user}/>
            <View style={{marginTop:20,}}>
              <Text style={styles.text1}>
                用户姓名
              </Text>
              <View style={{flex:1,flexDirection:'row',marginTop:5,}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <Image source={require('../../image/mine/location.png')} style={styles.litleImage}/>
                  <Text style={styles.text2}>城市</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',marginLeft:3,}}>
                  <Image source={require('../../image/mine/location.png')} style={styles.litleImage}/>
                  <Text style={styles.text2}>性别</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
            <Text style={styles.text2}>管理账户信息</Text>
            <Image source={require('../../image/mine/advance_white.png')} style={styles.litleImage}/>
          </View>

          <View style={styles.container1}>
            <View>
              <Text style={styles.text1}>
                15
              </Text>
              <Text style={styles.text1}>
                 我的收藏
              </Text>
            </View>
            <View style={{width:1,height:15,backgroundColor:'white',alignItems:'center'}}/>
            <View>
              <Text style={styles.text1}>
                33
              </Text>
              <Text style={styles.text1}>
                 历史纪录
              </Text>
            </View>
            <View style={{width:1,height:15,backgroundColor:'white',alignItems:'center'}}/>
            <View>
              <Text style={styles.text1}>
                7
              </Text>
              <Text style={styles.text1}>
                 我的消息
              </Text>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container1: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:7,
    paddingTop:6,
    paddingBottom:7,
    backgroundColor:'#8C023A'
  },
  user:{
    width: 46,
		height: 46,
    marginTop:10,
    marginLeft:10,
    marginRight:8,
		borderRadius: 23,
  },
  litleImage:{
    width:7,
    height:7,
  },
  text1:{
    color:'white',
    alignSelf:'center',
    fontSize:9,
  },
  text2:{
    color:'white',
    alignSelf:'center',
    fontSize:7,
  },
  text3:{
    color:'white',
    fontSize:6,
  },
});
