
'use strict';

import React,{
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';

export default class ProductCell extends React.Component{

  render() {
    let img = this.props.product.img;
    let title = this.props.product.title;
    let price1 = this.props.product.price1;
    let price2 = this.props.product.price2;

    let TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
        <TouchableElement
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}>
          <View style={styles.row}>
            <Image
              source={img}
              style={styles.cellImage}
            />
            <View>
              <Text style={styles.text1}>{title}</Text>
              <Text style={styles.text2}>{price1}</Text>
              <Text style={styles.text3}>{price2}</Text>
            </View>
          </View>
        </TouchableElement>
    );
  }
}
//
let styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 8,
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 75,
    marginRight: 10,
    width: 75,
  },
  text1:{
    fontSize:10,
  },
  text2:{
    fontSize:12,
    marginTop:15,
    color:'#FF0000',
  },
  text3:{
    fontSize:10,
    marginTop:5,
    color:'#A3A3A3',
  },
});
