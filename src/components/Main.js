import React from 'react'

class Login extends React.Component{
  render(){
    return (
      <div>
        <div>早上好，{this.props.username}</div>
        <div>用户名：<input/></div>
        <div>密　码：<input type="papssword"/></div>
        <button>登录</button>
      </div>
    )
  }
}

export default Login