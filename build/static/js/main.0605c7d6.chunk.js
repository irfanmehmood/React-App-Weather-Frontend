(window.webpackJsonpweather=window.webpackJsonpweather||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(18),o=a.n(r),c=(a(28),a(2)),s=a(6),l=a(3),d=a(4),m=new(function(){function e(){Object(l.a)(this,e),this._cities=this.checkCookie("cities"),!1===this._cities&&(this._cities=JSON.stringify(this.getDefaultCitiesArray()),this.setCookie("cities",this._cities))}return Object(d.a)(e,[{key:"getDefaultCitiesArray",value:function(){return[{id:2643743,name:"London"},{id:6455259,name:"Paris"},{id:2759794,name:"Amsterdam"},{id:2950159,name:"Berlin"},{id:2618425,name:"Copenhagen"}]}},{key:"getCookie",value:function(e){for(var t=e+"=",a=document.cookie.split(";"),i=0;i<a.length;i++){for(var n=a[i];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return!1}},{key:"setCookie",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=new Date;i.setTime(i.getTime()+24*a*60*60*1e3);var n="expires="+i.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}},{key:"checkCookie",value:function(e){return this.getCookie(e)}},{key:"cities",get:function(){return JSON.parse(this._cities)},set:function(e){this._cities=JSON.stringify(e),this.setCookie("cities",this._cities)}}]),e}());var u={reducer:function(e,t){switch(t.type){case"setAjaxLoading":return{SelectedCityID:e.SelectedCityID,WeatherData:e.WeatherData,StoredCities:e.StoredCities,ShowCityFinder:e.ShowCityFinder,AddCityToCookie:e.AddCityToCookie,AjaxLoading:t.payload};case"showCityFinder":return{SelectedCityID:e.SelectedCityID,WeatherData:e.WeatherData,StoredCities:e.StoredCities,ShowCityFinder:!0,AddCityToCookie:e.AddCityToCookie,AjaxLoading:e.AjaxLoading};case"removeCityFromList":if(e.StoredCities.length>1){var a=[];return e.StoredCities.forEach(function(t){t.id!==e.SelectedCityID&&a.push(t)}),m.cities=a,{SelectedCityID:a[a.length-1],WeatherData:e.WeatherData,StoredCities:a,ShowCityFinder:e.ShowCityFinder,AddCityToCookie:e.AddCityToCookie,AjaxLoading:e.AjaxLoading}}break;case"addNewCity":if(e.StoredCities.length<5){var i=[];return e.StoredCities.forEach(function(e){i.push(e)}),i.push({id:t.payload.cityId,name:t.payload.cityName}),m.cities=i,{SelectedCityID:i[i.length-1].id,WeatherData:e.WeatherData,StoredCities:i,ShowCityFinder:e.ShowCityFinder,AddCityToCookie:!0,AjaxLoading:e.AjaxLoading}}break;case"setWeatherData":var n=!1;return n=!(e.StoredCities.length>5),(n=e.AddCityToCookie)&&(n=e.StoredCities.some(function(e){return!e.id===t.payload.city.id})),n&&(m.cities=[].concat(Object(s.a)(e.StoredCities),[t.payload.city])),{SelectedCityID:e.SelectedCityID,WeatherData:t.payload.data,StoredCities:n?[].concat(Object(s.a)(e.StoredCities),[t.payload.city]):e.StoredCities,ShowCityFinder:!1,AddCityToCookie:!1,AjaxLoading:!1};case"navCityButtonClicked":return e.SelectedCityID!==t.payload.cityId?{SelectedCityID:t.payload.cityId,WeatherData:e.WeatherData,StoredCities:e.StoredCities,ShowCityFinder:e.ShowCityFinder,AddCityToCookie:t.payload.AddCityNameToCookieList,AjaxLoading:e.AjaxLoading}:e}},initialState:{SelectedCityID:m.cities[0].id,WeatherData:[],StoredCities:m.cities,ShowCityFinder:!1,AddCityToCookie:!1,AjaxLoading:!0}},p=a(5),y=a.n(p),h=Object(i.createContext)({});var C=function(e){var t=Object(i.useContext)(h).dispatch,a="";return null!==e.FoundCities&&(a=e.FoundCities.map(function(e){return n.a.createElement("li",{onClick:function(){return t({type:"addNewCity",payload:{cityId:e.id,cityName:e.name}})},key:e.id,className:"list-group-item d-flex justify-content-between align-items-center"},e.name,n.a.createElement("span",{className:"badge badge-primary badge-pill"},e.country))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"list-group"},a))};var g=function(e){var t=Object(i.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],s=Object(i.useState)(null),l=Object(c.a)(s,2),d=l[0],m=l[1];return Object(i.useEffect)(function(){return r.length>3&&y.a.get("http://weather.digitalcook.co.uk:8001/api/city/find/".concat(r)).then(function(e){m(e.data)}),function(){}},[r]),n.a.createElement("form",{className:"search-city",autoComplete:"off"},n.a.createElement("label",null,n.a.createElement("h3",{className:"AddCity"},"Add City")),n.a.createElement("input",{type:"text",name:"name",onChange:function(e){return o(e.target.value)},placeholder:"Type your city name"}),n.a.createElement(C,{FoundCities:d}))},f=a(21),v=a(19),S=a(22),E=function(e){function t(){return Object(l.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=!0===this.props.sizeSmall?"":"@2x";return n.a.createElement("img",{className:"icon ".concat(this.props.extraClassName),alt:this.props.title,title:this.props.title,src:"http://openweathermap.org/img/wn/".concat(this.props.icon).concat(e,".png")})}}]),t}(n.a.Component);var b=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col txtAnim five-day-single ".concat(!0===e.selected?"active":"")},n.a.createElement("p",{className:"txtAnim weekday"},e.dateString),n.a.createElement(E,{icon:e.icon,title:e.title,sizeSmall:!1}),n.a.createElement("p",{className:"min-max"},n.a.createElement("span",{className:"max-temp"},e.maxTemp,"\xb0")," ",n.a.createElement("span",{className:"min-temp"},e.minTemp,"\xb0"))))};var w=function(){var e=Object(i.useContext)(h).appState.WeatherData[1],t=[],a=e.list[0].main.temp_max,r=e.list[0].main.temp_min,o=e.list[0].dt_txt.substr(0,10),c=new Date(o),s=k[c.getDay()].substr(0,3),l=e.list[0].weather[0].icon,d=e.list[0].weather[0].icon;t.push({max:a,min:r,date:o,weekday:s,icon:l,description:d});for(var m=0;m<e.list.length;m++){var u=e.list[m],p=u.dt_txt.substr(0,10),y=new Date(p),C=x(t,p);if(!1===C){var g={max:u.main.temp_max,min:u.main.temp_min,date:p,weekday:k[y.getDay()].substr(0,3),icon:u.weather[0].icon,title:u.weather[0].description};t.push(g)}else{var f=t[C],v=f.icon,S=f.description;p+" 09:00:00"===u.dt_txt&&(v=u.weather[0].icon,S=u.weather[0].description);var E={max:f.max>u.main.temp_max?f.max:u.main.temp_max,min:f.min<u.main.temp_min?f.min:u.main.temp_min,date:f.date,weekday:f.weekday,icon:v,title:S};t[C]=E}}t.length>5&&t.pop();var w=t.map(function(e,t){return n.a.createElement(b,{key:t,selected:0===t,dateString:e.weekday,icon:e.icon,title:e.title,maxTemp:Math.round(e.max+-273.15),minTemp:Math.round(e.min+-273.15)})});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row five-day-single-con dailyTempsCont"},w))};function x(e,t){for(var a=0;a<e.length;a++){if(e[a].date===t)return a}return!1}var k=[];k[0]="Sunday",k[1]="Monday",k[2]="Tuesday",k[3]="Wednesday",k[4]="Thursday",k[5]="Friday",k[6]="Saturday";var D=a(20),N=a.n(D);var j=function(e){for(var t=Object(i.useContext)(h).appState.WeatherData[1],a=[],r=[],o=0;o<e.loopLength;o++){var c=t.list[o];r.push(Math.round(c.main.temp+-273.15));var s=c.dt_txt.substr(11,5);a.push(s)}var l={name:"Temperature",data:r},d={chart:{toolbar:{show:!1}},markers:{show:!1},colors:["#FFD632"],xaxis:{type:"category",categories:a,labels:{style:{colors:[],fontSize:"14px",cssClass:"apexcharts-xaxis-label"},offsetX:0,offsetY:0}},yaxis:{tooltip:{enabled:!1,offsetY:0,style:{fontSize:0,fontFamily:0}}},grid:{show:!1},fill:{colors:["#FFF5CC","#FFF5CC"],type:["solid"]},dataLabels:{enabled:!0,position:"top",formatter:function(e,t){return e+"\xb0C"},style:{colors:["black"]},offsetX:0,cssClass:"apexcharts-xaxis-values"},annotations:{show:!1}},m=[];return m.push(l),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mixed-chart"},n.a.createElement(N.a,{options:d,series:m,type:"area",height:"200"})))};var F=function(e){var t={transform:"rotate("+e.item.deg+"deg)"};return n.a.createElement("div",{className:"col txtAnim five-day-single"},n.a.createElement("p",{className:"windSpeed"},Math.round(1.60934*e.item.speed),n.a.createElement("span",{className:"supb"},"kmh")),n.a.createElement("p",{className:"windIcon"},n.a.createElement("i",{className:"fa fa-3x fa-arrow-circle-o-up",style:t})),n.a.createElement("p",{className:"windTime"},e.item.timeString))};var A=function(e){for(var t=Object(i.useContext)(h).appState.WeatherData[1],a=[],r=0;r<e.loopLength;r++){var o=t.list[r];o.wind.timeString=o.dt_txt.substr(11,5),a.push(o.wind)}var c=a.map(function(e,t){return n.a.createElement(F,{item:e,key:t})});return n.a.createElement("div",{className:"row five-day-single-con"},c)};var T=function(){var e=Object(i.useContext)(h).appState.WeatherData[0],t=new Date;t.setSeconds(t.getSeconds()+e.timezone);var a=O[t.getUTCDay()],r=t.getUTCHours()<10?"0"+t.getUTCHours():+t.getUTCHours(),o=t.getUTCMinutes()<10?"0"+t.getUTCMinutes():+t.getUTCMinutes();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"place txtAnim"},n.a.createElement("h2",{key:"12"},a,", ",r,":",o),n.a.createElement("h3",{key:"14"},e.weather[0].main)),n.a.createElement("div",{className:"clearfix temperature txtAnim"},n.a.createElement(E,{icon:e.weather[0].icon,sizeSmall:!1,title:e.weather[0].description,extraClassName:"float-left"}),n.a.createElement("h2",null,Math.round(e.main.temp+-273.15),"\xb0")))},O=[];O[0]="Sunday",O[1]="Monday",O[2]="Tuesday",O[3]="Wednesday",O[4]="Thursday",O[5]="Friday",O[6]="Saturday";var L=function(e){return n.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Forecast"},n.a.createElement("button",{href:"#",onClick:function(t){return e.toggleComponentDispay_Callback("chart")},type:"button",className:"btn btn-secondary ".concat("chart"===e.DisplayToggleStatus?"active":"")},"Temp"),n.a.createElement("button",{href:"#",onClick:function(){return e.toggleComponentDispay_Callback("wind")},type:"button",className:"btn btn-secondary ".concat("wind"===e.DisplayToggleStatus?"active":"")},"Wind"))};var W=function(e){var t,a=Object(i.useContext)(h).appState.WeatherData[0],r=Object(i.useState)("chart"),o=Object(c.a)(r,2),s=o[0],l=o[1];switch(s){case"chart":t=n.a.createElement(j,{loopLength:5});break;case"wind":t=n.a.createElement(A,{loopLength:5});break;default:t=n.a.createElement(j,{loopLength:5})}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col top-lft-col"},n.a.createElement(T,null)),n.a.createElement("div",{className:"col top-rgt-col"},n.a.createElement("div",{className:"col text-left"},n.a.createElement("p",{className:"todayDetails"},"Humidity: ",a.main.humidity,"%"),n.a.createElement("p",{className:"todayDetails"},"Wind: ",a.wind.speed,"mph"),n.a.createElement(L,{DisplayToggleStatus:s,toggleComponentDispay_Callback:function(e){l(e)}})))),t,n.a.createElement(w,null))};var I=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"forecastPrnt"},n.a.createElement(W,null)))};var _=function(e){var t=Object(i.useContext)(h).appState,a=!t.ShowCityFinder&&n.a.createElement("div",{className:"CityData txtAnim"},n.a.createElement(I,null)),r=!0===t.ShowCityFinder&&n.a.createElement("div",{className:"FindCity"},n.a.createElement(g,null));return n.a.createElement(n.a.Fragment,null,a,r)};var M=function(e){var t=Object(i.useContext)(h),a=t.appState,r=t.dispatch,o=a.StoredCities.map(function(e){return n.a.createElement("button",{key:e.id,title:e.name,className:"txtAnim tablinks ".concat(a.SelectedCityID===e.id?"active":""),onClick:function(){return r({type:"navCityButtonClicked",payload:{cityId:e.id,AddCityNameToCookieList:!1}})}},e.name.substring(0,10))}),c=5===a.StoredCities.length?"Disabled":"",s=1===a.StoredCities.length||!0===e.IsCityFinderComponentLoaded?"Disabled":"";return n.a.createElement(n.a.Fragment,null,o,n.a.createElement("button",{disabled:c,className:"tablinks addLocation",onClick:function(){return r({type:"showCityFinder"})}},n.a.createElement("i",{className:"fa fa-plus"})),n.a.createElement("button",{disabled:s,className:"tablinks addLocation",onClick:function(){return r({type:"removeCityFromList"})}},n.a.createElement("i",{className:"fa fa-minus"})))};var U=function(e){var t,a=Object(i.useReducer)(u.reducer,u.initialState),r=Object(c.a)(a,2),o=r[0],s=r[1];return Object(i.useEffect)(function(){var e;e=o.SelectedCityID,s({type:"setAjaxLoading",payload:!0}),y.a.get("http://weather.digitalcook.co.uk:8001/api/city/weather/".concat(e)).then(function(e){s({type:"setWeatherData",payload:{data:e.data,city:{id:e.data[0].id,name:e.data[0].name}}})})},[o.SelectedCityID,o.setAjaxLoading]),t=!1===o.AjaxLoading?n.a.createElement(_,null):n.a.createElement("p",{className:"todayDetails"},"Loading ....."),n.a.createElement(h.Provider,{value:{appState:o,dispatch:s}},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container widgetCont"},n.a.createElement("div",{className:"tab"},n.a.createElement(M,null)),t)))};var z=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);o.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.0605c7d6.chunk.js.map