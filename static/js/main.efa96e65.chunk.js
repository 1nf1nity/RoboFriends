(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(7),a=n.n(s),o=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),i=(n(14),n(2)),h=n(3),l=n(5),b=n(4),u=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:"Jane Doe"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(r.jsx)(c.Fragment,{children:t.map((function(e){return Object(r.jsx)(u,{id:e.id,name:e.name,email:e.email},e.id)}))})},j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oooopsy daisy. Something went wrong"}):this.props.children}},{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}}]),n}(c.Component),g=(n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(O,{children:Object(r.jsx)(d,{robots:c})})})]}):Object(r.jsx)("h1",{children:"Loading"})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}}]),n}(c.Component));a.a.render(Object(r.jsx)(g,{}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.efa96e65.chunk.js.map