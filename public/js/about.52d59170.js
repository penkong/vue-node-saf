(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0bc5":function(e,t,a){"use strict";var s=a("7931"),i=a.n(s);i.a},"0de2":function(e,t,a){},1718:function(e,t,a){},"2fe4":function(e,t,a){"use strict";var s=a("c8c1"),i=a.n(s);i.a},"63f3":function(e,t,a){e.exports=a.p+"img/safa-sdi.344b2122.jpg"},7101:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sign"},[a("div",{staticClass:"card-log"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"*********"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.feedback?a("p",[e._v("Please choose a password.")]):e._e()]),e._m(0)]),a("p",[e._v("©2019 Acme Corp. All rights reserved.")])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn-row"},[a("button",{staticClass:"btn btn-text btn--green"},[e._v("Log In")]),a("a",{attrs:{href:"#"}},[e._v("Forgot Password?")])])}],n=a("2839"),r=a.n(n),o={name:"Login",props:["isLoggedIn"],data:function(){return{email:null,password:null,feedback:null}},methods:{login:function(){var e=this;this.email&&this.password?(r.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){console.log(t.user),e.$router.push({name:"UserLanding"})}).catch(function(t){e.feedback=t.message}),this.feedback=null):this.feedback="please fill both fields"}}},l=o,c=(a("e26d"),a("2877")),d=Object(c["a"])(l,s,i,!1,null,"7d29e304",null);t["default"]=d.exports},"760c":function(e,t,a){"use strict";var s=a("d136"),i=a.n(s);i.a},7931:function(e,t,a){},"83e5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("BigCard",{staticStyle:{"margin-top":"6rem"}},[s("h3",[e._v("SMART ARCHIVE")]),s("div",[s("img",{attrs:{src:a("9a32"),alt:"smart safa"}})]),s("ul",[s("li",[e._v("View grouping of documents")]),s("li",[e._v("View documents in a group")]),s("li",[e._v("Display single-page documents")]),s("li",[e._v("View attachments of a document")]),s("li",[e._v("Display documents face-to-face")]),s("li",[e._v("View documents graphically")]),s("li",[e._v("Search types and filters on users")]),s("li",[e._v("Operating performance report")]),s("li",[e._v("Tracking User Operations")]),s("li",[e._v("Report actions taken by users")]),s("li",[e._v("Provides a variety of user performance reports")]),s("li",[e._v("Access information via serial number")])])]),s("BigCard",[s("h3",[e._v("SAFA MOBILE MAPPING SYSTEM")]),s("div",[s("img",{attrs:{src:a("8e8a"),alt:"mobile-mapping"}})]),s("ul",[s("li",[e._v("Removal")]),s("li",[e._v("Processing")]),s("li",[e._v("Analysis")]),s("li",[e._v("Identify complications")]),s("li",[e._v("Extract layers")]),s("li",[e._v("the show")])])]),s("BigCard",[s("h3",[e._v("SAFA SDI")]),s("div",[s("img",{attrs:{src:a("63f3"),alt:"safa-sdi"}})]),s("ul",[s("li",[e._v("Applying up-to-date global standards in data catalogs based on PCFGs and ISO19115 approvals")]),s("li",[e._v("Publish data in accordance with world-known standards WMS, WFS and TMS")]),s("li",[e._v("Ability to define user accounts with different levels of access for users using the User Management System")]),s("li",[e._v("Ability to create different user levels for users to safely use map data")]),s("li",[e._v("Ability to define WMS, WFS and TMS to the level of access of users using related services")]),s("li",[e._v("Ability to import and export layers with Shape and SDF file formats to GeoDatabase")])])]),s("BigCard",[s("h3",[e._v("SAFA CONTROL MAPPING")]),s("div",[s("img",{attrs:{src:a("bbe1"),alt:"safa-map-control"}})]),s("ul",[s("li",[e._v("Ability to draw and edit map contents and save map contents as XML and DWG in web environment")]),s("li",[e._v("Automatic analysis and computation of architectural and computational maps with the ability to report objects in a plan")]),s("li",[e._v("Ability to display DWG files in the web environment without any special display or software dependencies")]),s("li",[e._v("Zoom in, zoom out, move and move the map and measure the objects on it and change the color of the layers")]),s("li",[e._v("Manage layers on the map, display layer names, turn them on and off and adjust their properties")]),s("li",[e._v("Ability to define different access levels for files on the data center for users on the system")]),s("li",[e._v("Ability to share drawing files for different users with folder creation")]),s("li",[e._v("\n        Ability to draw lines, dots, polygons, circles, ellipses and bows and display and print maps a\n        t different scales\n      ")])])]),s("BigCard",[s("div",{staticClass:"naz-mi"},[s("h3",{staticClass:"naz-h"},[e._v("M.H.NAZEMI")]),s("ul",{staticClass:"naz-link"},[s("li",[s("a",{attrs:{href:"https://github.com/penkong/vue-safa",target:"_blanck"}},[e._v("Vue - Safa - github")])]),s("li",[s("a",{attrs:{href:"https://github.com/penkong/vue-node-saf",target:"_blanck"}},[e._v("Vue - Node - Safa - github")])]),s("li",[s("a",{attrs:{href:"https://github.com/penkong/nuxt-safa",target:"_blanck"}},[e._v("Vue - Nuxt - Safa - github")])])])])])],1)},i=[],n=a("8479"),r={name:"UserLanding",components:{BigCard:n["a"]}},o=r,l=(a("2fe4"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,"42a89324",null);t["default"]=c.exports},"8ab4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},e._l(5,function(t){return a("div",{key:t.id,staticClass:"free-fix"},[a("BigCard",[e._v(e._s(t))])],1)}),0)},i=[],n=a("8479"),r={name:"About",components:{BigCard:n["a"]}},o=r,l=(a("0bc5"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,"ef61b34c",null);t["default"]=c.exports},"8e8a":function(e,t,a){e.exports=a.p+"img/mobile-mapping.cc3c9846.jpg"},"9a32":function(e,t,a){e.exports=a.p+"img/smart-safa.c0c629c8.jpg"},bbe1:function(e,t,a){e.exports=a.p+"img/safa-map-control.4195fd58.jpg"},bf65:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sign"},[a("div",{staticClass:"card-log"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[a("div",[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e.email?a("p",[e._v("Please choose a email.")]):e._e()]),a("div",[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"*******"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.password?a("p",[e._v("Please choose a password.")]):e._e()]),e.feedback?a("p"):e._e(),e._m(0)]),a("p",[e._v("©2019 Acme Corp. All rights reserved.")])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"btn btn-text"},[e._v("Sign Up")])])}],n=a("2839"),r=a.n(n),o=a("ba59"),l={name:"Signup",components:{},data:function(){return{email:"",password:"",feedback:""}},methods:{signup:function(){var e=this;if(this.email&&this.password){var t=o["a"].collection("users").doc(this.email);t.get().then(function(a){a.exists?e.feedback="this alias already exists":(e.feedback=null,r.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(a){console.log(a.user),t.set({email:e.email,password:e.password,geolocation:null,user_id:a.user.uid})}).then(function(){return e.$router.push({name:"UserLanding"})}).catch(function(t){console.log(t),e.feedback=t.message}))})}else this.feedback="You must enter all fields"}}},c=l,d=(a("760c"),a("2877")),u=Object(d["a"])(c,s,i,!1,null,"be452e50",null);t["default"]=u.exports},c8c1:function(e,t,a){},d136:function(e,t,a){},d983:function(e,t,a){"use strict";var s=a("0de2"),i=a.n(s);i.a},e26d:function(e,t,a){"use strict";var s=a("1718"),i=a.n(s);i.a},e391:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"free-fix"},[a("BigCard",[e._v("1")])],1)])},i=[],n=a("8479"),r={name:"ContactUs",components:{BigCard:n["a"]}},o=r,l=(a("d983"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,"7db06855",null);t["default"]=c.exports}}]);
//# sourceMappingURL=about.52d59170.js.map