export default {
  'drawerToggleLogin': (state, action) => {
    return {...state, loginVisible: action.loginVisible}
  },
  'drawerToggleRegister': (state, action) => {
    return {...state, registerVisible: action.registerVisible}
  },
}
