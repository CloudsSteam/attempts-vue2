(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message"],{"8fc4":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"message-container"},[n("div",{staticClass:"Inventory"},[n("Inventory")],1),n("div",{staticClass:"button"},[n("button",{on:{click:e.handeClick}},[e._v("你点试试")])])])},a=[],l=n("ed08"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"input",staticClass:"Inventory-aside-container"},[e._m(0),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",placeholder:"输入目标任务"},domProps:{value:e.title},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()},input:function(t){t.target.composing||(e.title=t.target.value)}}}),e.active<e.all?n("button",{on:{click:e.clear}},[e._v("完成任务")]):e._e()]),n("div",{staticClass:"todos"},[e.todos.length?n("ul",e._l(e.todos,(function(t,o){return n("li",{key:o},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"todo.done"}],attrs:{id:t.title,"id和label中for绑定点击效果":"",type:"checkbox"},domProps:{checked:Array.isArray(t.done)?e._i(t.done,null)>-1:t.done},on:{change:function(n){var o=t.done,a=n.target,l=!!a.checked;if(Array.isArray(o)){var i=null,s=e._i(o,i);a.checked?s<0&&e.$set(t,"done",o.concat([i])):s>-1&&e.$set(t,"done",o.slice(0,s).concat(o.slice(s+1)))}else e.$set(t,"done",l)}}}),n("label",{class:{done:t.done},attrs:{for:t.title}},[e._v(" "+e._s(t.title)+" ")])])})),0):n("div",{staticClass:"wu"},[e._v(" 暂无目标")])]),n("div",{staticClass:"allin"},[n("div",{staticClass:"all"},[n("label",{attrs:{for:"allin"}},[e._v("全选")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.allDone,expression:"allDone"}],attrs:{id:"allin",type:"checkbox"},domProps:{checked:Array.isArray(e.allDone)?e._i(e.allDone,null)>-1:e.allDone},on:{change:function(t){var n=e.allDone,o=t.target,a=!!o.checked;if(Array.isArray(n)){var l=null,i=e._i(n,l);o.checked?i<0&&(e.allDone=n.concat([l])):i>-1&&(e.allDone=n.slice(0,i).concat(n.slice(i+1)))}else e.allDone=a}}})]),n("div",{staticClass:"allincontainer"},[n("label",{attrs:{for:"allin"}},[e._v(e._s(e.active)+" / "+e._s(e.all))])])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("今日任务")])])}];const c="todos-vuejs";var r={fetch(){return window.JSON.parse(window.localStorage.getItem(c)||{})},save(e){window.localStorage.setItem(c,window.JSON.stringify(e))}},d={data(){return{title:"",todos:[{title:"吃饭",done:!1},{title:"睡觉",done:!1},{title:"打豆豆",done:!1},{title:"尹青",done:!1}]}},watch:{todos:{handler(e){r.save(e)},deep:!0}},methods:{addTodo(){this.title&&(this.todos.push({title:this.title,done:!1}),this.title="",Object(l["c"])({content:"创建成功！",type:"success",duration:1e3,container:this.$refs.input,callback:function(){}}))},clear(){this.todos=this.todos.filter(e=>!e.done)},change(){window.localStorage.getItem("todos-vuejs")&&0!==window.JSON.parse(window.localStorage.getItem("todos-vuejs")).length&&(this.todos=r.fetch())}},mounted(){this.change()},computed:{active(){return this.todos.filter(e=>!e.done).length},all(){return this.todos.length},allDone:{get:function(){return 0===this.active},set(e){this.todos.forEach(t=>{t.done=e})}}}},u=d,v=(n("fab4"),n("2877")),h=Object(v["a"])(u,i,s,!1,null,"33761f20",null),f=h.exports,p={components:{Inventory:f},methods:{handeClick(){Object(l["c"])({content:"赶快尼玛一步一步完成任务",type:"error",duration:1e3,container:this.$refs.container,callback:function(){console.log("完成弹窗消息！！")}})}}},m=p,w=(n("f7a2"),Object(v["a"])(m,o,a,!1,null,"4c35a2b6",null));t["default"]=w.exports},9796:function(e,t,n){},a038:function(e,t,n){},f7a2:function(e,t,n){"use strict";n("a038")},fab4:function(e,t,n){"use strict";n("9796")}}]);