(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(1),l=n(2),u=n(3),s=n(4),m=(n(12),n(13),n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={status:"unknown"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.value,t=this.state.status;return r.a.createElement("span",{className:"hidden-letter"},"unknown"!==t?e:"_")}}]),n}(a.Component)),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui segment"},"REACT".split("").map((function(e){return r.a.createElement(m,{key:e,value:e})})))}}]),n}(a.Component),p=(n(15),n(16),function(e){var t=e.value,n=e.onClick;return r.a.createElement("span",{className:"letter"},r.a.createElement("button",{className:"ui button",onClick:function(){return n(t)}},t))}),f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment keyboard"},f.map((function(t){return r.a.createElement(p,{key:t,value:t,onClick:e.props.handleLetterClick})})))}}]),n}(a.Component),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"handleLetterClick",value:function(e){console.log("Clicked on keyboard letter",e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"ui container"},r.a.createElement("h1",{className:"ui header"},"Hangman React"),r.a.createElement(h,null),r.a.createElement(v,{handleLetterClick:this.handleLetterClick})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d721634f.chunk.js.map