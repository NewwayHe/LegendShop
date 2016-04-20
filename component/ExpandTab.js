'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    PropTypes,
    ScrollView,
    StyleSheet,
} from 'react-native';

//该组件定义了左中右三种list相互关联的组件

export default class ExpandTab extends React.Component {

    static propTypes = {
        originData:PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        tabIndex:PropTypes.number,
        childIndex:PropTypes.number,
    };

    constructor(props) {
        super(props);
        this.state = {
          tabIndex:0,
          childIndex:0,
        };
    }

    _tabItemSelected(index:number){
      this.setState({
        tabIndex: index,
        childIndex:0,
      });
    }

    _childItemSelected(index:number){
      this.setState({
        childIndex: index,
      });
    }

    _grandsonItemSelected(title:string){
        //跳转逻辑
        if(this.props.onClick){
          this.props.onClick(title);
        }
    }
    //绘制最左边的tab栏
    _renderTab(data:object,tabIndex:number){
      return data.map((item,i)=>{
        let selected=styles.selectText;
        return (
          <TouchableOpacity key={i} activeOpacity={0.7} onPress = {()=> this._tabItemSelected(i)}>
              <View style={styles.container1}>
                  <Image style={styles.icon} source={item.img}/>
                  <Text style={[styles.showText,tabIndex==i?selected:null]}>{item.type}</Text>
              </View>
          </TouchableOpacity>
           )
      });
    }
    //绘制中间的child栏
    _renderChild(data:object,tabIndex:number,childeIndex:number){
      return data[tabIndex].content.map((item,i)=>{
        let selected=styles.selectBg;
        return (
          <TouchableOpacity key={i} activeOpacity={0.7} onPress={()=> this._childItemSelected(i)}>
              <View style={[styles.container2,childeIndex==i?selected:null]}>
                  <Text style={styles.childeText}>{item.category}</Text>
              </View>
          </TouchableOpacity>
           )
      });
    }
    //绘制最右边的grandson栏
    _renderGrandson(data:object,tabIndex:number,childIndex:number){
      let childData=data[tabIndex].content;
      return childData[childIndex].items.map((item,i)=>{
        let selected=styles.selectBg;
        return (
          <TouchableOpacity key={i} activeOpacity={0.7} onPress={()=> this._grandsonItemSelected('商品详情')}>
              <View style={styles.container2}>
                  <Text style={styles.childeText}>{item}</Text>
              </View>
          </TouchableOpacity>
           )
      });
    }
    render() {
        let {tabIndex,childIndex}=this.state;
        let tab=this._renderTab(this.props.originData,tabIndex);
        let child=this._renderChild(this.props.originData,tabIndex,childIndex);
        let grandson=this._renderGrandson(this.props.originData,tabIndex,childIndex);
        return (
          <View style={styles.parent}>
            <View style={styles.separate}/>
            <View style={styles.container}>
                <ScrollView style={styles.scroll1}>
                  {tab}
                </ScrollView>
                <ScrollView style={styles.scroll2}>
                  {child}
                </ScrollView>
                <ScrollView style={styles.scroll3}>
                  {grandson}
                </ScrollView>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
    backgroundColor:'#F1F2F6',
  },
  container:{
    flexDirection:1,
    flexDirection:'row',
  },
  separate:{
    height:0.5,
    backgroundColor:'#F0F0F0',
  },
  container1:{
     alignItems:'center',
     flex:1,
     paddingTop:5,
     paddingBottom:5,
     borderRightWidth:0.5,
     borderBottomWidth:0.5,
     borderColor:'#F0F0F0',
     backgroundColor:'#ffff',
  },
  container2:{
     alignItems:'center',
     flex:1,
     paddingTop:5,
     paddingBottom:5,
     borderRightWidth:0.5,
     borderBottomWidth:0.5,
     borderColor:'#F0F0F0',
     backgroundColor:'#ffff',
  },
  container3:{
     alignItems:'center',
     flex:1,
     paddingTop:5,
     paddingBottom:5,
     borderRightWidth:0.5,
     borderBottomWidth:0.5,
     borderColor:'#F0F0F0',
     backgroundColor:'#ffff',
  },
  scroll1:{
    flex:2,
  },
  scroll2:{
    flex:3,
  },
  scroll3:{
    flex:3,
  },
  //选中背景颜色
  selectBg:{
    backgroundColor:'#F0F2F5',
  },
  selectText:{
    color:'#FF0000',
  },
  icon: {
      width: 48,
      height: 48,
  },
  showText: {
      fontSize: 10,
      color:'#6E6E6E',
  },
  childeText:{
    paddingTop:8,
    paddingBottom:8,
    fontSize: 10,
    color:'#6E6E6E',
  },
});
