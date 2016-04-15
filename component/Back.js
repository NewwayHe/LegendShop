'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    PropTypes,
    Platform,
    StyleSheet
} from 'react-native';

//定义统一风格的ios和安卓的导航栏
export default class Back extends React.Component {

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
    render() {
        let {title}= this.props;
        return (
          <View >
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7} onPress={this._onClick}>
                    <View >
                      <Image source={require('../image/ic_arrow_back_black_24dp.png')} style={styles.img}/>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize:15,marginLeft:130}}>
                      {title}
                </Text>
            </View>
            <View style={styles.separate}/>
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
      height: Platform.OS === 'ios' ? 60 : 60,   // 处理iOS状态栏
      backgroundColor: 'white',
      alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  separate:{
    height:1,
    backgroundColor:'#A7A7AA',
  },
  img:{
      width:28,
      height:28,
  },
});
