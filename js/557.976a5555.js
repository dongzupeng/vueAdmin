"use strict";(self.webpackChunkvue_admin=self.webpackChunkvue_admin||[]).push([[557],{2557:function(e,r,t){t.r(r),t.d(r,{default:function(){return a}});var o=t(9428),i=(r={name:"pieOne",data(){return{}},mounted(){window.onresize=()=>{this.myChartOne.resize()},this.$nextTick((()=>{this.initEchart()}))},methods:{initEchart(){this.myChartOne=o.init(this.$refs.pieOne),this.myChartOne.setOption({backgroundColor:"#1A1835",legend:{orient:"vertical",top:"center",right:"5%",data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7"],textStyle:{color:"#fff",fontSize:16}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"半径模式",type:"pie",radius:["30%","80%"],center:["40%","50%"],roseType:"radius",label:{show:!0,normal:{position:"outside",fontSize:16}},labelLine:{length:1,length2:20,smooth:!0},data:[{value:1,name:"rose1",itemStyle:{color:"rgba(50,123,250,0.7)",borderColor:"rgba(50,123,250,1)",borderWidth:3}},{value:2,name:"rose2",itemStyle:{color:"rgba(244,201,7,0.7)",borderColor:"rgba(244,201,7,1)",borderWidth:3}},{value:3,name:"rose3",itemStyle:{color:"rgba(23,216,161,0.7)",borderColor:"rgba(23,216,161,1)",borderWidth:3}},{value:4,name:"rose4",itemStyle:{color:"rgba(122,60,235,0.7)",borderColor:"rgba(122,60,235,1)",borderWidth:3}},{value:5,name:"rose5",itemStyle:{color:"rgba(15,197,243,0.7)",borderColor:"rgba(15,197,243,1)",borderWidth:3}}]}]},!0)}}},t(1001)),a=(r=(0,i.Z)(r,(function(){return(0,this._self._c)("div",{ref:"pieOne",staticClass:"pieOne"})}),[],!1,null,"475a450a",null).exports,t=(t(7658),(0,i.Z)({name:"pieTwo",data(){return{}},mounted(){window.onresize=()=>{this.myChartOne.resize()},this.$nextTick((()=>{this.initEchart()}))},methods:{initEchart(){this.myChartOne=o.init(this.$refs.pieTwo);for(var e=["#218de0","#01cbb3","#85e647","#5d5cda","#f6d54a","#f845f1"],r=["rgba(60,170,211,0.05)","rgba(1,203,179,0.05)","rgba(133,230,71,0.05)","rgba(93,92,218,0.05)","rgba(5,197,176,0.05)","rgba(194,153,39,0.05)"],t=20,i="60%",a="60%",n=10,l=15,s={number:["17","17","20","26","20"],titlename:["20岁以下","20-29岁","30-39岁","40-49岁","50岁以上"]},d=[],h=0;h<s.number.length;h++)Number(s.number[h]);for(let o=0;o<s.titlename.length;o++)d.push({value:s.number[o],name:s.titlename[o],itemStyle:{normal:{borderColor:e[o],borderWidth:2,shadowBlur:20,shadowColor:e[o],shadowOffsetx:25,shadowOffsety:20,color:r[o]}},label:{normal:{formatter:["{b|{b}:{c}人}","{d|{d}%}"].join("\n"),rich:{b:{color:e[o],fontSize:t,lineHeight:20},d:{color:"#d0fffc",fontSize:t,height:20,align:"center"}}}}});this.myChartOne.setOption({backgroundColor:"rgba(0,0,0,1)",grid:{left:-100,top:50,bottom:10,right:10,containLabel:!0},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},polar:{radius:i},angleAxis:{interval:1,type:"category",data:[],z:10,axisLine:{show:!1,lineStyle:{color:"#0B4A6B",width:1,type:"solid"}},axisLabel:{interval:0,show:!0,color:"#0B4A6B",margin:8,fontSize:16}},radiusAxis:{min:20,max:120,interval:20,axisLine:{show:!1,lineStyle:{color:"#0B3E5E",width:1,type:"solid"}},axisLabel:{formatter:"{value} %",show:!1,padding:[0,0,20,0],color:"#0B3E5E",fontSize:16},splitLine:{lineStyle:{color:"#07385e",width:2,type:"dashed"}}},calculable:!0,series:[{stack:"a",type:"pie",radius:a,roseType:"radius",zlevel:10,startAngle:100,labelLine:{normal:{show:!0,length:n,length2:l,lineStyle:{color:"#0096b1"}},emphasis:{show:!1}},data:d}]},!0)}}},(function(){return(0,this._self._c)("div",{ref:"pieTwo",staticClass:"pieTwo"})}),[],!1,null,"54a4267d",null).exports),(0,i.Z)({components:{pieOne:r,pieTwo:t},data(){return{}}},(function(){var e=this._self._c;return e("el-card",[e("pieOne"),e("pieTwo")],1)}),[],!1,null,null,null).exports)}}]);