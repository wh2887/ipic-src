## 介绍
ipic 项目是我在学习了 React 基础之后做的第一个练习项目。它主要支持将本地图片上传到云端，供在线预览，并附链接。

## 技术栈
- React
- React-Router
- Mobx
- SCSS

## 开发文档

### 页面路由
长话短说（四个关键词）：
1. Router 标签包裹一切。 （最外层包裹)
2. Switch 最终得到的是一个路由结果。（用于显示切换路由后的页面，Switch 标签内有 Route 供给结果。）
3. Route 做匹配路由用，匹配到的结果给 Switch。
4. Link（/NavLink） 用作路由跳转，相当于链接。 

### 路由详解
官方给 React-Router 的主要成分：
- 路由器(routers)： `<BrowserRouter>, <HashRouter>`
- 路线匹配者(route matchers): `<Route>, <Switch>`
- 导航,也叫路线更改者(navigation): `<Link>, <NavLink>, <Redirect>`

#### 两种路由模式
BrowserRouter、HashRouter是 React-Router 中的两种模式。 
 **BrowserRouter** 需要服务器支持，是比较友好美观的方式。此方法适用于**create-react-app**的开发环境中。因为有个本地服务器，可配置。

而 **HashRouter** 是将当前位置存储在URL的哈希部分中。因为哈希永远不会发送到服务器，这就不需要服务器的配置。我发布到 github-pages 上时会将路由模式切换到 BrowserRouter

本项目将 App 组件在 index.js 文件中使用 Router 包裹。然后在 App 组件中写路由匹配与导航切换。
- exact 表示首页
- 导航是 to 表示跳转的路由
- 路由匹配是用 path + component 属性
```jsx
// index.js
import {HashRouter} from 'react-router-dom'
ReactDOM.render(
  <HashRouter>
      <App/>
  </HashRouter>,
  document.getElementById('root')
)

// App.js
import {Switch, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
        <nav>
          <NavLink to='/' exact activeClassName="active">首页</NavLink>
          <NavLink to='/history'>上传历史</NavLink>
          <NavLink to='/about'>关于我</NavLink>
        </nav>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/history' component={History}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  ) 
}
```

## 开发

### `yarn install`
安装依赖

### `yarn start`
在开发模式下运行应用，打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。

### `yarn build`
将要生产的应用构建到`build`文件夹中

