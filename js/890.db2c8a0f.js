(self.webpackChunkvue_admin=self.webpackChunkvue_admin||[]).push([[890],{2852:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=["undo redo  bold italic underline strikethrough   alignleft aligncenter alignright   blockquote  formatselect fontsizeselect ","forecolor backcolor searchreplace bullist numlist outdent indent link image  media  charmap      table  preview  fullscreen code"],s=["advlist anchor autolink autosave code colorpicker  contextmenu directionality  fullscreen hr image imagetools  link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],r=e=>new Promise(((t,n)=>{var i;document.getElementById(e)?setTimeout((()=>{t()}),500):((i=document.createElement("script")).id=e,i.src=e,i.async=!0,document.body.appendChild(i),i.onload=function(){setTimeout((()=>{this.onerror=this.onload=null,t()}),500)},i.onerror=function(){this.onerror=this.onload=null,n("加载失败"+e)})}));const a=n(712)["TinymceCDN"];t={name:"tinymce",props:{height:{type:[Number,String],default:"500"},resize:{type:Boolean,default:!0},value:{type:String,default:""}},data(){return{id:"editor-"+ +new Date+(1e3*Math.random()).toFixed(0),firstInit:!1,errorStatus:!1,fullscreen:!1}},mounted(){this.init()},methods:{async init(){try{await r(a),window.tinymce?this.initTinymce():this.$message.error("加载资源失败")}catch(e){this.$message.error(e)}},initTinymce(){const e=this;window.tinymce.init({selector:"#"+this.id,language:"zh_CN",height:this.height,object_resizing:this.resize,toolbar:i,plugins:s,end_container_on_empty_block:!0,powerpaste_word_import:"clean",default_link_target:"_blank",link_title:!1,paste_retain_style_properties:"all",paste_word_valid_elements:"*[*]",paste_data_images:!0,paste_convert_word_fake_lists:!1,file_picker_types:"media",content_style:"*{ padding:0; margin:0; }\nhtml, body      { height:100%; }\nimg             { max-width:100%; display:block;height:auto; }\na               { text-decoration: none; }\niframe          { width: 100%; }\np               { line-height:1.6; margin: 0px; }\ntable           { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }\nul,ol           { list-style-position:inside; }",init_instance_callback:t=>{e.value&&t.setContent(e.value),e.firstInit=!0,t.on("input change undo redo",(()=>{e.errorStatus=!0,e.$emit("input",t.getContent())}))},setup(t){t.on("FullscreenStateChanged",(t=>{e.fullscreen=t.state}))},images_upload_handler:function(e,t,i){(new FormData).append("file",e.blob()),e=e.blob(),-1==["image/png","image/jpeg","image/jpg","image/gif"].indexOf(e.type)?i("图片只能为png,jpg,jpeg,gif格式"):2097152<e.size?i("图片大小不超过2M"):t(n(3808)("./"+e.name))},file_picker_callback:function(e,t,n){"media"==n.filetype&&((n=document.createElement("input")).setAttribute("type","file"),n.onchange=function(e){},n.click())}})},setContent(e){window.tinymce.get(this.id).setContent(e)},getContent(){window.tinymce.get(this.id).getContent()},destroyTinymce(){var e=window.tinymce.get(this.id);this.fullscreen&&e.execCommand("mceFullScreen"),e&&e.destroy()}},activated(){window.tinymce&&this.initTinymce()},deactivated(){this.destroyTinymce()},destroyed(){this.destroyTinymce()},watch:{value(e){!this.errorStatus&&this.firstInit&&this.$nextTick((()=>{window.tinymce.get(this.id).setContent(e||"")}))}}};var o=n(1001),l=(t=(0,o.Z)(t,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"tinymce-container",class:{fullscreen:e.fullscreen}},[t("textarea",{staticClass:"tinymce-textarea",attrs:{id:e.id}})])}),[],!1,null,"b68c3ef4",null).exports,(0,o.Z)({components:{tinymce:t},data(){return{value:null}},watch:{value:{handler(e,t){},deep:!0}}},(function(){var e=this,t=e._self._c;return t("el-card",[t("tinymce",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)}),[],!1,null,null,null).exports)},712:function(e){e.exports={ElementCDN:"https://unpkg.com/element-ui/lib/index.js",Echarts:"https://cdn.bootcdn.net/ajax/libs/echarts/5.4.0/echarts.min.js",VueCDN:"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",AxiosCDN:"https://cdn.jsdelivr.net/npm/axios@1.1.3/dist/axios.min.js",VueRouterCDN:"https://cdn.jsdelivr.net/npm//vue-router@3/dist/vue-router.min.js",VuexCDN:"https://cdn.jsdelivr.net/npm/vuex@3.4.1/dist/vuex.min.js",TinymceCDN:"https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",html2canvasCDN:"https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js"}},3808:function(e,t,n){var i={"./old.png":3836,"./robot.png":6705,"./system.png":6362,"./user.gif":5495};function s(e){return e=r(e),n(e)}function r(e){if(n.o(i,e))return i[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}s.keys=function(){return Object.keys(i)},s.resolve=r,(e.exports=s).id=3808},3836:function(e,t,n){"use strict";e.exports=n.p+"img/old.d63e0edb.png"},6705:function(e,t,n){"use strict";e.exports=n.p+"img/robot.7e361ed6.png"},6362:function(e,t,n){"use strict";e.exports=n.p+"img/system.1595a443.png"},5495:function(e,t,n){"use strict";e.exports=n.p+"img/user.aedc201c.gif"}}]);