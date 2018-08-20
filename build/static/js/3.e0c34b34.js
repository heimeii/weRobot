(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Mb6R:function(t,e,o){},N9b8:function(t,e,o){"use strict";o.r(e);var s=o("rmO2"),a=o.n(s),n=o("9cTa"),i=o.n(n),r=o("QdXe"),c=o.n(r),u=o("lOrp"),l=o("RRlj"),d=o("WpiJ"),h={name:"LoginRobotModal",props:["name","active"],data:function(){return{qrCodeUrl:"",refreshInterval:"",time:"",show:!1,timestamp:"",stopAllTime:""}},methods:c()({open:function(){var t=i()(a.a.mark(function t(){var e,o,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.show=this.active,t.prev=1,this.timestamp=(new Date).getTime(),t.next=5,d.a.getLoginQrcode({userId:this.userToken});case 5:return e=t.sent,o=e.uuid,s=e.qrcode,this.setUUId(o),this.qrCodeUrl=s,t.next=12,this.isScan();case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),this.loading({text:t.t0.message}),this.loaded(1500);case 18:case"end":return t.stop()}},t,this,[[1,14]])}));return function(){return t.apply(this,arguments)}}(),isScan:function(){var t=i()(a.a.mark(function t(){var e,o=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((new Date).getTime()-this.timestamp>3e5)){t.next=4;break}return this.loading({text:"超时，请刷新"}),this.loaded(1500),t.abrupt("return",!1);case 4:return e=this.timestamp,t.prev=5,t.next=8,d.a.isScan({userId:this.userToken,uuid:this.uuid});case 8:return t.next=10,this.isLogin();case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),"等待扫码"===t.t0.message?this.show&&e===this.timestamp&&(this.time=setTimeout(i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.isScan();case 2:case"end":return t.stop()}},t,this)})),1e3)):(this.init(),this.loading({text:t.t0.message}),this.loaded(1500));case 15:return t.abrupt("return",!0);case 16:case"end":return t.stop()}},t,this,[[5,12]])}));return function(){return t.apply(this,arguments)}}(),isLogin:function(){var t=i()(a.a.mark(function t(){var e,o,s,n,r=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!((new Date).getTime()-this.timestamp>3e5)){t.next=4;break}return this.loading({text:"超时，请刷新"}),this.loaded(1500),t.abrupt("return",!1);case 4:return e=this.timestamp,t.prev=5,t.next=8,d.a.isLogin({userId:this.userToken,uuid:this.uuid});case 8:return o=t.sent,s=o.uin,n=o.id,clearInterval(this.refreshInterval),t.next=14,this.initRobot({uin:s,robotId:n});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),"等待确认"===t.t0.message?this.show&&e===this.timestamp&&(this.time=setTimeout(i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.isLogin();case 2:case"end":return t.stop()}},t,this)})),1e3)):(this.init(),this.loading({text:t.t0.message}),this.loaded(1500));case 19:return t.abrupt("return",!0);case 20:case"end":return t.stop()}},t,this,[[5,16]])}));return function(){return t.apply(this,arguments)}}(),initRobot:function(){var t=i()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.close(),t.next=4,d.a.init(e);case 4:this.$emit("successLogin"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),this.loading({text:t.t0.message}),this.loaded(1500);case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),close:function(){this.init(),this.show=!1,this.closeBackDrop(),this.$emit("close")},init:function(){clearTimeout(this.time),clearInterval(this.refreshInterval),this.time="",this.refreshInterval=""}},Object(u.c)(["closeBackDrop","openBackDrop","loading"]),Object(u.c)("User",["setUUId"]),Object(u.b)(["loaded"])),components:{Modal:l.a},watch:{active:function(t){t&&(this.openBackDrop(),this.open())}},computed:c()({},Object(u.d)("User",["userToken","uuid"]))},b=(o("V57W"),o("ertO")),p=Object(b.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("modal",{attrs:{active:t.show},on:{toogle:t.close}},[o("div",{staticClass:"modal-header"},[o("h5",[t._v(t._s(t.name?"机器人连接":"机器人创建"))]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"body"},[o("div",{staticClass:"qrcode"},[o("img",{attrs:{src:t.qrCodeUrl,alt:"登陆二维码"}})]),t._v(" "),o("span",[t._v(t._s(t.name?"用机器人"+t.name+"的微信账号扫码重新登录":"微信扫码并确认登陆，完成机器人创建"))])])])},[],!1,null,"2e7729be",null);p.options.__file="LoginRobotModal.vue";var v=p.exports,f=o("EQSO"),m=o("Otcf"),g={name:"RobotManage",data:function(){return{focusRobotName:"",focusRobotId:"",loginRobotModal:!1,logoutRobotModal:!1,deleteRobotModal:!1,url:m.a,interval:""}},methods:c()({openLoginRobotModal:function(){var t=i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loginRobotModal=!0;case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),closeLoginRobotModal:function(){this.loginRobotModal=!1},openLogoutRobotModal:function(){this.logoutRobotModal=!0},closeLogoutRobotModal:function(){this.logoutRobotModal=!1},logoutRobot:function(){var t=i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading({text:"正在断线"}),t.prev=1,t.next=4,d.a.logout({robotId:this.focusRobotId});case 4:return t.next=6,this.getRobotList();case 6:this.loaded(100),this.closeLogoutRobotModal(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),this.loading({text:t.t0.message}),this.loaded(1500);case 14:case"end":return t.stop()}},t,this,[[1,10]])}));return function(){return t.apply(this,arguments)}}(),openDeleteRobotModal:function(t){var e=t.nickname,o=t.id;this.focusRobotName=e,this.focusRobotId=o,this.deleteRobotModal=!0},closeDeleteRobotModal:function(){this.deleteRobotModal=!1},deleteRobot:function(){var t=i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading({text:"正在删除"}),t.prev=1,t.next=4,d.a.delRobot({robotId:this.focusRobotId});case 4:return t.next=6,this.getRobotList();case 6:this.loaded(100),this.focusRobotName="",this.focusRobotId="",this.closeDeleteRobotModal(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),this.loading({text:t.t0.message}),this.loaded(1500);case 16:case"end":return t.stop()}},t,this,[[1,12]])}));return function(){return t.apply(this,arguments)}}(),toogleRobotStatu:function(t){var e=t.status,o=t.nickname,s=t.id,a=t.uin;switch(this.focusRobotName=o,this.focusRobotId=s,e){case 0:this.openLoginRobotModal(a);break;case 1:this.openLogoutRobotModal()}}},Object(u.b)("Robot",["getRobotList"]),Object(u.b)(["loaded"]),Object(u.c)(["loading"])),beforeRouteEnter:function(t,e,o){o(function(t){t.interval=setInterval(function(){t.getRobotList()},6e4)})},beforeRouteLeave:function(t,e,o){clearInterval(this.interval),o()},watch:{robotList:function(){0===this.robotList.length&&this.openLoginRobotModal()}},components:{LoginRobotModal:v,MessageBox:f.a},computed:c()({},Object(u.d)("User",["userToken"]),Object(u.d)("Robot",{robotList:"list"}))},R=(o("Zm69"),Object(b.a)(g,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"robot-manage"}},[o("h4",[t._v("机器人管理")]),t._v(" "),o("div",{staticClass:"robot-list"},[t._l(t.robotList,function(e){return o("div",{key:e.id,staticClass:"card"},[o("div",{staticClass:"card-body"},[o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(o){t.openDeleteRobotModal(e)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),o("img",{attrs:{src:e.headImgUrl,alt:"头像"}}),t._v(" "),o("p",{staticClass:"card-text"},[t._v("机器人："+t._s(e.nickname))]),t._v(" "),o("p",{staticClass:"card-text"},[t._v("状态："+t._s(e.status?"在线":"离线"))]),t._v(" "),o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(o){t.toogleRobotStatu(e)}}},[t._v(t._s(e.status?"手动掉线":"重新连接"))])])])}),t._v(" "),0===t.robotList.length?o("div",{staticClass:"card col-sm-6 col-md-4 login-robot",on:{click:t.openLoginRobotModal}},[t._m(0)]):t._e()],2),t._v(" "),t._m(1),t._v(" "),o("login-robot-modal",{attrs:{active:t.loginRobotModal,name:t.focusRobotName},on:{close:t.closeLoginRobotModal,successLogin:t.getRobotList}}),t._v(" "),o("message-box",{attrs:{active:t.logoutRobotModal,title:"手动掉线"},on:{close:t.closeLogoutRobotModal,submit:t.logoutRobot}},[o("span",[t._v("你确定要掉线"),o("br"),t._v('机器人"'+t._s(t.focusRobotName)+'"吗？')])]),t._v(" "),o("message-box",{attrs:{active:t.deleteRobotModal,title:""},on:{close:t.closeDeleteRobotModal,submit:t.deleteRobot}},[o("span",[t._v("你确定要删除"),o("br"),t._v('机器人"'+t._s(t.focusRobotName)+'"吗？')])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body"},[e("span",{staticClass:"card-title"},[this._v("+ 创建机器人")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{staticClass:"help"},[this._v("使用帮助：\n        "),e("li",[this._v("如果尝试多次登录失败，请登录web微信（http://wx.qq.com），检查是否可以正常登录")]),this._v(" "),e("li",[this._v("微信机器人登录后，请尽量避使用PC客户端登录或网页端登录微信，否则会导致机器人服务不稳定")])])}],!1,null,"a97e0b04",null));R.options.__file="RobotManage.vue";e.default=R.exports},V57W:function(t,e,o){"use strict";var s=o("tZy9");o.n(s).a},Zm69:function(t,e,o){"use strict";var s=o("Mb6R");o.n(s).a},tZy9:function(t,e,o){}}]);
//# sourceMappingURL=3.e0c34b34.js.map