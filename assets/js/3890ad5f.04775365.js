(self.webpackChunkcx_docs=self.webpackChunkcx_docs||[]).push([[1737],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return u},kt:function(){return m}});var a=i(7294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var c=a.createContext({}),l=function(t){var e=a.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=l(i),m=n,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return i?a.createElement(g,s(s({ref:e},u),{},{components:i})):a.createElement(g,s({ref:e},u))}));function m(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=i.length,s=new Array(r);s[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:n,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},2360:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var a=i(2122),n=i(9756),r=(i(7294),i(3905)),s={sidebar_position:1,id:"tutorials-intro",title:"Tutorials Introduction",description:"Introducing Tutorials"},o={unversionedId:"tutorials/tutorials-intro",id:"tutorials/tutorials-intro",isDocsHomePage:!1,title:"Video Tutorial Library",description:"Introducing Tutorials",source:"@site/docs/tutorials/tutorials-intro.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorials-intro",permalink:"/docs/tutorials/tutorials-intro",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"tutorials-intro",title:"Tutorials Introduction",description:"Introducing Tutorials"},sidebar:"tutorialSidebar",previous:{title:"Using This Document Library",permalink:"/docs/getting-started-intro"},next:{title:"User Guides and Manuals Library",permalink:"/docs/manuals/manuals-intro"}},c=[{value:"Beginner Tutorials",id:"beginner-tutorials",children:[]},{value:"Styling Tutorials",id:"styling-tutorials",children:[]},{value:"Advanced Tutorials",id:"advanced-tutorials",children:[]},{value:"Developer Tutorials",id:"developer-tutorials",children:[]}],l={toc:c};function u(t){var e=t.components,s=(0,n.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here you will discover ",(0,r.kt)("strong",{parentName:"p"},"Getting Started Tutorials"),", ",(0,r.kt)("strong",{parentName:"p"},"Advanced Tutorials")," and ",(0,r.kt)("strong",{parentName:"p"}," Developer Tutorials"),"."),(0,r.kt)("video",{src:"/vids/Dashnetics-Intro.mp4",id:"video",muted:!0,autoplay:!0,width:"300"}),(0,r.kt)("h2",{id:"beginner-tutorials"},"Beginner Tutorials"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(7154).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," First Tutorial - Adding your First Page ")," ","\xa0"," Follow along and add your first page to your web app here."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",{style:{display:"inline"}}," Adding your First Page ")),(0,r.kt)("p",null),(0,r.kt)("p",null,"Welcome to the first video in the Dashnetics Video Tutorial Series."),(0,r.kt)("p",null,"For the best experience, we recommend you follow along with these Tutorials "),(0,r.kt)("p",null,"as you work on your own dashnetics server, pausing the video whenever you need to."),(0,r.kt)("p",null,"In this first video we will unbox a blank Dashnetics Application and add our first page."),(0,r.kt)("p",null,"After receiving a link and login details from your dashnetics team"),(0,r.kt)("p",null,"The first thing to note is that Dashnetics is made up of two sites,  "),(0,r.kt)("p",null,"your public facing site which will start out blank"),(0,r.kt)("p",null,"and a password protected administration site which you will use to build your front facing site."),(0,r.kt)("p",null,"the difference between the two is an admin dot at the front of the admin site."),(0,r.kt)("p",null,"Once we've logged in to the admin site we can begin building our web application, "),(0,r.kt)("p",null,"Lets create our first page. "),(0,r.kt)("p",null,'The first option under the menu  is "Page Settings"'),(0,r.kt)("p",null,'The button under Page Settings is "Add"'),(0,r.kt)("p",null,'Lets give it a name e.g. "Home Page" and a URI e.g. "home"'),(0,r.kt)("p",null,"Its our only page, so let's tick the \"default\" option which will make it our users' landing page."),(0,r.kt)("p",null,"Once we save, we can refresh our public facing site and see it has redirected us to our first page, which is blank.")),(0,r.kt)("p",null),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(2253).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding a Heading "),"  ","\xa0"," Adding headers to pages and forms"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/vids/Dashnetics-addinputs.mp4"},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding an Input "),"  ","\xa0"," Adding inputs to collect data from your users. (eg Name, Address, Phone No)"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(5497).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding a Lookup Field "),"  ","\xa0"," Adding a lookup field where your users can select items from the database. (eg Company, Contacts)"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(5564).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding a Button "),"  ","\xa0"," Adding buttons to capture the data your users enter."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(7257).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding an Action "),"  ","\xa0"," Adding actions to the button to collect data from your users. (Actions can also navigate, email etc) "),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(8039).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Import Companies "),"  ","\xa0"," Watch how to easily import Companies into Dashnetics."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(5489).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Import Contacts "),"  ","\xa0"," Watch how to quickly import Contacts into Dashnetics."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(567).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Viewing Data "),"  ","\xa0"," Viewing and exporting the submitted forms. "),(0,r.kt)("h2",{id:"styling-tutorials"},"Styling Tutorials"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(727).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding a Custom CSS Page "),"  ","\xa0"," Adding a custom css page where you can store all your styles for your site to match your Marketing Message."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(8174).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding Custom Classes "),"  ","\xa0"," Adding custom classes for items in your page to match your Marketing Message."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(8226).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding a Font "),"  ","\xa0"," Adding custom fonts to your site to match your Marketing Message."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(3272).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding Blank Space "),"  ","\xa0"," Adding spaces to your page to customise your layout."),(0,r.kt)("h2",{id:"advanced-tutorials"},"Advanced Tutorials"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:i(1129).Z},(0,r.kt)("i",{className:"material-icons-h2"},"videocam")," Adding an i-Frame "),"  ","\xa0"," Adding an i-Frame to a page in order to display an external site or page from within your dashnetics page. "),(0,r.kt)("h2",{id:"developer-tutorials"},"Developer Tutorials"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"features-icon-container"}),(0,r.kt)("p",null,"Enjoy the journey, "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dashnetics.com.au"}," ",(0,r.kt)("img",{src:i(4108).Z})," ")),(0,r.kt)("p",null,"Dashnetics - Support Team."))}u.isMDXComponent=!0},5497:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-AddLookup-0846a8cc09bb81955849bada0c2c9884.mp4"},8039:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-Import-Companies-c1b9d4eee95669e786ff9e888fa4f5f0.mp4"},5489:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-Import-Contacts-bdfd198bd6a5a3fd7e2e2a86d04c2f00.mp4"},7257:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addaction-ec96af77f98f61d197cfd9284787e9f1.mp4"},7154:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addapage-c74bd2ac782e9495263073c0c084a910.mp4"},5564:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addbutton-9413135d0d8b0f6b12e96e49d95d30b9.mp4"},8174:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addcustomclasses-823ca3f674285250da319fe702c558e2.mp4"},727:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addcustomcsspage-5ecd06c828e3009e2417aad935dd433a.mp4"},8226:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addfont-977e73078624408ce3c78b8e076eef85.mp4"},2253:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addheader-814526314c5d824dbff8cca2da9860a9.mp4"},1129:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addiframe-9913e995178c55da234cb7c20b1d5a36.mp4"},3272:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-addspace-f5805f468bbfe1d52ba9e4b7707819a7.mp4"},567:function(t,e,i){"use strict";e.Z=i.p+"assets/files/Dashnetics-submittedforms-8cfea2dbd91d84d5ff1b39973d82d8c8.mp4"},4108:function(t,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABNWlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5XSJNxc//QhHN06uLj7BE6OgoPiE/gGilMHhwjBqfSbvvPjcDg/MCp23WkYZRjEWrWbjnQ9X86/MscMAHTCLLVbrSOAOIkj/iPg5wMB8LZt150G07EYpkoDY2C3G2UhiArQv9apBjECzKCfahCPgKnO2jUQz0Cpl/s7UApy/wRKyvV8EN+A2XM9H4wFwAxyXwNMHd1ogFqSDtVF71zLqmVZ0u4mQSRPh5mOBpk8jMNEpYnq6KgL5P8BsJwvtpuO3Kha1sHmlL0n4nq+zO3rBAGIlZciKwgv1dWfCmNv8lzcGK3C8QPMjots/xbut2DprsjWq1DegafRL8KzT/57sqVFAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFz2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTIwVDA5OjE0OjI1KzEwOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA3LTIwVDA5OjE0OjI1KzEwOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0yMFQwOToxNDoyNSsxMDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplYTVhMmFjNC1hNDdmLTRkYzQtYjQzNC0xNTg5NDBjYjc1NjQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphYmRiZWUxZS1jYTA0LWEwNDYtYmQ0Yi1mOTNiY2I2Y2RhYmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMTI1ODJmYS0wMDgzLTQ3YjgtOTU4Mi05ZDdhNzU2M2U5YTIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTI1ODJmYS0wMDgzLTQ3YjgtOTU4Mi05ZDdhNzU2M2U5YTIiIHN0RXZ0OndoZW49IjIwMjEtMDctMjBUMDk6MTQ6MjUrMTA6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplYTVhMmFjNC1hNDdmLTRkYzQtYjQzNC0xNTg5NDBjYjc1NjQiIHN0RXZ0OndoZW49IjIwMjEtMDctMjBUMDk6MTQ6MjUrMTA6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpI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"}}]);