import React, {useContext} from 'react'
import {Drawer} from 'antd'
import Context from '../stores'

const Login = () => {
  const {visible, dispatch} = useContext(Context)

  const onClose = () => {
    dispatch({type: 'drawerToggle', visible: false})
  }

  return (
    <div>
      <Drawer
        title="登录"
        placement="top"
        key="top"
        visible={visible.visible}
        closable={true}
        onClose={onClose}
      >
        Login
      </Drawer>
    </div>
  )
}

export default Login
