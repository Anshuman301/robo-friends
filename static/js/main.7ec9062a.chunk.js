(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(12),n(3)),s=n(4),l=n(6),u=n(5),h=(n(13),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:"https://www.robohash.org/".concat(e.robot.id,"?set=set3"),alt:"",height:"200",width:"200"}),o.a.createElement("h2",null,e.robot.name),o.a.createElement("p",null,e.robot.email))}),d=(n(14),function(e){return o.a.createElement("div",{className:"card-list"},e.robots.map((function(e){return o.a.createElement(h,{key:e.id,robot:e})})))}),m=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"RoboFriends"),o.a.createElement(m,{placeholder:"Search Robots ...",handleChange:this.handleChange}),o.a.createElement(d,{robots:a}))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7ec9062a.chunk.js.map