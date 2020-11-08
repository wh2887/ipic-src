import React from 'react'
import {Button, Col, Drawer, Form, Input, Row, Space} from 'antd'
import styled from 'styled-components'

const StyledDrawerWrapper = styled.div`
  text-align: center;
  overflow: hidden;
`

const layout = {
  labelCol: {span: 9},
  wrapperCol: {span: 6},
}


const Login = (props) => {
  console.log('Login组件更新了')

  const onClose = () => {
    props.onClick()
  }
  const handleRegister = () => {
    props.onRegister()
  }

  const onFinish = (values) => {
    console.log('Form组件返回成功：', values)
  }
  const onFinishFailed = (error) => {
    console.log('Form组件返回失败:', error)
  }

  const validateUsername = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('只能是字母、数字或下划线')
    if (value.length < 4 || value.length > 10) return Promise.reject('长度为4~10个字符')
    return Promise.resolve()
  }

  return (
    <StyledDrawerWrapper>
      <Drawer
        title="登录"
        placement="top"
        key="top"
        headerStyle={{textAlign: 'center'}}
        height="auto"
        visible={props.visible}
        closable={true}
        onClose={onClose}
        destroyOnClose={true}
      >
        <Row type="flex" justify="center" align="middle">
          <Col span={16}>
            <Form
              {...layout}
              name="normal_login"
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row type="flex" justify="center" align="middle">
                <Col span={24}>
                  <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                      {required: true, message: '请输入用户名'},
                      {
                        validator: validateUsername
                      }
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                      {required: true, message: '请输入您的密码'},
                      {min: 6, message: '最少6个字符'},
                      {max: 10, message: '最多10个字符'}
                    ]}
                  >
                    <Input.Password/>
                  </Form.Item>
                </Col>
              </Row>

              <Row type="flex" justify="center" align="middle">
                <Col>
                  <Form.Item>
                    <Space size="small">
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                      </Button>
                      <Button type="primary" className="login-form-button" onClick={handleRegister}>
                        注册
                      </Button>
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Drawer>
    </StyledDrawerWrapper>
  )
}

export default React.memo(Login)
