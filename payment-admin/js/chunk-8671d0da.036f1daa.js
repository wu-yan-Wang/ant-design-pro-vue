(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8671d0da"],{"14db":function(e,t,r){"use strict";var n=r("8587"),i=r.n(n);i.a},8587:function(e,t,r){},ac2a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[e.isLoginError?r("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:"账户或密码错误（admin/ant.design )"}}):e._e(),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名或邮箱地址"},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:"账户"}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"密码"}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),r("a-form-item"),r("a-form-item",{staticStyle:{"margin-top":"24px"}},[r("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v("确定")])],1)],1)],1)},i=[],a=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("2fa7")),s=r("5880"),o=r("ca00");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={components:{},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){},methods:l({},Object(s["mapActions"])(["Login","Logout"]),{handleUsernameOrEmail:function(e,t,r){var n=this.state,i=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;i.test(t)?n.loginType=0:n.loginType=1,r()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,n=this.state,i=this.customActiveKey,a=this.Login;n.loginBtn=!0;var s="tab1"===i?["username","password"]:["mobile","captcha"];r(s,{force:!0},(function(e,r){if(e)setTimeout((function(){n.loginBtn=!1}),600);else{var i=l({},r);delete i.username,i[n.loginType?"username":"email"]=r.username,a(i).then((function(e){return t.loginSuccess(e)})).catch((function(e){return t.requestFailed(e)})).finally((function(){n.loginBtn=!1}))}}))},getCaptcha:function(e){e.preventDefault();var t=this.form.validateFields,r=this.state;t(["mobile"],{force:!0},(function(e,t){if(!e){r.smsSendBtn=!0;var n=window.setInterval((function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(n))}),1e3)}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then((function(){e.loginBtn=!1,e.stepCaptchaVisible=!1}))},loginSuccess:function(e){var t=this;this.$router.push({path:"/"}),setTimeout((function(){t.$notification.success({message:"欢迎",description:"".concat(Object(o["a"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(e){this.isLoginError=!0,this.$notification["error"]({message:"错误",description:e.message||"请求出现错误，请稍后再试",duration:4})}})},m=u,p=(r("14db"),r("2877")),f=Object(p["a"])(m,n,i,!1,null,"c2679cfe",null);t["default"]=f.exports}}]);