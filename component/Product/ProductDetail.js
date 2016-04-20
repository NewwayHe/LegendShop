
'use strict';

import React,{
  Image,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import Back from '../Back';
import Swiper from 'react-native-swiper';
import ScrollTabPage from './ScrollTabPage';

export default class ProductDetail extends React.Component{

  constructor(props) {
     super(props);
     this.state={

     };
     this._onClick=this._onClick.bind(this);
  }

  _onClick() {
      this.props.navigator.pop();
  }

  _onPayClick(){

  }
  _onCartClick(){

  }
  _onFollowClick(){

  }

  render() {

    return (
      <View style={{flex: 1,backgroundColor:'#F1F2F6',}}>
          <Back title={this.props.title} onClick={this._onClick}/>
          <ScrollView>
            <Swiper style={styles.wrapper} height={200}
                    paginationStyle={styles.paginationStyle}
                    loop={true}>
                  <Image  source={require('../../image/product/product_banner1_@2x.jpg')}/>
                  <Image  source={require('../../image/product/product_banner1_@2x.jpg')}/>
                  <Image  source={require('../../image/product/product_banner1_@2x.jpg')}/>
            </Swiper>

            <View style={styles.container1}>
               <Text style={styles.text1}>华硕（ASUS）VM510L5005酷睿I3-5005</Text>
               <Text style={[styles.text2,{marginTop:10,marginBottom:10}]}>¥4650.00</Text>
               <Text style={styles.text1}>原价：¥5288.00</Text>
            </View>

            <View style={styles.container1}>
               <Text style={styles.text1}>已选 i3 2G独显</Text>
               <View style={styles.container2}>
                  <Text style={styles.text1}>版本</Text>
                  <Text style={[styles.text2,styles.border2,{marginLeft:10,marginRight:10,}]}>i3 2G独显本</Text>
                  <Text style={[styles.text1,styles.border1]}>i5 2G独显</Text>
               </View>
               <View style={[styles.container2,{marginTop:0,marginBottom:0}]}>
                  <Text style={styles.text1}>数量</Text>
                  <View style={styles.container3}>
                    <Text style={[styles.text1,styles.border3]}>-</Text>
                    <Text style={[styles.text1,styles.border3]}>1</Text>
                    <Text style={[styles.text1,styles.border3]}>+</Text>
                  </View>
               </View>
             </View>

             <View style={styles.container1}>
                <Text style={styles.text1}>送货至 广东广州市</Text>
                <Text style={[styles.text1,{marginTop:10,marginBottom:10}]}>现货，广州城区12:00前完成订单，预计当日（11月28日）送达</Text>
                <View style={[styles.container3,{marginLeft:0}]}>
                  <View style={[styles.container4,styles.border1,{marginLeft:0}]}>
                    <Image source={require('../../image/product/icon_commodity_cod.png')} style={styles.img}/>
                    <Text style={[styles.text1,{marginLeft:5}]}>货到付款</Text>
                  </View>
                  <View style={[styles.container4,styles.border1]}>
                    <Image source={require('../../image/product/icon_commodity_free.png')} style={styles.img}/>
                    <Text style={[styles.text1,{marginLeft:5}]}>免运费</Text>
                  </View>
                </View>
             </View>

            <ScrollTabPage/>

            <View style={styles.container1}>
               <Text style={styles.text1}>主体</Text>
               <Text style={[styles.text1,{marginTop:10,marginBottom:10}]}>型号 VW510L</Text>
                <Text style={[styles.text1,{marginBottom:10}]}>颜色 黑色</Text>
               <Text style={styles.text1}>系统 Windows7</Text>
            </View>

            <ScrollTabPage/>

            <View style={styles.container1}>
               <Text style={[styles.text1,{marginTop:10,marginBottom:10}]}>型号 VW510L\n 山东发送到发送到发送到 </Text>
            </View>

          </ScrollView>

          <View  style={styles.bottom}>
            <TouchableOpacity onPress={()=>this._onFollowClick('关注')} activeOpacity={0.7}>
              <View style={styles.bottomContainer1}>
                  <Image source={require('../../image/product/icon_collection.png')} style={styles.icon}/>
                  <Text style={[styles.text1,{color:'white',marginLeft:5}]}>关注</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.bottomContainer1}>
              <TouchableOpacity onPress={()=>this._onCartClick('加入购物车')} activeOpacity={0.7}>
                <Text style={[styles.bottomText,{backgroundColor:'#F47022'}]}>加入购物车</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this._onPayClick('购买')} activeOpacity={0.7}>
                <Text style={[styles.bottomText,{backgroundColor:'#FF4854',marginLeft:8}]}>立即购买</Text>
              </TouchableOpacity>
            </View>
          </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container1:{
    backgroundColor:'white',
    marginTop:10,
    padding:10,
  },
  container2:{
    flex:1,
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  container3:{
    flex:1,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  container4:{
    flexDirection:'row',
    marginLeft:10,
    alignItems:'center',
  },
  wrapper: {
    flex:1,
    backgroundColor:'white',
    marginTop:10,
  },
  paginationStyle:{
    bottom: 5,
  },
  text2:{
    color:'#FF303D',
    fontWeight:'100',
    fontSize:9,
  },
  text1:{
    fontSize:9,
  },
  border1:{
    borderWidth:0.5,
    padding:2,
    borderRadius: 3,  // 设置圆角边
    borderColor:'#DEDEDE',
  },
  border2:{
    borderWidth:0.5,
    padding:2,
    borderRadius: 3,  // 设置圆角边
    borderColor:'#FF303D',
  },
  border3:{
    borderWidth:0.5,
    paddingLeft:12,
    paddingRight:12,
    paddingTop:3,
    paddingBottom:3,
    borderRadius: 2,  // 设置圆角边
    borderColor:'#DEDEDE',
  },
  img:{
    width:12,
    height:12,
  },
  bottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:50,
    backgroundColor:'#808080',
  },
  bottomContainer1:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
  },
  bottomText:{
    color:'white',
    fontSize:9,
    paddingLeft:22,
    borderRadius:2,
    paddingRight:22,
    paddingTop:11,
    paddingBottom:11,
  },
  icon:{
    width:15,
    height:13,
  }
});
