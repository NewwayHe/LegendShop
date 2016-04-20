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

//模拟分类虚拟数据
const DATA=[
  {type:'服装',img:require('../image/category/classify_banner01.jpg'),content:
                [{category:'男装',items:['polo衫','polo衫','polo衫','polo衫','polo衫']},
                {category:'帽子',items:['棒球帽','棒球帽','棒球帽','棒球帽','棒球帽']},
                {category:'女装',items:['设计师','设计师','设计师','设计师','设计师']},
                {category:'童装',items:['kitty','kitty','kitty','kitty','kitty']},
                {category:'内衣',items:['短裤','短裤','短裤','短裤','短裤']},
                {category:'男装',items:['polo衫','polo衫','polo衫','polo衫','polo衫']},
                {category:'帽子',items:['棒球帽','棒球帽','棒球帽','棒球帽','棒球帽']},
                {category:'女装',items:['设计师','设计师','设计师','设计师','设计师']},
                {category:'童装',items:['kitty','kitty','kitty','kitty','kitty']},
                {category:'内衣',items:['短裤','短裤','短裤','短裤','短裤']}]},

  {type:'电脑',img:require('../image/category/classify_banner02.jpg'),content:
                [{category:'鼠标',items:['雷蛇','雷蛇','雷蛇','雷蛇','雷蛇']},
                {category:'键盘',items:['罗技','罗技','罗技','罗技','罗技']},
                {category:'机箱',items:['航嘉','航嘉','航嘉','航嘉','航嘉']},
                {category:'硬盘',items:['西部数据','西部数据','西部数据','西部数据','西部数据']},
                {category:'显示器',items:['飞利浦','飞利浦','飞利浦','飞利浦','飞利浦']}]},

  {type:'手机',img:require('../image/category/classify_banner03.jpg'),content:
                [{category:'苹果',items:['ipone6splus','ipone6splus','ipone6splus','ipone6splus','ipone6splus']},
                {category:'三星',items:['note5','note5','note5','note5','note5']},
                {category:'小米',items:['小米5','小米5','小米5','小米5','小米5']},
                {category:'魅族',items:['mx4','mx4','mx4','mx4','mx4']},
                {category:'华为',items:['mate9','mate9','mate9','mate9','mate9']}]},

  {type:'箱包',img:require('../image/category/classify_banner04.jpg'),content:
                [{category:'旅行箱',items:['京嵘保罗','京嵘保罗','京嵘保罗','京嵘保罗','京嵘保罗']},
                {category:'男包',items:['爱马仕','爱马仕','爱马仕','爱马仕','爱马仕']},
                {category:'女包',items:['路易威登','易威登','易威登','易威登','易威登']},
                {category:'手提包',items:['COACH','COACH','COACH','COACH','COACH']},
                {category:'背包',items:['瑞士军刀','瑞士军刀','瑞士军刀','瑞士军刀','瑞士军刀']}]},

  {type:'化妆',img:require('../image/category/classify_banner05.jpg'),content:
                [{category:'粉扑',items:['相扑','相扑','相扑','相扑','相扑']},
                {category:'胭脂',items:['胭脂盒','胭脂盒','胭脂盒','胭脂盒','胭脂盒']},
                {category:'保湿霜',items:['屈臣氏','屈臣氏','屈臣氏','屈臣氏','屈臣氏']}]},

  {type:'零食',img:require('../image/category/classify_banner06.jpg'),content:
                [{category:'辣皮',items:['5毛','5毛','5毛','5毛','5毛']},
                {category:'辣条',items:['一块','一块','一块','一块','一块']},
                {category:'薯条',items:['可比克','可比克','可比克','可比克','可比克']},
                {category:'虾条',items:['乐事','乐事','乐事','乐事','乐事']},
                {category:'汉堡',items:['麦当劳','麦当劳','麦当劳','麦当劳','麦当劳']}]},

  {type:'家电',img:require('../image/category/classify_banner07.jpg'),content:
                [{category:'电视机',items:['乐视','乐视','乐视','乐视','乐视']},
                {category:'电冰箱',items:['美的','美的','美的','美的','美的']},
                {category:'洗衣机',items:['西门子','西门子','西门子','西门子','西门子']},
                {category:'空调',items:['格力','格力','格力','格力','格力']}]},
];

export default class CategoryPage extends React.Component {

    constructor(props) {
        super(props);
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
            <ExpandTab originData={DATA} onClick={this._onClick.bind(this)}/>
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

  inputText: {
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: 10
  }
});
