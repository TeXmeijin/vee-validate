(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{339:function(e,t,a){"use strict";a.r(t);a(41),a(194);var s={data:function(){return{firstName:"",lastName:void 0}},computed:{fullName:{get:function(){return void 0===this.lastName?this.firstName:this.firstName+" "+this.lastName},set:function(e){var t=e.split(" ");console.log(t),this.firstName=t[0],this.lastName=1===t.length?void 0:t[1]}}}},l=a(31),n=Object(l.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{rules:"required",name:"fullName"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{type:"text"},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}}),e._v(" "),a("p",[e._v(e._s(s[0]))]),e._v(" "),a("p",[e._v("first name: "+e._s(e.firstName))]),e._v(" "),a("p",[e._v("last name: "+e._s(e.lastName))])]}}])})},[],!1,null,null,null);t.default=n.exports}}]);