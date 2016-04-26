import React from 'react';
import Header from 'components/Header'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header onGoBack={this.goBack.bind(this)} text="欢迎访问"/>
        <div style={{paddingTop:'10px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
  goBack(){
    this.props.history.goBack()
  }
}

export default connect()(App);