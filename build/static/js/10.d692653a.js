(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{D5B3:function(t,a,e){"use strict";e.r(a);var n=e("QdXe"),o=e.n(n),i=e("lOrp"),r={name:"Operate",created:function(){this.$router.push(o()({},this.navData[0].to,this.routeData))},data:function(){return{navData:[{to:{name:"redPacket"},title:"群内拉新红包"}]}},methods:{go:function(t){this.$router.push(o()({},t.to,this.routeData))}},watch:{$route:function(){this.$router.push(o()({},this.navData[0].to,this.routeData))}},computed:o()({routeData:function(){return{id:this.$route.params.id,nickName:this.$route.params.nickName}}},Object(i.d)("Robot",{robotList:"list"}))},s=(e("GLeI"),e("ertO")),u=Object(s.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"operate"}},[e("h4",[t._v(t._s(t.$route.params.nickName))]),t._v(" "),e("nav",t._l(t.navData,function(a,n){return e("a",{key:n,staticClass:"nav-link",class:{active:a.to.name===t.$route.name},on:{click:function(e){t.go(a)}}},[t._v(t._s(a.title))])})),t._v(" "),e("transition",{attrs:{name:"transparent",mode:"out-in"}},[e("router-view",{staticClass:"container-fluid mass-content"})],1)],1)},[],!1,null,"58f8fd59",null);u.options.__file="Operate.vue";a.default=u.exports},GLeI:function(t,a,e){"use strict";var n=e("bv1M");e.n(n).a},bv1M:function(t,a,e){}}]);
//# sourceMappingURL=10.d692653a.js.map