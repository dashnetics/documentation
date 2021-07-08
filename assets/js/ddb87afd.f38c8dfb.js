(self.webpackChunkcx_docs=self.webpackChunkcx_docs||[]).push([[8151],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return m}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(i),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return i?n.createElement(h,s(s({ref:t},u),{},{components:i})):n.createElement(h,s({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5218:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var n=i(2122),a=i(9756),r=(i(7294),i(3905)),s={sidebar_position:3},o={unversionedId:"manuals/advanced/cybersecurity/Essential_Eight",id:"manuals/advanced/cybersecurity/Essential_Eight",isDocsHomePage:!1,title:"Essential Eight Explained",description:"The Strategies to Mitigate Cyber Security Incidents is a prioritised list of mitigation strategies to assist organisations in protecting their systems against a range of adversaries. The mitigation strategies can be customised based on each organisation's risk profile and the adversaries they are most concerned about.",source:"@site/docs/manuals/advanced/cybersecurity/Essential_Eight.md",sourceDirName:"manuals/advanced/cybersecurity",slug:"/manuals/advanced/cybersecurity/Essential_Eight",permalink:"/docs/manuals/advanced/cybersecurity/Essential_Eight",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Small Business Cyber Security Guide",permalink:"/docs/manuals/advanced/cybersecurity/SBCSG"},next:{title:"Essential Eight Maturity Model",permalink:"/docs/manuals/advanced/cybersecurity/Essential_Eight_Maturity_Model"}},c=[],l={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Strategies to Mitigate Cyber Security Incidents is a prioritised list of mitigation strategies to assist organisations in protecting their systems against a range of adversaries. The mitigation strategies can be customised based on each organisation's risk profile and the adversaries they are most concerned about."),(0,r.kt)("p",null,"Introduction\nThe Strategies to Mitigate Cyber Security Incidents is a prioritised list of mitigation strategies to assist organisations in protecting their systems against a range of adversaries. The mitigation strategies can be customised based on each organisation's risk profile and the adversaries they are most concerned about."),(0,r.kt)("p",null,"The Essential Eight\nWhile no single mitigation strategy is guaranteed to prevent cyber security incidents, organisations are recommended to implement eight essential mitigation strategies as a baseline. This baseline, known as the Essential Eight, makes it much harder for adversaries to compromise systems. Furthermore, implementing the Essential Eight proactively can be more cost-effective in terms of time, money and effort than having to respond to a large-scale cyber security incident."),(0,r.kt)("p",null,"There is a suggested implementation order for each adversary type to assist organisations in building a strong cyber security posture for their systems. Once organisations have implemented their desired mitigation strategies to an initial level, they should focus on increasing the maturity of their implementation such that they eventually reach full alignment with the intent of each mitigation strategy."),(0,r.kt)("p",null,"Mitigation Strategies to Prevent Malware Delivery and Execution"),(0,r.kt)("p",null,"Application control to prevent execution of unapproved/malicious programs including .exe, DLL, scripts (e.g. Windows Script Host, PowerShell and HTA) and installers."),(0,r.kt)("p",null,"Why: All non-approved applications (including malicious code) are prevented from executing."),(0,r.kt)("p",null,"Patch applications e.g. Flash, web browsers, Microsoft Office, Java and PDF viewers. Patch/mitigate computers with 'extreme risk' vulnerabilities within 48 hours. Use the latest version of applications."),(0,r.kt)("p",null,"Why: Security vulnerabilities in applications can be used to execute malicious code on systems."),(0,r.kt)("p",null,"Configure Microsoft Office macro settings to block macros from the internet, and only allow vetted macros either in 'trusted locations' with limited write access or digitally signed with a trusted certificate."),(0,r.kt)("p",null,"Why: Microsoft Office macros can be used to deliver and execute malicious code on systems."),(0,r.kt)("p",null,"User application hardening. Configure web browsers to block Flash (ideally uninstall it), ads and Java on the internet. Disable unneeded features in Microsoft Office (e.g. OLE), web browsers and PDF viewers."),(0,r.kt)("p",null,"Why: Flash, ads and Java are popular ways to deliver and execute malicious code on systems."),(0,r.kt)("p",null,"Mitigation Strategies to Limit the Extent of Cyber Security Incidents"),(0,r.kt)("p",null,"Restrict administrative privileges to operating systems and applications based on user duties. Regularly revalidate the need for privileges. Don't use privileged accounts for reading email and web browsing."),(0,r.kt)("p",null,"Why: Admin accounts are the 'keys to the kingdom'. Adversaries use these accounts to gain full access to information and systems."),(0,r.kt)("p",null,"Patch operating systems. Patch/mitigate computers (including network devices) with 'extreme risk' vulnerabilities within 48 hours. Use the latest operating system version. Don't use unsupported versions."),(0,r.kt)("p",null,"Why: Security vulnerabilities in operating systems can be used to further the compromise of systems."),(0,r.kt)("p",null,"Multi-factor authentication including for VPNs, RDP, SSH and other remote access, and for all users when they perform a privileged action or access an important (sensitive/high-availability) data repository."),(0,r.kt)("p",null,"Why: Stronger user authentication makes it harder for adversaries to access sensitive information and systems."),(0,r.kt)("p",null,"Mitigation Strategies to Recover Data and System Availability"),(0,r.kt)("p",null,"Daily backups of important new/changed data, software and configuration settings, stored disconnected, retained for at least three months. Test restoration initially, annually and when IT infrastructure changes."),(0,r.kt)("p",null,"Why: To ensure information can be accessed following a cyber security incident (e.g. a ransomware incident)."),(0,r.kt)("p",null,"Further information\nThe Australian Government Information Security Manual (ISM) assists in the protection of information that is processed, stored or communicated by organisations' systems. It can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://www.cyber.gov.au/acsc/view-all-content/ism"},"https://www.cyber.gov.au/acsc/view-all-content/ism"),"."),(0,r.kt)("p",null,"The Strategies to Mitigate Cyber Security Incidents complements the advice in the ISM. The complete list of strategies can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://www.cyber.gov.au/acsc/view-all-content/publications/strategies-mitigate-cyber-security-incidents"},"https://www.cyber.gov.au/acsc/view-all-content/publications/strategies-mitigate-cyber-security-incidents"),"."),(0,r.kt)("p",null,"The Essential Eight Maturity Model complements the advice in the Strategies to Mitigate Cyber Security Incidents. It can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://www.cyber.gov.au/acsc/view-all-content/publications/essential-eight-maturity-model"},"https://www.cyber.gov.au/acsc/view-all-content/publications/essential-eight-maturity-model"),"."),(0,r.kt)("p",null,"Contact details\nIf you have any questions regarding this guidance you can contact us via 1300 CYBER1 (1300 292 371) or ",(0,r.kt)("a",{parentName:"p",href:"https://www.cyber.gov.au/acsc/contact"},"https://www.cyber.gov.au/acsc/contact"),"."),(0,r.kt)("p",null,"Click to download the guide in pdf here ",(0,r.kt)("a",{target:"_blank",href:i(3746).Z}," ",(0,r.kt)("img",{src:i(1062).Z})," ")))}u.isMDXComponent=!0},3746:function(e,t,i){"use strict";t.Z=i.p+"assets/files/Essential_Eight_Explained-c0fefe9969268ad9dcd0b40411a62d98.pdf"},1062:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);