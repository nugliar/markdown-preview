(this["webpackJsonpmarkdown-preview"]=this["webpackJsonpmarkdown-preview"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),r=n(4),s=n.n(r),c=(n(10),n(2)),a=n(5),d=n.n(a),l=n(0),u={width:"60%"},h={width:"80%",minHeight:"60%"},b={width:"98%",height:"95vh"},j={resize:"none",height:"100%"},w={resize:"vertical"},f=Object(l.jsx)("i",{className:"icon-fullscreen"}),m=Object(l.jsx)("p",{children:"-"}),O=function(e){return Object(l.jsxs)("div",{className:"toolbar",children:[Object(l.jsx)("p",{children:e.title}),Object(l.jsx)("button",{onClick:e.buttonClick,children:e.buttonIcon})]})};var v=function(){var e=Object(i.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),t=Object(c.a)(e,2),n=t[0],o=t[1],r=Object(i.useState)(!1),s=Object(c.a)(r,2),a=s[0],v=s[1],p=Object(i.useState)(!1),k=Object(c.a)(p,2),x=k[0],g=k[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{id:"editor-wrapper",style:a?b:u,hidden:x,children:[Object(l.jsx)(O,{title:"Editor",buttonIcon:a?m:f,buttonClick:function(){v(!a),g(!a)}}),Object(l.jsx)("textarea",{id:"editor",className:"window",onChange:function(e){return function(e){o(e.target.value)}(e)},value:n,style:a?j:w})]}),Object(l.jsxs)("div",{id:"preview-wrapper",style:x?b:h,hidden:a,children:[Object(l.jsx)(O,{title:"Preview",buttonIcon:x?m:f,buttonClick:function(){g(!x),v(!x)}}),Object(l.jsx)("div",{id:"preview",className:"window",dangerouslySetInnerHTML:{__html:d()(n)}})]})]})};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7ef6b062.chunk.js.map