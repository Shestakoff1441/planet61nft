(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{8048:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mint",function(){return t(8966)}])},8966:function(n,e,t){"use strict";t.r(e);var o=t(5893),i=t(6728),a=t(3698),r=t(5152),s=t.n(r)()((function(){return t.e(656).then(t.bind(t,656))}),{loadableGenerated:{webpack:function(){return[656]}},ssr:!1});e.default=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{render:function(){return(0,o.jsx)(s,{title:"JOIN TO ANDROMEDA",sepPage:!0,render:function(){return(0,o.jsx)(a.Z,{replaceTo:"mint"})}})}})})}},6728:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var o=t(5893),i=t(9477),a=t(9365),r=t(7294),s=function(n){return(0,r.useEffect)((function(){var n=document.querySelector("#canvas"),e=new i.xsS,t={count:2e5,size:3,radius:5,branches:7,spin:1,randomness:.5,randomnessPower:3,insideColor:"#c3723c",outsideColor:"#5e2f8e"},o=null,r=null,s=null,l={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(function(){l.width=window.innerWidth,l.height=window.innerHeight,c.aspect=l.width/l.height,c.updateProjectionMatrix(),d.setSize(l.width,l.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2))}));var c=new i.cPb(75,l.width/l.height,.01,1e3);c.position.x=30,c.position.y=10,c.position.z=16,e.add(c);var u=new a.z(c,n);u.enabled=!0,u.autoRotate=!0,u.enableRotate=!0,u.autoRotateSpeed=1.5,u.minZoom=3,u.enableZoom=!1,u.maxDistance=3,u.rotateSpeed=2;var d=new i.CP7({canvas:n});d.setSize(l.width,l.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),function(){null!==s&&(o.dispose(),r.dispose(),e.remove(s)),o=new i.u9r;for(var n=new Float32Array(3*t.count),a=new Float32Array(3*t.count),l=new Float32Array(1*t.count),c=new Float32Array(3*t.count),u=new i.Ilk(t.insideColor),h=new i.Ilk(t.outsideColor),m=0;m<t.count;m++){var w=3*m,v=Math.random()*t.radius,p=m%t.branches/t.branches*Math.PI*2;n[w]=Math.cos(p)*v,n[w+1]=0,n[w+2]=Math.sin(p)*v;var f=Math.pow(Math.random(),t.randomnessPower)*(Math.random()<.5?1:-1)*t.randomness*v,g=Math.pow(Math.random(),t.randomnessPower)*(Math.random()<.5?1:-1)*t.randomness*v,x=Math.pow(Math.random(),t.randomnessPower)*(Math.random()<.5?1:-1)*t.randomness*v;c[w+0]=f,c[w+1]=g,c[w+2]=x;var _=u.clone();_.lerp(h,v/t.radius),a[w]=_.r,a[w+1]=_.g,a[w+2]=_.b,l[m]=Math.random()}o.setAttribute("position",new i.TlE(n,3)),o.setAttribute("color",new i.TlE(a,3)),o.setAttribute("aScale",new i.TlE(a,1)),o.setAttribute("aRandomness",new i.TlE(c,3)),r=new i.jyz({depthWrite:!1,blending:i.WMw,vertexColors:!0,vertexShader:"uniform float uTime;\nuniform float uSize;\nattribute float aScale;\nvarying vec3 vColor;\nattribute vec3 aRandomness;\n\nvoid main()\n{\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    float angle = atan(modelPosition.x, modelPosition.z);\n    float distanceToCenter = length(modelPosition.xz);\n    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.05;\n    angle += angleOffset;\n    modelPosition.x = cos(angle) * distanceToCenter;\n    modelPosition.z = sin(angle) * distanceToCenter;\n\n    modelPosition.xyz += aRandomness;\n\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n    gl_PointSize = uSize * aScale;\n    gl_PointSize *= ( 1.0 / - viewPosition.z );\n    vColor = color;\n}",fragmentShader:"varying vec3 vColor;\nvoid main()\n{\n    float strength = distance(gl_PointCoord, vec2(0.5));\n    strength = 1.0 - strength;\n    strength = pow(strength, 10.0);\n\n    vec3 color = mix(vec3(0.0), vColor, strength);\n\n    gl_FragColor = vec4(color, 1.0);\n}",uniforms:{uTime:{value:0},uSize:{value:20*d.getPixelRatio()}}}),s=new i.woe(o,r),e.add(s)}();var h=new i.SUY,m=function(){var n=h.getElapsedTime();r.uniforms.uTime.value=n,u.update(),d.render(e,c),window.requestAnimationFrame(m)};m()}),[]),(0,o.jsxs)(o.Fragment,{children:[n.render(),(0,o.jsx)("canvas",{id:"canvas",style:{width:"100vw",height:"100vh"}})]})}},3698:function(n,e,t){"use strict";var o=t(7568),i=t(4051),a=t.n(i),r=t(5893),s=t(7294),l=t(4184),c=t.n(l),u=t(9461),d=t.n(u),h=t(4475),m=function(){var n=(0,s.useState)(1),e=n[0],t=n[1];return(0,r.jsxs)("div",{className:d().mintComponent,children:[(0,r.jsxs)("div",{className:d().quantityAndPriceBlock,children:[(0,r.jsxs)("div",{className:d().amountBlock,children:[(0,r.jsx)("span",{children:"Amount:"}),(0,r.jsx)(h.LX,{onChange:function(n){return t(n.target.value)},style:{width:"40px",fontSize:"22px",height:"38px",border:"1px solid #f5deb3",fontFamily:"Stick No Bills",padding:"4px 0",backgroundImage:"none",textAlign:"center",color:"#f6ae18",background:"transparent",marginLeft:"10px"},options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"}]})]}),(0,r.jsxs)("div",{className:d().totalPriceBlock,children:[(0,r.jsx)("span",{className:d().priceTitle,children:"Price:"}),(0,r.jsxs)("span",{className:d().totalPrice,children:["0.03"*Number(e)," ETH"]})]})]}),(0,r.jsx)("button",{className:d().mintButton,children:"Mint"})]})};e.Z=function(n){var e=n.replaceTo,t=n.walletStyles,i=(0,s.useState)(""),l=i[0],u=i[1],h=function(){var n=(0,o.Z)(a().mark((function n(){var e,t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=window.ethereum){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.request({method:"eth_accounts"});case 5:0!==(t=n.sent).length?(o=t[0],u(o)):console.log("No authorized account found");case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){var n=(0,o.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=window.ethereum)||window.open("https://metamask.io/"),n.prev=2,n.next=5,e.request({method:"eth_requestAccounts"});case 5:t=n.sent,u(t[0]),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();(0,s.useEffect)((function(){h(),window.ethereum?window.ethereum.on("accountsChanged",(function(n){n.length>0?u(n[0]):u("")})):console.log("https://metamask.io/download.html")}),[l]);var v=m;return(0,r.jsx)(r.Fragment,{children:e&&l?(0,r.jsx)(v,{}):(0,r.jsx)("button",{className:c()(d().connectWalletButton,t),onClick:w,children:l?String(l).substring(0,6)+"..."+String(l).substring(38):(0,r.jsx)("span",{children:"Connect Wallet"})})})}},9461:function(n){n.exports={connectWalletButton:"ConnectWalletButton_connectWalletButton__vQHGe",mintComponent:"ConnectWalletButton_mintComponent__qm_Zt",mintSelect:"ConnectWalletButton_mintSelect___GOC3",amountBlock:"ConnectWalletButton_amountBlock__h_6Q2",quantityAndPriceBlock:"ConnectWalletButton_quantityAndPriceBlock__VArFK",totalPriceBlock:"ConnectWalletButton_totalPriceBlock__vU3kZ",priceTitle:"ConnectWalletButton_priceTitle__FpWtz",totalPrice:"ConnectWalletButton_totalPrice__Zulvj",mintButton:"ConnectWalletButton_mintButton__7kbeL"}}},function(n){n.O(0,[737,645,155,774,888,179],(function(){return e=8048,n(n.s=e);var e}));var e=n.O();_N_E=e}]);