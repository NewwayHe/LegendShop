'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    PropTypes,
    StyleSheet
} from 'react-native';

//该组件定义了左中右三种list相互关联的组件

export default class MenuButton extends React.Component {

    static propTypes = {
        originData:PropTypes.object,//定义原始数据
        tabSelected:PropTypes.number,
        childSelected:PropTypes.number,
        renderIcon: PropTypes.number.isRequired, // 图片,加入.isRequired即为比填项
        showText: PropTypes.string.isRequired,  // 显示标题\文字
    };

    constructor(props) {
        super(props);
        state = {
          tabIndex:0,
          childIndex:0,
        };
    }

    _tabItemSelected(number:index){

    }

    _childItemSelected(number:index){

    }

    _grandsonItemSelected(number:index){

    }

    _renderTab(oject:data,number:index){
      return data.map((item,i)=>{
        let selected=styles.select;
        return (
          <TouchableOpacity activeOpacity={0.7} onPress={this._tabItemSelected(i)}>
              <View style={styles.container1}>
                  <Image style={styles.icon} source={this.props.renderIcon}/>
                  <Text style={styles.showText}>{this.props.showText}</Text>
                  {renderPrompt}
              </View>
          </TouchableOpacity>
           )
      });
    }

    _renderChild(data){

    }

    _renderGrandson(data){


    }

    render() {
        let tab=this._renderTab();
        let child=this._renderChild();
        let grandson=this._renderGrandson();

        return (
          <View style={styles.container}>
              <ScrollView style={styles.scroll1}>
                {tab}
              </ScrollView>
              <ScrollView style={styles.scroll2}}>
                {child}
              </ScrollView>
              <ScrollView style={styles.scroll3}}>
                {grandson}
              </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  container1:{
     alignItems:'center',
     flex:1,
     paddingLeft:10,
     paddingRight:10,
     paddingTop:3,
     paddingBottom:3,
  },
  scroll1:{
      width:100,
  },
  scroll2:{
    width:100,
  },
  scroll3:{
    width:100,
  },
  //选中背景颜色
  select:{
    backgroundColor:'#F0F2F5',
  },
  icon: {
      width: 35,
      height: 35,
      marginBottom: 3
  },
  showText: {
      fontSize: 8,
      color:'#6E6E6E',
  }
});
