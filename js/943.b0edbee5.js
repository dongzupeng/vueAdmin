(self.webpackChunkvue_admin=self.webpackChunkvue_admin||[]).push([[943],{9943:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}}),n(7658);t=n(6294);var s=n(1957),r=n(577),i=n.n(r),l=(r={data(){return{isFullscreen:!1}},created(){},mounted(){},computed:{...(0,t.mapGetters)(["userInfo"])},methods:{screenFull(){if(!i().isEnabled)return this.$message.warning("不好意思，你的电脑不支持全屏，赶紧换个电脑吧，谢谢~"),!1;i().toggle(),this.isFullscreen=!this.isFullscreen},handleCommand(e){"center"==e?this.$router.push("/home/homePage"):"setting"==e?this.$router.push("/home/setting"):"goGitHub"==e?window.open("https://github.com/dongzupeng/vueAdmin","_blank"):"logout"==e&&((0,s.TC)("token"),(0,s.TC)("userInfo"),this.$router.push("/login"),this.$message({message:"退出成功",type:"success"}))}}},n=n(1001),r=(0,n.Z)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("el-header",[t("div",{staticClass:"title"},[e._v("头文字D的系统")]),t("div",{staticClass:"icon-screenfull",on:{click:function(t){return t.stopPropagation(),e.screenFull.apply(null,arguments)}}},[t("svg-icon",{attrs:{"icon-class":e.isFullscreen?"tuichuquanping":"quanping",className:"quanping-icon"}})],1),t("el-dropdown",{on:{command:e.handleCommand}},[t("div",{staticClass:"userInfo"},[t("img",{attrs:{src:e.userInfo.avatar,alt:""}}),t("span",[e._v(e._s(e.userInfo.username))])]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"center"}},[t("div",[e._v("个人中心")])]),t("el-dropdown-item",{attrs:{command:"setting"}},[t("div",[e._v("个人设置")])]),t("el-dropdown-item",{attrs:{command:"goGitHub"}},[t("div",[e._v("项目地址")])]),t("el-dropdown-item",{attrs:{command:"logout",divided:""}},[t("div",[e._v("退出登录")])])],1)],1)],1)],1)}),[],!1,null,"4e0bbacc",null).exports,{data(){return{menus:[]}},created(){this.menus=[...this.$router.options.routes]},mounted(){var e=this.$route.meta.path;this.$store.commit("tags/SET_CURRENTMENU",e)},watch:{$route(e,t){var n=this.$route.meta.path;this.$store.commit("tags/SET_CURRENTMENU",n)}},computed:{getMenus(){return this.menus.filter((e=>!e.hidden))},...(0,t.mapState)({currentMenu:e=>e.tags.currentMenu})},methods:{handleOpen(e,t){},handleClose(e,t){}}}),a=(l=(0,n.Z)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu"},[t("el-aside",[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","unique-opened":!0,"default-active":e.currentMenu,"background-color":"#8759fe","text-color":"#fff","active-text-color":"#8759fe"},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.getMenus,(function(n,s){return[t("el-submenu",{key:s,attrs:{index:s+""}},[t("template",{slot:"title"},[t("span",{staticClass:"title"},[t("i",{class:n.iconClass}),e._v(" "+e._s(n.name))])]),e._l(n.children,(function(n,s){return t("el-menu-item-group",{key:s},[t("el-menu-item",{attrs:{index:n.path}},[t("i",{class:n.iconClass}),e._v(e._s(n.name))])],1)}))],2)]}))],2)],1)],1)}),[],!1,null,"3a8fe14e",null).exports,(0,n.Z)({},(function(){return(0,this._self._c)("div",{staticClass:"footer"},[this._v(" Designed by 头文字D ")])}),[],!1,null,"7b577999",null).exports),o=(t={data(){return{breadList:[]}},created(){(0,s.lJ)("tabsList")&&(this.breadList=this.tags,this.getBreadcrumb())},computed:{...(0,t.mapState)({tags:e=>e.tags.tabsList})},watch:{$route(e){e.path.startsWith("/redirect/")||this.getBreadcrumb()}},methods:{handleLink(e){this.$router.push({path:e.path})},handleClose(e,t){var n=this.breadList.length-1,r=this.breadList.findIndex((t=>t.title===e.title));this.breadList.splice(r,1),0==n?this.$router.push({path:"/home/user"}):e.title===this.$route.name&&(t===n?this.$router.push({path:this.breadList[t-1].path}):this.$router.push({path:this.breadList[t].path}),(0,s.K7)("tabsList",this.breadList),this.$store.commit("tags/SELECT_MENU",this.breadList))},getBreadcrumb(){var e=this.$route.meta;this.breadList.push(e);for(let t=0;t<this.breadList.length;t++)for(let e=t+1;e<this.breadList.length;e++)this.breadList[t].title==this.breadList[e].title&&(this.breadList.splice(t,1),e--);(0,s.K7)("tabsList",this.breadList),this.$store.commit("tags/SELECT_MENU",this.breadList)}}},t=(0,n.Z)(t,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"Breadcrumb"},[t("el-card",{attrs:{shadow:"always"}},e._l(e.tags,(function(n,s){return t("el-tag",{key:n.title,attrs:{closable:"/home/user"!==n.path,effect:e.$route.name===n.title?"dark":"plain"},on:{close:function(t){return e.handleClose(n,s)},click:function(t){return e.handleLink(n)}}},[e._v(" "+e._s(n.title)+" ")])})),1)],1)}),[],!1,null,"17176e71",null).exports,(0,n.Z)({components:{HeaderCom:r,MenuCom:l,FooterCom:a,breadcrumb:t},data(){return{}}},(function(){var e=this._self._c;return e("div",{staticClass:"home"},[e("HeaderCom"),e("el-container",{staticClass:"content"},[e("MenuCom"),e("el-container",[e("breadcrumb"),e("el-main",[e("router-view")],1),e("el-footer",[e("FooterCom")],1)],1)],1)],1)}),[],!1,null,"01c12d6f",null).exports)},577:function(e){
/*!
* screenfull
* v5.0.2 - 2020-02-13
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,s=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,r=n.length,i={};s<r;s++)if((e=n[s])&&e[1]in t){for(s=0;s<e.length;s++)i[n[0][s]]=e[s];return i}return!1}(),r={change:s.fullscreenchange,error:s.fullscreenerror},i={request:function(e){return new Promise(function(n,r){var i=function(){this.off("change",i),n()}.bind(this),l=(this.on("change",i),(e=e||t.documentElement)[s.requestFullscreen]());l instanceof Promise&&l.then(i).catch(r)}.bind(this))},exit:function(){return new Promise(function(e,n){var r,i;this.isFullscreen?(r=function(){this.off("change",r),e()}.bind(this),this.on("change",r),(i=t[s.exitFullscreen]())instanceof Promise&&i.then(r).catch(n)):e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){e=r[e],e&&t.addEventListener(e,n,!1)},off:function(e,n){e=r[e],e&&t.removeEventListener(e,n,!1)},raw:s};s?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(t[s.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[s.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[s.fullscreenEnabled])}}}),n?e.exports=i:window.screenfull=i):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()}}]);