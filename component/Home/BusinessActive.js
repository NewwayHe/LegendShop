'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ACTIVE_BANNER_IMGS = [
    require('../../image/activity_banner01_@2x.jpg'),
    require('../../image/activity_banner02_@2x.jpg'),
    require('../../image/activity_banner03_@2x.jpg'),
];
 export default class BusinessActive extends React.Component {
  render() {
    return(
          <View style={{flex:1,padding:5,}}>
              <View style={styles.container}>
                <Text style={styles.title1}>
                  商家活动
                </Text>
                <Text style={styles.title2}>
                  更多>>
                </Text>
              </View>
              <View style={{height:0.5,backgroundColor:'#F0F0F0',marginTop:8}}/>
              <View style={{flex:1,flexDirection:'row',padding:3}}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image source={ACTIVE_BANNER_IMGS[0]} style={styles.image2}/>
                </TouchableOpacity>
                <View style={{width:0.5,height:150,backgroundColor:'#F0F0F0'}}/>
                <View style={styles.container1}>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image source={ACTIVE_BANNER_IMGS[1]} style={styles.image1}/>
                  </TouchableOpacity >
                  <View style={{height:0.5,backgroundColor:'#F0F0F0'}}/>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image source={ACTIVE_BANNER_IMGS[2]} style={styles.image1}/>
                  </TouchableOpacity >
                </View>
              </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop:3,
      paddingLeft:5,
      paddingRight:5,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    container1:{
      flex:1,
    },
    image1:{
      width:150,
      height:75,
    },
    image2:{
      width:150,
      height:150,
    },
    title1:{
      color:'#323232',
      fontSize:8
    },
    title2:{
      color:'#1A92E0',
      fontSize:7
    }
});
