import React from 'react';
import {Link} from 'react-router'

export default class Header extends React.Component {
  render(){
    let styl = {
      textAlign:'center',
      lineHeight:'32px',
      width:'15%',
      float:'left'
    }
    return (
      <div style={{background: '#ddd', height:'32px'}}>
        <div style={styl} onClick={this.props.onGoBack}>{'<'}</div>
        <div style={Object.assign({},styl,{width:'70%'})}>{this.props.text}</div>
        <Link style={Object.assign({},styl,{float: 'right'})} to="/login">登录</Link>
      </div>
    )
  }
}