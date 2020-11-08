import React from 'react'
import {Button, Col, Drawer, Form, Input, Row, Space, message} from 'antd'
import styled from 'styled-components'
import AuthStore from '../stores/auth'
import {useHistory} from 'react-router-dom'

const StyledDrawerWrapper = styled.div`
  text-align: center;
  overflow: hidden;
`
const layout = {
  labelCol: {span: 9},
  wrapperCol: {span: 6},
}

const Register = (props) => {
  const history = useHistory()
  console.log('注册组件更新了')
  const onClose = () => {
    props.onClick()
  }

  const onFinish = (values) => {
    AuthStore.setUsername(values.username)
    AuthStore.setPassword(values.password)
    AuthStore.register()
      .then(user => {
        history.push('/')
      })
      .catch(error => {
          message.error('注册失败')
        }
      )
  }
  const onFinishFailed = (error) => {
    console.log('Form组件返回失败:', error)
  }

  const validateUsername = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('只能是字母、数字或下划线')
    if (value.length < 4 || value.length > 10) return Promise.reject('长度为4~10个字符')
    return Promise.resolve()
  }

  const validateConfirm = ({getFieldValue}) => ({
    validator(rule, value) {
      if (getFieldValue('password') === value) return Promise.resolve()
      return Promise.reject('两次密码不一致')
    }
  })

  return (
    <StyledDrawerWrapper>
      <Drawer
        title="注册"
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
                <Col span={24}>
                  <Form.Item
                    label="确认密码"
                    name="conformPassword"
                    rules={[
                      {required: true, message: '再次确认密码！'},
                      validateConfirm
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

export default React.memo(Register)
