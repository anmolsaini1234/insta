(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{29:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"c",(function(){return i})),c.d(t,"b",(function(){return o})),c.d(t,"d",(function(){return r}));var n=c(40),s=(c(77),c(86),c(85),c(58));n.a.initializeApp({apiKey:"AIzaSyBvngrFdQCx55G-6s6ffXJMxJemUU0heHA",authDomain:"instagram-clone-53566.firebaseapp.com",projectId:"instagram-clone-53566",storageBucket:"instagram-clone-53566.appspot.com",messagingSenderId:"213001747985",appId:"1:213001747985:web:77050dc3d36934ab5c7bb0"});var a=n.a.auth(),r=new s.a,i=n.a.storage(),o=n.a.firestore()},65:function(e,t,c){},66:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),a=c(45),r=c.n(a),i=(c(65),c(16)),o=c(19),u=(c(66),c(55)),j=c.n(u),l=c(49),d=c.n(l),b=c(56),h=c.n(b),O=c(57),p=c.n(O),m=c(26),f=c(10);var x=function(e){return Object(f.jsx)(s.a.Fragment,{children:Object(f.jsxs)("nav",{children:[Object(f.jsx)(m.b,{to:"/",children:Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)(j.a,{className:"nav-router",fontSize:"large"})})}),Object(f.jsxs)("div",{className:"icons",children:[e.user&&Object(f.jsxs)(m.b,{to:"/search",children:[" ",Object(f.jsx)(d.a,{className:"nav-router",fontSize:"large"})]}),e.user&&Object(f.jsxs)(m.b,{to:"/addpost",children:[" ",Object(f.jsx)(h.a,{className:"nav-router",fontSize:"large"})]}),!e.user&&Object(f.jsx)(m.b,{to:"/aboutuser",children:Object(f.jsx)(p.a,{className:"nav-router",fontSize:"large"})}),e.user&&Object(f.jsx)(m.b,{to:"/aboutuser",children:Object(f.jsx)("img",{className:"nav-image",src:e.user.photoURL,alt:""})})]})]})})},v=c(29);c(80);var g=function(){var e=Object(n.useRef)(),t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(),o=Object(i.a)(r,2),u=o[0],j=o[1];return v.b.collection("posts").onSnapshot((function(e){var t=e.docs.map((function(e){return e.data()}));a(t)})),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"search-form",children:[Object(f.jsx)("input",{ref:e,className:"search-input",type:"search",name:"",id:"",placeholder:"Search User"}),Object(f.jsx)(d.a,{onClick:function(){if(e.current.value&&a){var t=s.find((function(t){return t.name==e.current.value}));j(t),console.log(u)}},className:"search-btn"})]}),Object(f.jsxs)("div",{className:"search-results",children:[u&&Object(f.jsx)(m.b,{to:"/userdetails/".concat(u.id),children:Object(f.jsxs)("div",{className:"searched-user",children:[Object(f.jsx)("img",{src:u.profile,alt:""}),Object(f.jsx)("h3",{children:u.name})]})}),!u&&Object(f.jsx)("h1",{children:"No Users Found"})]})]})},N=c(0),S=c.n(N),y=c(1);c(81);var U=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useState)(),a=Object(i.a)(s,2),r=a[0],u=a[1],j=Object(n.useState)(null),l=Object(i.a)(j,2),d=l[0],b=l[1],h=Object(n.useState)(!0),O=Object(i.a)(h,2),p=O[0],m=O[1],x=Object(n.useState)(),g=Object(i.a)(x,2),N=g[0],U=g[1],C=Object(o.f)(),k=function(){var n=Object(y.a)(S.a.mark((function n(s){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m(!1),s.preventDefault(),!r||!e.user){n.next=5;break}return n.next=5,v.b.collection("posts").add({location:t.current.value,caption:c.current.value,name:e.user.displayName,profile:e.user.photoURL,id:e.user.uid,post:N,comments:[],followers:[]});case 5:m(!0),C.push("/");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(){var t=Object(y.a)(S.a.mark((function t(c){var n,s,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!1),t.prev=1,n=v.c.ref("".concat(e.user.uid,"/").concat(c.name)),t.next=5,n.put(c);case 5:return s=t.sent,t.next=8,s.ref.getDownloadURL();case 8:a=t.sent,U(a),console.log(a),m(!0),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),m(!0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}(),R=["image/png","image/jpeg","image/jpg"];return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{children:[Object(f.jsx)("h4",{children:"Create Your Post"}),Object(f.jsx)("input",{ref:t,type:"text",name:"",id:"",required:!0,placeholder:"Your Location"}),Object(f.jsx)("textarea",{ref:c,required:!0,placeholder:"Enter Your Caption"}),Object(f.jsx)("label",{children:"Upload  Image"}),Object(f.jsx)("input",{type:"file",onChange:function(t){var c=t.target.files[0];c&&R.includes(c.type)&&e.user?(console.log(c),u(c),b(null),w(c)):(u(null),b("Unsupported Format. Try to Upload images"))},name:"",id:""}),d&&Object(f.jsx)("div",{className:"error",children:d}),!p&&Object(f.jsx)("p",{children:"Uploading"}),!d&&p&&Object(f.jsx)("button",{onClick:k,children:"Create"})]})})};var C=function(e){var t=Object(o.g)().id,c=Object(n.useState)([]),s=Object(i.a)(c,2),a=s[0],r=s[1],u=Object(n.useState)(),j=Object(i.a)(u,2),l=(j[0],j[1],[]);Object(n.useEffect)((function(){v.b.collection("posts").onSnapshot((function(e){e.docs.forEach((function(e){l.push({id:e.id,data:e.data()})})),r(l)}))}),[]);var d=a.filter((function(e){return e.data.id==t})),b=d.map((function(e){return e.data.post}));return Object(f.jsxs)("div",{children:[d.length>0&&Object(f.jsxs)("div",{className:"about-user",children:[Object(f.jsx)("img",{src:d[0].data.profile,className:"profile-image",alt:""}),Object(f.jsxs)("div",{className:"user-activity",children:[Object(f.jsx)("h2",{children:d[0].data.name}),Object(f.jsxs)("div",{className:"details",children:[Object(f.jsx)("h3",{children:"0 followers"}),Object(f.jsxs)("h3",{children:[" ",b.length," posts"]})]}),e.user.uid!==d[0].data.id&&Object(f.jsx)("button",{onClick:function(){if(d&&e.user)e.user.displayName,e.user.uid,e.user.photoURL},children:"Follow"})]})]}),Object(f.jsx)("div",{className:"main-parent",children:d.length>0&&Object(f.jsx)("div",{className:"user-container",children:b.map((function(e){return Object(f.jsx)("img",{className:"user-images",src:e,alt:""})}))})})]})},k=c(22);c(82);var w=function(e){var t=Object(o.g)().id,c=Object(n.useRef)(),s=Object(n.useState)([]),a=Object(i.a)(s,2),r=a[0],u=a[1];return Object(n.useEffect)((function(){v.b.collection("posts").doc(t).onSnapshot((function(e){u(e.data().comments)}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"comments",children:r.map((function(e){return Object(f.jsxs)("div",{className:"single-comment",children:[Object(f.jsx)("img",{src:e.image,alt:""}),Object(f.jsx)("h5",{children:e.user}),Object(f.jsx)("h4",{children:"Commented"}),"--",Object(f.jsx)("h4",{children:e.text})]})}))}),Object(f.jsxs)("div",{className:"comments-form",children:[Object(f.jsx)("input",{type:"text",className:"input-comment",ref:c,name:"",id:"",placeholder:"Enter your Comment"}),Object(f.jsx)("button",{onClick:function(){if(c.current.value&&e.user){var n={text:c.current.value,user:e.user.displayName,image:e.user.photoURL};v.b.collection("posts").doc(t).update({comments:[].concat(Object(k.a)(r),[n])})}},children:"Post Comment"})]})]})},R=s.a.lazy((function(){return c.e(4).then(c.bind(null,101))})),z=s.a.lazy((function(){return c.e(3).then(c.bind(null,100))}));var L=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1];return v.a.onAuthStateChanged((function(e){s(e)})),Object(f.jsx)("div",{children:Object(f.jsxs)(n.Suspense,{fallback:Object(f.jsx)("p",{children:"Loading..."}),children:[Object(f.jsx)(x,{user:c}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(z,{user:c})}),Object(f.jsx)(o.a,{path:"/search",children:Object(f.jsx)(g,{})}),Object(f.jsx)(o.a,{path:"/addpost",children:Object(f.jsx)(U,{user:c})}),Object(f.jsx)(o.a,{path:"/aboutUser",children:Object(f.jsx)(R,{user:c})}),Object(f.jsx)(o.a,{path:"/userdetails/:id",children:Object(f.jsx)(C,{user:c})}),Object(f.jsx)(o.a,{path:"/comments/:id",children:Object(f.jsx)(w,{user:c})})]})]})})};r.a.render(Object(f.jsx)(m.a,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.18cb3405.chunk.js.map