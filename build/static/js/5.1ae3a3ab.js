(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4oJk":function(t,e,a){"use strict";a.r(e);var o=a("rmO2"),s=a.n(o),r=a("9cTa"),i=a.n(r),n=a("QdXe"),c=a.n(n),l=a("lOrp"),u=a("RRlj"),d=a("FklK"),p={name:"AddGroupModal",props:["active"],data:function(){return{show:!1,groupList:[],addGroupData:[],selectAll:!1}},methods:c()({submit:function(){var t=i()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading({text:"正在新增"}),t.prev=1,t.next=4,d.a.updateGroup(this.addGroupData.map(function(t){return{id:t,isMonitor:!0,isAtReply:!1}}));case 4:e=t.sent,this.loading({text:e}),this.loaded(1500),this.$emit("successAddGroup"),this.close(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),this.loading({text:t.t0.message}),this.loaded(1500);case 15:case"end":return t.stop()}},t,this,[[1,11]])}));return function(){return t.apply(this,arguments)}}(),init:function(){this.addGroupData=[],this.selectAll=!1},open:function(){this.openBackDrop(),this.show=!0,this.getGroupList()},close:function(){this.init(),this.closeBackDrop(),this.show=!1,this.$emit("close")},getGroupList:function(){var t=i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading({text:"获取所有分组"}),t.prev=1,t.next=4,d.a.getGroupList({robotId:this.$route.params.id});case 4:this.groupList=t.sent,this.loaded(100),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),this.loading({text:t.t0.message}),this.loaded(1500);case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),toogleAll:function(){var t=this;this.addGroupData=[],this.selectAll&&this.unMonitorGroupList.forEach(function(e){t.addGroupData.push(e.id)})}},Object(l.c)(["closeBackDrop","openBackDrop","loading"]),Object(l.b)(["loaded"])),watch:{active:function(t){t&&this.open()}},components:{Modal:u.a},computed:{unMonitorGroupList:function(){return null===this.groupList?[]:this.groupList.filter(function(t){return!t.monitor})}}},h=(a("jrdR"),a("ertO")),v=Object(h.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{active:t.show},on:{toogle:t.close}},[a("div",{staticClass:"modal-header"},[a("h6",{staticClass:"modal-title"},[t._v("请勾选需要添加的群组")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{staticClass:"body"},t._l(t.unMonitorGroupList,function(e){return a("div",{key:e.id,staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.addGroupData,expression:"addGroupData"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.addGroupData)?t._i(t.addGroupData,e.id)>-1:t.addGroupData},on:{change:function(a){var o=t.addGroupData,s=a.target,r=!!s.checked;if(Array.isArray(o)){var i=e.id,n=t._i(o,i);s.checked?n<0&&(t.addGroupData=o.concat([i])):n>-1&&(t.addGroupData=o.slice(0,n).concat(o.slice(n+1)))}else t.addGroupData=r}}}),t._v("\n                "+t._s(e.nickname)+"\n            ")])])})),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:!0,checked:Array.isArray(t.selectAll)?t._i(t.selectAll,!0)>-1:t.selectAll},on:{click:function(e){return e.stopPropagation(),t.toogleAll(e)},change:function(e){var a=t.selectAll,o=e.target,s=!!o.checked;if(Array.isArray(a)){var r=t._i(a,!0);o.checked?r<0&&(t.selectAll=a.concat([!0])):r>-1&&(t.selectAll=a.slice(0,r).concat(a.slice(r+1)))}else t.selectAll=s}}}),t._v("全选\n            ")])]),t._v(" "),a("div",{staticClass:"refresh",on:{click:t.getGroupList}},[t._v("刷新群")]),t._v(" "),a("div",{staticClass:"select"},[t._v("已选"+t._s(t.addGroupData.length)+"/"+t._s(t.unMonitorGroupList.length)+"个")]),t._v(" "),a("button",{staticClass:"btn btn-submit",attrs:{type:"button"},on:{click:t.submit}},[t._v("确定添加")])])])},[],!1,null,"7f974eb7",null);v.options.__file="AddGroupModal.vue";var f=v.exports,m=a("EQSO"),G={name:"GroupList",data:function(){return{deteleGroupModal:!1,addGroupModal:!1,deleteData:{name:""}}},methods:c()({openDeleteGroup:function(t,e){this.deleteData={id:t,name:e},this.deteleGroupModal=!0},closeDeleteGroup:function(){this.deteleGroupModal=!1},deleteGroup:function(){var t=i()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading({text:"正在删除"}),t.prev=1,t.next=4,d.a.updateGroup([{id:e,isMonitor:!1,isAtReply:!1}]);case 4:return t.next=6,this.getGroupList();case 6:this.loaded(100),this.closeDeleteGroup(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),this.loading({text:t.t0.message}),this.loaded(1500);case 14:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),openAddGroupModal:function(){this.addGroupModal=!0},closeAddGroupModal:function(){this.addGroupModal=!1}},Object(l.c)(["closeBackDrop","loading"]),Object(l.b)(["loaded"]),Object(l.b)("Robot",["getGroupList"])),components:{AddGroupModal:f,MessageBox:m.a},computed:c()({},Object(l.d)("Robot",{robotList:"list",groupList:"groupList"}))},b=(a("en/n"),Object(h.a)(G,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"group-list"}},[a("transition-group",{attrs:{tag:"ul"}},[a("li",{key:"0",staticClass:"group",on:{click:t.openAddGroupModal}},[a("span",[t._v("+ 添加群")])]),t._v(" "),t._l(t.groupList[t.$route.params.id],function(e){return a("li",{key:e.id,staticClass:"group"},[a("span",[t._v(t._s(e.nickname))]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){t.openDeleteGroup(e.id,e.nickname)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})],2),t._v(" "),a("add-group-modal",{attrs:{active:t.addGroupModal},on:{close:t.closeAddGroupModal,successAddGroup:t.getGroupList}}),t._v(" "),a("message-box",{attrs:{active:t.deteleGroupModal,title:""},on:{close:t.closeDeleteGroup,submit:function(e){t.deleteGroup(t.deleteData.id)}}},[a("span",[t._v("你您确定要删除“"+t._s(t.deleteData.name)+"“群么？"),a("br"),t._v("删除后该群将不再提供机器人服务")])])],1)},[],!1,null,"24d12b5f",null));b.options.__file="GroupList.vue";e.default=b.exports},V9hM:function(t,e,a){},"en/n":function(t,e,a){"use strict";var o=a("V9hM");a.n(o).a},gYpb:function(t,e,a){},jrdR:function(t,e,a){"use strict";var o=a("gYpb");a.n(o).a}}]);
//# sourceMappingURL=5.1ae3a3ab.js.map