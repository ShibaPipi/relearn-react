import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Checkbox, Col, Form, Input, Modal, Row, message } from 'antd'
import { getMobileCaptcha, login } from '../../../utils/api'
import { getToken, setToken } from '../../../utils/auth'

const rules = {
  mobile: [
    {
      required: true,
      message: '请输入手机号码！',
    }, {
      pattern: /^[1][345789][0-9]{9}$/,
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
    }, {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
      message: '密码格式错误'
    }
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
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      captchaButtonDisabled: false,
      captchaSecond: 60,
    }
  }

  formRef = React.createRef()

  setModalVisible(modalVisible) {
    this.setState({ modalVisible })
  }

  captchaInterval() {
    const { captchaSecond } = this.state

    if (1 === captchaSecond) {
      this.setState({
        captchaSecond: 60,
        captchaButtonDisabled: false,
      })
    } else {
      this.setState({
        captchaSecond: captchaSecond - 1,
      })

      setTimeout(() => this.captchaInterval(), 1000)
    }
  }

  async getCaptcha() {
    const { code, data } = await getMobileCaptcha()

    if (200 === code) {
      localStorage.setItem('captcha', data)

      this.setState({
        captchaButtonDisabled: true
      })

      this.captchaInterval()
    } else {
      message.error('获取验证码失败')
    }
  }

  async loginSubmit() {
    const { mobile } = await this.formRef.current.validateFields()
    const { code } = login(mobile)
    if (200 === code) {
      this.props.history.push({
        pathname: '/'
      })
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
          requiredMark={false}
          ref={this.formRef}
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
                  {this.state.captchaButtonDisabled ? `${this.state.captchaSecond} 秒` : '获取验证码'}
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
            <Button
              type="primary"
              block
              onClick={() => this.loginSubmit()}
            >
              立即注册
            </Button>
          </Form.Item>
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
        </Form>
        <div>已有账号，<Link to="#">立即登录</Link></div>
      </Card>
    )
  }
}

export default RegForm
