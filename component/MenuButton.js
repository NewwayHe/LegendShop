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

export default class MenuButton extends React.Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,  // 图片,加入.isRequired即为比填项
        showText: PropTypes.string,  // 显示标题\文字
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // 回调函数
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        if (this.props.onClick) { 
            this.props.onClick(this.props.showText, '');
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={this._onClick}>
                <View style={{alignItems:'center',flex:1,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 26,
        height: 26,
        marginBottom: 5
    },
    showText: {
        fontSize: 8,
        color:'#6E6E6E',

    }
});
