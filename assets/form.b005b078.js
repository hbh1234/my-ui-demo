import{d as E,r as y,c as A,a as l,w as o,u as B,F as x,e as p,E as n,g as s,b as c,o as D,f as a}from"./index.cace5c5a.js";const w=[{type:"input",label:"\u7528\u6237\u540D",prop:"userName",value:"",attrs:{clearable:!0},rules:[{required:!1,message:"\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}]},{type:"input",label:"\u5BC6\u7801",prop:"password",value:"",attrs:{clearable:!0,type:"password"},rules:[{required:!0,message:"\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u57283~5\u4E4B\u95F4",trigger:"blur"}]},{type:"select",label:"\u6D3B\u52A8\u533A\u57DF",prop:"orge",value:"01",placeholder:"\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",attrs:{style:{width:"100%"}},children:[{type:"option",value:"01",label:"\u4E0A\u6D77"},{type:"option",value:"02",label:"\u5317\u4EAC"}]},{type:"radio-group",label:"\u6027\u522B",prop:"mex",value:"\u7537",children:[{type:"radio",value:"1",label:"\u7537"},{type:"radio",value:"2",label:"\u5973"}]},{type:"checkbox-group",label:"\u7231\u597D",prop:"hobby",value:["\u4E0A\u6D77"],children:[{type:"checkbox",value:"01",label:"\u4E0A\u6D77"},{type:"checkbox",value:"02",label:"\u5317\u4EAC"}]},{type:"upload",label:"\u4E0A\u4F20",prop:"pic",uploadAttrs:{multiple:!0,limit:2,action:"https://jsonplaceholder.typicode.com/posts/"}},{type:"editor",value:"",prop:"desc",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0"}]}],k=p("h1",null,"\u8868\u5355\u7EC4\u4EF6",-1),R=a("\u4E0A\u4F20"),O=p("div",null,"\u5FC5\u987B\u662F\u56FE\u7247\u683C\u5F0F",-1),P=a("\u63D0\u4EA4"),$=a("\u91CD\u7F6E"),N={name:"form-page"},V=E({...N,setup(q){const r=y(),d=e=>{e.form.validate(u=>{u?console.log(e.model):s.error("\u68C0\u67E5")})},i=()=>{r.value.resetFields()},m=()=>{console.log("handleChange")},f=()=>{console.log("handleBeforeUpload")},h=e=>{console.log("handlePictureCardPreview",e)},F=(e,u)=>(console.log("beforeRemove"),n.confirm(`Cancel ths transfert of ${e.name}---${u}`)),b=e=>{console.log("handleExceed"),s.warning(`\u8D85\u51FA\u6700\u5927\u663E\u793A\u4E2A\u6570 ${e}`)},_=e=>(console.log("beforeRemove"),n.confirm(`Cancel ths transfert of ${e}`)),g=e=>{console.log("handleSuccess",e)};return(e,u)=>{const t=c("el-button"),v=c("my-form");return D(),A(x,null,[k,l(v,{ref_key:"myformRef",ref:r,options:B(w),"label-width":"120px",onOnChange:m,onBeforeUpload:f,onOnPreview:h,onOnRemove:F,onBeforeRemove:_,onOnSuccess:g,onOnExceed:b},{uploadArea:o(()=>[l(t,null,{default:o(()=>[R]),_:1})]),uploadTip:o(()=>[O]),action:o(C=>[l(t,{type:"primary",onClick:S=>d(C)},{default:o(()=>[P]),_:2},1032,["onClick"]),l(t,{onClick:i},{default:o(()=>[$]),_:1})]),_:1},8,["options"])],64)}}});export{V as default};
