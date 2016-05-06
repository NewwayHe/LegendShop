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
    TextInput,
    Platform,
} from 'react-native';

import ExpandTab from './ExpandTab';
import ProductDetail from './Product/ProductDetail';
const CATEGORY_URL='http://react.legendshop.cn/category';//分类接口q

export default class CategoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
          load:false,
          dataSource:[],
        };
    }
    _onClick(title:string) {
        let navigator = this.props.navigator;
        if(navigator) {
            navigator.push({
                name: title,
                component: ProductDetail,
                params: {
                     title:title,
                 }
            })
        }
    }
    _fetchData(){
      fetch(CATEGORY_URL)
      .then((response) => response.json())
      .catch((error) => {
        this.setState({
          load:false,
          dataSource:[],
        });
      })
      .then((responseData) => {

        console.log('原始数据',JSON.stringify(responseData));

        this.setState({
          load: true,
          dataSource: responseData,
        });
      })
      .done();
    }
    //从网络获取数据
    componentDidMount() {
      console.log('tag','componentDidMount');
      this._fetchData();
    }
    render() {
        return (
          <View style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <Image source={require('../image/lib_story_img_search_bt_@2x.png')} style={styles.searchIcon}/>
                    <TextInput
                        keyboardType='web-search'
                        placeholder='搜索...'
                        style={styles.inputText}/>
                </View>
            </View>
            <View style={styles.separate}/>
            <ExpandTab originData={this.state.dataSource} onClick={this._onClick.bind(this)}/>
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
  searchBox: {
      height: 23,
      flexDirection: 'row',
      flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
      borderRadius: 3,  // 设置圆角边
      backgroundColor: 'white',
      borderWidth:0.5,
      borderColor:'#DEDEDE',
      alignItems:'center',
      marginLeft: 20,
      marginRight: 20,
  },
  scanIcon: {
      height: 17,
      width: 17,
      resizeMode: 'stretch'
  },
  searchIcon: {
      marginLeft: 6,
      marginRight: 6,
      width: 10,
      height: 10,
      resizeMode: 'stretch'
  },
  separate:{
    height:1,
    backgroundColor:'#A7A7AA',
  },
  inputText: {
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: 10
  }
});
