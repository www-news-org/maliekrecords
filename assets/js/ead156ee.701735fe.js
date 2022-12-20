"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={id:"distribute-tasks",title:"Distribute Task Execution",type:"recipe"},o="Distribute Task Execution (DTE)",s={unversionedId:"features/distribute-tasks",id:"features/distribute-tasks",title:"Distribute Task Execution",description:"Lerna speeds up your average CI time with caching and the --since flag. But neither of these features help with the worst case scenario. When something at the core of your repo has been modified and every task needs to be run in CI, the only way to improve the performance is by adding more agent jobs and efficiently parallelizing the tasks.",source:"@site/docs/features/distribute-tasks.md",sourceDirName:"features",slug:"/features/distribute-tasks",permalink:"/docs/features/distribute-tasks",draft:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/features/distribute-tasks.md",tags:[],version:"current",frontMatter:{id:"distribute-tasks",title:"Distribute Task Execution",type:"recipe"},sidebar:"main",previous:{title:"Explore the Project Graph",permalink:"/docs/features/project-graph"},next:{title:"Version and Publish",permalink:"/docs/features/version-and-publish"}},l={},u=[{value:"Set up",id:"set-up",level:2},{value:"CI Execution Flow",id:"ci-execution-flow",level:2},{value:"Running Things in Parallel",id:"running-things-in-parallel",level:2},{value:"CI/CD Examples",id:"cicd-examples",level:2},{value:"Relevant Repositories and Examples",id:"relevant-repositories-and-examples",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distribute-task-execution-dte"},"Distribute Task Execution (DTE)"),(0,i.kt)("p",null,"Lerna speeds up your average CI time with ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/cache-tasks"},"caching")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"--since")," flag. But neither of these features help with the worst case scenario. When something at the core of your repo has been modified and every task needs to be run in CI, the only way to improve the performance is by adding more agent jobs and efficiently parallelizing the tasks."),(0,i.kt)("p",null,"The most obvious way to parallelize tasks is to split tasks up by type: running all tests on one job, all builds on another and all lint tasks on a third. This strategy is called binning. This can be made difficult if some test tasks have build tasks as prerequisites, but assuming you figure out some way to handle that, a typical set up can look like the diagram below. Here the test tasks are delayed until all necessary build artifacts are ready, but the build and lint tasks can start right away."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CI using binning",src:n(6396).Z,width:"730",height:"440"})),(0,i.kt)("p",null,"The problem with the binning approach is you'll end up with some idle time on one or more jobs. Nx's distributed task execution reduces that idle time to the minimum possible by assigning each individual task to agent jobs based on the task's average run time. Nx also guarantees that tasks are executed in the correct order and uses distributed caching to make sure that build artifacts from previous tasks are present on every agent job that needs them."),(0,i.kt)("p",null,"When you set up Nx's distributed task execution, your task graph will look more like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CI using DTE",src:n(1462).Z,width:"730",height:"440"})),(0,i.kt)("p",null,"And not only will CI finish faster, but the debugging experience is the same as if you ran all of your CI on a single job. That's because Nx uses distributed caching to recreate all of the logs and build artifacts on the main job."),(0,i.kt)("p",null,"Find more information in this ",(0,i.kt)("a",{parentName:"p",href:"https://nx.dev/concepts/dte"},"detailed guide to improve your worst case CI times"),"."),(0,i.kt)("h2",{id:"set-up"},"Set up"),(0,i.kt)("p",null,"To distribute your task execution, you need to (1) connect to Nx Cloud and (2) enable DTE in your CI workflow. Each of these steps can be enabled with a single command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="1. Connect to Nx Cloud"',title:'"1.',Connect:!0,to:!0,Nx:!0,'Cloud"':!0},"nx connect-to-nx-cloud\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="2. Enable DTE in CI"',title:'"2.',Enable:!0,DTE:!0,in:!0,'CI"':!0},"nx generate @nrwl/workspace:ci-workflow --ci=github\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--ci")," flag can be ",(0,i.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"circleci")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"azure"),". For more details on setting up DTE, read ",(0,i.kt)("a",{parentName:"p",href:"https://nx.dev/nx-cloud/set-up/set-up-dte"},"this guide"),"."),(0,i.kt)("h2",{id:"ci-execution-flow"},"CI Execution Flow"),(0,i.kt)("p",null,"Distributed task execution can work on any CI provider. You are responsible for launching jobs in your CI system. Nx Cloud then coordinates the way those jobs work together. There are two different kinds of jobs that you'll need to create in your CI system."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"One main job that controls what is going to be executed"),(0,i.kt)("li",{parentName:"ol"},"Multiple agent jobs that actually execute the tasks")),(0,i.kt)("p",null,"The main job execution flow looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Coordinate the agents to run the tasks\n- npx nx-cloud start-ci-run\n# Run any commands you want here\n- lerna run lint --since=main & lerna run test --since=main & lerna run build --since=main\n# Stop any run away agents\n- npx nx-cloud stop-all-agents\n")),(0,i.kt)("p",null,"The agent job execution flow is very simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Wait for tasks to execute\n- npx nx-cloud start-agent\n")),(0,i.kt)("p",null,"The main job looks more or less the same way as if you haven't used any distribution. The only thing you need to do is\nto invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"npx nx-cloud start-ci-run")," at the beginning and optionally invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"npx nx-cloud stop-all-agents")," at the end."),(0,i.kt)("p",null,"The agent jobs run long-running ",(0,i.kt)("inlineCode",{parentName:"p"},"start-agent")," processes that execute all the tasks associated with a given CI run. The\nonly thing you need to do to set them up is to invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"npx nx-cloud start-agent"),". This process will keep running until\nNx Cloud tells it to terminate."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note it's important that the main job and the agent jobs have the same environment and the same source code. They start\naround the same time. And, once the main job completes, all the agents\nwill be stopped.")),(0,i.kt)("p",null,"It's also important to note that an Nx Cloud agent isn't a machine but rather a long-running process that runs on a\nmachine. I.e., Nx Cloud doesn't manage your agents--you need to do it in your CI config (check out CI examples below)."),(0,i.kt)("p",null,"Nx Cloud is an orchestrator. The main job tells Nx Cloud what you want to run, and Nx Cloud will distribute those tasks\nacross the agents. Nx Cloud will automatically move files from one agent to another, from the agents to the main job."),(0,i.kt)("p",null,"The end result is that when say ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna run build --since=main")," completes on the main job, all the file artifacts created\non agents are copied over to the main job, as if the main job had built everything locally."),(0,i.kt)("h2",{id:"running-things-in-parallel"},"Running Things in Parallel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--concurrency")," is propagated to the agents. E.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"npx lerna run build --since=main --concurrency=3 --dte")," tells Nx Cloud to run\nup to 3 build targets in parallel on each agent. So if you have say 10 agents, you will run up to 30 builds in parallel\nacross all of them."),(0,i.kt)("p",null,"You also want to run as many commands in parallel as you can. For instance,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- lerna run lint --since=main \n- lerna run test --since=main \n- lerna run build --since=main\n")),(0,i.kt)("p",null,"is worse than"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- lerna run lint --since=main & lerna run test --since=main & lerna run build --since=main\n")),(0,i.kt)("p",null,"The latter is going to schedule all the three commands at the same time, so if an agent cannot find anything to build, it will start running tests and lints. The result is better agent utilization and shorter CI time."),(0,i.kt)("h2",{id:"cicd-examples"},"CI/CD Examples"),(0,i.kt)("p",null,"The examples below show how to set up CI using Nx and Nx Cloud using distributed task execution and distributed caching."),(0,i.kt)("p",null,"Every organization manages their CI/CD pipelines differently, so the examples don't cover org-specific aspects of\nCI/CD (e.g., deployment). They mainly focus on configuring Nx correctly."),(0,i.kt)("p",null,"Read the guides for more information on how to configure them in CI."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nx.dev/recipes/ci/ci-setup#distributed-ci-with-nx-cloud"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nx.dev/recipes/ci/monorepo-ci-azure#distributed-ci-with-nx-cloud"},"Azure Pipelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nx.dev/recipes/ci/monorepo-ci-circle-ci#distributed-ci-with-nx-cloud"},"Circle CI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nx.dev/recipes/ci/monorepo-ci-github-actions#distributed-ci-with-nx-cloud"},"GitHub Actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nx.dev/recipes/ci/monorepo-ci-jenkins#distributed-ci-with-nx-cloud"},"Jenkins"))),(0,i.kt)("p",null,"Note that only cacheable operations can be distributed because they have to be replayed on the main job."),(0,i.kt)("h2",{id:"relevant-repositories-and-examples"},"Relevant Repositories and Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vsavkin/interstellar"},"Nx: On how to make your CI 16 times faster with a small config change")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vsavkin/lerna-dte"},'"Lerna & Distributed Task Execution" Example'))))}p.isMDXComponent=!0},1462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3agents-b4eed3c22ef0fe31ac45d1f0ce854b2b.svg"},6396:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/binning-2266f5ba9543a1974a7864232a37a389.svg"}}]);