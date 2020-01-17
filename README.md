```
config
└── plugin.config.js          # 用于样式
public 
├── avatar2.jpg
├── index.html                # Vue 入口模板 提供了默认的loading优化 默认使用了一套模板
├── loading                   # 提供了loading的样式共俩套模板
│   ├── loading.css
│   ├── loading.html
│   └── option2
│       ├── html_code_segment.html
│       ├── loading.css
│       └── loading.svg
└── logo.png
src
├── App.vue                   # vue挂载所用的模板
├── api                       # mock js
│   ├── index.js
│   ├── login.js
│   └── manage.js
├── assets
│   ├── background.svg
│   ├── icons
│   │   └── bx-analyse.svg
│   ├── logo.png
│   └── logo.svg
├── components
│   ├── ArticleListContent
│   │   ├── ArticleListContent.vue
│   │   └── index.js
│   ├── AvatarList
│   │   ├── Item.vue
│   │   ├── List.vue
│   │   ├── index.js
│   │   ├── index.less
│   │   └── index.md
│   ├── Charts
│   │   ├── Bar.vue
│   │   ├── ChartCard.vue
│   │   ├── Liquid.vue
│   │   ├── MiniArea.vue
│   │   ├── MiniBar.vue
│   │   ├── MiniProgress.vue
│   │   ├── MiniSmoothArea.vue
│   │   ├── Radar.vue
│   │   ├── RankList.vue
│   │   ├── TagCloud.vue
│   │   ├── TransferBar.vue
│   │   ├── Trend.vue
│   │   ├── chart.less
│   │   └── smooth.area.less
│   ├── CountDown
│   │   ├── CountDown.vue
│   │   ├── index.js
│   │   └── index.md
│   ├── DescriptionList
│   │   ├── DescriptionList.vue
│   │   └── index.js
│   ├── Editor
│   │   ├── QuillEditor.vue
│   │   └── WangEditor.vue
│   ├── Ellipsis
│   │   ├── Ellipsis.vue
│   │   ├── index.js
│   │   └── index.md
│   ├── Exception
│   │   ├── ExceptionPage.vue
│   │   ├── index.js
│   │   └── type.js
│   ├── FooterToolbar
│   │   ├── FooterToolBar.vue
│   │   ├── index.js
│   │   ├── index.less
│   │   └── index.md
│   ├── GlobalFooter
│   │   ├── GlobalFooter.vue
│   │   └── index.js
│   ├── GlobalHeader
│   │   ├── GlobalHeader.vue
│   │   └── index.js
│   ├── IconSelector
│   │   ├── IconSelector.vue
│   │   ├── README.md
│   │   ├── icons.js
│   │   └── index.js
│   ├── Menu
│   │   ├── SideMenu.vue
│   │   ├── index.js
│   │   ├── menu.js
│   │   └── menu.render.js
│   ├── MultiTab
│   │   ├── MultiTab.vue
│   │   ├── events.js
│   │   ├── index.js
│   │   └── index.less
│   ├── NProgress
│   │   └── nprogress.less
│   ├── NoticeIcon
│   │   ├── NoticeIcon.vue
│   │   └── index.js
│   ├── NumberInfo
│   │   ├── NumberInfo.vue
│   │   ├── index.js
│   │   ├── index.less
│   │   └── index.md
│   ├── PageHeader
│   │   ├── PageHeader.vue
│   │   └── index.js
│   ├── PageLoading
│   │   └── index.jsx
│   ├── Result
│   │   ├── Result.vue
│   │   └── index.js
│   ├── Search
│   │   ├── GlobalSearch.jsx
│   │   └── index.less
│   ├── SettingDrawer
│   │   ├── SettingDrawer.vue
│   │   ├── SettingItem.vue
│   │   ├── index.js
│   │   ├── settingConfig.js
│   │   └── themeColor.js
│   ├── StandardFormRow
│   │   ├── StandardFormRow.vue
│   │   └── index.js
│   ├── Table
│   │   ├── README.md
│   │   └── index.js
│   ├── TagSelect
│   │   ├── TagSelectOption.jsx
│   │   └── index.jsx
│   ├── TextArea
│   │   ├── index.jsx
│   │   └── style.less
│   ├── Tree
│   │   └── Tree.jsx
│   ├── Trend
│   │   ├── Trend.vue
│   │   ├── index.js
│   │   ├── index.less
│   │   └── index.md
│   ├── _util
│   │   └── util.js
│   ├── global.less
│   ├── index.js
│   ├── index.less
│   └── tools
│       ├── Breadcrumb.vue
│       ├── DetailList.vue
│       ├── HeadInfo.vue
│       ├── LangSelect.vue
│       ├── Logo.vue
│       ├── TwoStepCaptcha.vue
│       ├── UserMenu.vue
│       └── index.js
├── config
│   ├── defaultSettings.js
│   └── router.config.js
├── core
│   ├── bootstrap.js
│   ├── directives
│   │   └── action.js
│   ├── icons.js
│   ├── lazy_lib
│   │   └── components_use.js
│   └── lazy_use.js
├── layouts
│   ├── BasicLayout.vue
│   ├── BlankLayout.vue
│   ├── PageView.vue
│   ├── RouteView.vue
│   ├── UserLayout.vue
│   └── index.js
├── main.js
├── mock
│   ├── index.js
│   ├── services
│   │   ├── article.js
│   │   ├── auth.js
│   │   ├── manage.js
│   │   ├── other.js
│   │   ├── tagCloud.js
│   │   └── user.js
│   └── util.js
├── permission.js
├── router
│   ├── README.md
│   ├── generator-routers.js
│   └── index.js
├── store
│   ├── getters.js
│   ├── index.js
│   ├── modules
│   │   ├── app.js
│   │   ├── async-router.js
│   │   ├── permission.js
│   │   └── user.js
│   └── mutation-types.js
├── utils
│   ├── axios.js
│   ├── device.js
│   ├── domUtil.js
│   ├── filter.js
│   ├── helper
│   │   └── permission.js
│   ├── mixin.js
│   ├── permissions.js
│   ├── request.js
│   ├── util.js
│   └── utils.less
└── views
    ├── 404.vue
    ├── Home.vue
    ├── account
    │   ├── center
    │   │   ├── Index.vue
    │   │   └── page
    │   │       ├── App.vue
    │   │       ├── Article.vue
    │   │       ├── Project.vue
    │   │       └── index.js
    │   └── settings
    │       ├── AvatarModal.vue
    │       ├── BaseSetting.vue
    │       ├── Binding.vue
    │       ├── Custom.vue
    │       ├── Index.vue
    │       ├── Notification.vue
    │       └── Security.vue
    ├── dashboard
    │   ├── Analysis.vue
    │   ├── Monitor.vue
    │   ├── TestWork.vue
    │   └── Workplace.vue
    ├── exception
    │   ├── 403.vue
    │   ├── 404.vue
    │   └── 500.vue
    ├── form
    │   ├── BasicForm.vue
    │   ├── advancedForm
    │   │   ├── AdvancedForm.vue
    │   │   ├── RepositoryForm.vue
    │   │   └── TaskForm.vue
    │   └── stepForm
    │       ├── Step1.vue
    │       ├── Step2.vue
    │       ├── Step3.vue
    │       └── StepForm.vue
    ├── list
    │   ├── CardList.vue
    │   ├── QueryList.vue
    │   ├── StandardList.vue
    │   ├── TableList.vue
    │   ├── modules
    │   │   ├── CreateForm.vue
    │   │   ├── StepByStepModal.vue
    │   │   └── TaskForm.vue
    │   ├── search
    │   │   ├── Applications.vue
    │   │   ├── Article.vue
    │   │   ├── Projects.vue
    │   │   ├── SearchLayout.vue
    │   │   └── components
    │   │       ├── CardInfo.vue
    │   │       └── IconText.vue
    │   └── table
    │       ├── Edit.vue
    │       └── List.vue
    ├── other
    │   ├── IconSelectorView.vue
    │   ├── PermissionList.vue
    │   ├── RoleList.vue
    │   ├── TableInnerEditList.vue
    │   ├── TreeList.vue
    │   ├── UserList.vue
    │   └── modules
    │       ├── OrgModal.vue
    │       └── RoleModal.vue
    ├── profile
    │   ├── advanced
    │   │   └── Advanced.vue
    │   └── basic
    │       └── Index.vue
    ├── result
    │   ├── Error.vue
    │   └── Success.vue
    ├── role
    │   └── RoleList.vue
    └── user
        ├── Login.vue
        ├── Register.vue
        └── RegisterResult.vue
```