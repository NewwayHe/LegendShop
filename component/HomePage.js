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

import TopBar from './Home/TopBar';
import Swiper from 'react-native-swiper';
import MenuButton from './MenuButton';
import Recommend from './Home/Recommend';
import BusinessActive from './Home/BusinessActive';
import BusinessNew from './Home/BusinessNew';
import ThemePavilion from './Home/ThemePavilion';

import ProductList from './Product/ProductList'

const BANNER_IMGS = [
    require('../image/img_home_banner1_@2x.jpg'),
    require('../image/img_home_banner2_@2x.jpg'),
    require('../image/img_home_banner3_@2x.jpg'),
];
const adv_IMGS= [
    require('../image/home_adv_@2x.jpg'),
    require('../image/home_adv_@2x.jpg'),
    require('../image/home_adv_@2x.jpg'),
    require('../image/home_adv_@2x.jpg')
];

//首页配置，各组件导入
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this._onMenuClick = this._onMenuClick.bind(this);

    }
    _onMenuClick(title:string) {
       let navigatorHome = this.props.navigatorHome;
       if(navigatorHome) {
          let productList=()=>{return <ProductList navigatorProductList={navigatorHome}/>};
           navigatorHome.push({
               name: title,
               component: productList,
               params: {
                    text:title,
                }
           })
       }
    }
    render() {
        return (
            <View style={{flex: 1}}>
              <TopBar />
	            <ScrollView style={styles.container1}>
                <Swiper style={styles.wrapper} height={145}
                        paginationStyle={styles.paginationStyle}
                        loop={true}>
                      <Image  source={BANNER_IMGS[0]}/>
                      <Image  source={BANNER_IMGS[1]}/>
                      <Image  source={BANNER_IMGS[2]}/>
                </Swiper>
                <View style={styles.menuView1}>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag1_@2x.png')}
                                showText={'精品'}
                                onClick={()=>this._onMenuClick('精品')}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag2_@2x.png')}
                                showText={'热卖'}
                                onClick={()=>this._onMenuClick('热卖')}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag3_@2x.png')}
                                showText={'促销'}
                                onClick={()=>this._onMenuClick('促销')}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag4_@2x.png')}
                                showText={'团购'}
                                onClick={()=>this._onMenuClick('团购')}/>
                </View>
                <View style={styles.menuView2}>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag5_@2x.png')}
                                showText={'积分'}
                                onClick={()=>this._onMenuClick('积分')}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag6_@2x.png')}
                                showText={'试用'}
                                onClick={()=>this._onMenuClick('试用')}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag7_@2x.png')}
                                showText={'类目'}
                                onClick={()=>this._onMenuClick('类目')}/>
                    <MenuButton renderIcon={require('../image/icon_home_center_tag8_@2x.png')}
                                showText={'品牌'}
                                onClick={()=>this._onMenuClick('品牌')}/>
                </View>
                <Recommend/>
                <Swiper style={styles.wrapper} height={70}
                  paginationStyle={styles.paginationStyle}
                  loop={true}>
                      <Image  source={adv_IMGS[0]} />
                      <Image  source={adv_IMGS[1]} />
                      <Image  source={adv_IMGS[2]} />
                      <Image  source={adv_IMGS[3]} />
                </Swiper>
                <BusinessActive/>
                <BusinessNew/>
                <ThemePavilion/>
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1:{
      backgroundColor:'#F1F2F6',
    },
    menuView1: {
      flex:1,
      backgroundColor:'white',
      justifyContent:'space-around',
      flexDirection: 'row',
      marginTop: 8,
      padding:3,
    },
    menuView2: {
      flex:1,
      backgroundColor:'white',
      justifyContent:'space-around',
      flexDirection: 'row',
      padding: 3,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    wrapper: {
      flex:1,
      backgroundColor:'white'
    },
    paginationStyle:{
      bottom: 5,
    }
});
