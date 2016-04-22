'use strict';

import React,{
  ActivityIndicatorIOS,
  ListView,
  Platform,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import invariant from 'invariant';
import dismissKeyboard from 'dismissKeyboard';
import ProductCell from './ProductCell';
import ProductDetail from './ProductDetail';

import Back from '../Back';

// const API_URL = 'http://www1.lbd99.com:8100/solr/collection1/select?sort=price desc,sales desc&rows=10&start=';

let resultsCache = {
  dataForQuery: {},
  nextPageNumberForQuery: {},
  loadingStateForQuery: {},
};
let LOADING = {};//这个保证获取数据时停止render避免不必要的渲染

//模拟加载更多的效果，总共两页数据
const DATA1=[{img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner01_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
];
const DATA2=[{img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
             {img : require('../../image/hotprod_banner02_@2x.jpg'),title : '2015款七匹狼男士手提包真皮商务大容量手抓包',price1:'199.000',price2:'219.00'},
];

export default class ProductList extends React.Component{

 constructor(props) {
    super(props);
    this.state={
      isLoading: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      filter: '',
      queryNumber: 0,
    };
    this._renderFooter=this._renderFooter.bind(this);
    this._onEndReached=this._onEndReached.bind(this);
    this._renderRow=this._renderRow.bind(this);
    this._onClick=this._onClick.bind(this);
  }
  //服务器和客户端各调用一次，初始化渲染之前，如果这里调用了
  //setState，render将会感知更新后的state，仅调用一次
  componentWillMount() {
    console.log('tag','componentWillMount');
  }

  //初始化渲染之后立即调用，这里可以进行网络请求等逻辑
  componentDidMount() {
    this._searchProduct('suffix');
    console.log('tag','componentDidMount');
  }
  //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
  //用此函数可以作为 react 在 prop 传入之后， render() 渲染之前更新 state 的机会。
  //老的 props 可以通过 this.props 获取到。在该函数中调用 this.setState() 将不会引起第二次渲染
  componentWillReceiveProps(){
     console.log('tag','componentWillReceiveProps');
  }

  //初始化渲染不会调用，如果该返回值false，render不会执行,知道下次state改变
  //有时候这里需要对props和state进行比对逻辑是否决定render以提高性能
  shouldComponentUpdate(){
     console.log('tag','shouldComponentUpdate');
     return true;
  }
  //在接收到新的 props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用。
  //使用该方法做一些更新之前的准备工作，你不能在该方法中使用 this.setState()
  componentWillUpdate(){
     console.log('tag','componentWillUpdate');
  }
  //该方法在render之后调用，组件已经同步到DOM中之后，该方法可以在组件更新之后操作DOM元素
  //初始化渲染的时候不会被调用
  componentDidUpdate(){
     console.log('tag','componentDidUpdate');
  }
  //在组件从 DOM 中移除的时候立刻被调用。该方法可用于清除componentDidMount中创建的
  //定时器以及Dom元素等
  componentWillUnmount(){
     console.log("tag",'componentWillUnmount');
  }

  // _urlForQueryAndPage(query: string, pageNumber: number): string {
  //     console.log('tag', API_URL + pageNumber + '&wt=json&q=' + query + '&indent=true');
  //     return (
  //       API_URL + pageNumber + '&wt=json&q=' + query + '&indent=true'
  //     );
  // }

  _onClick() {
      this.props.navigator.pop();
  }
  /*
    这里有个注意的地方，因为顶部navigator是在js的主线程中渲染的
    所以当前也初始渲染时保证componentDidMount时不做过多空间渲染
  */
  _searchProduct(query: string){
    this.setState({filter: query});
    //如果缓存存在数据则直接进心render并返回
    let cachedResultsForQuery = resultsCache.dataForQuery[query];
    if (cachedResultsForQuery) {
        if (!LOADING[query]) {
          setTimeout(() => {
            this.setState({
              dataSource: this._getDataSource(cachedResultsForQuery),
              isLoading: false,
            });
          },1000);
        }else {
         this.setState({isLoading: true});
       }
    }else{
    LOADING[query] = true;
    resultsCache.dataForQuery[query] = null;
    this.setState({
      isLoading: true,
      queryNumber: this.state.queryNumber + 1,
    });
    //模拟耗时，加载第一页数据
    setTimeout(() => {
      LOADING[query] = false;
      //这里默认是没有加载完，后期会进行判断第一次读取数据是否已经加载完成，根据实际数据长度是否小于页面数量查询
      resultsCache.loadingStateForQuery[query] = false;
      resultsCache.dataForQuery[query] = DATA1;
      resultsCache.nextPageNumberForQuery[query] = 2;
      this.setState({
            isLoading: false,
            dataSource: this._getDataSource(resultsCache.dataForQuery[query])})
      },1000);
    }
  }

  _onEndReached(){
    //这一步是必要的，如果正在加载，不要加载更多，表现在用户快速下拉而网络较慢的情况
    let query = this.state.filter;
    if (LOADING[query]) {
      return;
    }
    //进入加载
    LOADING[query] = true;
    this.setState({
      queryNumber: this.state.queryNumber + 1,
      isLoading:true,
    });
    //模拟耗时操作，一秒之后加载第二页数据
    setTimeout(() => {
      let page = resultsCache.nextPageNumberForQuery[query];
      let cacheData = resultsCache.dataForQuery[query].slice();
      LOADING[query] = false;
      //如果最新加载的数据存在，则添加进当前缓存
      if (cacheData.length<50) {
        for (let i in DATA2) {
          cacheData.push(DATA2[i]);
        }
        resultsCache.loadingStateForQuery[query] = false;
      }else{
        resultsCache.loadingStateForQuery[query] = true;
      }
      //充值最新的缓存数据
      resultsCache.dataForQuery[query] = cacheData;
      resultsCache.nextPageNumberForQuery[query] += 1;
      this.setState({
        dataSource: this._getDataSource(resultsCache.dataForQuery[query]),
      });
      },1000);
  }

  _getDataSource(data: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(data);
  }

  _pressItem(title:string) {
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

  _renderFooter(){
    // if (resultsCache.loadingOver[this.state.filter]){
    //   return <View style={styles.scrollSpinner} />;
    // }
    return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
    // //
    // if (Platform.OS === 'ios') {
    //   return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
    // } else {
    //   return (
    //     <View  style={{alignItems: 'center'}}>
    //       <ProgressBarAndroid styleAttr="Large"/>
    //     </View>
    //   );
    // }
  }
  //
  _renderSeparator(
    sectionID: number | string,
    rowID: number | string,
    adjacentRowHighlighted: boolean
  ) {
    let style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
  }
  //
  _renderRow(
    product: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <ProductCell
        onSelect={()=>this._pressItem('商品详情')}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}
        product={product}
      />
    );
  }
  render(){
    console.log('tag','render');
    let content = this.state.dataSource.getRowCount() === 0 ?
      <ActivityIndicatorIOS style={styles.scrollSpinner} />:
      <ListView
        ref="listview"
        renderSeparator={this._renderSeparator}
        dataSource={this.state.dataSource}
        renderFooter={this._renderFooter}
        renderRow={this._renderRow}
        onEndReached={this._onEndReached}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />;
    return (
      <View style={{flex: 1}}>
          <Back title={this.props.title} onClick={this._onClick}/>
          <View style={{flex:1,backgroundColor:'#F1F2F6'}}>
            {content}
          </View>
      </View>
    );
  }
}

class NoProduct extends React.Component{
  constructor(props){
        super(props);
        this.state = {
        };
  }
  render() {
    let text = '';
    if (this.props.filter) {
      text = `No results for "${this.props.filter}"`;
    } else if (!this.props.isLoading) {
      // If we're looking at the latest movies, aren't currently loading, and
      // still have no results, show a message
      text = 'No movies found';
    }

    return (
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.noMoviesText}>{text}</Text>
      </View>
    );
  }
}
//
let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:64,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  noMoviesText: {
    marginTop: 80,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 0.5,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});
