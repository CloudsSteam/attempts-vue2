(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"159b":function(t,e,i){var n=i("da84"),s=i("fdbc"),r=i("785a"),o=i("17c2"),c=i("9112"),a=function(t){if(t&&t.forEach!==o)try{c(t,"forEach",o)}catch(e){t.forEach=o}};for(var h in s)s[h]&&a(n[h]&&n[h].prototype);a(r)},"16c0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"container",staticClass:"home-contain",on:{wheel:t.handleWheel}},[i("ul",{staticClass:"carousel-container",style:{marginTop:t.marginTop},on:{transitionend:t.handleTransitionEnd}},t._l(t.data,(function(t){return i("li",{key:t.id},[i("CarouselItem",{attrs:{carousel:t}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index>=1,expression:"index >= 1"}],staticClass:"icon icon-up",on:{click:function(e){return t.switchTo(t.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.index<t.data.length-1,expression:"index < data.length-1"}],staticClass:"icon icon-down",on:{click:function(e){return t.switchTo(t.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1),i("ul",{staticClass:"indicator"},t._l(t.data,(function(e,n){return i("li",{key:e.id,class:{active:n===t.index},on:{click:function(e){return t.switchTo(n)}}})})),0)])},s=[],r=i("5530"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:t.handleMouseMove,mouseleave:t.handleMouseLeave}},[i("div",{ref:"image",staticClass:"carousel-img",style:t.imagePosition},[i("ImageLoader",{attrs:{src:t.carousel.bigImg,placeholder:t.carousel.midImg},on:{load:t.showWords}})],1),i("div",{ref:"title",staticClass:"title"},[t._v(t._s(t.carousel.title))]),i("div",{ref:"desc",staticClass:"desc"},[t._v(t._s(t.carousel.description))])])},c=[],a=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-loader-conainer"},[t.everythingDone?t._e():i("img",{staticClass:"placeholder",attrs:{src:t.placeholder,alt:""}}),i("img",{staticClass:"origin",style:{opacity:t.originOpacity},attrs:{src:t.src,alt:""},on:{load:t.handleLoad}})])}),h=[],d=(i("a9e3"),{props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:500}},data:function(){return{originLoaded:!1,everythingDone:!1}},computed:{originOpacity:function(){return this.originLoaded?1:0}},methods:{handleLoad:function(){var t=this;setTimeout((function(){t.originLoaded=!0,setTimeout((function(){t.everythingDone=!0,t.$emit("load")}),t.duration)}),2e3)}}}),l=d,u=(i("95e3"),i("2877")),f=Object(u["a"])(l,a,h,!1,null,"f7616e50",null),p=f.exports,g={props:["carousel"],components:{ImageLoader:p},data:function(){return{titleWidth:0,descWidth:0,containerSize:null,innerSize:null,mouseX:0,mouseY:0}},computed:{imagePosition:function(){if(!this.containerSize||!this.innerSize)return null;var t=this.innerSize.width-this.containerSize.width,e=this.innerSize.height-this.containerSize.height,i=-t/this.containerSize.width*this.mouseX,n=-e/this.containerSize.height*this.mouseY;return{transform:"translate(".concat(i,"px,").concat(n,"px)")}},center:function(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}},mounted:function(){this.titleWidth=this.$refs.title.clientWidth,this.descWidth=this.$refs.desc.clientWidth,this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed:function(){window.removeEventListener("resize",this.setSize)},methods:{showWords:function(){this.$refs.title.style.opacity=1,this.$refs.title.style.width=0,this.$refs.title.clientWidth,this.$refs.title.style.transition="1.5s",this.$refs.title.style.width=this.titleWidth+"px",this.$refs.desc.style.opacity=1,this.$refs.desc.style.width=0,this.$refs.desc.clientWidth,this.$refs.desc.style.transition="3s 1s",this.$refs.desc.style.width=this.descWidth+"px"},setSize:function(){this.containerSize={width:this.$refs.container.clientWidth?this.$refs.container.clientWidth:"",height:this.$refs.container.clientHeight?this.$refs.container.clientHeight:""},this.innerSize={width:this.$refs.image.clientWidth,height:this.$refs.image.clientHeight}},handleMouseMove:function(t){var e=this.$refs.container.getBoundingClientRect();this.mouseX=t.clientX-e.left,this.mouseY=t.clientY-e.top},handleMouseLeave:function(){this.mouseX=this.center.x,this.mouseY=this.center.y}}},m=g,v=(i("cdfe"),Object(u["a"])(m,o,c,!1,null,"3cdc28d0",null)),w=v.exports,y=i("d010"),b=i("5880"),x={components:{CarouselItem:w,Icon:y["a"]},data:function(){return{style:{width:"800px"},datatitle:"",index:0,containerHeight:0,switching:!1}},created:function(){this.$store.dispatch("banner/fetchBanner")},mounted:function(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleResize)},updated:function(){},destroyed:function(){window.removeEventListener("resize",this.handleResize)},computed:Object(r["a"])(Object(r["a"])({},Object(b["mapState"])("banner",["data","loading"])),{},{marginTop:function(){return-this.index*this.containerHeight+"px"}}),methods:{switchTo:function(t){this.index=t},handleWheel:function(t){this.switching||(t.deltaY<-5&&this.index>0?(this.switching=!0,this.index--):t.deltaY>5&&this.index<this.data.length-1&&(this.switching=!0,this.index++))},handleTransitionEnd:function(){this.switching=!1},handleResize:function(){this.containerHeight=this.$refs.container.clientHeight}}},O=x,$=(i("480f"),Object(u["a"])(O,n,s,!1,null,"8265adec",null));e["default"]=$.exports},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("a640"),r=s("forEach");t.exports=r?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2323:function(t,e,i){},"2b0a":function(t,e,i){},"480f":function(t,e,i){"use strict";i("2323")},5530:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("b64b"),i("a4d3"),i("4de4"),i("d3b7"),i("e439"),i("159b"),i("dbb4");var n=i("ade3");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},"5bc4":function(t,e,i){},"95e3":function(t,e,i){"use strict";i("5bc4")},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){return 1},1)}))}},cdfe:function(t,e,i){"use strict";i("2b0a")},dbb4:function(t,e,i){var n=i("23e7"),s=i("83ab"),r=i("56ef"),o=i("fc6a"),c=i("06cf"),a=i("8418");n({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,i,n=o(t),s=c.f,h=r(n),d={},l=0;while(h.length>l)i=s(n,e=h[l++]),void 0!==i&&a(d,e,i);return d}})},e439:function(t,e,i){var n=i("23e7"),s=i("d039"),r=i("fc6a"),o=i("06cf").f,c=i("83ab"),a=s((function(){o(1)})),h=!c||a;n({target:"Object",stat:!0,forced:h,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(r(t),e)}})}}]);