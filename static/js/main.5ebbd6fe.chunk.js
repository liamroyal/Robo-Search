(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),o=n.n(i);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var l=n(1),c=n(2),s=n(4),m=n(3),h=n(5),u=function(e){var a=e.id,n=e.name,t=e.email;return console.log(a),r.a.createElement("div",{className:"tc bg-washed-red dib br3 ma2 grow bw shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,a){return r.a.createElement(u,{key:a,id:e.id,name:e.name,email:e.email})})))},b=function(e){var a=e.onSearch;return r.a.createElement("div",{className:"pa3"},r.a.createElement("input",{className:"shadow-1\ttc pa3 ba b--red bg-washed-red",type:"search",placeholder:"Search for a Robot",onChange:a}))},f=function(e){return r.a.createElement("div",{style:{background:"linear-gradient(#833ab4, #ff6666)",overflow:"scroll",height:"680px"}},e.children)},v=function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(s.a)(this,Object(m.a)(a).call(this))).state={hasError:!1},n}return Object(h.a)(a,e),Object(c.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Houston we have an Error"):this.props.children}}]),a}(t.Component),E=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],p=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:E,searchfield:""},e}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc xo"},r.a.createElement("h1",{className:"tc f-headline lh-solid washed-red courier"}," ROBOTS"),r.a.createElement(b,{onSearch:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(d,{robots:a}))))}}]),a}(t.Component);o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.5ebbd6fe.chunk.js.map