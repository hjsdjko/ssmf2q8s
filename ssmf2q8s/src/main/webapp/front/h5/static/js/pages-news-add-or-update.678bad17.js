(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-add-or-update"],{"349b":function(t,e,r){"use strict";var i=r("5350"),a=r.n(i);a.a},"50cf":function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-20adc79a]{padding:%?20?%}.content[data-v-20adc79a]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-20adc79a]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-20adc79a]{width:%?180?%}.avator[data-v-20adc79a]{width:%?150?%;height:%?60?%}.right-input[data-v-20adc79a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-20adc79a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-20adc79a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-20adc79a]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-20adc79a]{border:0}.cu-form-group uni-input[data-v-20adc79a]{padding:0 %?30?%}.uni-input[data-v-20adc79a]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-20adc79a]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-20adc79a]::after{line-height:%?88?%}.select .uni-input[data-v-20adc79a]{line-height:%?88?%}.input .right-input[data-v-20adc79a]{line-height:%?88?%}',""]),t.exports=e},5350:function(t,e,r){var i=r("50cf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=r("4f06").default;a("25b1a5f0",i,!0,{sourceMap:!1,shadowMode:!1})},"8ad2":function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("ac6a"),r("96cf");var a=i(r("3b8d")),n=i(r("e2b1")),o={data:function(){return{ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var r,i,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(i=t.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=13;break}return this.ruleForm.id=e.id,t.next=11,this.$api.info("news",this.ruleForm.id);case 11:i=t.sent,this.ruleForm=i.data;case 13:if(!e.cross){t.next=36;break}a=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(a);case 16:if((t.t1=t.t0()).done){t.next=36;break}if(n=t.t1.value,"title"!=n){t.next=22;break}return this.ruleForm.title=a[n],this.ro.title=!0,t.abrupt("continue",16);case 22:if("introduction"!=n){t.next=26;break}return this.ruleForm.introduction=a[n],this.ro.introduction=!0,t.abrupt("continue",16);case 26:if("picture"!=n){t.next=30;break}return this.ruleForm.picture=a[n],this.ro.picture=!0,t.abrupt("continue",16);case 30:if("content"!=n){t.next=34;break}return this.ruleForm.content=a[n],this.ro.content=!0,t.abrupt("continue",16);case 34:t.next=16;break;case 36:this.styleChange();case 37:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.title){t.next=3;break}return this.$utils.msg("标题不能为空"),t.abrupt("return");case 3:if(this.ruleForm.picture){t.next=6;break}return this.$utils.msg("图片不能为空"),t.abrupt("return");case 6:if(this.ruleForm.content){t.next=9;break}return this.$utils.msg("内容不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.id){t.next=14;break}return t.next=12,this.$api.update("news",this.ruleForm);case 12:t.next=16;break;case 14:return t.next=16,this.$api.add("news",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(r,"-").concat(i,"-").concat(a)},toggleTab:function(t){this.$refs[t].show()}}};e.default=o},"9e70":function(t,e,r){"use strict";r.r(e);var i=r("aee0"),a=r("e23c");for(var n in a)"default"!==n&&function(t){r.d(e,t,(function(){return a[t]}))}(n);r("349b");var o,u=r("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"20adc79a",null,!1,i["a"],o);e["default"]=s.exports},aee0:function(t,e,r){"use strict";var i,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[t._v("标题")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.title,placeholder:"标题"},model:{value:t.ruleForm.title,callback:function(e){t.$set(t.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==t.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pictureTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[t._v("图片")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[t.ruleForm.picture?r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:t.ruleForm.picture,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"308rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[t._v("简介")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"简介"},model:{value:t.ruleForm.introduction,callback:function(e){t.$set(t.ruleForm,"introduction",e)},expression:"ruleForm.introduction"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"308rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[t._v("内容")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"内容"},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(51, 153, 153, 1)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},n=[];r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return i}))},e23c:function(t,e,r){"use strict";r.r(e);var i=r("8ad2"),a=r.n(i);for(var n in i)"default"!==n&&function(t){r.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a}}]);