import AV, {User, Query} from 'leancloud-storage'

AV.init({
  appId: 'XiPhQnNF8QhIcfxwCLhzEMJq-gzGzoHsz',
  appKey: 'XN5ItBBYGzcX9zmQP23q7J2e',
  serverURL: 'https://xiphqnnf.lc-cn-n1-shared.com'
})

const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(
        loginedUser => resolve(loginedUser),
        error => reject(error)
      )
    })
  },
  getCurrentUser() {
    return User.current()
  }
}

export {Auth}

