import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Layout,
  Image,
  Row,
  Col,
  Divider,
  Space
} from 'antd'
import RegForm from './components/RegForm'

const { Header, Content } = Layout

class Register extends Component {
  render() {
    return (
      <Layout>
        <Header className="login-header">
          <Image
            className="logo"
            preview={false}
            width={64}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
          <div className="tel">联系方式：022-xxxxxxxx</div>
        </Header>
        <Content className="login-content">
          <Row>
            <Col span={8} />
            <Col span={16}>
              <Row justify="center">
                <Col span={12} offset={10}>
                  <Space direction="vertical" align="center" size={40}>
                    <br />
                    <br />
                    <RegForm />
                    <br />
                    <br />
                    <div>
                      <Link to="#">关于xxx</Link>
                      <Divider type="vertical" />
                      <Link to="#">服务协议</Link>
                      <Divider type="vertical" />
                      <Link to="#">隐私政策</Link>
                      <Divider type="vertical" />
                      <Link to="#">客服咨询</Link>
                      <Divider type="vertical" />
                      <span>津ICP备xxxxxxxx号-x</span>
                    </div>
                    <br />
                    <br />
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Register
