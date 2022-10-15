# Frontend ddd xstate 架构模板

## 体验地址

[Code Sandbox](https://codesandbox.io/p/github/foolishandi/front-ddd-xstate-ts/main)

## 模板包括

> 1.基于官方 create-react-app@4 ts 模板制作，利用 craco 配置 webpack

> 2.基于文件路径的路由系统实现，无需写路由文件，无需安装插件，也可以自己更改，可以非常方便改成正常的 react-router-rom 路由

```javascript
    路由组件(文件夹文件均可)
    **路径:`src/ui/home(Header){e}[id]`  生成路由:`/home/:id`**
    解释:(Header):会被Header高阶组件包裹；{e}:精确匹配路径；[id]：生成动态路由
    注意:1)生成的路由会全部小写
         2)(){}[]有顺序要求，()可以添加多个
         3)如果文件夹内有子路由，则文件夹需要加上{e}
         4)默认自动生成路由的主文件夹可以更改

```

> 3.初步按照 DDD 领域驱动设计，利用有限状态机 Xstate 库实现

> 4.利用 jotai 状态管理全局共享状态

## DEV:

> 状态机可视化:打开示例后，需点击 xstate ddd 示例，把左侧浮动按钮拉开

```bush
    run start
```

## 目前进度:

-[x] 初始化

-[x] 示例选择

-[x] xstate 有限状态机接入

-[] 基于文件路径的路由系统

-[] ddd 示例
