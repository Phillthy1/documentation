(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),p=n("8Aig"),s=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),y=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var E=w,N=n("MfeC");function v(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},o)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=v,C=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,w=i.description,v=i.status,z=i.source,D=i.additionalContributors,H=void 0===D?[]:D,W=N.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:j,description:w}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),w))),null!=W?r.a.createElement(S,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(E,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,v||z?r.a.createElement(l.k,{mb:3,alignItems:"center"},v?r.a.createElement(y.a,{status:v}):null,r.a.createElement(l.e,{mx:"auto"}),z?r.a.createElement(O.a,{href:z}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},Zxfb:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm adduser\n\naliases: login, add-user\n")),Object(l.b)("p",null,"Note: This command is unaware of workspaces."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Create or verify a user named ",Object(l.b)("inlineCode",{parentName:"p"},"<username>")," in the specified registry, and\nsave the credentials to the ",Object(l.b)("inlineCode",{parentName:"p"},".npmrc")," file. If no registry is specified,\nthe default registry will be used (see ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/config"},Object(l.b)("inlineCode",{parentName:"a"},"config")),")."),Object(l.b)("p",null,"The username, password, and email are read in from prompts."),Object(l.b)("p",null,"To reset your password, go to ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/forgot"},"https://www.npmjs.com/forgot")),Object(l.b)("p",null,"To change your email address, go to ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/email-edit"},"https://www.npmjs.com/email-edit")),Object(l.b)("p",null,"You may use this command multiple times with the same user account to\nauthorize on a new machine.  When authenticating on a new machine,\nthe username, password and email address must all match with\nyour existing record."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm login")," is an alias to ",Object(l.b)("inlineCode",{parentName:"p"},"adduser")," and behaves exactly the same way."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"registry")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: "',Object(l.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(l.b)("li",{parentName:"ul"},"Type: URL")),Object(l.b)("p",null,"The base URL of the npm registry."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"scope")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: the scope of the current project, if any, or ""'),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"Associate an operation with a scope for a scoped registry."),Object(l.b)("p",null,"Useful when logging in to or out of a private registry:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"# log in, linking the scope to the custom registry\nnpm login --scope=@mycorp --registry=https://registry.mycorp.com\n\n# log out, removing the link and the auth token\nnpm logout --scope=@mycorp\n")),Object(l.b)("p",null,"This will cause ",Object(l.b)("inlineCode",{parentName:"p"},"@mycorp")," to be mapped to the registry for future\ninstallation of packages specified according to the pattern\n",Object(l.b)("inlineCode",{parentName:"p"},"@mycorp/package"),"."),Object(l.b)("p",null,"This will also cause ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," to create a scoped package."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'# accept all defaults, and create a package named "@foo/whatever",\n# instead of just named "whatever"\nnpm init --scope=@foo --yes\n')),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/npmrc"},"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-owner"},"npm owner")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-whoami"},"npm whoami")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-token"},"npm token")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-profile"},"npm profile"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-adduser-md-e07ac0d9174c24175b79.js.map