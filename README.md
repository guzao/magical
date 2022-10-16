# Vue 3 + TypeScript + Vite
```ts
    /**
    ================================ 项目结构 ==================================
    
     -src
        -API        接口
        -component  组件
            -common 通用组件
                -staticPageContainer    静态页面容器
            -index  导出组件
        -enmu       枚举类型 （常量）
            -index      导出枚举类型
            -module     模块
                -httpState  接口
                -layout     页面布局
                -theme      主题
        -hooks      复用方法    
        -HTTP       axios接口封装
        -langs      国际化配置参数
            -zh     中文
            -en     英文
            -index  导出语言
        -pages      页面
            -dashboder  工作台
            -layout     页面布局容器
                -index  layout容器
                -Header 头部组件
                -Main   主视图容器
                -Menu   侧边栏
            -monitor    信息监视
                -history    历史曲线
                -overView   电站运行概览
                -reportAlarm   告警事件查看
                -subSite   设备工况详情
            -staticPages静态页面
        -router     路由
            -guard  注册路由守卫
            -staticPages    静态页面
            -index  导出路由
        -store      全局数据
        -styles     样式
        -type       数据类型
        -usePlugin  注册插件
            -index          导出setupApp 方法
            -setupApp       启动项目
            -useComponent   注册ui组件库
            -useRouter      注册路由
            -useStore       注册全局数据
            -useI18n        国际化多语言
        -utils      公用工具
        -appConfig  项目配置
        
    =============================================================================
    */
```
