import React from 'react'
import {Drawer} from 'antd'

const Register = () => {
  let visible = false

  const showDrawer = () => {
    visible = true
  }

  const onClose = () =>{
    visible = false
  }

  return (
    <div>
      <Drawer
        placement="top"
        closable={true}
        visible={visible}
        onClose={onClose}
      >
        登录
      </Drawer>
    </div>
  )
}

export default Register