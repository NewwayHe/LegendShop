'use strict';

import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import HomePage from './component/HomePage';
import CategoryPage from './component/CategoryPage';
import CartPage from './component/CartPage';
import MinePage from './component/MinePage';

const HOME = '首页';
const HOME_NORMAL = require('./image/icon_main_index_my_home_@2x.png');
const HOME_FOCUS = require('./image/icon_main_index_my_home_@2x.png');
const CATEGORY = '分类';
const CATEGORY_NORMAL = require('./image/icon_main_index_my_class_@2x.png');
const CATEGORY_FOCUS = require('./image/icon_main_index_my_class_@2x.png');
const CART = '购物车';
const CART_NORMAL = require('./image/icon_main_index_my_cart_@2x.png');
const CART_FOCUS = require('./image/icon_main_index_my_cart_@2x.png');
const PERSONAL = '我的';
const PERSONAL_NORMAL = require('./image/icon_main_index_my_mine_@2x.png');
const PERSONAL_FOCUS = require('./image/icon_main_index_my_mine_@2x.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }

    _renderTabItem(img:string,selectedImg:string,title:string,childView:object) {
        return (
            <TabNavigator.Item
                title = {title}
                selected={this.state.selectedTab === title}
                titleStyle={{color:'white'}}
                selectedTitleStyle={{color:'white'}}
                bacStyle={{backgroundColor:'#323232'}}
                selectedBacStyle={{backgroundColor:'#FF2640'}}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: title })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY,<CategoryPage/>)}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, <CartPage/>)}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL,<MinePage/>)}
                </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 35,
        backgroundColor: '#333333',
        alignItems: 'center',
    },
    tabIcon: {
        width: 16,
        height: 16,
        resizeMode: 'stretch',
        marginTop: 5
    }
});
