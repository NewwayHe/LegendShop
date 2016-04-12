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

export default class CategoryPage extends React.Component {

    constructor(props) {
        super(props);
    }
    _onClick() {

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
              <View style={{flex:1,backgroundColor:'#F1F2F6',alignItems:'center',justifyContent:'center'}}>
                  <Text>分类</Text>
              </View>
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
      fontSize: 8
  }
});
