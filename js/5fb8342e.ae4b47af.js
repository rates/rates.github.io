(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5fb8342e"],{8041:function(t,e,a){"use strict";var s=a("d924"),o=a.n(s);o.a},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"row flex-center"},[a("div",{staticClass:"q-pa-xs q-ma-xs text-h5 shadow-5 row text-positive justify-center"},[t._v("\n      $\n      "),a("div",{staticClass:"text-black",attrs:{id:"USD"}})]),a("div",{staticClass:"q-pa-xs q-ma-xs text-h5 shadow-5 row text-primary justify-center"},[t._v("\n      €\n      "),a("div",{staticClass:"text-black",attrs:{id:"EUR"}})]),a("div",{staticClass:"q-ma-xs text-h6 row inline flex-center text-weight-regular",attrs:{id:"BRENT"}}),a("div",{staticClass:"q-ma-xs text-subtitle1 row inline flex-center",attrs:{id:"EURUSD"}})]),a("div",{staticClass:"row flex-center items-center"},[a("div",{staticClass:"q-pa-md",attrs:{id:"q-mon"}},[a("q-table",{attrs:{title:"",dense:"",flat:"",separator:"none",data:t.data_mon,columns:t.columns_mon,"row-key":"cb","table-class":"my-custom-m","hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{staticClass:"items-start content-start",attrs:{props:e}},[a("q-td",{key:"cb",attrs:{props:e}},[a("div",[a("div",{staticStyle:{height:"40px"}},[t._v(t._s(e.row.cb))]),a("div",{staticClass:"text-subtitle1",class:[e.row.cb_tom>e.row.cb?"text-positive":"text-negative"]},[t._v("\n                    "+t._s(parseFloat(e.row.cb_tom-e.row.cb).toFixed(2))+" "+t._s(e.row.cb_tom)+"\n                  ")])])]),a("q-td",[t._v(t._s(e.row.atm))]),a("q-td",[t._v(t._s(e.row.a150))]),a("q-td",[t._v(t._s(e.row.a200))]),a("q-td",[t._v(t._s(e.row.a300))]),a("q-td",[t._v(t._s(e.row.a350))]),a("q-td",[t._v(t._s(e.row.cur))])],1)]}}])})],1),a("img",{staticClass:"inline q-pa-md shadow-3",attrs:{id:"location",src:""}})]),a("div",{attrs:{id:"q-rates"}},[a("div",{staticClass:"q-pa-sm"},[a("q-table",{attrs:{title:"",dense:"",data:t.data_rates,columns:t.columns_rates,"visible-columns":t.visibleColumns,"row-key":"poi","table-class":"my-custom","rows-per-page-options":[0],pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{staticClass:"items-start content-start",attrs:{props:e},nativeOn:{click:function(t){e.expand=!e.expand}}},[a("q-td",{key:"bank",attrs:{props:e}},[t._v("\n                "+t._s(e.row.name)+"\n                "),a("div",{staticClass:"text-h5 text-h5-opacity row justify-end"},[""!=e.row.poi?a("div",{staticClass:"q-mr-xs text-grey"},[t._v("\n                    М\n                  ")]):t._e(),a("div",[t._v(t._s(e.row.poi))])])]),a("q-td",{key:"rate",attrs:{props:e}},[t._v(t._s(e.row.rate)+"\n                "),a("div",{class:[e.row.diff>0?"text-positive":"text-negative"]},[t._v("\n                  "+t._s(e.row.diff)+"\n                ")])]),a("q-td",{key:"time",attrs:{props:e}},[t._v(t._s(e.row.time))]),a("q-td",{key:"rub",attrs:{props:e}},[t._v(t._s(e.row.rub))])],1),a("q-tr",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"props.expand"}],attrs:{props:e}},[a("q-td",{attrs:{colspan:"100%"}},[a("div",{staticClass:"fit text-h4 row inline items-center justify-end float"},[a("q-icon",{staticClass:"q-pa-sm text-green-10",staticStyle:{"font-size":"2em"},attrs:{name:"money"}}),t._v("\n                  "+t._s(e.row.pos)+"\n                  "),a("q-icon",{staticClass:"q-pa-sm text-red-11",staticStyle:{"font-size":"2em"},attrs:{name:"reorder"}}),t._v("\n                  "+t._s(e.row.sum)+"\n                  "),a("a",{attrs:{rel:"nofollow",href:"https://www.google.com/maps/dir/?api=1&destination="+e.row.geo+"&travelmode=driving"}},[a("q-icon",{staticClass:"q-pa-sm text-teal",staticStyle:{"font-size":"3em"},attrs:{name:"navigation"}})],1)],1)])],1)]}}])})],1)])])},o=[],n=(a("ac6a"),a("cadf"),a("5df3"),a("551c"),a("7f7f"),{name:"PageIndex",data:function(){return{columns_mon:[{name:"cb",label:"ЦБ",style:"width: 1px",field:"cb"},{name:"atm",label:"ATM",field:"atm"},{name:"a150",label:"150",field:"a150"},{name:"a200",label:"200",field:"a200"},{name:"a300",label:"300",field:"a300"},{name:"a350",label:"350",field:"a350"},{name:"cur",label:"CUR",field:"cur"}],data_mon:f,pagination:{page:1,rowsPerPage:12},visibleColumns:["bank","rate","time","rub"],columns_rates:[{name:"bank",required:!0,label:"Банк",style:"width: 40%",field:function(t){return t.name},sortable:!0},{name:"diff",align:"center",label:"",field:"diff",sortable:!0},{name:"rate",label:"Курс",style:"width: 50px",field:"rate",sortable:!0},{name:"time",label:"Время",field:"time"},{name:"pos",label:"POS",field:"pos"},{name:"rub",label:"₽",field:"rub"},{name:"sum",label:"",field:"sum"},{name:"poi",label:"",field:"poi"},{name:"geo",label:"",field:"geo"}],data_rates:u}}});function r(t){return t.ok?Promise.resolve(t):Promise.reject(new Error(t.statusText))}function i(t){return t.json()}navigator.serviceWorker&&navigator.serviceWorker.register("./sw.js").then(function(t){console.log("Excellent, registered with scope: ",t.scope)}),setInterval(p,5e3);var l=["https://charts.profinance.ru/html/tw/history?symbol=29&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=30&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=27&resolution=1&from=7777777777&to=7777777777","https://charts.profinance.ru/html/tw/history?symbol=42&resolution=1&from=7777777777&to=7777777777","https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!H5:N?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE"];function c(){navigator.geolocation?navigator.geolocation.getCurrentPosition(m):console.log("Geolocation is not supported by this browser")}p();var d="";function m(t){d=t.coords.longitude+","+t.coords.latitude,fetch("https://script.google.com/macros/s/AKfycbwDKDH1OfgmkkiOWyAlnFFSceJrO4CGc7wqz8QM8A/exec?lat="+t.coords.latitude+"&long="+t.coords.longitude,{method:"POST"}),document.getElementById("location").src="https://static-maps.yandex.ru/1.x/?l=map&pt="+d+",round&size=200,200&z=16"}function p(){Promise.all(l.map(function(t){return fetch(t,{method:"GET",referrer:""}).then(r).then(i).catch(function(t){return console.log("There was a problem!",t)})})).then(function(t){document.getElementById("USD").innerText=parseFloat(t[0].c).toFixed(2),document.getElementById("EUR").innerHTML=parseFloat(t[1].c).toFixed(2),document.getElementById("BRENT").innerHTML=parseFloat(t[2].c).toFixed(2),document.getElementById("EURUSD").innerHTML=parseFloat(t[3].c).toFixed(4)})}c();var u=[],f=[],h=["https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!I5:Q?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE","https://sheets.googleapis.com/v4/spreadsheets/1IwWh_1iQSXZ-vpbU0x4P6CvhMh7uEjO-e0qFMjfgxdo/values/%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80!A2:H?key=AIzaSyCy3RpnWaZ90hyL8aO8-JWxnq1-F_jIwAE"];function v(){Promise.all(h.map(function(t){return fetch(t,{method:"GET",referrer:""}).then(r).then(i).catch(function(t){return console.log("There was a problem!",t)})})).then(function(t){var e=t[0].values;u.length=0;var a=0;for(a=0;a<e.length;a++){var s="",o=e[a][5].indexOf(","),n=e[a][5].substring(0,o),r=e[a][5].substring(o+1,e[a][5].length);s=r+","+n,u.push({name:e[a][0],poi:e[a][1],diff:e[a][2],rate:e[a][3],time:e[a][4],geo:s,pos:e[a][6],rub:e[a][7],sum:e[a][8]})}var i=t[1].values;for(f.length=0,a=0;a<i.length;a++)f.push({cb:i[a][0],cb_tom:i[a][1],atm:i[a][2],a150:i[a][3],a200:i[a][4],a300:i[a][5],a350:i[a][6],cur:i[a][7]})})}v();var b=n,w=(a("8041"),a("2877")),g=Object(w["a"])(b,s,o,!1,null,null,null);e["default"]=g.exports},d924:function(t,e,a){}}]);