(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5fb8342e"],{8041:function(t,e,s){"use strict";var a=s("d924"),i=s.n(a);i.a},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"row flex-center"},[s("div",{staticClass:"q-pa-xs items-center q-ma-xs text-h5 shadow-3 row text-positive justify-center",staticStyle:{height:"50px"}},[t._v("\n      $\n      "),s("div",{staticClass:"text-black",attrs:{id:"USD"}})]),s("div",{staticClass:"q-pa-xs items-center text-h5 shadow-3 row text-primary justify-center",staticStyle:{height:"50px"}},[t._v("\n      €\n      "),s("div",{staticClass:"text-black",attrs:{id:"EUR"}})]),s("div",{staticClass:"q-pa-xs q-ma-xs text-h6 shadow-3 row inline flex-center text-weight-regular",staticStyle:{height:"50px"},attrs:{id:"BRENT"}}),s("div",{staticClass:"q-pa-xs text-subtitle1 shadow-3  row inline flex-center",staticStyle:{height:"50px"},attrs:{id:"EURUSD"}})]),s("div",{staticClass:"row items-center justify-start"},[s("div",{staticClass:"no-scroll",staticStyle:{width:"250px"},attrs:{id:"q-mon"}},[s("q-table",{attrs:{title:"",dense:"",flat:"",separator:"none",data:t.data_mon,columns:t.columns_mon,"row-key":"cb","table-class":"my-custom-m no-scroll","hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(e){return[s("q-tr",{staticClass:"items-start content-start",attrs:{props:e}},[s("q-td",{key:"cb",staticClass:"text-right",attrs:{props:e}},[s("div",[s("div",{staticStyle:{height:"16px"}},[t._v(t._s(e.row.cb))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.row.cb_tom>0,expression:"props.row.cb_tom > 0"}],class:[e.row.cb_tom>e.row.cb?"text-positive":"text-negative"],staticStyle:{"font-size":"7pt"}},[t._v("\n                    "+t._s(parseFloat(e.row.cb_tom-e.row.cb).toFixed(2))+" "+t._s(e.row.cb_tom)+"\n                  ")])])]),s("q-td",{staticClass:"text-right"},[s("div",[t._v(t._s(e.row.atm))])]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a150))]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a200))]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a300))]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.a350))]),s("q-td",{staticClass:"text-right"},[t._v(t._s(e.row.cur))])],1)]}}])})],1),s("div",{staticStyle:{height:"85px",width:"80px"}},[s("img",{staticClass:"inline q-ml-md q-pa-xs shadow-3",staticStyle:{"max-width":"100%"},attrs:{id:"location",src:""}})])]),s("div",{attrs:{id:"q-rates"}},[s("div",{staticClass:"q-pa-sm"},[s("q-table",{attrs:{title:"",dense:"","binary-state-sort":"",data:t.data_rates,columns:t.columns_rates,"visible-columns":t.visibleColumns,"row-key":"poi","table-class":"my-custom","rows-per-page-options":[0],pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"body",fn:function(e){return[s("q-tr",{staticClass:"items-start content-start",attrs:{props:e},nativeOn:{click:function(t){e.expand=!e.expand}}},[s("q-td",{key:"bank",staticClass:"text-right",attrs:{props:e}},[t._v("\n                "+t._s(e.row.name)+"\n                "),s("div",{staticClass:"row content-end items-end justify-end",staticStyle:{"font-size":"9pt"}},[""!=e.row.poi?s("div",{staticClass:"q-mr-xs text-grey"},[t._v("\n                    М\n                  ")]):t._e(),s("div",[t._v(t._s(e.row.poi))])])]),s("q-td",{key:"rate",attrs:{props:e}},[t._v(t._s(e.row.rate)+"\n                "),s("div",{class:[e.row.diff>0?"text-positive":"text-negative"]},[t._v("\n                  "+t._s(e.row.diff)+"\n                ")])]),s("q-td",{key:"time",attrs:{props:e}},[t._v(t._s(e.row.time))]),s("q-td",{key:"rub",attrs:{props:e}},[t._v(t._s(e.row.rub))]),s("q-td",{key:"empty",attrs:{props:e}},[t._v(t._s(e.row.empty))])],1),s("q-tr",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"props.expand"}],attrs:{props:e}},[s("q-td",{attrs:{colspan:"100%"}},[s("div",{staticClass:"fit text-caption row inline items-center justify-end float"},[s("div",{staticClass:"column"},[s("div",{staticStyle:{height:"17px"}},[s("q-icon",{staticClass:"q-pa-xs text-green-10",staticStyle:{"font-size":"1em"},attrs:{name:"money"}}),t._v("\n                  "+t._s(e.row.pos)+"\n                ")],1),s("div",[s("q-icon",{staticClass:"q-pa-xs text-red-11",staticStyle:{"font-size":"1em"},attrs:{name:"reorder"}}),t._v("\n                  "+t._s(e.row.sum)+"\n                ")],1)]),s("a",{staticStyle:{"text-decoration":"none"},attrs:{rel:"nofollow",href:"https://www.google.com/maps/dir/?api=1&destination="+e.row.geo+"&travelmode=driving"}},[s("q-icon",{staticClass:"q-ml-sm text-teal",staticStyle:{"font-size":"3em"},attrs:{name:"navigation"}})],1)])])],1)]}}])})],1)])])},i=[],o=(s("ac6a"),s("cadf"),s("5df3"),s("551c"),s("7f7f"),{name:"PageIndex",data:function(){return{columns_mon:[{name:"cb",label:"ЦБ",field:"cb",style:"width: 1px;"},{name:"atm",label:"ATM",field:"atm",style:"width: 1px;"},{name:"a150",label:"150",field:"a150",style:"width: 1px"},{name:"a200",label:"200",field:"a200",style:"width: 1px"},{name:"a300",label:"300",field:"a300",style:"width: 1px"},{name:"a350",label:"350",field:"a350",style:"width: 1px"},{name:"cur",label:"CUR",field:"cur",style:"width: 1px"}],data_mon:u,pagination:{page:1,rowsPerPage:12},visibleColumns:["bank","rate","time","rub","empty"],columns_rates:[{name:"bank",required:!0,label:"Банк",style:"width: 40%",field:function(t){return t.name},sortable:!0},{name:"diff",align:"center",label:"",field:"diff",sortable:!0},{name:"rate",label:"Курс",style:"width: 20%",field:"rate",sortable:!0},{name:"time",label:"Время",field:"time",style:"width: 20%"},{name:"pos",label:"POS",field:"pos"},{name:"rub",label:"₽",field:"rub",style:"width: 20%"},{name:"sum",label:"",field:"sum"},{name:"poi",label:"",field:"poi"},{name:"geo",label:"",field:"geo"},{name:"empty",label:"",field:"empty"}],data_rates:h}}});function n(t){return t.ok?Promise.resolve(t):Promise.reject(new Error(t.statusText))}function r(t){return t.json()}navigator.serviceWorker&&navigator.serviceWorker.register("./sw.js").then(function(t){console.log("Excellent, registered with scope: ",t.scope)}),setInterval(m,5e3);var l=["https://charts.profinance.ru/html/tw/history?symbol=29&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=30&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=27&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=42&resolution=1&from=7777777777&to=7777777777","https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!H5:N?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE"];function c(){navigator.geolocation?navigator.geolocation.getCurrentPosition(p):console.log("Geolocation is not supported by this browser")}m();var d="";function p(t){d=t.coords.longitude+","+t.coords.latitude,fetch("https://script.google.com/macros/s/AKfycbwDKDH1OfgmkkiOWyAlnFFSceJrO4CGc7wqz8QM8A/exec?lat="+t.coords.latitude+"&long="+t.coords.longitude,{method:"POST"}),document.getElementById("location").src="https://static-maps.yandex.ru/1.x/?l=map&pt="+d+",round&size=200,200&z=16"}function m(){Promise.all(l.map(function(t){return fetch(t,{method:"GET",referrer:""}).then(n).then(r).catch(function(t){return console.log("There was a problem!",t)})})).then(function(t){document.getElementById("USD").innerText=parseFloat(t[0].c).toFixed(2),document.getElementById("EUR").innerHTML=parseFloat(t[1].c).toFixed(2),document.getElementById("BRENT").innerHTML=parseFloat(t[2].c).toFixed(2),document.getElementById("EURUSD").innerHTML=parseFloat(t[3].c).toFixed(4)})}c();var h=[],u=[],f=["https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!I5:Q?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE","https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!A2:H?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE"];function v(){Promise.all(f.map(function(t){return fetch(t,{method:"GET",referrer:""}).then(n).then(r).catch(function(t){return console.log("There was a problem!",t)})})).then(function(t){var e=t[0].values;h.length=0;var s=0;for(s=0;s<e.length;s++){var a="",i=e[s][5].indexOf(","),o=e[s][5].substring(0,i),n=e[s][5].substring(i+1,e[s][5].length);a=n+","+o,h.push({name:e[s][0],poi:e[s][1],diff:e[s][2],rate:e[s][3],time:e[s][4],geo:a,pos:e[s][6],rub:e[s][7],sum:e[s][8]})}var r=t[1].values;for(u.length=0,s=0;s<r.length;s++)u.push({cb:r[s][0],cb_tom:r[s][1],atm:r[s][2],a150:r[s][3],a200:r[s][4],a300:r[s][5],a350:r[s][6],cur:r[s][7]})})}v();var w=o,x=(s("8041"),s("2877")),y=Object(x["a"])(w,a,i,!1,null,null,null);e["default"]=y.exports},d924:function(t,e,s){}}]);