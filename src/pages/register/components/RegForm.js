import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Checkbox, Col, Form, Input, Modal, Row, Progress, message } from 'antd'
import { getMobileCaptcha } from '../../../utils/api'

const rules = {
  mobile: [
    {
      required: true,
      message: '请输入手机号码！',
    }, {
      pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
      message: '手机号格式不正确！'
    }
  ],
  captcha: [
    {
      required: true,
      message: '请输入手机验证码！',
    }, {
      pattern: /^\d{6}$/,
      message: '验证码格式不正确'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！'
    }, {}
  ],
  agreement: [
    {
      validator: async (_, value) => {
        if (!value) {
          throw new Error('请勾选用户协议')
        }
      }
    }
  ]
}

class RegForm extends Component {
  constructor() {
    super()

    this.state = {
      modalVisible: false,
      captchaButtonDisabled: false,
      captchaButtonText: '获取验证码',
      captchaSecond: 60,
      passwordStatus: 'success'
    }
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible })
  }

  handleChangeButtonText() {
    const timer = setInterval(() => {
      if (this.state.captchaSecond > 0) {
        this.setState({
          captchaSecond: this.state.captchaSecond - 1,
          captchaButtonText: this.state.captchaSecond + '秒'
        })
      } else {
        clearInterval(timer)
      }
    })
  }

  async getCaptcha() {
    const { code, data } = await getMobileCaptcha()

    if (200 === code) {
      localStorage.setItem('captcha', data)

      this.setState({
        captchaButtonDisabled: true
      })

      this.handleChangeButtonText()

    } else {
      message.error('获取验证码失败')
    }
  }

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
          validateTrigger="onBlur"
        >
          <Form.Item
            label="手机号"
            name="mobile"
            rules={rules.mobile}
          >
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
                <Button
                  type="primary"
                  disabled={this.state.captchaButtonDisabled}
                  onClick={() => this.getCaptcha()}
                >
                  {this.state.captchaButtonText}
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            label="登录密码"
            name="password"
            rules={rules.password}
          >
            <Input.Password />
            <Card title={
              <div>
                密码强度
                <Progress
                  percent={70}
                  status={this.state.passwordStatus}
                />
              </div>
            }>
              <p>- 输入八个以上字符，前后不能有空格，区分大小写</p>
              <p>- 必须包含大小写英文字母、数字</p>
              <p>- 多简单（我太难了）</p>
            </Card>
          </Form.Item>
          <Form.Item
            wrapperCol={22}
            name="agreement"
            valuePropName="checked"
            rules={rules.agreement}
          >
            <Checkbox>
              我已阅读并接受&nbsp;&nbsp;
              <Link
                to="#"
                onClick={() => this.setModalVisible(true)}
              >
                用户协议
              </Link>
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={22}>
            <Button type="primary" htmlType="submit" block>
              立即注册
            </Button>
          </Form.Item>
        </Form>
        <div>已有账号，<Link to="#">立即登录</Link></div>
        <Modal
          title="用户协议"
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </Card>
    )
  }
}

export default RegForm
