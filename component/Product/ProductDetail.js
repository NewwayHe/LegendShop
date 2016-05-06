
'use strict';

import React,{
  Image,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  TouchableOpacity,
  View,
} from 'react-native';

import Back from '../Back';
import Swiper from 'react-native-swiper';
import ScrollTabPage from './ScrollTabPage';
import OrderCommit from './../Order/OrderCommit';

const PRODUCT_DETAIL_URL='http://react.legendshop.cn/productDetail?prodId=';

import ProductContent from './ProductContent';

export default class ProductDetail extends React.Component{

  constructor(props) {
     super(props);
     this.state={
       loadingState:false,
       dataSource:null,
     };
     this._onClick=this._onClick.bind(this);
  }
  //根据传递参数获取详情数据
  _fetchData(){
    fetch(PRODUCT_DETAIL_URL+'694')
    .then((response) => response.json())
    .catch((error) => {
      this.setState({
        loadState:false,
        dataSource:null,
      });
    })
    .then((responseData) => {
      console.log('原始数据',JSON.stringify(responseData));

      setTimeout(() => {
        this.setState({
          loadState: true,
          dataSource: responseData,
        });
      },1000);

    })
    .done();
  }
  //从网络获取数据
  componentDidMount() {
    console.log('tag','componentDidMount');
    this._fetchData();
  }
  _onClick() {
      this.props.navigator.pop();
  }
  _onPayClick(){
    let navigator = this.props.navigator;
    if(navigator) {
        navigator.push({
            name: '订单填写',
              component: OrderCommit,
            params: {
                 title:'订单填写',
             }
        })
    }
  }
  _onCartClick(){

  }
  _onFollowClick(){

  }
  render() {

    let content=this.state.dataSource?
    <View style={{flex:1}}>
        <ProductContent dataSource={this.state.dataSource}/>
        <View style={styles.bottom}>
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
    </View>:
    <ActivityIndicatorIOS style={styles.scrollSpinner}/>;

    return (
      <View style={{flex: 1,backgroundColor:'#F1F2F6',}}>
          <Back title={this.props.title} onClick={this._onClick}/>
          {content}
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
    fontSize:10,
  },
  text1:{
    fontSize:10,
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
    fontSize:10,
    paddingLeft:22,
    borderRadius:2,
    paddingRight:22,
    paddingTop:11,
    paddingBottom:11,
  },
  icon:{
    width:15,
    height:13,
  },
  scrollSpinner: {
    marginVertical: 20,
  },
});
