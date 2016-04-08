'use strict';

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const RECOMMEND_IMGS = [
    require('../../image/hotprod_banner01_@2x.jpg'),
    require('../../image/hotprod_banner02_@2x.jpg'),
    require('../../image/hotprod_banner03_@2x.jpg'),
    require('../../image/hotprod_banner04_@2x.jpg')
];
 export default class Recommend extends React.Component {
  render() {
    return(
          <View style={{flex:1,padding:5,}}>
              <View style={{flex:1,paddingTop:3,paddingLeft:5,paddingRight:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={styles.title1}>
                  热卖推荐
                </Text>
                <Text style={styles.title2}>
                  更多>>
                </Text>
              </View>
              <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.container1}>
                    <Image source={RECOMMEND_IMGS[0]} style={styles.image}/>
                    <Text style={[styles.text1,{marginTop:3}]}>
                      三只松鼠 坚果组合
                    </Text>
                    <Text style={styles.text1}>
                      夏威夷果碧根果手剥
                    </Text>
                    <View style={styles.container2}>
                      <Text style={styles.text2}>
                        ¥52.8
                      </Text>
                      <Text style={styles.text3}>
                        ¥52
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.container1}>
                    <Image  source={RECOMMEND_IMGS[1]} style={styles.image}/>
                    <Text style={[styles.text1,{marginTop:3}]}>
                      三只松鼠 坚果组合
                    </Text>
                    <Text style={styles.text1}>
                      夏威夷果碧根果手剥
                    </Text>
                    <View style={styles.container2}>
                      <Text style={styles.text2}>
                        ¥52.8
                      </Text>
                      <Text style={styles.text3}>
                        ¥52
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.container1}>
                    <Image  source={RECOMMEND_IMGS[2]} style={styles.image}/>
                    <Text style={[styles.text1,{marginTop:3}]}>
                      三只松鼠 坚果组合
                    </Text>
                    <Text style={styles.text1}>
                      夏威夷果碧根果手剥
                    </Text>
                    <View style={styles.container2}>
                      <Text style={styles.text2}>
                        ¥52.8
                      </Text>
                      <Text style={styles.text3}>
                        ¥52
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.container1}>
                    <Image  source={RECOMMEND_IMGS[3]} style={styles.image}/>
                    <Text style={[styles.text1,{marginTop:3}]}>
                      三只松鼠 坚果组合
                    </Text>
                    <Text style={styles.text1}>
                      夏威夷果碧根果手剥
                    </Text>
                    <View style={styles.container2}>
                      <Text style={styles.text2}>
                        ¥52.8
                      </Text>
                      <Text style={styles.text3}>
                        ¥52
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-around',
        flexDirection: 'row',
        padding:3,
    },
    container1:{
      borderWidth:0.5,
      borderColor:'#DEDEDE',
      backgroundColor:'#ffff',
      flex:1,
      margin:3,
      padding:3,
    },
    container2:{
      flex:1,
      flexDirection:'row',
      marginTop:3,
      justifyContent:'center',
      alignItems:'center',
    },
    image:{
      width:62,
      height:62,
    },
    text1:{
      color:'#646464',
      fontSize:6
    },
    text2:{
      color:'#FF2640',
      fontSize:6
    },
    text3:{
      marginLeft:3,
      color:'#969696',
      fontSize:5
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
