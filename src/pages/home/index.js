import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to="/login">
          <Button type="primary">去登录</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
