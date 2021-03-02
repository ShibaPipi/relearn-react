import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Button,
  Form,
  Input,
  Row,
  Col,
  Checkbox,
} from 'antd'

const rules = {
  captcha: [{
    required: true,
    message: '请输入手机验证码！',
  }],
  agreement: [{
    validator: (_, value) =>
      value ? Promise.resolve() : Promise.reject(new Error('请勾选用户协议')),
  }]
}

class LoginForm extends Component {
  render() {
    return (
      <Card
        headStyle={{ background: 'aliceblue' }}
        title="用户注册"
        style={{ width: 340 }}
      >
        <Form
          size="small"
          colon={false}
          labelCol={{ span: 7 }}
          labelAlign="left"
          wrapperCol={{ span: 16 }}
          layout="horizontal"
        >
          <Form.Item label="手机号">
            <Input />
          </Form.Item>
          <Form.Item label="验证码">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={rules.captcha}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button type="primary">获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="登录密码">
            <Input />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={rules.agreement}
          >
            <Checkbox>
              我已阅读并接受 <Link to="#">用户协议</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={22}>
            <Button type="primary" htmlType="submit" block>
              立即注册
            </Button>
          </Form.Item>
        </Form>
        <div>已有账号，<Link to="#">立即登录</Link></div>
      </Card>
    )
  }
}

export default LoginForm
