(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+kHj":function(e,t,o){"use strict";o.r(t);var r=o("QdXe"),n=o.n(r),a=o("rmO2"),s=o.n(a),c=o("9cTa"),i=o.n(c),l=o("lOrp"),u=o("Otcf"),d=function(e){return new Promise(function(t,o){u.b.get("/robot/getWelcomeGreet",{params:e}).then(function(e){e.data.status?t(e.data.entry):o(new Error(e.data.message))}).catch(function(){o(new Error("网络不稳定请刷新重试！"))})})},m=function(e,t){return new Promise(function(o,r){u.b.post("/robot/updateWelcomeGreet?robotId=".concat(e),t).then(function(e){e.data.status?o(e.data.entry):r(new Error(e.data.message))}).catch(function(){r(new Error("网络不稳定请刷新重试！"))})})},p={name:"WelcomeGreet",data:function(){return{welcomeGreet:[]}},mounted:function(){var e=i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading({text:"正在加载"}),e.next=4,d({userId:this.userId});case 4:this.welcomeGreet=e.sent,0===this.welcomeGreet.length&&this.welcomeGreet.push({welcomeText:"欢迎",welcomeIntroduce:"加入[微笑][微笑]"}),this.loaded(100),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),this.loading({text:e.t0.message}),this.loaded(1500);case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),methods:n()({addGreet:function(){this.welcomeGreet.push({welcomeText:"",welcomeIntroduce:""})},deleteGreet:function(e){this.welcomeGreet.splice(e,1)},updateWelcomeGreet:function(){var e=i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.welcomeGreet.forEach(function(e){if(!e.welcomeText||!e.welcomeIntroduce)throw new Error("请填写内容")}),this.loading({text:"正在保存"}),e.next=5,m(this.robotList[0].id,this.welcomeGreet);case 5:this.loaded(100),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),this.loading({text:e.t0.message}),this.loaded(1500);case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},Object(l.c)(["loading"]),Object(l.b)(["loaded"])),computed:n()({disAdd:function(){return this.welcomeGreet.length>=10}},Object(l.d)("User",{userId:"userToken"}),Object(l.d)("Robot",{robotList:"list"}))},w=(o("PMR5"),o("ertO")),f=Object(w.a)(p,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{attrs:{id:"welcome-greet"},on:{submit:function(t){return t.preventDefault(),e.updateWelcomeGreet(t)}}},[o("h4",[e._v("欢迎词")]),e._v(" "),e._l(e.welcomeGreet,function(t,r){return o("div",{key:r,staticClass:"form-group row"},[o("label",{staticClass:"col-sm-1 col-form-label"}),e._v(" "),o("div",{staticClass:"form-row align-items-center greet"},[o("div",{staticClass:"col-auto"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.welcomeText,expression:"one.welcomeText"}],staticClass:"form-control",attrs:{type:"text",name:"welcomeText",maxlength:"10"},domProps:{value:t.welcomeText},on:{input:function(o){o.target.composing||e.$set(t,"welcomeText",o.target.value)}}})]),e._v(" "),o("span",[e._v("@被邀请人")]),e._v(" "),o("div",{staticClass:"col-auto"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.welcomeIntroduce,expression:"one.welcomeIntroduce"}],staticClass:"form-control",attrs:{type:"text",name:"welcomeIntroduce",maxlength:"10"},domProps:{value:t.welcomeIntroduce},on:{input:function(o){o.target.composing||e.$set(t,"welcomeIntroduce",o.target.value)}}})])]),e._v(" "),0!==r?o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){e.deleteGreet(r)}}},[o("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e()])}),e._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-1 col-form-label"}),e._v(" "),o("button",{staticClass:"add-greet",attrs:{disabled:e.disAdd},on:{click:function(t){return t.preventDefault(),e.addGreet(t)}}},[o("span",[e._v("+ 添加文案")])]),e._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:e.disAdd,expression:"disAdd"}],staticStyle:{"line-height":"2.8rem"}},[e._v("最多10组文案")])]),e._v(" "),o("footer",[o("button",{staticClass:"save",attrs:{type:"submit",disabled:!1}},[e._v("保存")])])],2)},[],!1,null,"2184b6b9",null);f.options.__file="WelcomeGreet.vue";t.default=f.exports},PMR5:function(e,t,o){"use strict";var r=o("Y8T0");o.n(r).a},Y8T0:function(e,t,o){}}]);
//# sourceMappingURL=12.0d9c11c3.js.map