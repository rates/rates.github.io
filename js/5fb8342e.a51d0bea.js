(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5fb8342e"],{8041:function(t,e,s){"use strict";var a=s("d924"),i=s.n(a);i.a},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"row shadow-2 content-center justify-start",staticStyle:{height:"40px"}},[s("div",{staticClass:"q-pa-xs items-center text-h5  row text-positive justify-center"},[t._v("\n      $\n      "),s("div",{staticClass:"text-black",attrs:{id:"USD"}})]),s("div",{staticClass:"items-center text-h5 row text-primary justify-center"},[t._v("\n      €\n      "),s("div",{staticClass:"text-black",attrs:{id:"EUR"}})]),s("div",{staticClass:"row items-center"},[s("q-icon",{staticClass:"q-ml-xs text-grey-7",attrs:{name:"opacity"}}),s("div",{staticClass:"text-h6 row inline flex-center text-weight-regular",attrs:{id:"BRENT"}})],1),s("div",{staticClass:"q-pa-xs text-subtitle1  row inline flex-center",attrs:{id:"EURUSD"}})]),s("div",{staticClass:"q-mt-md row items-center justify-start"},[s("div",{staticClass:"no-scroll",staticStyle:{width:"250px"},attrs:{id:"q-mon"}},[s("q-table",{attrs:{title:"",dense:"",flat:"",separator:"none",data:t.data_mon,columns:t.columns_mon,"row-key":"cb","table-class":"my-custom-m no-scroll","hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(e){return[s("q-tr",{staticClass:"items-start content-start",attrs:{props:e}},[s("q-td",{key:"cb",staticClass:"text-right",attrs:{props:e}},[s("div",[s("div",{staticStyle:{height:"16px"}},[t._v(t._s(e.row.cb))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.row.cb_tom>0,expression:"props.row.cb_tom > 0"}],class:[e.row.cb_tom>e.row.cb?"text-positive":"text-negative"],staticStyle:{"font-size":"7pt"}},[t._v("\n                    "+t._s(parseFloat(e.row.cb_tom-e.row.cb).toFixed(2))+" "+t._s(e.row.cb_tom)+"\n                  ")])])]),s("q-td",{staticClass:"text-right"},[s("div",[t._v(t._s(e.row.atm))])]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a150))]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a200))]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a300))]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a350))]),s("q-td",{staticClass:"text-right"},[s("div",[t._v(t._s(e.row.cur))])])],1)]}}])})],1),s("div",{staticStyle:{height:"85px",width:"80px"}},[s("img",{staticClass:"inline q-ml-md q-pa-xs shadow-3",staticStyle:{"max-width":"100%"},attrs:{id:"location",src:""}})])]),s("div",{attrs:{id:"q-rates"}},[s("div",{staticClass:"q-pa-sm"},[s("q-table",{attrs:{title:"",dense:"","binary-state-sort":"",data:t.data_rates,columns:t.columns_rates,"visible-columns":t.visibleColumns,"row-key":"id","table-class":"my-custom","rows-per-page-options":[0],pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"body",fn:function(e){return[s("q-tr",{staticClass:"items-start content-start",staticStyle:{"vertical-align":"top"},attrs:{props:e},nativeOn:{click:function(t){e.expand=!e.expand}}},[s("q-td",{key:"bank",attrs:{props:e}},[s("div",{staticClass:"row items-center justify-end"},[s("img",{staticStyle:{"margin-top":"-1px"},attrs:{width:"12px",height:"12px",src:"/statics/icons/"+e.row.bank_shortcode+".ico",onerror:"this.onerror=null; this.src='/statics/icons/"+e.row.bank_shortcode+".png'"}}),s("div",{staticClass:"q-ml-xs"},[t._v(t._s(e.row.bankname))])]),s("div",{staticClass:"row content-end items-end justify-end",staticStyle:{"font-size":"9pt"}},[""!=e.row.poi?s("div",{staticClass:"q-mr-xs text-grey"},[t._v("\n                    М\n                  ")]):t._e(),s("div",[t._v(t._s(e.row.poi))])])]),s("q-td",{key:"rate",attrs:{props:e}},[s("div",[t._v("\n                "+t._s(e.row.rate)+"\n                "),s("div",{class:[e.row.diff>0?"text-positive":"text-negative"]},[t._v("\n                  "+t._s(e.row.diff)+"\n                ")])])]),s("q-td",{key:"time",attrs:{props:e}},[s("div",{staticClass:"row no-wrap items-center justify-end"},[s("div",[t._v(t._s(e.row.time))]),s("q-icon",{staticClass:"text-grey-5",attrs:{name:"place"}})],1)]),s("q-td",{key:"rub",attrs:{props:e}},[t._v(t._s(e.row.rub))]),s("q-td",{key:"empty",attrs:{props:e}},[t._v(t._s(e.row.empty))])],1),s("q-tr",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"props.expand"}],attrs:{props:e}},[s("q-td",{attrs:{colspan:"100%"}},[s("div",{staticClass:"fit text-caption row inline items-center justify-end float"},[s("div",[t._v(t._s(e.row.worktime))]),s("div",{staticClass:"column"},[s("div",{staticStyle:{height:"17px"}},[s("q-icon",{staticClass:"q-pa-xs text-green-10",staticStyle:{"font-size":"1em"},attrs:{name:"money"}}),t._v("\n                  "+t._s(e.row.pos)+"\n                ")],1),s("div",[s("q-icon",{staticClass:"q-pa-xs text-red-11",staticStyle:{"font-size":"1em"},attrs:{name:"reorder"}}),t._v("\n                  "+t._s(e.row.sum)+"\n                ")],1)]),s("a",{staticStyle:{"text-decoration":"none"},attrs:{rel:"nofollow",href:"https://www.google.com/maps/dir/?api=1&destination="+e.row.geo+"&travelmode=driving"}},[s("q-icon",{staticClass:"q-ma-sm text-teal",staticStyle:{"font-size":"3em"},attrs:{name:"navigation"}})],1)])])],1)]}}])}),s("q-table",{attrs:{title:"",dense:"","binary-state-sort":"",data:t.data_in,columns:t.columns_in,"visible-columns":t.visibleColumns_in,"table-class":"my-custom","rows-per-page-options":[0],pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"body",fn:function(e){return[s("q-tr",{staticClass:"items-start content-start",staticStyle:{"vertical-align":"top"},attrs:{props:e},nativeOn:{click:function(t){e.expand=!e.expand}}},[s("q-td",{key:"bank",staticClass:"text-right",attrs:{props:e}},[t._v("\n                "+t._s(e.row.bank)+"\n                "),s("div",{staticClass:"row content-end items-end justify-end",staticStyle:{"font-size":"9pt"}},[""!=e.row.poi?s("div",{staticClass:"q-mr-xs text-grey"}):t._e(),s("div",[t._v(t._s(e.row.poi))])])]),s("q-td",{key:"dist",attrs:{props:e}},[s("div",{staticClass:"row no-wrap items-center justify-end"},[s("div",[t._v(t._s(e.row.dist))]),s("q-icon",{staticClass:"text-grey-5",attrs:{name:"place"}})],1)]),s("q-td",{key:"empty",attrs:{props:e}},[t._v(t._s(e.row.empty))])],1),s("q-tr",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"props.expand"}],attrs:{props:e}},[s("q-td",{attrs:{colspan:"100%"}},[s("div",{staticClass:"fit text-caption row inline items-center justify-end float"},[s("a",{staticStyle:{"text-decoration":"none"},attrs:{rel:"nofollow",href:"https://www.google.com/maps/dir/?api=1&destination="+e.row.geo+"&travelmode=driving"}},[s("q-icon",{staticClass:"q-ma-sm text-teal",staticStyle:{"font-size":"3em"},attrs:{name:"navigation"}})],1)])])],1)]}}])})],1)])])},i=[];s("ac6a"),s("cadf"),s("5df3"),s("551c"),s("7f7f");document.addEventListener("contextmenu",function(t){t.preventDefault()});var n={name:"PageIndex",data:function(){return{columns_mon:[{name:"cb",label:"ЦБ",field:"cb",style:"width: 1px;"},{name:"atm",label:"ATM",field:"atm",style:"width: 1px;"},{name:"a150",label:"150",field:"a150",style:"width: 1px"},{name:"a200",label:"200",field:"a200",style:"width: 1px"},{name:"a300",label:"300",field:"a300",style:"width: 1px"},{name:"a350",label:"350",field:"a350",style:"width: 1px"},{name:"cur",label:"",field:"cur",style:"width: 1px"}],data_mon:v,pagination:{page:1,rowsPerPage:12},visibleColumns:["bank","rate","time","rub","empty"],columns_rates:[{bankname:"bankname",label:"bankname",field:"bankname"},{worktime:"worktime",label:"worktime",field:"worktime"},{name:"id",label:"id",field:"id"},{name:"bank",required:!0,label:"Банк",style:"width: 45%",field:function(t){return t.name}},{name:"diff",align:"center",label:"",field:"diff",sortable:!0},{name:"rate",label:"Курс",style:"width: 18%",field:"rate",sortable:!0},{name:"time",label:"Время",field:"time",sortable:!0,sort:function(t,e){return parseFloat(t)-parseFloat(e)},style:"width: 18%"},{name:"pos",label:"POS",field:"pos"},{name:"rub",label:"₽",field:"rub",style:"width: 18%"},{name:"sum",label:"",field:"sum"},{name:"poi",label:"",field:"poi"},{name:"geo",label:"",field:"geo"},{name:"empty",label:"",field:"empty",style:"width: 1%"}],data_rates:h,visibleColumns_in:["bank","dist","empty"],columns_in:[{name:"bank",label:"Банк",field:"bank",style:"width: 45%;"},{name:"poi",label:"",field:"poi"},{name:"dist",label:"Время",field:"dist",style:"width: 18%;"},{name:"empty",label:"",field:"empty",style:"width: 37%"}],data_in:w}}};function o(t){return t.ok?Promise.resolve(t):Promise.reject(new Error(t.statusText))}function r(t){return t.json()}setInterval(p,5e3);var l=["https://charts.profinance.ru/html/tw/history?symbol=29&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=30&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=27&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=42&resolution=1&from=7777777777&to=7777777777"];function c(){navigator.geolocation?navigator.geolocation.getCurrentPosition(m):console.log("Geolocation is not supported by this browser")}p();var d="";function m(t){d=t.coords.longitude+","+t.coords.latitude,fetch("https://script.google.com/macros/s/AKfycbwDKDH1OfgmkkiOWyAlnFFSceJrO4CGc7wqz8QM8A/exec?lat="+t.coords.latitude+"&long="+t.coords.longitude,{method:"POST"}),document.getElementById("location").src="https://static-maps.yandex.ru/1.x/?l=map&pt="+d+",round&size=200,200&z=16"}function p(){Promise.all(l.map(function(t){return fetch(t,{method:"GET",referrer:""}).then(o).then(r).catch(function(t){return console.log("There was a problem!",t)})})).then(function(t){document.getElementById("USD").innerText=parseFloat(t[0].c).toFixed(2),document.getElementById("EUR").innerHTML=parseFloat(t[1].c).toFixed(2),document.getElementById("BRENT").innerHTML=parseFloat(t[2].c).toFixed(2),document.getElementById("EURUSD").innerHTML=parseFloat(t[3].c).toFixed(4)})}c();var u=[],h=[],v=[],f=[],w=[],y=["https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!F5:R?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE","https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!A2:H3?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE","https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/IN!A2:H?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE","https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!T5:AF?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE"];function b(){Promise.all(y.map(function(t){return fetch(t,{method:"GET",referrer:""}).then(o).then(r).catch(function(t){return console.log("There was a problem!",t)})})).then(function(t){var e=t[1].values;for(v.length=0,a=0;a<e.length;a++)v.push({cb:e[a][0],cb_tom:e[a][1],atm:e[a][2],a150:e[a][3],a200:e[a][4],a300:e[a][5],a350:e[a][6],cur:e[a][7]});var s=[];s="TOD"==e[1][7]?t[0].values:t[3].values,f.length=0;var a=0;for(a=0;a<s.length;a++){var i="",n=s[a][8].indexOf(","),o=s[a][8].substring(0,n),r=s[a][8].substring(n+1,s[a][8].length);n=s[a][2].indexOf(".");var l=s[a][2].substring(0,n);i=r+","+o,f.push({bankname:s[a][0],worktime:s[a][1],id:s[a][2],name:s[a][3],poi:s[a][4],diff:s[a][5],rate:s[a][6],time:s[a][7],geo:i,pos:s[a][9],rub:s[a][10],sum:s[a][11],bank_shortcode:l})}var c=Object.create(null);for(u=f.reduce(function(t,e){return e.name in c?(parseFloat(e.time)<parseFloat(t[c[e.name]].time)&&(t[c[e.name]]=e),t):(c[e.name]=t.push(e)-1,t)},[]),h.length=0,a=0;a<u.length;a++)h.push(u[a]);var d=t[2].values;for(w.length=0,a=0;a<d.length;a++)i="",n=d[a][6].indexOf(","),o=d[a][6].substring(0,n),r=d[a][6].substring(n+1,d[a][6].length),i=r+","+o,w.push({bank:d[a][0],poi:d[a][1],dist:d[a][7],geo:i})})}setInterval(b,15e3),b();var g=n,x=(s("8041"),s("2877")),_=Object(x["a"])(g,a,i,!1,null,null,null);e["default"]=_.exports},d924:function(t,e,s){}}]);