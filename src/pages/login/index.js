import React, { Component } from 'react';
import {
  Layout,
  Image,
  Row,
  Col,
  Divider,
  Space
} from 'antd';
import LoginForm from './components/LoginForm'

const { Header, Content } = Layout

class Login extends Component {
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
                    <LoginForm />
                    <br />
                    <br />
                    <div>
                      <span>关于xxx</span>
                      <Divider type="vertical" />
                      <span>服务协议</span>
                      <Divider type="vertical" />
                      <span>隐私政策</span>
                      <Divider type="vertical" />
                      <span>客服咨询</span>
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
    );
  }
}

export default Login;
