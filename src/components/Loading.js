import React from 'react'
import {Spin} from 'antd'

const Loading = (props) => {
  return <div><Spin size={props.size}/></div>
}

export default Loading