"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[114],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={id:"version-and-publish",title:"Version and Publish",type:"explainer"},i="Version and Publish",s={unversionedId:"features/version-and-publish",id:"features/version-and-publish",title:"Version and Publish",description:"Lerna can increment your package's versions as well as publish your packages to NPM, and it provides a variety of options to make sure any workflow can be accommodated.",source:"@site/docs/features/version-and-publish.md",sourceDirName:"features",slug:"/features/version-and-publish",permalink:"/docs/features/version-and-publish",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/features/version-and-publish.md",tags:[],version:"current",frontMatter:{id:"version-and-publish",title:"Version and Publish",type:"explainer"},sidebar:"main",previous:{title:"Distribute Task Execution",permalink:"/docs/features/distribute-tasks"},next:{title:"Editor Integrations",permalink:"/docs/features/editor-integrations"}},l={},p=[{value:"Versioning",id:"versioning",level:2},{value:"Publishing to NPM",id:"publishing-to-npm",level:2},{value:"Versioning strategies",id:"versioning-strategies",level:2},{value:"Fixed/Locked mode (default)",id:"fixedlocked-mode-default",level:3},{value:"Independent mode",id:"independent-mode",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-and-publish"},"Version and Publish"),(0,r.kt)("p",null,"Lerna can increment your package's versions as well as publish your packages to NPM, and it provides a variety of options to make sure any workflow can be accommodated."),(0,r.kt)("p",null,"To show how Lerna does it, we will look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/getting-started-example"},"this repository"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you learn better by doing, clone the repo and follow along.")),(0,r.kt)("p",null,"The repo contains three packages or projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header")," (a library of React components)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"footer")," (a library of React components)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remixapp")," (an app written using the Remix framework which depends on both ",(0,r.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"footer"),")")),(0,r.kt)("p",null,"We are going to publish the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"footer")," packages."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It's common to publish only a subset of the projects. Some projects can be private (e.g., used only for tests), some\ncan be demo apps. In this repo, ",(0,r.kt)("inlineCode",{parentName:"p"},"remixapp")," isn't private, it just doesn't get published to NPM.")),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"Lerna comes with a ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," command that allows you to increment your package's version number, commit the changes and tag them accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lerna version --no-private\n")),(0,r.kt)("p",null,"you'll get the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lerna notice cli v5.1.2\nlerna info current version 1.0.0\nlerna info Assuming all packages changed\n? Select a new version (currently 1.0.0) (Use arrow keys)\n\u276f Patch (1.0.1)\n  Minor (1.1.0)\n  Major (2.0.0)\n  Prepatch (1.0.1-alpha.0)\n  Preminor (1.1.0-alpha.0)\n  Premajor (2.0.0-alpha.0)\n  Custom Prerelease\n  Custom Version\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-private")," we exclude all packages that are marked ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," in their ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file.")),(0,r.kt)("p",null,"Lerna detects the current packages, identifies the current version and proposes the next one to choose. Note, you can also pass a semver bump directly like ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna version 1.0.0"),". More on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/tree/main/commands/version#readme"},"version docs details"),". Once a given version is chosen, Lerna updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," with the version number, commits the change, adds a corresponding version tag (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0"),") and pushes the commit and the tag to the remote repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/footer/package.json"',title:'"packages/footer/package.json"'},'{\n  "name": "footer",\n  "version": "1.0.1",\n  "main": "dist/index.js",\n  ...\n}\n')),(0,r.kt)("p",null,"Note the above operation does not push the package to any NPM repository. If instead we also want Lerna to take care of the publishing process, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna publish")," instead."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Lerna uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," to determine the currently used version")),(0,r.kt)("h2",{id:"publishing-to-npm"},"Publishing to NPM"),(0,r.kt)("p",null,"If we run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lerna publish --no-private\n")),(0,r.kt)("p",null,"Lerna executes the version incrementing workflow (same as ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna version"),") and in addition also pushes the packages to NPM. You should get the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal Output"',title:'"Terminal','Output"':!0},"lerna notice cli v5.1.2\nlerna info current version 1.0.0\nlerna info Assuming all packages changed\n? Select a new version (currently 1.0.0) Patch (1.0.1)\n\nChanges:\n - footer: 1.0.0 => 1.0.1\n - header: 1.0.0 => 1.0.1\n\n? Are you sure you want to publish these packages? Yes\nlerna info execute Skipping releases\nlerna info git Pushing tags...\nlerna info publish Publishing packages to npm...\n...\nlerna success published header 1.0.1\n...\nlerna success published footer 1.0.1\n...\nSuccessfully published:\n - footer@1.0.1\n - header@1.0.1\nlerna success published 2 packages\n")),(0,r.kt)("h2",{id:"versioning-strategies"},"Versioning strategies"),(0,r.kt)("p",null,"Lerna allows you to manage your project using one of two modes: Fixed or Independent."),(0,r.kt)("h3",{id:"fixedlocked-mode-default"},"Fixed/Locked mode (default)"),(0,r.kt)("p",null,"Fixed mode Lerna projects operate on a single version line. The version is kept in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," file at the root of your project under the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," key. When you run ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna publish"),", if a module has been updated since the last time a release was made, it will be updated to the new version you're releasing. This means that you only publish a new version of a package when you need to."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you have a major version zero, all updates are ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/#spec-item-4"},"considered breaking"),". Because of that, running ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna publish")," with a major version zero and choosing any non-prerelease version number will cause new versions to be published for all packages, even if not all packages have changed since the last release.")),(0,r.kt)("p",null,"Use this if you want to automatically tie all package versions together. One issue with this approach is that a major change in any package will result in all packages having a new major version."),(0,r.kt)("h3",{id:"independent-mode"},"Independent mode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npx lerna init --independent")),(0,r.kt)("p",null,"Independent mode Lerna projects allows maintainers to increment package versions independently of each other. Each time you publish, you will get a prompt for each package that has changed to specify if it's a patch, minor, major or custom change."),(0,r.kt)("p",null,"Independent mode allows you to more specifically update versions for each package and makes sense for a group of components. Combining this mode with something like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release"},"semantic-release")," would make it less painful. (There is work on this already at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/atlassian/lerna-semantic-release"},"atlassian/lerna-semantic-release"),")."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," key in ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna.json")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"independent")," to run in independent mode.")))}c.isMDXComponent=!0}}]);