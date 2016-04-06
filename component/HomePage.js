'use strict';
import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
    TouchableOpacity,
} from 'react-native';

import TopBar from './TopBar';
import Swiper from 'react-native-swiper';
import MenuButton from './MenuButton';
import Recommend from './Recommend';
import BusinessActive from './BusinessActive';
import BusinessNew from './BusinessNew';
import ThemePavilion from './ThemePavilion';

const BANNER_IMGS = [
    require('../image/img_home_banner1_@2x.jpg'),
    require('../image/img_home_banner2_@2x.jpg'),
    require('../image/img_home_banner3_@2x.jpg'),
    require('../image/img_home_banner4_@2x.jpg')
];

const adv_IMGS= [
    require('../image/home_adv_@2x.jpg'),
    require('../image/home_adv_@2x.jpg'),
    require('../image/home_adv_@2x.jpg'),
    require('../image/home_adv_@2x.jpg')
];


export default class HomePage extends Component {

    constructor(props) {
        super(props);

    }
    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title);
    }
    render() {
        return (
            <View style={{flex: 1}}>
              <TopBar />
	            <ScrollView>
                <Swiper style={styles.wrapper} height={120}
                  paginationStyle={styles.paginationStyle}
                  loop={true}>
                      <Image  source={BANNER_IMGS[0]}/>
                      <Image  source={BANNER_IMGS[1]}/>
                      <Image  source={BANNER_IMGS[2]}/>
                      <Image  source={BANNER_IMGS[3]}/>
                </Swiper>
                <View style={{height:8,backgroundColor:'#F0F0F0'}}/>
                <View style={styles.menuView1}>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag1_@2x.png')}
                                showText={'精品'} tag={'wdgz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag2_@2x.png')}
                                showText={'热卖'} tag={'wlcx'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag3_@2x.png')}
                                showText={'促销'} tag={'cz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag4_@2x.png')}
                                showText={'团购'} tag={'dyp'}
                                onClick={this._onMenuClick}/>
                </View>
                <View style={styles.menuView2}>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag5_@2x.png')}
                                showText={'积分'} tag={'yxcz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag6_@2x.png')}
                                showText={'试用'} tag={'xjk'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag7_@2x.png')}
                                showText={'类目'} tag={'ljd'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag8_@2x.png')}
                                showText={'品牌'} tag={'gd'}
                                onClick={this._onMenuClick}/>
                </View>
                <View style={{height:8,backgroundColor:'#F0F0F0'}}/>
                <Recommend/>
                <View style={{height:8,backgroundColor:'#F0F0F0'}}/>
                <Swiper style={styles.wrapper} height={65}
                  paginationStyle={styles.paginationStyle}
                  loop={true}>
                      <Image  source={adv_IMGS[0]} />
                      <Image  source={adv_IMGS[1]} />
                      <Image  source={adv_IMGS[2]} />
                      <Image  source={adv_IMGS[3]} />
                </Swiper>
                <View style={{height:8,backgroundColor:'#F0F0F0'}}/>
                <BusinessActive/>
                <View style={{height:8,backgroundColor:'#F0F0F0'}}/>
                <BusinessNew/>
                <View style={{height:8,backgroundColor:'#F0F0F0'}}/>
                <ThemePavilion/>
                <View style={{height:8,backgroundColor:'#F0F0F0'}}/>
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuView1: {
      flex:1,
      justifyContent:'space-around',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom:3,
    },
    menuView2: {
      flex:1,
      justifyContent:'space-around',
      flexDirection: 'row',
      marginTop: 3,
      marginBottom:10,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    wrapper: {
      flex:1,
    },
    paginationStyle:{
      bottom: 5,
    }
});
