(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[986],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3347:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i={title:"Module type overrides"},s={unversionedId:"module-type-overrides",id:"module-type-overrides",isDocsHomePage:!1,title:"Module type overrides",description:"When deciding between CommonJS and native ECMAScript modules, ts-node defaults to matching vanilla node and tsc",source:"@site/docs/module-type-overrides.md",sourceDirName:".",slug:"/module-type-overrides",permalink:"/ts-node/docs/module-type-overrides",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/module-type-overrides.md",version:"current",frontMatter:{title:"Module type overrides"},sidebar:"primarySidebar",previous:{title:"Third-party transpilers",permalink:"/ts-node/docs/transpilers"},next:{title:"Watching and Restarting",permalink:"/ts-node/docs/recipes/watching-and-restarting"}},p=[{value:"Caveats",id:"caveats",children:[]}],l={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When deciding between CommonJS and native ECMAScript modules, ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," defaults to matching vanilla ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),"\nbehavior.  This means TypeScript files are transformed according to your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," ",(0,a.kt)("inlineCode",{parentName:"p"},'"module"')," option and executed\naccording to node's rules for the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,a.kt)("inlineCode",{parentName:"p"},'"type"')," field."),(0,a.kt)("p",null,"In some projects you may need to override this behavior for some files.  For example, in a webpack\nproject, you may have ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," configured with ",(0,a.kt)("inlineCode",{parentName:"p"},'"type": "module"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," with\n",(0,a.kt)("inlineCode",{parentName:"p"},'"module": "esnext"'),".  However, webpack uses our CommonJS hook to execute your ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.ts"),",\nso you need to force your webpack config and any supporting scripts to execute as CommonJS."),(0,a.kt)("p",null,"In these situations, our ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleTypes")," option lets you override certain files, forcing execution as\nCommonJS or ESM.  Node supports similar overriding via ",(0,a.kt)("inlineCode",{parentName:"p"},".cjs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".mjs")," file extensions, but ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," files cannot use them.\n",(0,a.kt)("inlineCode",{parentName:"p"},"moduleTypes")," achieves the same effect, and ",(0,a.kt)("em",{parentName:"p"},"also")," overrides your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," ",(0,a.kt)("inlineCode",{parentName:"p"},'"module"')," config appropriately."),(0,a.kt)("p",null,"The following example tells ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," to execute a webpack config as CommonJS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n  "ts-node": {\n    "transpileOnly": true,\n    "moduleTypes": {\n      "webpack.config.ts": "cjs",\n      // Globs are also supported with the same behavior as tsconfig "include"\n      "webpack-config-scripts/**/*": "cjs"\n    }\n  },\n  "compilerOptions": {\n    "module": "es2020",\n    "target": "es2020"\n  }\n}\n')),(0,a.kt)("p",null,"Each key is a glob pattern with the same syntax as tsconfig's ",(0,a.kt)("inlineCode",{parentName:"p"},'"include"')," array.\nWhen multiple patterns match the same file, the last pattern takes precedence."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cjs")," overrides matches files to compile and execute as CommonJS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"esm")," overrides matches files to compile and execute as native ECMAScript modules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package")," resets either of the above to default behavior, which obeys ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," ",(0,a.kt)("inlineCode",{parentName:"li"},'"type"')," and ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," ",(0,a.kt)("inlineCode",{parentName:"li"},'"module"')," options.")),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("p",null,"Files with an overridden module type are transformed with the same limitations as ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#isolatedModules"},(0,a.kt)("inlineCode",{parentName:"a"},"isolatedModules")),".  This will only affect rare cases such as using ",(0,a.kt)("inlineCode",{parentName:"p"},"const enum"),"s with ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#preserveConstEnums"},(0,a.kt)("inlineCode",{parentName:"a"},"preserveConstEnums"))," disabled."),(0,a.kt)("p",null,"This feature is meant to faciliate scenarios where normal ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," configuration is not possible.  For example, a ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.ts")," cannot be given its own ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to override ",(0,a.kt)("inlineCode",{parentName:"p"},'"type"'),".  Wherever possible you should favor using traditional ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," configurations."))}c.isMDXComponent=!0}}]);