"use strict";(self.webpackChunkvue_admin=self.webpackChunkvue_admin||[]).push([[149],{149:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});a={data(){var e=[{label:"上线",value:1},{label:"待上线",value:2},{label:"下线",value:3}];return{searchData:{projectName:"",introduce:"",Switch:!1,type:"",status:1,status1:1,status2:[1,2],date:"",time:"",dateTime:"",dateTimes:"",slider:10,picture:""},limit:1,action:"/ImageServer/YmUpload_image",searchForm:[{label:"项目名称",prop:"projectName",type:"Input",placeholder:"请输入项目名称...",width:"320px",isUpdate:!0},{label:"项目描述",prop:"introduce",type:"Input",placeholder:"请输入项目描述...",width:"320px",isUpdate:!0},{label:"是否有营业",prop:"state",type:"Switch"},{label:"项目类型",prop:"type",type:"Select",placeholder:"请选择项目类型...",width:"320px",options:[{label:"批发",value:1},{label:"零售",value:2},{label:"餐饮",value:3}],change:this.typeChange},{label:"项目状态",prop:"status",type:"Radio",radios:e},{label:"项目状态",prop:"status1",type:"RadioButton",radios:e},{label:"项目状态",prop:"status2",type:"Checkbox",checkboxs:e},{label:"日期",prop:"date",type:"Date",placeholder:"请选择日期...",width:"320px"},{label:"时间",prop:"time",type:"Time",placeholder:"请选择时间...",width:"320px"},{label:"日期时间",prop:"dateTime",type:"DateTime",placeholder:"请选择日期时间...",width:"320px"},{label:"日期范围",prop:"dateTimes",type:"datetimerange",placeholder:"请选择日期范围...",width:"320px"},{label:"进度",prop:"slider",type:"Slider"},{label:"照片",prop:"picture",type:"upload"}],searchHandle:[{label:"保存",type:"primary",size:"small",handle:this.save}],rules:{projectName:[{required:!0,message:"请输入项目名称...",trigger:"blur"}],introduce:[{required:!0,message:"请输入项目描述...",trigger:"blur"}],type:[{required:!0,message:"请选择项目类型...",trigger:"change"}],state:[{required:!0,message:"是否有营业...",trigger:"change"}],status:[{required:!0,message:"请选择项目状态...",trigger:"change"}],status1:[{required:!0,message:"请选择项目状态...",trigger:"change"}],status2:[{required:!0,message:"请选择项目状态...",trigger:"change"}],date:[{required:!0,message:"请选择日期...",trigger:"change"}],time:[{required:!0,message:"请选择时间...",trigger:"change"}],dateTime:[{required:!0,message:"请选择日期时间...",trigger:"change"}],dateTimes:[{required:!0,message:"请选择日期范围...",trigger:"change"}]}}},methods:{save(){this.$refs.refForm.$children[0].validate((e=>{if(!e)return!1}))},uploadImg(e){(new FormData).append("file",e.file)},onExceedLimits(e){1<=e.length&&this.$notify({title:"警告",message:"上传失败，一次只能上传1张图片哦~",type:"warning",duration:2e3})},typeChange(e){}}};var r=(0,t(1001).Z)(a,(function(){var e=this,a=e._self._c;return a("el-card",[a("Form",{ref:"refForm",attrs:{action:e.action,labelWidth:"130px",searchForm:e.searchForm,width:"280px",searchData:e.searchData,searchHandle:e.searchHandle,isHandle:!0,limit:e.limit,imgList:e.searchData.picture,rules:e.rules},on:{uploadImg:e.uploadImg,onExceedLimits:e.onExceedLimits}})],1)}),[],!1,null,null,null).exports}}]);