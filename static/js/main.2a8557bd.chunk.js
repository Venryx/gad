(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/gad-logo-small-white.86ba0532.png"},22:function(e,t,a){e.exports=a.p+"static/media/gad-title.9e8f6898.png"},26:function(e,t,a){e.exports=a(49)},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),s=a.n(l),i=a(16),o=a(17),r=a(24),m=a(18),u=a(25),p=a(2),d=a(6),E=a(23),b=a(7),h=a.n(b),N=(a(31),a(19)),v=a.n(N),x=function(e){var t=n.useState(!0),a=Object(E.a)(t,2),c=a[0],l=a[1],s=function(e){l(!c)};return n.createElement("header",null,n.createElement("nav",{className:"top-nav"},n.createElement(p.b,{to:"/"},n.createElement("img",{src:v.a,alt:"The Great American Debate"})),n.createElement("button",{className:"menu-button stylized-button stylized-button-small",onClick:s},"Menu")),n.createElement("aside",{className:h()("main-menu",{hidden:c})},n.createElement("div",{className:"main-menu-header"},n.createElement("button",{className:"stylized-button main-menu-close",onClick:s},"Close"))))},f=function(e){var t=e.animation,a=e.duration,c=e.options,l={fadeOut:[{opacity:1},{opacity:0}]},s={once:{duration:a,iterations:1,fill:"forwards"}},i=function(e){e.preventDefault(),document.getElementsByClassName("page")[0].animate(l[t],s[c]),window.setTimeout(function(){window.location=e.target.closest("a").href},a)};return n.useEffect(function(){return window.requestAnimationFrame(function(){for(var e=document.getElementsByTagName("a"),t=0;t<e.length;t++)e[t].addEventListener("click",i)}),function(){for(var e=document.getElementsByTagName("a"),t=0;t<e.length;t++)e[t].removeEventListener("click",i)}},[]),null},g=(a(37),a(22)),z=a.n(g),w=function(e){return n.createElement("section",{className:"page welcome"},n.createElement(f,{duration:200,animation:"fadeOut",options:"once"}),n.createElement("div",{className:"font-preloader"},n.createElement("span",null,"Load")," ",n.createElement("span",null,"the")," ",n.createElement("span",null,"fonts")),n.createElement("div",{className:"top-container"},n.createElement("img",{className:"title-image",src:z.a}),n.createElement("h3",{className:"subheading"},n.createElement("span",null,"america's arguments,")," ",n.createElement("span",null,"all in one place"))),n.createElement("div",{className:"bottom-container"},n.createElement(p.b,{to:"/debates",className:"explore-button stylized-button"},"Explore"),n.createElement("div",{className:"welcome-animation"},n.createElement("div",{className:"animation-container"},n.createElement("div",{className:"speech-bubble-container"},n.createElement("div",{className:"speech-bubble decorative reversed"})),n.createElement("div",{className:"speech-bubble-container"},n.createElement("div",{className:"speech-bubble decorative"})),n.createElement("div",{className:"speech-bubble-container"},n.createElement("div",{className:"speech-bubble decorative reversed"})),n.createElement("div",{className:"speech-bubble-container"},n.createElement("div",{className:"speech-bubble decorative"})),n.createElement("div",{className:"speech-bubble-container"},n.createElement("div",{className:"speech-bubble decorative"})),n.createElement("div",{className:"speech-bubble-container"},n.createElement("div",{className:"speech-bubble decorative"})),n.createElement("div",{className:"speech-bubble-container"},n.createElement("div",{className:"speech-bubble decorative"}))),n.createElement("div",{className:"animation-container"},n.createElement("div",{className:"shadow"}),n.createElement("div",{className:"shadow"}),n.createElement("div",{className:"shadow"})),n.createElement("div",{className:"animation-container"},n.createElement("div",{className:"star-container"},n.createElement("div",{className:"star"})),n.createElement("div",{className:"star-container"},n.createElement("div",{className:"star"})),n.createElement("div",{className:"star-container"},n.createElement("div",{className:"star"})),n.createElement("div",{className:"star-container"},n.createElement("div",{className:"star"})),n.createElement("div",{className:"star-container"},n.createElement("div",{className:"star"}))))))},y=(a(38),function(e){var t=e.title,a=e.subtitle,c=e.titleSize,l=e.subtitleSize;return n.createElement("div",{className:"title-block"},n.createElement("h1",{className:h()({"text-size-xxs":"xxs"==c},{"text-size-xs":"xs"==c},{"text-size-s":"s"==c},{"text-size-m":"m"==c},{"text-size-l":"l"==c},{"text-size-xl":"xl"==c})},t),n.createElement("h2",{className:h()("text-color-light",{"text-size-xxs":"xxs"==l},{"text-size-xs":"xs"==l},{"text-size-s":"s"==l},{"text-size-m":"m"==l},{"text-size-l":"l"==l},{"text-size-xl":"xl"==l})},a))}),S=(a(39),function(e){var t=e.exploreScore,a=e.size;return n.createElement("button",{className:h()("explore-score","circle","bezel-xs","drop-shadow",{"circle-s":"s"===a},{"circle-m":!a||"m"===a},{"circle-l":"l"===a})},n.createElement("p",null,t,"%"),n.createElement("p",null,"explore score"))}),C=(a(40),function(e){var t=e.title,a=e.subdebates;e.exploreScore;return n.createElement("div",{className:"topic-container"},n.createElement("button",{className:"topic-title circle circle-l bezel-s"},n.createElement("h2",null,t)),n.createElement("button",{className:"topic-search circle circle-s bezel-xs drop-shadow"},"\ud83d\udd0d"),n.createElement("button",{className:"topic-media circle circle-m bezel-xs drop-shadow"},n.createElement("p",null,"media")),n.createElement(S,{exploreScore:38}),n.createElement("button",{className:"topic-subdebates circle circle-m bezel-xs drop-shadow"},n.createElement("p",null,a),n.createElement("p",null,"sub-debates")),n.createElement("button",{className:"topic-help circle circle-s bezel-xs drop-shadow"},n.createElement("p",null,"?")))}),k=(a(41),function(e){return n.createElement("main",{className:"page debates"},n.createElement(f,{duration:200,animation:"fadeOut",options:"once"}),n.createElement(y,{title:"Welcome!",subtitle:"please explore and search"}),n.createElement("div",{className:"bottom-container"},n.createElement(C,{title:"Climate Change",exploreScore:38,subdebates:170}),n.createElement(p.b,{to:"/questions",className:"page-cta"},"Get into the debate >")))}),U=(a(42),function(e){return n.createElement("main",{className:"page questions"},n.createElement(f,{duration:200,animation:"fadeOut",options:"once"}),n.createElement("section",{className:"top-container"},n.createElement(y,{title:"Select your debate question"}),n.createElement(S,{exploreScore:38})),n.createElement("section",{className:"bottom-container"},n.createElement("div",{className:"question-list-container paper-background"},n.createElement("ul",{className:"question-list "},[{title:"What is climate change?",positions:6},{title:"What causes it?",positions:6},{title:"Is it happening?",positions:14},{title:"Is it a threat?",positions:22},{title:"What could or should be done?",positions:9},{title:"What is climate change?",positions:6},{title:"What causes it?",positions:6},{title:"Is it happening?",positions:14},{title:"Is it a threat?",positions:22},{title:"What could or should be done?",positions:9}].map(function(e,t){return n.createElement("li",{key:t},n.createElement(p.b,{to:"/positions"},n.createElement("span",{className:"question-number"},t+1),n.createElement("span",{className:"question"},e.title)),n.createElement("div",{className:"circle circle-s bezel-xs drop-shadow"},n.createElement("p",null,e.positions),n.createElement("p",null,"positions")))}))),n.createElement("p",{className:"tip"},"Tip: Start with the first question and work your way through")))}),q=(a(43),function(e){var t=e.title,a=e.positionCount,n=e.exploreScore,l=e.ctaUrl;return c.a.createElement("div",{className:"position"},a&&a>-1&&c.a.createElement("div",{className:"position-count circle circle-s bezel-xs drop-shadow"},c.a.createElement("p",null,a),c.a.createElement("p",null,"positions")),void 0!==n&&n>-1&&c.a.createElement(S,{exploreScore:n,size:"s"}),c.a.createElement("div",{className:"speech-bubble"},c.a.createElement("h3",{className:"position-title text-size-m"},l?c.a.createElement(p.b,{to:l},t):t),l&&c.a.createElement("p",null,c.a.createElement(p.b,{to:l},"Explore >"))))}),O=(a(44),function(e){return n.createElement("main",{className:"page positions"},n.createElement(f,{duration:200,animation:"fadeOut",options:"once"}),n.createElement("section",{className:"top-container"},n.createElement(y,{title:"Is climate change happening?",titleSize:"l",subtitle:"Start exploring positions"})),n.createElement("section",{className:"bottom-container"},n.createElement("div",{className:"positions-container"},[{title:"It's uncertain",positionCount:6,exploreScore:1},{title:"Impossible to know",positionCount:6,exploreScore:33},{title:"Yes",positionCount:14,exploreScore:100},{title:"No",positionCount:22},{title:"It's uncertain",positionCount:6,exploreScore:0},{title:"Impossible to know",positionCount:6,exploreScore:0},{title:"Yes",positionCount:14},{title:"No",positionCount:22,exploreScore:0}].map(function(e,t){return n.createElement(q,{key:t,title:e.title,positionCount:e.positionCount,exploreScore:e.exploreScore>-1?e.exploreScore:0,ctaUrl:"/reasons"})}))))}),I=(a(45),function(e){var t=e.title,a=e.ctaUrl;return c.a.createElement("div",{className:"reason rectangle"},a&&c.a.createElement(p.b,{to:a},"Explore >"),c.a.createElement("h3",null,t))}),W=(a(46),function(e){var t="Yes",a=14,c=100;return n.createElement("main",{className:"page reasons"},n.createElement("section",{className:"top-container"},n.createElement(q,{title:t,positionCount:a,exploreScore:c}),n.createElement(y,{title:"Climate change is happening",titleSize:"m",subtitle:"Explore the reasons that support this position",subtitleSize:"xs"})),n.createElement("section",{className:"bottom-container"},n.createElement("ul",{className:"reasons-list"},[{title:"Evidenced by global temperature changes",ctaUrl:"reasons"},{title:"Evidenced by ocean acidification",ctaUrl:"reasons"},{title:"Evidenced by increased natural disaster frequency",ctaUrl:"reasons"},{title:"Evidenced by increased natural disaster intensity",ctaUrl:"reasons"},{title:"Evidenced by global temperature changes",ctaUrl:"reasons"},{title:"Evidenced by increased natural disaster frequency",ctaUrl:"reasons"},{title:"Evidenced by ocean acidification",ctaUrl:"reasons"},{title:"Evidenced by increased natural disaster intensity",ctaUrl:"reasons"}].map(function(e,t){return n.createElement("li",{key:"index"},n.createElement(I,{title:e.title,ctaUrl:e.ctaUrl}))}))))}),j=function(e){return null},T=function(e){return null},B=(a(47),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{basename:"/"},c.a.createElement("div",{className:"app"},c.a.createElement(x,null),c.a.createElement(d.a,{path:"/questions",component:U}),c.a.createElement(d.a,{path:"/positions",component:O}),c.a.createElement(d.a,{path:"/reasons",component:W}),c.a.createElement(d.a,{path:"/argument",component:j}),c.a.createElement(d.a,{path:"/claim",component:T}),c.a.createElement(d.a,{path:"/debates",component:k}),c.a.createElement(d.a,{exact:!0,path:"/",component:w})))}}]),t}(n.Component));a(48);s.a.render(c.a.createElement(B,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2a8557bd.chunk.js.map