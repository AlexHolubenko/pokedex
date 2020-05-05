(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),l=n.n(r),c=(n(15),n(2)),i=n.n(c),s=n(1),m=n(5),u=n(6),p=n(7),f=n(9),h=n(8);n(17);function k(e){var t=e.pokemon,n=t.id>=100?"#"+t.id:t.id>=10?"#0"+t.id:"#00"+t.id;return a.a.createElement("div",{className:"back"},a.a.createElement("h2",null,t.name," - ",n),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"type"),a.a.createElement("td",null,t.types.join(", "))),t.stats.map((function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.points))})),a.a.createElement("tr",null,a.a.createElement("td",null,"weight"),a.a.createElement("td",null,t.weight)),a.a.createElement("tr",null,a.a.createElement("td",null,"Total movies"),a.a.createElement("td",null,t.total_movies)))))}var d=[{type:"normal",bg_color:"Beige",color:"black"},{type:"fighting",bg_color:"Crimson",color:"white"},{type:"flying",bg_color:"CornflowerBlue",color:"black"},{type:"poison",bg_color:"DarkViolet",color:"white"},{type:"ground",bg_color:"DarkGoldenRod",color:"white"},{type:"rock",bg_color:"SaddleBrown",color:"white"},{type:"bug",bg_color:"Olive",color:"white"},{type:"ghost",bg_color:"PapayaWhip",color:"black"},{type:"steel",bg_color:"SlateGrey",color:"white"},{type:"fire",bg_color:"OrangeRed",color:"white"},{type:"water",bg_color:"Blue",color:"white"},{type:"grass",bg_color:"Green",color:"white"},{type:"electric",bg_color:"Gold",color:"black"},{type:"psychic",bg_color:"HotPink",color:"white"},{type:"ice",bg_color:"Cyan",color:"black"},{type:"dragon",bg_color:"DarkSlateGrey",color:"white"},{type:"dark",bg_color:"Black",color:"white"},{type:"fairy",bg_color:"LightPink",color:"black"},{type:"unknown",bg_color:"WhiteSmoke",color:"black"}];function y(e){var t=e.pokemon,n=t.image,o=t.name,r=t.types,l=r.map((function(e){return function(e){for(var t=Object(s.a)(d),n=0;n<t.length;n++)if(t[n].type===e)return t[n].bg_color}(e)}));var c=r.map((function(e){return function(e){for(var t=Object(s.a)(d),n=0;n<t.length;n++)if(t[n].type===e)return t[n].color}(e)}));return a.a.createElement("div",{className:"front",style:{background:"linear-gradient("+(l.length>1?l[0]+", "+l[1]+")":l[0]+", "+l[0]+")")}},a.a.createElement("div",{className:"img-pokemon"},a.a.createElement("img",{src:n,alt:o})),a.a.createElement("h2",{className:"name-pokemon",style:{color:c.length>1?c[1]:c[0]}},o))}function g(e){var t=e.pokemon,n=t.id,o=t.showDetails;return a.a.createElement("div",{onClick:e.viewInfo.bind(this,n),className:"card"+(o?" card__side":"")},a.a.createElement(y,{pokemon:e.pokemon}),a.a.createElement(k,{pokemon:e.pokemon}))}var b=function(e){console.log(e);var t=e.pokemons.map((function(t,n){return a.a.createElement(g,{key:n,pokemon:t,viewInfo:e.viewInfo})}));return a.a.createElement("div",{className:"pokemon_list"},t)};function v(e){var t=e.filter;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",{className:"main-title"},"POKEDEX"),a.a.createElement("label",{className:"filter-view"},a.a.createElement("span",null,"Sort by:"),a.a.createElement("select",{className:"select-type",onChange:t},a.a.createElement("option",{value:"all"},"all"),d.map((function(e,t){return a.a.createElement("option",{key:t,value:e.type},e.type)})))))}var w=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).update=function(){o.setState({numOfPokemons:o.state.numOfPokemons+12}),setTimeout((function(){o.getPokemons()}),1e3)},o.viewInfo=function(e){o.setState({pokemons:o.state.pokemons.map((function(t){return t.id===e?t.showDetails=!t.showDetails:t.showDetails=!1,t}))})},o.filterPoksByType=function(e){o.setState({visibleType:e.target.value})},o.state={pokemons:[],numOfPokemons:1,visibleType:"all"},o}return Object(p.a)(n,[{key:"getPokemons",value:function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,o,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.numOfPokemons,n=t+12,o=t;case 3:if(!(o<n)){e.next=9;break}return e.next=6,fetch("https://pokeapi.co/api/v2/pokemon/".concat(o)).then((function(e){return e.json()})).then((function(e){a.setState({pokemons:[].concat(Object(s.a)(a.state.pokemons),[{name:e.name,id:e.id,types:Object(s.a)(e.types.map((function(e){return e.type.name}))),image:e.sprites.front_default,stats:e.stats.map((function(e){return{name:e.stat.name,points:e.base_stat}})),weight:e.weight,total_movies:e.moves.length,showDetails:!1}])})}));case 6:o++,e.next=3;break;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getPokemons()}},{key:"render",value:function(){var e=this,t=this.state.pokemons.filter((function(t){return"all"===e.state.visibleType?t:t.types.includes(e.state.visibleType)}));return a.a.createElement("div",{className:"App"},a.a.createElement(v,{filter:this.filterPoksByType}),a.a.createElement(b,{pokemons:t,viewInfo:this.viewInfo}),a.a.createElement("button",{onClick:this.update,className:"btn btn--load_more"},"load more"))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.d21f42e8.chunk.js.map