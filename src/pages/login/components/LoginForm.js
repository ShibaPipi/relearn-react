import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Card,
  Button,
  Form,
  Input,
  Radio,
  Row,
  Col,
  Checkbox,
  Image
} from 'antd';

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
                  rules={[{
                    required: true,
                    message: '请输入手机验证码！',
                  }]}
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
          <Form.Item label="随机验证码">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[{
                    required: true,
                    message: '请输入手机验证码！',
                  }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Image
                  preview={false}
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170414%2F1b379f0892374b7bad4d84721dd6d830.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617181971&t=a5a292613f2b88fbdf09d7f2f3b109cc" />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="账号类型" name="size">
            <Radio.Group>
              <Radio value="small" checked>个人用户</Radio>
              <Radio value="default">企业用户</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[{
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            }]}
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
    );
  }
}

export default LoginForm;
