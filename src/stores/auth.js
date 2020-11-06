import React from 'react'
import {Auth} from '../modules'
import UserStore from './user'
import {User} from 'leancloud-storage'

const AuthStore = {
  loginVisible: false,
  registerVisible: false,
  username: '',
  password: '',
  setUsername(username) {
    AuthStore.username = username
  },
  setPassword(password) {
    AuthStore.password = password
  },
  register() {
    return new Promise((resolve, reject) => {
      Auth.register(AuthStore.username, AuthStore.password).then(user => {
          // 注册成功要做什么？ 拉取用户啊
          UserStore.pullUser()
          resolve(user)
        }
      ).catch(error => {
        // 注册失败要做什么？
        UserStore.resetUser()
        reject(error)
      })
    })
  }
}


window.AuthStore = AuthStore

export default AuthStore