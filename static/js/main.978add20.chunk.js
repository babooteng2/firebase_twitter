(this.webpackJsonpfirebase_twitter=this.webpackJsonpfirebase_twitter||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(33),s=a.n(r),i=a(23),u=a(8),o=a(22),l=a(6),j=a(9),b=a.n(j),d=a(16),h=a(25);a(40),a(51),a(52);h.a.initializeApp({apiKey:"AIzaSyCoynloRrHvViPhWYd4FAYYyoSZZDS-iU8",authDomain:"fir-twitter-848ce.firebaseapp.com",projectId:"fir-twitter-848ce",storageBucket:"fir-twitter-848ce.appspot.com",messagingSenderId:"390747790752",appId:"1:390747790752:web:7d446e7ec7addeb2cfd8c5"});var p=h.a,O=h.a.auth(),f=h.a.firestore(),x=h.a.storage(),m="tweetsCollection",v=a(1),g=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),j=Object(u.a)(l,2),h=j[0],p=j[1],f=Object(n.useState)(!1),x=Object(u.a)(f,2),m=x[0],g=x[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},N=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!m){e.next=7;break}return e.next=5,O.createUserWithEmailAndPassword(a,i);case 5:e.next=9;break;case 7:return e.next=9,O.signInWithEmailAndPassword(a,i);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),p(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:N,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:w,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:w,className:"authInput"}),Object(v.jsx)("input",{type:"submit",className:"authInput authSubmit",value:m?"Create Account":"Sign In"}),h&&Object(v.jsx)("span",{className:"authError",children:h})]}),Object(v.jsx)("span",{onClick:function(){return g((function(e){return!e}))},className:"authSwitch",children:m?"Sign In":"Create Account"})]})},w=a(12),N=a(24),y=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(w.a,{icon:N.c,color:"#04AAFF",size:"3x",className:"authTweeter"}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{name:"google",onClick:e,className:"authBtn",children:["Continue with Google ",Object(v.jsx)(w.a,{icon:N.b})]}),Object(v.jsxs)("button",{name:"github",onClick:e,className:"authBtn",children:["Continue with GitHub ",Object(v.jsx)(w.a,{icon:N.a})]})]})]})},S=a(19),k=function(e){var t=e.tweetObj,a=e.isOwner,c=Object(n.useState)(!1),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(t.text),l=Object(u.a)(o,2),j=l[0],h=l[1],p="".concat(m,"/").concat(t.id),O=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.text===j){e.next=4;break}return e.next=4,f.doc(p).update({text:j});case 4:g();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){i((function(e){return!e}))},N=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete it?")){e.next=7;break}return e.next=4,f.doc(p).delete();case 4:if(""===t.attachedURL){e.next=7;break}return e.next=7,x.refFromURL(t.attachedURL).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"tweet",children:s&&a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:O,className:"container tweetEdit",children:[Object(v.jsx)("input",{type:"text",value:j,onChange:function(e){var t=e.target.value;h(t)},maxLength:120,required:!0,autoFocus:!0,className:"formInput"}),Object(v.jsx)("span",{type:"submit",className:"formBtn",children:"Edit Done"})]}),Object(v.jsx)("span",{type:"button",onClick:g,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{children:t.text}),t.attachedURL&&Object(v.jsx)("img",{src:t.attachedURL,alt:"user",width:"50px",height:"50px"}),a&&Object(v.jsxs)("div",{className:"tweet__actions",children:[Object(v.jsx)("span",{onClick:g,children:Object(v.jsx)(w.a,{icon:S.a,className:"colorBlue"})}),Object(v.jsx)("span",{onClick:N,children:Object(v.jsx)(w.a,{icon:S.d,className:"colorBlue"})})]})]})})},C=a(54),I=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],h=Object(n.useRef)(),p=function(){var e=Object(d.a)(b.a.mark((function e(a){var n,c,i,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===l){e.next=12;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(C.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={creatorId:t.uid,text:r,createdAt:Date.now(),attachedURL:n},e.next=15,f.collection(m).add(u);case 15:s(""),O();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){j(""),h.current.value=null};return Object(v.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{value:r,onChange:function(e){s(e.target.value)},type:"text",placeholder:"What's on your mind?",maxLength:120,className:"factoryInput__input"}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photo"}),Object(v.jsx)(w.a,{icon:S.b})]}),Object(v.jsx)("input",{id:"attach-file",className:"attachFile",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.target.result;j(t)},a.readAsDataURL(t)},ref:h}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:l,width:"50px",height:"50px",alt:"userSelect",style:{backgroundImage:l}}),Object(v.jsxs)("div",{onClick:O,className:"factoryForm__clear",children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(w.a,{icon:S.c})]})]})]})},F=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){return f.collection(m).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));s(t)})),function(){s([])}}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I,{userObj:t}),r.map((function(e){return Object(v.jsx)(k,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))]})},_=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"nav",children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/",className:"home",children:Object(v.jsx)(w.a,{icon:N.c,size:"2x",className:"home colorBlue"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(o.b,{to:"/profile",className:"profile",children:[Object(v.jsx)(w.a,{icon:S.e,size:"2x",className:"user colorBlue"}),t.displayName&&"".concat(t.displayName,"'s")," Profile"]})})]})})},A=function(e){var t=e.refreshUser,a=e.userObj,c=Object(n.useState)([]),r=Object(u.a)(c,2),s=r[0],o=r[1],j=Object(n.useState)(a.displayName?a.displayName:""),h=Object(u.a)(j,2),p=h[0],x=h[1],g=Object(l.f)(),w=Object(n.useCallback)(Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection(m).where("creatorId","==",a.uid).orderBy("createdAt","desc").get();case 2:(t=e.sent).docs.map((function(e){return Object(i.a)({id:e.id},e.data())})),o(t);case 5:case"end":return e.stop()}}),e)}))),[a]);Object(n.useEffect)((function(){w()}),[w]);var N=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===p){e.next=5;break}return e.next=4,a.updateProfile({displayName:p});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:N,className:"profileForm",children:[Object(v.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;x(t)},placeholder:"Display name",value:p,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn"})]}),Object(v.jsx)("span",{onClick:function(){g.push("/"),O.signOut()},className:"formBtn cancelBtn logOut",children:"Log Out"}),0!==s.length&&Object(v.jsx)("ul",{className:"profile_tweetContainer",children:s.docs.map((function(e){var t=e.data(),a=t.attachedURL,n=t.text;return Object(v.jsxs)("li",{className:"tweet",children:[a&&Object(v.jsx)("img",{src:a,alt:"user",width:"50px",height:"50px"}),Object(v.jsx)("input",{type:"text",value:n,readOnly:!0})]},e.id)}))})]})},B=function(e){var t=e.refreshUser,a=e.isLoggedin,n=e.userObj;return Object(v.jsxs)(o.a,{children:[a&&Object(v.jsx)(_,{userObj:n}),Object(v.jsx)(l.c,{children:a?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"router_container",children:[Object(v.jsx)(l.a,{exact:!0,path:"/",children:Object(v.jsx)(F,{userObj:n})}),Object(v.jsx)(l.a,{exact:!0,path:"/profile",children:Object(v.jsx)(A,{userObj:n,refreshUser:t})})]})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(l.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{})})})})]})};var U=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(u.a)(r,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){O.onAuthStateChanged((function(e){l(e||null),c(!0)}))}),[]),Object(v.jsxs)(v.Fragment,{children:[a?Object(v.jsx)(B,{refreshUser:function(){l(Object(i.a)({},O.currentUser))},isLoggedin:Boolean(o),userObj:o}):"Initializing...",Object(v.jsxs)("footer",{className:"footer",children:["\xa9 ",(new Date).getFullYear()," firebase-twitter"]})]})};a(49);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.978add20.chunk.js.map