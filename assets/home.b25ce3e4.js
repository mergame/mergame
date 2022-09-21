import{e as X,s as Q,d as z,f as G,g as N,h as Y,i as Z,j as ee,k as O,B as V,l as J,m as te,w as j,n as I,C as oe,o as u,c as A,b as e,p as B,q as v,F as K,v as se,u as g,t as M,x as ne,y as ie,L as re,_ as R,z as ae,A as S,P as le,D as $,a as y,E as H,G as ce,H as L,I as de,J as E,K as ue,M as _e,N as he,r as fe}from"./app.3895d290.js";var W={exports:{}};(function(T,h){(function(c,r){T.exports=r()})(X,function(){return function(c,r,f){c=c||{};var x=r.prototype,w={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function b(t,_,m,C){return x.fromToBase(t,_,m,C)}f.en.relativeTime=w,x.fromToBase=function(t,_,m,C,D){for(var F,k,i,p=m.$locale().relativeTime||w,o=c.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],n=o.length,d=0;d<n;d+=1){var l=o[d];l.d&&(F=C?f(t).diff(m,l.d,!0):m.diff(t,l.d,!0));var s=(c.rounding||Math.round)(Math.abs(F));if(i=F>0,s<=l.r||!l.r){s<=1&&d>0&&(l=o[d-1]);var U=p[l.l];D&&(s=D(""+s)),k=typeof U=="string"?U.replace("%d",s):U(s,_,l.l,i);break}}if(_)return k;var P=i?p.future:p.past;return typeof P=="function"?P(k):P.replace("%s",k)},x.to=function(t,_){return b(t,_,this,!0)},x.from=function(t,_){return b(t,_,this)};var a=function(t){return t.$u?f.utc():f()};x.toNow=function(t){return this.to(a(this),t)},x.fromNow=function(t){return this.from(a(this),t)}}})})(W);const me=W.exports,pe="https://api.covalenthq.com/v1",ge={get:(T,h,c)=>Q.get(`${pe}/${T}/events/topics/${h}/`,c)},ve=e("div",{class:"head"},[e("h3",{class:"text-2xl text-color"}," Mint Rewards "),e("p",{class:"text-info text-14 mt-2 px-4"}," There is a 50% chance of getting a full refund when you mint, good luck! ")],-1),xe={class:"mt-5 lg:h-96 overflow-y-scroll"},we={class:"text-left"},be={class:"text-blue-600 cursor-pointer"},ke=["href"],ye={class:"text-16 text-color"},$e={class:"custom-title"},Ae={class:"text-16 text-color"},Ce={key:1},Fe=z({__name:"refundList",setup(T){var i,p;const h="0xF9119A66148E0768Ab58c304597A7dd82C5600a7",c=G();N.extend(me),N.extend(Y);const{chain:r}=Z(),{address:f}=ee(),{isConnected:x}=O(),w=ne,b=r!=null&&r.value?(p=(i=r==null?void 0:r.value)==null?void 0:i.blockExplorers)==null?void 0:p.default.url:"",a=V.from(w[0].chainId).toNumber(),t=J({loading:!0,finished:!1,list:[]});function _(o,n=14){return!o||o.length<15?"":`${o.substr(0,n)}...`}const{data:m}=te({chainId:c.chainId});j(m,o=>{o&&setTimeout(()=>{C(o)},1e3)}),j(f,()=>{m&&(t.list.length=0,setTimeout(()=>{C(m.value)},1e3))});function C(o){var d;if(t.list.length=0,!x||((d=r==null?void 0:r.value)==null?void 0:d.id)!==a)return;t.finished=!1;const n=window.$game.filters.Refunded(f.value);ge.get(c.chainId,n.topics[0],{key:"ckey_593c43462d3c434d83705f10058","starting-block":I.subtract(o,2e4),"ending-block":o,"sender-address":h,"secondary-topics":n.topics[1],"quote-currency":"USD",format:"JSON"}).then(l=>{t.loading=!1,t.finished=!0,l.error||(t.list=l.data.items)}).catch(()=>{t.loading=!1,t.finished=!0})}function D(o){const n=I.find(o,["name","collateral"]);return n?n.value:""}function F(o){const n=I.find(o,["name","tokenAmount"]);return n?ie(V.from(n.value).toString(),18):""}function k(o){const n=N(o).utc().unix();return N().subtract(N.utc().unix()-n,"second").fromNow()}return(o,n)=>{const d=oe,l=re;return u(),A("div",null,[ve,e("div",xe,[t.list.length||t.loading?(u(),B(l,{key:0,loading:t.loading,"onUpdate:loading":n[0]||(n[0]=s=>t.loading=s),finished:t.finished},{default:v(()=>[(u(!0),A(K,null,se(t.list.slice().reverse(),s=>(u(),B(d,{key:s},{title:v(()=>[e("div",we,[e("div",be,[e("a",{href:`${g(b)}/tx/${s.tx_hash}`,target:"_blank"},M(_(s.tx_hash)),9,ke)]),e("div",ye," Public mint x"+M(D(s.decoded.params)),1)])]),value:v(()=>[e("div",$e,M(k(s.block_signed_at)),1),e("div",Ae,M(F(s.decoded.params)),1)]),_:2},1024))),128))]),_:1},8,["loading","finished"])):(u(),A("div",Ce," No Data "))])])}}}),Te=R(Fe,[["__file","/Users/ks/code/wb/merger/src/components/refundList.vue"]]),q="/assets/logo.ddcc7bdd.svg",De="/assets/logo-dark.7b3545d8.svg",Ne="/assets/airdrop.3c8a7ecf.png",Be={hidden:"","lg:block":""},Me={class:"header","flex-between":""},Se={text:"center",flex:"",class:"relative"},Ee=["src"],Ue={key:0,class:"rounded-md text-white text-sm bg-upgrade px-1 absolute -right-24"},Pe={class:"flex text-16 opacity-90 items-center"},Ie=e("li",{"mx-5":""}," Public Sale ",-1),Le={"mx-5":""},Re=e("li",{"mx-5":""},[e("a",{href:"https://docs.mergame.xyz",target:"_blank"}," Docs ")],-1),He=e("li",{"mx-5":""}," Opensea ",-1),Ve=e("li",{"ml-5":""},[e("a",{href:"https://twitter.com/playmergame",target:"_blank"},"Twitter")],-1),je={key:0},qe=e("div",{i:"carbon-logout"},null,-1),ze=[qe],Ge=e("li",null,[$('              <button class="icon-btn !outline-none ml-10" @click="userStore.changeDark()">'),$('                <div i="carbon-sun dark:carbon-moon" />'),$("              </button>")],-1),Oe={"lg:hidden":""},Je={"pt-5":"","px-5":"","flex-between":""},Ke={"pl-1":"",class:"logo flex relative"},We=["src"],Xe={class:"flex items-center"},Qe={"mt-10":"","text-16":"","opacity-90":"","pl-3":""},Ye=e("li",{"mx-5":"","mb-8":""}," Public Sale ",-1),Ze={"mx-5":"","mb-8":""},et=e("li",{"mx-5":"","mb-8":""},[e("a",{href:"https://docs.mergame.xyz",target:"_blank"}," Docs ")],-1),tt=e("li",{"mx-5":"","mb-8":""}," Opensea ",-1),ot=e("li",{"mx-5":"","mb-8":""},[e("a",{href:"https://twitter.com/playmergame",target:"_blank"},"Twitter")],-1),st={key:0,"mx-5":"","mb-8":""},nt={class:"text-center"},it={class:"text-center py-10"},rt=["src"],at=e("p",{"my-5":"","px-5":"","text-justify":"","text-14":"","text-color":"","opacity-50":"","leading-6":""}," Players who participate in the public test have a chance to get airdrop rewards - Genesis NFT2022, the rules of rewards will be announced after the test ",-1),lt={"text-center":"","mt-10":""},ct={"px-10":""},dt=H(" Address has no available claim "),ut={key:1},_t=H(" Address is claimed "),ht=H(" Claim "),ft=z({__name:"Header",setup(T){const h=G(),{disconnect:c}=ae(),{isConnected:r}=O(),f=S(!1),x=S(null),w=S(!1),b=S(!1),a=J({show:!1,loading:!1}),t=!0;function _(){c(),f.value=!1,h.logout()}function m(){r.value&&(b.value=!b.value)}function C(){r.value&&(w.value=!w.value)}function D(){const k=ce.map(o=>L(o)),p=new de.MerkleTree(k,L,{sort:!0}).getHexProof(L(h.address));a.loading=!0,window.$game.claimAirdrop(p).then(o=>{window.$provider.waitForTransaction(o.hash).then(n=>{n&&n.status===1?(a.loading=!1,a.show=!1,h.isAirdrop=!0,E({type:"success",title:"Airdrop Success"})):(a.loading=!1,E({type:"error",title:"Airdrop Error"}))}).catch(()=>{a.loading=!1,E({type:"error",title:"Airdrop Error"})})}).catch(()=>{a.loading=!1,E({type:"error",title:"Airdrop Error"})})}function F(){location.reload()}return(k,i)=>{const p=le,o=Te,n=ue,d=_e,l=he;return u(),A("div",null,[e("div",Be,[e("div",Me,[e("div",Se,[e("img",{"cursor-pointer":"",width:"165",src:g(h).isDark?g(De):g(q),onClick:F},null,8,Ee),g(t)?(u(),A("span",Ue,"TESTNET")):$("v-if",!0)]),e("div",null,[e("ul",Pe,[Ie,e("li",Le,[e("div",{class:"cursor-pointer",onClick:i[0]||(i[0]=s=>a.show=!0)}," Airdrop ")]),Re,He,Ve,e("li",{"ml-10":""},[e("div",{class:"reward px-4 py-2 cursor-pointer",onClick:m}," Rewards ")]),g(r)?(u(),A("li",je,[e("button",{class:"icon-btn !outline-none ml-10",onClick:_},ze)])):$("v-if",!0),Ge])])])]),e("div",Oe,[e("div",Je,[e("div",Ke,[e("img",{width:"110",src:g(q)},null,8,We)]),e("div",Xe,[e("div",{class:"reward px-2 py-1 cursor-pointer",onClick:C}," Rewards "),e("div",{"text-2xl":"","i-carbon-menu":"","ml-3":"",onClick:i[1]||(i[1]=s=>f.value=!0)})])]),y(p,{show:f.value,"onUpdate:show":i[3]||(i[3]=s=>f.value=s),position:"right",style:{height:"100%",width:"50%"}},{default:v(()=>[e("ul",Qe,[Ye,e("li",Ze,[e("div",{class:"cursor-pointer",onClick:i[2]||(i[2]=s=>a.show=!0)}," Airdrop ")]),et,tt,ot,g(r)?(u(),A("li",st,[e("div",{class:"cursor-pointer",onClick:_}," Logout ")])):$("v-if",!0)])]),_:1},8,["show"])]),$("    PC "),y(n,{ref_key:"dialog",ref:x,show:b.value,"onUpdate:show":i[4]||(i[4]=s=>b.value=s),overlay:!0,"overlay-class":" over-refund","close-on-click-overlay":!0,width:"300",title:"",class:"py-10 px-2 dialog-pc","show-confirm-button":!1},{default:v(()=>[e("div",nt,[y(o)])]),_:1},8,["show"]),$("    mobile "),y(p,{show:w.value,"onUpdate:show":i[5]||(i[5]=s=>w.value=s),position:"right",style:{height:"100%",width:"70%"}},{default:v(()=>[e("div",it,[y(o)])]),_:1},8,["show"]),$("   AirDrop "),y(n,{show:a.show,"onUpdate:show":i[6]||(i[6]=s=>a.show=s),"close-on-click-overlay":!0,width:"420",title:"",class:"p-10","show-confirm-button":!1},{default:v(()=>[e("img",{"mx-auto":"",width:"90",height:"100",src:g(Ne)},null,8,rt),at,e("div",lt,[y(l,{"is-color":""},{default:v(()=>[e("div",ct,[g(h).isWhite?(u(),A("div",ut,[g(h).isAirdrop?(u(),B(d,{key:0,block:"",disabled:"",color:"linear-gradient(270deg, #FF284D 0%, #FF6F4B 100%)"},{default:v(()=>[_t]),_:1})):(u(),B(d,{key:1,block:"",loading:a.loading,color:"linear-gradient(270deg, #FF284D 0%, #FF6F4B 100%)",onClick:D},{default:v(()=>[ht]),_:1},8,["loading"]))])):(u(),B(d,{key:0,block:"",disabled:"",color:"linear-gradient(270deg, #FF284D 0%, #FF6F4B 100%)"},{default:v(()=>[dt]),_:1}))])]),_:1})])]),_:1},8,["show"])])}}});const mt=R(ft,[["__file","/Users/ks/code/wb/merger/src/components/Header.vue"]]),pt={},gt={class:"px-4 text-center md:w-screen-lg mx-auto"};function vt(T,h){const c=mt,r=fe("RouterView");return u(),A(K,null,[y(c),e("main",gt,[y(r)])],64)}const wt=R(pt,[["render",vt],["__file","/Users/ks/code/wb/merger/src/layouts/home.vue"]]);export{wt as default};
