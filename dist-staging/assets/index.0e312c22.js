import{_ as h,u as x}from"./index.353524b8.js";import{d as y,a as p,r as F,g as r,h as u,j as e,m as a,o as d,n as v,P as n,F as D,N as f,O as o,S as w,U as S}from"./vendor.98fdfd48.js";const k=y({name:"Personal",setup(){const s=p(!1),E=p(!1),A=()=>{s.value=!0},_=()=>{E.value=!0,setTimeout(()=>{s.value=!1,E.value=!1},1e3)},c=x();return{touched:s,uploaded:E,messages:[{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:0},{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:1},{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:1},{title:"\u91CD\u8981\u901A\u77E5\uFF1A\u4ECA\u5929\u8981\u52A0\u73ED\uFF0C\u4E00\u5806bug\u7B49\u7740\u4FEE\u6539\uFF0C\u8BF7\u5168\u4F53\u5BB6\u4EBA\u4EEC\u6CE8\u610F",content:"\u4E3A\u4E86\u914D\u5408\u5E02\u573A\u5BB6\u4EBA\u4EEC\u52AA\u529B\u5F00\u5355\uFF0C\u4ECE\u4ECA\u5929\u5F00\u59CB\uFF0C\u6280\u672F\u90E8\u53CA\u6559\u7814\u8001\u5E08\u4EEC\u8981\u52AA\u529B\u52A0\u73ED\uFF0C\u5168\u529B\u914D\u5408\u5E02\u573A\u7684\u5BB6\u4EBA\u4EEC\u591A\u591A\u5F00\u5355\u3002\u8C22\u8C22\u5927\u5BB6\u7684\u652F\u6301\u4E0E\u914D\u5408\u3002",status:1}],watingJobs:[{title:"\u548C\u670B\u53CB\u540C\u4E8B\u4E00\u8D77\u73A9\u738B\u8005\uFF0C\u5403\u9E21",status:0},{title:"\u4E0B\u73ED\u5199\u4ECA\u65E5\u603B\u7ED3",status:1},{title:"\u4E2D\u5348\u6253\u5361\uFF0C\u5403\u996D\uFF0C\u4E0B\u53BB\u4E70\u4E00\u74F6\u5FEB\u4E50\u6C34",status:0},{title:"\u7ED9\u9879\u76EE\u7ECF\u7406\u6F14\u793A\u9879\u76EE\u6210\u679C\uFF0C\u6C47\u62A5\u9879\u76EE\u8FDB\u5EA6\uFF0C\u67E5\u770B\u540C\u4E8B\u65B0\u63D0\u4EA4\u7684bug",status:1},{title:"\u4E0A\u73ED\u6253\u5361",status:0},{title:"\u548C\u670B\u53CB\u540C\u4E8B\u4E00\u8D77\u73A9\u738B\u8005\uFF0C\u5403\u9E21",status:0},{title:"\u4E0B\u73ED\u5199\u4ECA\u65E5\u603B\u7ED3",status:1},{title:"\u4E2D\u5348\u6253\u5361\uFF0C\u5403\u996D\uFF0C\u4E0B\u53BB\u4E70\u4E00\u74F6\u5FEB\u4E50\u6C34",status:0},{title:"\u7ED9\u9879\u76EE\u7ECF\u7406\u6F14\u793A\u9879\u76EE\u6210\u679C\uFF0C\u6C47\u62A5\u9879\u76EE\u8FDB\u5EA6\uFF0C\u67E5\u770B\u540C\u4E8B\u65B0\u63D0\u4EA4\u7684bug",status:1},{title:"\u4E0A\u73ED\u6253\u5361",status:0}],avatar:c.avatar,nickName:c.nickName,avatarTouchStart:A,uploadAvatar:_}}}),i=s=>(w("data-v-1b92c146"),s=s(),S(),s),z={class:"main-container"},N={class:"box-wrapper"},T={class:"flex"},j={class:"info-wrapper"},I={class:"avatar-wrapper"},$=["src"],V={class:"text-xl"},J=i(()=>u("div",{class:"des-wrapper"},[u("i",{class:"el-icon-edit"}),o(" \u51B0\u51BB\u4E09\u5C3A\uFF0C\u975E\u4E00\u65E5\u4E4B\u5BD2\uFF0C\u6210\u5927\u4E8B\u8005\u4E0D\u62D8\u5C0F\u8282\u3002 ")],-1)),P=i(()=>u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u6635\u79F0\uFF1A "),u("div",{class:"value"}," \u8774\u8776\u98DE\u5440\u98DE ")],-1)),U=i(()=>u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u6027\u522B\uFF1A "),u("div",{class:"value"}," \u7537 ")],-1)),L=i(()=>u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u751F\u65E5\uFF1A "),u("div",{class:"value"}," 2021-1-1 ")],-1)),M=i(()=>u("div",{class:"text-wrapper"},[u("div",{class:"label"}," \u90E8\u95E8\uFF1A "),u("div",{class:"value"}," \u7814\u53D1\u90E8 ")],-1)),O={class:"mt-4"},W=o("\u6280\u672F\u63A7"),q=o("\u7231\u5B66\u4E60"),G=o("\u5927\u5634\u5DF4"),H=o("\u5B85\u7537"),K={class:"flex-1"},Q={style:{width:"40px"}},R={class:"mt-2"},X=o(" \u67E5\u770B\u66F4\u591A "),Y={class:"flex-1 ml-2"},Z={class:"message-title"},uu={class:"content"};function su(s,E,A,_,c,tu){const m=F("icon-camera"),l=F("a-tag"),g=F("a-space"),B=F("a-card"),b=F("a-button");return d(),r("div",z,[u("div",N,[u("div",T,[e(B,{bordered:!1,class:"card-border-radius personal-box","body-style":{padding:"10px"}},{default:a(()=>[u("div",j,[u("div",I,[u("div",{class:v(["avatar",{"avatar-touch":s.touched,"avatar-end":s.uploaded}]),onMouseenter:E[0]||(E[0]=(...t)=>s.avatarTouchStart&&s.avatarTouchStart(...t))},[u("img",{src:s.avatar},null,8,$)],34),u("div",{class:"flex items-center justify-center camera-layer",onClick:E[1]||(E[1]=(...t)=>s.uploadAvatar&&s.uploadAvatar(...t))},[e(m,{style:{color:"#fff","font-size":"30px"}})])]),u("div",V,n(s.nickName),1),J,P,U,L,M,u("div",O,[e(g,{align:"center",style:{flexWrap:"wrap"}},{default:a(()=>[e(l,{color:"green",size:"small"},{default:a(()=>[W]),_:1}),e(l,{color:"green",size:"small"},{default:a(()=>[q]),_:1}),e(l,{color:"green",size:"small"},{default:a(()=>[G]),_:1}),e(l,{color:"green",size:"small"},{default:a(()=>[H]),_:1})]),_:1})])])]),_:1}),e(B,{bordered:!1,title:"\u5F85\u529E\u4E8B\u9879",class:"flex-1 card-border-radius wating-box","body-style":{padding:"10px"}},{default:a(()=>[(d(!0),r(D,null,f(s.watingJobs,(t,C)=>(d(),r("div",{key:C,class:"flex wating-item"},[u("div",K,n(t.title),1),u("div",Q,[e(l,{color:t.status===0?"red":"green",size:"mini"},{default:a(()=>[o(n(t.status===0?"\u672A\u5B8C\u6210":"\u5DF2\u5B8C\u6210"),1)]),_:2},1032,["color"])])]))),128))]),_:1})]),u("div",R,[e(B,{bordered:!1,title:"\u6D88\u606F\u4E2D\u5FC3",class:"card-border-radius flex-sub","body-style":{padding:"10px"}},{extra:a(()=>[e(b,{type:"primary",size:"mini"},{default:a(()=>[X]),_:1})]),default:a(()=>[(d(!0),r(D,null,f(s.messages,(t,C)=>(d(),r("div",{key:C,class:"flex items-center message-wrapper"},[u("div",{class:v(["notify",{"bg-red-500":t.status===0,"bg-green-500":t.status===1}])},null,2),u("div",Y,[u("div",Z,n(t.title),1),u("div",uu,n(t.content),1)])]))),128))]),_:1})])])])}var Eu=h(k,[["render",su],["__scopeId","data-v-1b92c146"]]);export{Eu as default};