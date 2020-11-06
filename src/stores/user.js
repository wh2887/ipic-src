import React from 'react'
import {Auth} from '../modules'

const UserStore = {
  currentUser: null,
  pullUser() {
    this.currentUser = Auth.getCurrentUser()
  },
  resetUser() {
    UserStore.currentUser = null
  }
}

export default UserStore