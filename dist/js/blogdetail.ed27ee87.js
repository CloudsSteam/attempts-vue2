(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blogdetail"],{"0368":function(t,e,a){},"0f42":function(t,e,a){"use strict";a("0368")},"0fb1":function(t,e,a){"use strict";a("63e5")},"2c43":function(t,e,a){},"2f47":function(t,e,a){"use strict";a("b8bf")},"3db1":function(t,e,a){"use strict";a("f260")},5227:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"right-list-container"},t._l(t.list,(function(e,i){return a("li",{key:i},[a("span",{class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(" "+t._s(e.name)+" ")]),e.aside?a("span",{staticClass:"aside",class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(" "+t._s(e.aside)+" ")]):t._e(),a("RightList",{attrs:{list:e.children},on:{select:t.handleClick}})],1)})),0)},n=[],s={name:"RightList",props:{list:{type:Array,default:()=>[]}},methods:{handleClick(t){t.isSelect||this.$emit("select",t)}}},o=s,r=(a("affa"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"3d4f0d67",null);e["a"]=c.exports},5383:function(t,e,a){},"63e5":function(t,e,a){},"739e":function(t,e,a){},"766c":function(t,e,a){"use strict";a("d316")},"864d":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return c}));var i=a("0c6d");async function n(t=1,e=10,a=-1){return await i["a"].get("/api/blog",{params:{page:t,limit:e,categoryid:a}})}async function s(){return await i["a"].get("/api/blogtype")}async function o(t){return await i["a"].get("/api/blog/"+t)}async function r(t){return await i["a"].post("/api/comment",t)}async function c(t,e=1,a=10){return await i["a"].get("/api/comment",{params:{blogid:t,page:e,limit:a}})}},affa:function(t,e,a){"use strict";a("f673")},b21a:function(t,e,a){"use strict";a("739e")},b8bf:function(t,e,a){},ccf9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"right-container"},[t.data?a("BlogTOC",{attrs:{toc:t.data.toc}}):t._e()],1)]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"mainContainer",staticClass:"main-container"},[t.data?a("BlogDetail",{attrs:{blog:t.data}}):t._e(),t.isLoading?t._e():a("BlogComment")],1)])},n=[],s=a("e128"),o=a("f12f"),r=a("864d"),c=a("5849"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-detail-container"},[a("h1",[t._v(t._s(t.blog.title))]),a("div",{staticClass:"aside"},[a("span",[t._v("日期: "+t._s(t.formatDate(t.blog.createDate)))]),a("span",[t._v("浏览: "+t._s(t.blog.scanNumber))]),a("a",{attrs:{href:"#data-form-container"}},[t._v("评论: "+t._s(t.blog.commentNumber))]),a("RouterLink",{attrs:{to:{name:"CategoryBlog",params:{categoryId:t.blog.category.id}}}},[t._v(t._s(t.blog.category.name))])],1),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.blog.htmlContent)}})])},u=[],d=a("ed08"),h=(a("2c43"),a("db6a"),{props:{blog:{type:Object,required:!0}},methods:{formatDate:d["b"]}}),m=h,f=(a("3db1"),a("2877")),g=Object(f["a"])(m,l,u,!1,null,"812950e8",null),p=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-toc-container"},[a("h2",[t._v("目录")]),a("RightList",{attrs:{list:t.tocWithSelect},on:{select:t.handleSelect}})],1)},v=[],_=a("5227"),S={components:{RightList:_["a"]},props:{toc:{type:Array}},data(){return{activeAnchor:""}},computed:{tocWithSelect(){const t=(e=[])=>e.map(e=>({...e,isSelect:e.anchor===this.activeAnchor,children:t(e.children)}));return t(this.toc)},doms(){const t=[],e=a=>{for(const i of a)t.push(document.getElementById(i.anchor)),i.children&&i.children.length&&e(i.children)};return e(this.toc),t}},created(){this.setSelectDebounce=Object(d["a"])(this.setSelect,50),this.$bus.$on("mainScroll",this.setSelectDebounce)},destroyed(){this.$bus.$off("mainScroll",this.setSelectDebounce)},methods:{handleSelect(t){location.hash=t.anchor},setSelect(t){if(!t)return;this.activeAnchor="";const e=200;for(const a of this.doms){if(!a)continue;const t=a.getBoundingClientRect().top;if(t>=0&&t<=e)return void(this.activeAnchor=a.id);if(t>e)return;this.activeAnchor=a.id}}}},y=S,C=(a("0fb1"),Object(f["a"])(y,b,v,!1,null,"1f86ca3e",null)),$=C.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-comment-container"},[a("MessageArea",{attrs:{title:"评论列表",subTitle:"("+t.data.total+")",list:t.data.rows,isListLoading:t.isLoading},on:{submit:t.handleSubmit}})],1)},L=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-area-container"},[a("DataForm",t._g({},t.$listeners)),a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v(t._s(t.subTitle))])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},k=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxLength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxLengths:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"button-area"},[a("button",{attrs:{disabled:t.isSubmitting}},[t._v(" "+t._s(t.isSubmitting?"提交中...":"提交")+" ")])])])])},O=[],M={data(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmitting:!1}},methods:{handleSubmit(){this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmitting=!0,this.$emit("submit",this.formData,t=>{this.$showMessage({content:t,type:"success",duration:1e3,container:this.$refs.form,callback:()=>{this.isSubmitting=!1,this.formData.nickname="",this.formData.content=""}})}))}}},j=M,A=(a("766c"),Object(f["a"])(j,x,O,!1,null,"1a051bcd",null)),E=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return a("li",{key:e.id},[a("Avatar",{attrs:{url:e.avatar,size:44}}),a("div",{staticClass:"data"},[a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"content"},[t._v(t._s(e.content))]),a("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},T=[],N=a("df3a"),R={components:{Avatar:N["a"]},props:{list:{type:Array,default:()=>[]}},methods:{formatDate:d["b"]}},H=R,I=(a("f97d8"),Object(f["a"])(H,B,T,!1,null,"b56d8830",null)),P=I.exports,F={props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!1}},components:{DataForm:E,DataList:P}},J=F,W=(a("0f42"),Object(f["a"])(J,w,k,!1,null,"8153eeda",null)),q=W.exports,z={mixins:[Object(s["a"])({total:0,rows:[]})],components:{MessageArea:q},data(){return{page:1,limit:10}},created(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed(){this.$bus.$off("mainScroll",this.handleScroll)},computed:{hasMore(){return this.data.rows.length<this.data.total}},methods:{handleScroll(t){if(this.isLoading||!t)return;const e=100,a=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);a<=e&&this.fetchMore()},async fetchData(){return await Object(r["d"])(this.$route.params.id,this.page,this.limit)},async fetchMore(){if(!this.hasMore)return;this.isLoading=!0,this.page++;const t=await this.fetchData();this.data.total=t.total,this.data.rows=this.data.rows.concat(t.rows),this.isLoading=!1},async handleSubmit(t,e){const a=await Object(r["e"])({blogId:this.$route.params.id,...t});this.data.rows.unshift(a),this.data.total++,e("评论成功")}}},G=z,K=(a("b21a"),Object(f["a"])(G,D,L,!1,null,"366b73fe",null)),Q=K.exports,U={components:{Layout:c["a"],BlogDetail:p,BlogTOC:$,BlogComment:Q},mixins:[Object(s["a"])(null),Object(o["a"])("mainContainer")],methods:{async fetchData(){let t=await Object(r["a"])(this.$route.params.id);if(t)return d["d"].setRouteTitle(t.title),t;this.$router.push("/404")}},updated(){const t=location.hash;location.hash="",setTimeout(()=>{location.hash=t},50)}},V=U,X=(a("2f47"),Object(f["a"])(V,i,n,!1,null,"709dd6d8",null));e["default"]=X.exports},d316:function(t,e,a){},db6a:function(t,e,a){},e128:function(t,e,a){"use strict";e["a"]=function(t=null){return{data(){return{isLoading:!0,data:t}},async created(){this.data=await this.fetchData(),this.isLoading=!1}}}},f12f:function(t,e,a){"use strict";e["a"]=function(t){return{mounted(){this.$refs[t].addEventListener("scroll",this.handleMainScroll),this.$bus.$on("setMainScroll",this.handleSetMainScroll)},beforeDestroyed(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)},methods:{handleMainScroll(){this.$bus.$emit("mainScroll",this.$refs[t])},handleSetMainScroll(e=0){this.$refs[t]&&(this.$refs[t].scrollTop=e)}}}}},f260:function(t,e,a){},f673:function(t,e,a){},f97d8:function(t,e,a){"use strict";a("5383")}}]);