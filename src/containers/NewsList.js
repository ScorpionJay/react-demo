import React from 'react';
import { connect } from 'react-redux'
import NewsOverview from 'components/NewsOverview'
import Pager from 'components/Pager'
import {fetchList,chooseNews} from 'actions/news'

class NewsList extends React.Component {
  search(){
    let keyword = this.refs.keyInput.value
    this.props.dispatch(fetchList(keyword))
  }
  renderList(){
     return this.props.list.map((item, i) =>{
    item.key = item.title
    item.onGotoDetail = () => {
      this.props.dispatch(chooseNews(i))
      this.props.history.push('/news/'+item.id)
    }
    return React.createElement(NewsOverview, item)
  })
  }
  render(){
    let {page, totalPage, dispatch} = this.props
    return (
      <div>
        <div>
          <input ref="keyInput"/>
          <button onClick={this.search.bind(this)}>搜索</button>
        </div>
        <div>
          {this.renderList()}
        </div>
        <Pager page={page} totalPage={totalPage} onChangePage={i=>dispatch(fetchList(null,i))} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state.news)
}
export default connect(mapStateToProps)(NewsList);