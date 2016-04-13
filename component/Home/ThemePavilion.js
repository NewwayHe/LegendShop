'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const THEME_BANNER_IMGS = [
    require('../../image/themes_banner01_@2x.jpg'),
    require('../../image/themes_banner02_@2x.jpg'),
    require('../../image/themes_banner03_@2x.jpg'),
    require('../../image/themes_banner04_@2x.jpg'),
    require('../../image/themes_banner05_@2x.jpg'),
    require('../../image/themes_banner06_@2x.jpg'),
];
 export default class ThemePavilion extends React.Component {
  render() {
    return(
          <View style={styles.parent}>
              <View style={styles.container}>
                <Text style={styles.title1}>
                  主题馆
                </Text>
                <Text style={styles.title2}>
                  更多>>
                </Text>
              </View>
              <View style={styles.container1}/>
                <View style={[styles.separate,{marginTop:3}]}/>
                <View style={styles.container2}>
                  <View style={styles.container1}>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image source={THEME_BANNER_IMGS[0]} style={styles.image1}/>
                    </TouchableOpacity>
                    <View style={styles.separate}/>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image source={THEME_BANNER_IMGS[1]} style={styles.image1}/>
                    </TouchableOpacity>
                    <View style={styles.separate}/>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image source={THEME_BANNER_IMGS[2]} style={styles.image1}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.separate1}/>
                  <View style={styles.container1}>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image source={THEME_BANNER_IMGS[3]} style={styles.image1}/>
                    </TouchableOpacity>
                    <View style={styles.separate}/>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image source={THEME_BANNER_IMGS[4]} style={styles.image1}/>
                    </TouchableOpacity>
                    <View style={styles.separate}/>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image source={THEME_BANNER_IMGS[5]} style={styles.image1}/>
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
        )
  }
}

const styles = StyleSheet.create({
    parent:{
      flex:1,
      padding:5,
      marginTop:8,
      backgroundColor:'white',
    },
    container: {
      flex:1,
      padding:5,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    container2:{
      flex:1,
      flexDirection:'row',
      padding:3,
    },
    container1:{
      flex:1,
    },
    separate:{
      height:0.5,
      backgroundColor:'#F0F0F0',
    },
    separate1:{
      width:0.5,
      height:180,
      backgroundColor:'#F0F0F0',
    },
    image1:{
      width:180,
      height:60,
    },
    title1:{
      color:'#323232',
      fontSize:10
    },
    title2:{
      color:'#1A92E0',
      fontSize:8
    }
});
