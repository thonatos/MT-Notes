define("MT.SPM/0.1.0/src/page/labs-video",[],function(e,n){var o=function(){var n=e("MT.SPM/0.1.0/src/page/public");n.init(),console.log("Live Page");var o="http://media.html5media.info/video.mp4",t=e("MT.SPM/0.1.0/src/components/html5-player").create($(".video-section"),$(".video-section video"),document.getElementById("html5-video"),{videoUrl:o,display:{all:!0,playControl:!0,muteControl:!0,fullScreenControl:!0,seekControl:!0,volumeControl:!0},control:{autoplay:!0,preload:!0,loop:!0,progress:!1,volume:!1}});t.init(),t.resume();var i=e("MT.SPM/0.1.0/src/components/update-browser").create("",!1);i.init()};n.init=o}),define("MT.SPM/0.1.0/src/page/public",[],function(e,n){n.init=function(){var n=e("MT.SPM/0.1.0/src/components/update-browser").create("",!1);n.init();var o=e("MT.SPM/0.1.0/src/components/toggle-nav").create($(".nav-ul-toggle a"),$(".nav-ul"));o.init();var t=e("MT.SPM/0.1.0/src/components/wechat").create();t.init()}}),define("MT.SPM/0.1.0/src/components/update-browser",[],function(e,n){var o={create:function(e,n){var o={},t={};t.options=e||{},t.options.versionRequied={i:10,f:23,o:12,s:6.2,n:12,c:28},t.options.versionDefault={i:9,f:23,o:12,s:6.2,n:12,c:28},t.options.versionMinimal={i:9,f:23,o:12,s:6.2,n:12,c:28},t.options.version=e.version||t.options.versionDefault;{var i;window.navigator}return o.init=function(){for(i in t.options.versionRequied)t.options.version[i]>=t.options.versionRequied[i]&&(t.options.version[i]=t.options.version[i]-.2),t.options.version[i]||(t.options.version[i]=t.options.versionDefault[i]),t.options.version[i]<t.options.versionMinimal[i]&&(t.options.version[i]=t.options.versionMinimal[i]);t.options.test=n||e.test||!1,"#test-bu"==window.location.hash&&(t.options.test=!0)},o.getBrowser=function(){var e,n,o=navigator.userAgent,t={i:"Internet Explorer",f:"Firefox",o:"Opera",s:"Apple Safari",n:"Netscape Navigator",c:"Chrome",x:"Other"};if(/bot|googlebot|facebook|slurp|wii|silk|blackberry|mediapartners|adsbot|silk|android|phone|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|android|mobile|iphone|ipod|ipad|epiphany|rekonq|symbian|webos/i.test(o))e="x";else if(/Trident.*rv:(\d+\.\d+)/i.test(o))e="i";else if(/Trident.(\d+\.\d+)/i.test(o))e="io";else if(/MSIE.(\d+\.\d+)/i.test(o))e="i";else if(/OPR.(\d+\.\d+)/i.test(o))e="o";else if(/Chrome.(\d+\.\d+)/i.test(o))e="c";else if(/Firefox.(\d+\.\d+)/i.test(o))e="f";else if(/Version.(\d+.\d+).{0,10}Safari/i.test(o))e="s";else if(/Safari.(\d+)/i.test(o))e="so";else if(/Opera.*Version.(\d+\.\d+)/i.test(o))e="o";else if(/Opera.(\d+\.?\d+)/i.test(o))e="o";else{if(!/Netscape.(\d+)/i.test(o))return{n:"x",v:0,t:t[e]};e="n"}return/windows.nt.5.0|windows.nt.4.0|windows.98|os x 10.4|os x 10.5|os x 10.3|os x 10.2/.test(o)&&(e="x"),"f"==e&&24==n&&(e="x"),/linux|x11|unix|bsd/.test(o)&&"o"==e&&n>12&&(e="x"),"x"==e?{n:"x",v:0,t:t[e]}:(n=new Number(RegExp.$1),"so"==e&&(n=100>n&&1||130>n&&1.2||320>n&&1.3||520>n&&2||524>n&&3||526>n&&3.2||4,e="s"),"i"==e&&7==n&&window.XDomainRequest&&(n=8),"io"==e&&(e="i",n=n>6?11:n>5?10:n>4?9:n>3.1?8:n>3?7:9),{n:e,v:n,t:t[e]+" "+n})},o.generateInfo=function(){var n=window.devicePixelRatio>1?2:1,o=document.createElement("div");t.options.div=o,o.id="update-browser",o.className="update-browser";var i='                    <div class="update-browser-box">                        <div class="update-browser-icon"><img src="/public/images/icons/'+n+'x/icon-update-browser.png" alt=""></div>                        <div class="update-browser-info"><p>\u9a6c\u4e0a\u5347\u7ea7\u60a8\u7684\u6d4f\u89c8\u5668\uff0c\u83b7\u5f97\u66f4\u6d41\u7545\u7684\u8bbf\u95ee\u4f53\u9a8c</p></div>                        <div class="update-browser-action"><a href="/labs/update-browser">\u514d\u8d39\u66f4\u65b0</a></div>                    </div>                    <div class="update-browser-close"><a id="update-browser-button-close" href="#">\u6b8b\u5fcd\u62d2\u7edd</a></div></div>';o.innerHTML=e.div||i;var r=document.createElement("style"),a=".update-browser {position: fixed;top: 0;left: 0;padding: 14px 0;width: 100%;display: table;background: #f4f4f4;box-shadow: 0 0 4px #000000;z-index: 9999;}.update-browser-box{margin: 0 auto;width: 600px;}.update-browser-box:before{content: ' ';display: table;}.update-browser-box:after{content: ' ';clear: both;display: table;}.update-browser-icon,.update-browser-info,.update-browser-action {display: inline-block;float: left;}.update-browser-icon img{width: 28px;vertical-align: middle;}.update-browser-info p{margin: 10px;display: block;font-size: 16px;color: #505050;}.update-browser-action a{padding: 10px 0;display: block;font-size: 16px;color: #2732c9;}.update-browser-close{position: absolute;top: 14px;right: 23px;}.update-browser-close a{display: block;text-decoration: none;font-size: 12px;color: #858689;}",s=e.style||a;document.body.insertBefore(o,document.body.firstChild),document.getElementsByTagName("head")[0].appendChild(r);try{r.innerText=s,r.innerHTML=s}catch(c){try{r.styleSheet.cssText=s}catch(c){return}}document.getElementById("update-browser-button-close").onclick=function(e){e.preventDefault(),t.options.div.style.display="none"}},o.appendInfo=function(){t.options.browser=o.getBrowser(),(t.options.test||t.options.browser&&t.options.browser.n&&"x"!=t.options.browser.n&&!(t.options.browser.v>t.options.version[t.options.browser.n]))&&o.generateInfo()},t.init=function(){o.init(),o.appendInfo()},t}};n.create=o.create}),define("MT.SPM/0.1.0/src/components/toggle-nav",[],function(e,n){var o={create:function(e,n){var o={},t=!1;return o.init=function(){e.click(function(){return t?n.fadeOut():n.fadeIn(),t=!t,!1})},o}};n.create=o.create}),define("MT.SPM/0.1.0/src/components/wechat",[],function(e,n){var o=e("MT.SPM/0.1.0/src/utils/jweixin-1.0.0"),t={create:function(e,n){var t={},i=n||{};return i.init=function(e){var n=e||{};o.config({debug:!0,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]}),o.ready(function(){console.log("ready");var e={title:"\u5fae\u4fe1JS-SDK Demo",desc:"\u5fae\u4fe1JS-SDK,\u5e2e\u52a9\u7b2c\u4e09\u65b9\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u4f18\u8d28\u7684\u79fb\u52a8web\u670d\u52a1",link:"http://demo.open.weixin.qq.com/jssdk/",imgUrl:"http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0"};o.onMenuShareAppMessage(e),o.onMenuShareTimeline(e)}),o.error(function(e){alert(e.errMsg)})},i.getSignature=function(e){$.get("/api/wechat/signature/gen?access_token="+e,function(e){e&&200===e.code?(console.log(e),i.init(e.data)):console.log("err")})},i.getToken=function(){$.get("/api/wechat/token/get",function(e){if(e&&200===e.code){console.log(e);var n=e.data.access_token;i.getSignature(n)}else console.log("err")})},t.init=function(){i.getToken()},t}};n.create=t.create}),define("MT.SPM/0.1.0/src/utils/jweixin-1.0.0",[],function(){!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return n(e)}):n(e,!0)}(this,function(e,n){function o(n,o,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,i(o),function(e){a(n,e,t)}):l(n,t)}function t(n,o,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),a(n,e,o)}):t?l(n,t):l(n,o)}function i(e){return e=e||{},e.appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,"package":e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e,n,o){var t,i,r;switch(delete n.err_code,delete n.err_desc,delete n.err_detail,t=n.errMsg,t||(t=n.err_msg,delete n.err_msg,t=s(e,t,o),n.errMsg=t),o=o||{},o._complete&&(o._complete(n),delete o._complete),t=n.errMsg||"",M.debug&&!o.isInnerInvoke&&alert(JSON.stringify(n)),i=t.indexOf(":"),r=t.substring(i+1)){case"ok":o.success&&o.success(n);break;case"cancel":o.cancel&&o.cancel(n);break;default:o.fail&&o.fail(n)}o.complete&&o.complete(n)}function s(e,n){var o,t,i,r;if(n){switch(o=n.indexOf(":"),e){case m.config:t="config";break;case m.openProductSpecificView:t="openProductSpecificView";break;default:t=n.substring(0,o),t=t.replace(/_/g," "),t=t.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),t=t.substring(0,1).toLowerCase()+t.substring(1),t=t.replace(/ /g,""),-1!=t.indexOf("Wcpay")&&(t=t.replace("Wcpay","WCPay")),i=g[t],i&&(t=i)}r=n.substring(o+1),"confirm"==r&&(r="ok"),"failed"==r&&(r="fail"),-1!=r.indexOf("failed_")&&(r=r.substring(7)),-1!=r.indexOf("fail_")&&(r=r.substring(5)),r=r.replace(/_/g," "),r=r.toLowerCase(),("access denied"==r||"no permission to execute"==r)&&(r="permission denied"),"config"==t&&"function not exist"==r&&(r="ok"),n=t+":"+r}return n}function c(e){var n,o,t,i;if(e){for(n=0,o=e.length;o>n;++n)t=e[n],i=m[t],i&&(e[n]=i);return e}}function l(e,n){if(!(!M.debug||n&&n.isInnerInvoke)){var o=g[e];o&&(e=o),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function d(){if(!("6.0.2">T||I.systemType<0)){var e=new Image;I.appId=M.appId,I.initTime=k.initEndTime-k.initStartTime,I.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,C.getNetworkType({isInnerInvoke:!0,success:function(n){I.networkType=n.networkType;var o="https://open.weixin.qq.com/sdk/report?v="+I.version+"&o="+I.isPreVerifyOk+"&s="+I.systemType+"&c="+I.clientVersion+"&a="+I.appId+"&n="+I.networkType+"&i="+I.initTime+"&p="+I.preVerifyTime+"&u="+I.url;e.src=o}})}}function u(){return(new Date).getTime()}function p(n){w&&(e.WeixinJSBridge?n():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",n,!1))}function f(){C.invoke||(C.invoke=function(n,o,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,i(o),t)},C.on=function(n,o){e.WeixinJSBridge&&WeixinJSBridge.on(n,o)})}var m,g,v,y,h,w,b,S,T,k,I,M,x,_,C;return e.jWeixin?void 0:(m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},g=function(){var e,n={};for(e in m)n[m[e]]=e;return n}(),v=e.document,y=v.title,h=navigator.userAgent.toLowerCase(),w=-1!=h.indexOf("micromessenger"),b=-1!=h.indexOf("android"),S=-1!=h.indexOf("iphone")||-1!=h.indexOf("ipad"),T=function(){var e=h.match(/micromessenger\/(\d+\.\d+\.\d+)/)||h.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},I={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:S?1:b?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},M={},x={_completes:[]},_={state:0,res:{}},p(function(){k.initEndTime=u()}),C={config:function(e){M=e,l("config",e);var n=M.check===!1?!1:!0;p(function(){var e,t,i;if(n)o(m.config,{verifyJsApiList:c(M.jsApiList)},function(){x._complete=function(e){k.preVerifyEndTime=u(),_.state=1,_.res=e},x.success=function(){I.isPreVerifyOk=0},x.fail=function(e){x._fail?x._fail(e):_.state=-1};var e=x._completes;return e.push(function(){M.debug||d()}),x.complete=function(){for(var n=0,o=e.length;o>n;++n)e[n]();x._completes=[]},x}()),k.preVerifyStartTime=u();else{for(_.state=1,e=x._completes,t=0,i=e.length;i>t;++t)e[t]();x._completes=[]}}),M.beta&&f()},ready:function(e){0!=_.state?e():(x._completes.push(e),!w&&M.debug&&e())},error:function(e){"6.0.2">T||(-1==_.state?e(_.res):x._fail=e)},checkJsApi:function(e){var n=function(e){var n,o,t=e.checkResult;for(n in t)o=g[n],o&&(t[o]=t[n],delete t[n]);return e};o("checkJsApi",{jsApiList:c(e.jsApiList)},function(){return e._complete=function(e){if(b){var o=e.checkResult;o&&(e.checkResult=JSON.parse(o))}e=n(e)},e}())},onMenuShareTimeline:function(e){t(m.onMenuShareTimeline,{complete:function(){o("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareAppMessage:function(e){t(m.onMenuShareAppMessage,{complete:function(){o("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(m.onMenuShareQQ,{complete:function(){o("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(m.onMenuShareWeibo,{complete:function(){o("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(m.onMenuShareQZone,{complete:function(){o("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){o("startRecord",{},e)},stopRecord:function(e){o("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){o("playVoice",{localId:e.localId},e)},pauseVoice:function(e){o("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){o("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){o("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){o("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){o("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){o("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(b){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},previewImage:function(e){o(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){o("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){o("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getNetworkType:function(e){var n=function(e){var n,o,t,i=e.errMsg;if(e.errMsg="getNetworkType:ok",n=e.subtype,delete e.subtype,n)e.networkType=n;else switch(o=i.indexOf(":"),t=i.substring(o+1)){case"wifi":case"edge":case"wwan":e.networkType=t;break;default:e.errMsg="getNetworkType:fail"}return e};o("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){o("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},o(m.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){o("hideOptionMenu",{},e)},showOptionMenu:function(e){o("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},o("closeWindow",{immediate_close:e.immediateClose||0},e)},hideMenuItems:function(e){o("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){o("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){o("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){o("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},o("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){var n,o;S&&(n=e.resultStr,n&&(o=JSON.parse(n),e.resultStr=o&&o.scan_code&&o.scan_code.scan_result))},e}())},openProductSpecificView:function(e){o(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0},e)},addCard:function(e){var n,t,i,r,a=e.cardList,s=[];for(n=0,t=a.length;t>n;++n)i=a[n],r={card_id:i.cardId,card_ext:i.cardExt},s.push(r);o(m.addCard,{card_list:s},function(){return e._complete=function(e){var n,o,t,i=e.card_list;if(i){for(i=JSON.parse(i),n=0,o=i.length;o>n;++n)t=i[n],t.cardId=t.card_id,t.cardExt=t.card_ext,t.isSuccess=t.is_succ?!0:!1,delete t.card_id,delete t.card_ext,delete t.is_succ;e.cardList=i,delete e.card_list}},e}())},chooseCard:function(e){o("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){var n,t,i,r,a=e.cardList,s=[];for(n=0,t=a.length;t>n;++n)i=a[n],r={card_id:i.cardId,code:i.code},s.push(r);o(m.openCard,{card_list:s},e)},chooseWXPay:function(e){o(m.chooseWXPay,r(e),e)}},n&&(e.wx=e.jWeixin=C),C)})}),define("MT.SPM/0.1.0/src/components/html5-player",[],function(e,n){var o={create:function(e,n,o,t){var i={},r={},e=e,n=n,o=o,a={videoUrl:"",display:{all:!0,playControl:!0,muteControl:!0,fullScreenControl:!0,seekControl:!0,volumeControl:!0},control:{autoplay:!0,preload:!0,loop:!0,progress:!1,volume:!1}},s={};if(t)for(var c in t)c in a&&(a[c]=t[c]);s=a;var l=t.videoUrl||"";return r.updateContainerSize=function(){e.width()},r.addPlayerControl=function(){var n="";n+='<div class="video-controls">',n+='<div class="controls-container">',n+='<div class="play">',n+='<a class="button" id="play-pause"></a>',n+="</div>",n+='<div class="progress">',n+='<input type="range" id="seek-bar" class="seek-bar" value="0">',n+="</div>",n+='<div class="mute">',n+='<a class="button" id="mute"></a>',n+="</div>",n+='<div class="volume">',n+='<input type="range" id="volume-bar" class="volume-bar" min="0" max="1" step="0.1" value="1">',n+="</div>",n+='<div class="full-screen">',n+='<a class="button" id="full-screen"></a>',n+="</div>",n+="</div>",n+="</div>",e.append(n)},r.updateControlStyle=function(){var n=e.find("video").width(),o=0;s.display.volumeControl||(e.find(".video-controls .mute").hide(),e.find(".video-controls .volume").hide()),s.display.volumeControl?(o=n-108-20,e.find(".progress").css({width:.6*o}),e.find(".volume").css({width:.35*o})):(o=n-72-12,e.find(".progress").css({width:.99*o}))},r.controlHandler=function(){if(s.display.all||(document.getElementsByClassName("video-controls")[0].style.display="none"),s.display.playControl){var e=document.getElementById("play-pause");e.addEventListener("click",function(){1==o.paused?o.play():o.pause()})}if(s.display.muteControl){var n=document.getElementById("mute");n.addEventListener("click",function(){0==o.muted?(o.muted=!0,n.style.backgroundImage="url(/public/images/player/player-mute.svg)"):(o.muted=!1,n.style.backgroundImage="url(/public/images/player/player-unmute.svg)")})}if(s.display.fullScreenControl){var t=document.getElementById("full-screen");t.addEventListener("click",function(){console.log("RequestFullScreen"),o.requestFullScreen?o.requestFullScreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullScreen?o.webkitRequestFullScreen():o.oRequestFullScreen?o.oRequestFullScreen():o.msRequestFullScreen&&o.msRequestFullScreen()})}if(s.display.seekControl){var i=document.getElementById("seek-bar");i.addEventListener("change",function(){function e(n){return o.seekable?(o.currentTime=n,!1):void setTimeout(function(){e(n)},500)}var n=o.duration*(i.value/100);s.control.progress?o.seekable?o.currentTime=n:e(n):console.log("Live, no seekable")})}if(s.display.volumeControl){var r=document.getElementById("volume-bar");r.addEventListener("change",function(){o.volume=r.value})}},r.playerHandler=function(){function e(){if(console.log(c()+" Player.Playing"),s.display.playControl){var e=document.getElementById("play-pause");e.style.backgroundImage="url(/public/images/player/player-pause.svg)"}}function n(){if(console.log(c()+" Player.Pause"),s.display.playControl){var e=document.getElementById("play-pause");e.style.backgroundImage="url(/public/images/player/player-play.svg)"}}function t(){console.log(c()+" Player.Play")}function i(){var e=100/o.duration*o.currentTime;if(s.display.seekControl){var n=document.getElementById("seek-bar");n.value=e}}function r(){console.log(c()+" Player.touchStart"),document.getElementsByClassName("video-controls")[0].style.opacity="0.9"}function a(){console.log(c()+" Player.touchEnd"),setTimeout(function(){document.getElementsByClassName("video-controls")[0].style.opacity="0"},2e3)}function c(){return(new Date).getTime()}o.addEventListener("play",t,!1),o.addEventListener("pause",n,!1),o.addEventListener("playing",e,!1),o.addEventListener("timeupdate",i,!1),o.addEventListener("touchstart",r,!1),o.addEventListener("touchend",a,!1)},r.updateVideoSize=function(e,n,o){function t(e,n){var o=null;return function(){var t=this,i=arguments;window.clearTimeout(o),o=window.setTimeout(function(){e.apply(t,i)},n)}}function i(){console.log(new Date);var t=e.parentNode.offsetHeight,i=e.parentNode.offsetWidth,r=n,a=o,s=t/a,c=i/r;c>s?(e.style.height="auto",e.style.width=i+"px"):(e.style.height=t+"px",e.style.width="auto")}document.addEventListener("DOMContentLoaded",i,!1),window.onresize=function(){t(i(),50)},e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style["-webkit-transform"]="translate(-50%, -50%)",e.style["-ms-transform"]="translate(-50%, -50%)",e.style.transform="translate(-50%, -50%)",e.parentNode.style.overflow="hidden"},r.updateVideoUrl=function(e,n,t){function i(){console.log("updateVideoUrl.playingHandler"),o.removeEventListener("playing",i,!1)}function r(e){var n=500;return 0==o.readyState?(setTimeout(function(){r(e)},2*n),!1):null!==o.currentTime&&o.duration>e?(console.log("TO SEEK"),o.currentTime=e,t(!0),void 0):(console.log("Wait for data ... biu biu biu ."),setTimeout(function(){r(e)},n),!1)}if(e){var a=o.currentTime.toFixed(1);o.src=n,o.load(),o.play(),r(a),o.addEventListener("playing",i,!1)}else o.src=n,o.load(),t(!1)},i.init=function(){n.remove(),n.find("source").attr("src",l),s.control.autoplay&&n.attr("autoplay","autoplay"),s.control.preload&&n.attr("preload","auto"),s.control.loop&&n.attr("loop","loop"),e.prepend(n),r.updateContainerSize(),r.addPlayerControl(),r.updateControlStyle()},i.resume=function(){o.src=l,o.load(),r.updateVideoSize(o,1280,720),r.controlHandler(),r.playerHandler()},i.updateVideoUrl=r.updateVideoUrl,i}};n.create=o.create});