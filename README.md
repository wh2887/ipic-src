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

### 路由
官方给 React-Router 的主要成分：
- 路由器(routers)： `<BrowserRouter>, <HashRouter>`
- 路线匹配者(route matchers): `<Route>, <Switch>`
- 导航,也叫路线更改者(navigation): `<Link>, <NavLink>, <Redirect>`

#### 两种路由模式
BrowserRouter、HashRouter是 React-Router 中的两种模式。 
 **BrowserRouter** 需要服务器支持，是比较友好美观的方式。此方法适用于**create-react-app**的开发环境中。因为有个本地服务器，可配置。

而 **HashRouter** 是将当前位置存储在URL的哈希部分中。因为哈希永远不会发送到服务器，这就不需要服务器的配置。我发布到 github-pages 上时会将路由模式切换到 BrowserRouter  

官方文档中还介绍了一种**memory history**内存历史记录实现，可用于测试和非DOM环境（例如React Native）。

本项目将 App 组件在 index.js 文件中使用 Router 包裹。然后在 App 组件中写路由匹配与导航切换。按钮的跳转页面功能使用 react-router-dom 包中的 useHistory Hooks 来实现。
useHistory挂钩使您可以访问可用于导航的历史记录实例。

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

### 全局状态管理
在一个项目中难免会遇到多个组件访问一个数据的情况，像这种共享数据以及通信，须有有一个统一的机制进行管理。这样才有益于维护与编程。全局状态管理就充当了对统一状态的增、删、改、查。  
在 React 项目中全局状态管理的方式有很多，比如 Redux、 Mobx、以及 React Hooks API 中的 useReducer（需搭配 createContext 上下文）。  
在本项目中我将使用目前比较流行的 useReducer & createContext 结合来实现全局状态管理。 

## 开发
开发流程大致分为：
1. 页面功能分析
2. 页面效果设计
3. 页面基础布局
4. 接入后台
5. 页面功能实现
6. 测试功能
7. 优化代码及设计
8. 发布产品上线

### 1. 页面功能分析
此图床项目的功能核心在上传图片，再反馈给用户线上地址预览。对于上传图片不能无限制的上传，所以需要有用户对应，以此来限制用户的上传量。或者单个文件的大小等。对于图床项目的拓展，可以提供一个修改图片尺寸的功能。大致就是这些。简单总结就是：用户登录、注册、注销，上传图片，文件限制，转换在线图片，修改图片尺寸大小。

### 2. 页面基础布局
本项目功能比较简单，页面可以设计可以偏向简约。我采用 antd UI 组件库来实现自己的 UI。一是因为方便，二是这个 UI 框架目前也比较流行。页面主体的布局比较简单，这里不再赘述。说几点细节。  
首先登录、注册我使用的方案是组件容纳内容，而不是增加新页面来实现。我使用了 antd 的 Drawer抽屉 组件，能达到点击登录注册按钮从预期的方向弹出登录注册表单。  
实现这个功能，碰到了这个项目的第一个状态，就是控制登录注册的开关（Toggle）。这个开关是需要在最少1个页面，3个组件中访问并使用的（可能是父子组件关系，也可能是兄弟组件）。由于之后的登录状态也需要全局数据，所以直接对整个App组件进行上下文管理，这样数据就能在子孙组件之间共享。  
全局数据管理的大致思路是：  
1. 将所有相关数据模块化的存放在 store 中。
2. 将所有对数据的操作封装在 reducer 中。
3. 创建一个 Context 上下文 ： `const Context = React.createContext(null)`
4. 创建对数据的读写 API 。（由于模块化编程，所以我们需要将所有数据在一个地方整合好后再统一传递）: `const [state,dispatch] = useReducer(reducer,initStores)`
如上代码中的**reducer,initStores** 需要自己手动整合好后再传递给useReducer
5. 将第4步创建好的 API 传递给 第 3 步创建的 Context 上下文： 
    ```jsx
    const App = () => {
     const [state,dispatch] = useReducer(reducer,initStores)
      const api = {state,dispatch}
      return (
      	<Context.Provider value={api}>
          	Components...
          </Context.Provider>
      )
    }
    ```

7. 如上所述，已经完成了全局数据与操作，都共享给了这个 Provider 内部组件了。使用时只需要使用 useContext 获取读写的 API，然后进行相应的操作即可。
    ```jsx
    const { state, dispatch } = useContext(Context)
    ```
本项目需要登录注册两个按钮来分别控制两个组件，所以需要两个开关的变量来实现。操作也是两个，分别控制相应的变量，再在某个地方进行整合。  
要知道 React 并非是响应式的。这个 UI 的是因为 useReducer 帮我们渲染了。因为每一次操作都是产生一个新的状态，而非之前的那个状态。切记这一点，这个思维方式与之前学习的 Vue有些出入。Vue 的响应式是根据一个数据是否被改变了而更新UI，而 React 则是产生新的数据，不会修改之前的数据。


### `yarn install`
安装依赖

### `yarn start`
在开发模式下运行应用，打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。

### `yarn build`
将要生产的应用构建到`build`文件夹中

