webpackJsonp([13],{truu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInfo=function(){return Object(o.a)({url:"/api/session",method:"get"})},t.getInfoById=function(e){return Object(o.a)({url:"/api/session/"+e,method:"get"})},t.updateInfo=function(e,t){return t.year=parseInt(t.year.getFullYear()),Object(o.a)({url:"/api/session/"+e,method:"patch",data:t})},t.addInfo=function(e){return e.year=parseInt(e.year.getFullYear()),Object(o.a)({url:"/api/session",method:"post",data:e})},t.deleteInfoById=function(e){return Object(o.a)({url:"/api/session/"+e,method:"delete"})},t.Model=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;this.year=e,this.team=t,this.one=n,this.two=o,this.three=a};var o=n("Vo7i")}});