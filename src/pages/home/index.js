import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Button } from 'antd'

class Home extends Component {
  render() {
    return (
      <Row justify="center">
        <Link to="/login">
          <Button type="primary">去登录</Button>
        </Link>
        <Link to="/register">
          <Button type="primary">去注册</Button>
        </Link>
      </Row>
    )
  }
}

export default Home
