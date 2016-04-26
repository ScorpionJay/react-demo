import React from 'react';
import {Link} from 'react-router'

class Index extends React.Component {
  render(){
    return (
      <ul>
        <li><Link to="/news">新闻</Link></li>
      </ul>
    )
  }
}

export default Index