
'use strict';

import React,{
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class ScrollTabPage extends React.Component{

  render() {
      return (
             <ScrollableTabView style={{marginTop: 10,backgroundColor:'white'}}
              renderTabBar={()=><DefaultTabBar activeTextColor='#FF303D'
                                               underlineColor='#FF303D'
                                               textStyle={styles.textStyle}
                                               style={styles.tabBar}/>}>
                  <ScrollView pointerEvents='box-only' tabLabel='图文详情'>
                      <View tabLabel='图文详情'>
                        <Image  source={require('../../image/product/product_banner1_@2x.jpg')}/>
                      </View>
                  </ScrollView>
                  <ScrollView pointerEvents='box-only' tabLabel='规格参数'>
                      <View  tabLabel='规格参数' >
                        <Image  source={require('../../image/product/product_banner1_@2x.jpg')}/>
                      </View>
                  </ScrollView >
                  <ScrollView pointerEvents='box-only' tabLabel='评论(5567)'>
                      <View tabLabel='评论(5567)'>
                        <Image  source={require('../../image/product/product_banner1_@2x.jpg')}/>
                      </View>
                  </ScrollView>
                  <ScrollView pointerEvents='box-only' tabLabel='售后服务'>
                      <View tabLabel='售后服务'>
                        <Image  source={require('../../image/product/product_banner1_@2x.jpg')}/>
                      </View>
                  </ScrollView>

            </ScrollableTabView>
          );
    }
}
let styles = StyleSheet.create({
    tabBar:{
      padding:5,
    },
    textStyle:{
      fontSize:10,
    }
});
