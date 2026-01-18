(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function R(t){const s=document.getElementById(t);if(!s)return;const n=s.getContext("2d");let r=s.width=window.innerWidth,e=s.height=window.innerHeight,o=-1e3,i=-1e3;window.addEventListener("resize",()=>{r=s.width=window.innerWidth,e=s.height=window.innerHeight,v()}),window.addEventListener("mousemove",u=>{o=u.clientX,i=u.clientY}),window.addEventListener("mouseleave",()=>{o=-1e3,i=-1e3});function c(u){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}const l={size:40,speed:.18,baseColor:{...c("#000000"),a:.07},hoverColor:{...c("#C2A365"),a:.65},rows:16,hoverRadius:90,transitionSpeed:.1};let d=[];class f{constructor(a,p){this.x=a,this.y=p,this.size=l.size,this.speed=l.speed+(Math.random()-.5)*.2,this.hoverAmount=0}isMouseNear(){const a=this.x+this.size/2,p=this.y+this.size/2;return Math.sqrt((o-a)**2+(i-p)**2)<l.hoverRadius}draw(){const a=l.baseColor,p=l.hoverColor,m=this.hoverAmount,S=Math.round(a.r+(p.r-a.r)*m),x=Math.round(a.g+(p.g-a.g)*m),M=Math.round(a.b+(p.b-a.b)*m),P=a.a+(p.a-a.a)*m;n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x+this.size,this.y+this.size/2),n.lineTo(this.x,this.y+this.size),n.closePath(),n.fillStyle=`rgba(${S}, ${x}, ${M}, ${P})`,n.fill()}update(){this.x+=this.speed,this.x>r+this.size&&(this.x=-this.size*2),this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+l.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-l.transitionSpeed)}}function v(){d=[];const u=e/l.rows;for(let a=0;a<l.rows;a++){const p=Math.ceil(r/(l.size*2));for(let m=0;m<p+2;m++){const S=m*(l.size*2)-l.size*3+(a%2===0?0:l.size),x=a*u+Math.random()*u/4;d.push(new f(S,x))}}}function h(){n.clearRect(0,0,r,e),d.forEach(u=>{u.update(),u.draw()}),requestAnimationFrame(h)}v(),h()}const D={title:"Introduction"},E=`<p>DARTS (Drone Autonomous Research and Technology for Swarms) is a cutting-edge initiative designed to democratize access to advanced swarm technology.</p>
<h3>The Mission</h3>
<p>The project bridges the gap in a fragmented and predominantly proprietary field by providing high-value resources to <strong>startups, hobbyists, researchers, and organizations</strong>. Our goal is to accelerate the drone revolution, ensuring that the next generation of breakthroughs remains open and accessible to all.</p>
<h3>Future Work</h3>
<p>Currently in its early stages, we will soon publish the <strong>Manifesto</strong>, <strong>Core Objectives</strong>, and a detailed <strong>Development Roadmap</strong>. Stay tuned as we build the foundation for the future of autonomous swarms.</p>
`,C=[{level:"3",content:"The Mission"},{level:"3",content:"Future Work"}],O=Object.freeze(Object.defineProperty({__proto__:null,attributes:D,html:E,toc:C},Symbol.toStringTag,{value:"Module"})),g={siteTitle:"DARTS Initiative",siteDescription:"DARTS is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.",logo:{src:"/images/logo_small.png",alt:"DARTS Initiative Logo"},blog:{title:"Latest Updates"},footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"#license"},{text:"Contribute",url:"#contribute"}]}};function y(t,s){document.title=t?`${t} | DARTS Initiative`:"DARTS Initiative";let n=document.querySelector('meta[name="description"]');n||(n=document.createElement("meta"),n.name="description",document.head.appendChild(n)),n.content=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const r=(i,c)=>{let l=document.querySelector(`meta[property="${i}"]`)||document.querySelector(`meta[name="${i}"]`);l&&(l.content=c||"")},e=t?`${t} | DARTS Initiative`:"DARTS Initiative",o=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";r("og:title",e),r("og:description",o),r("twitter:title",e),r("twitter:description",o)}function b(t){t.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function T(t){return t?t.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(s,n,r,e,o)=>{const i=e.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(i)?`<img ${n}${r}" style="width: 100%; max-width: ${i};" ${o}`:s}):""}const I="modulepreload",L=function(t){return"/"+t},A={},z=function(s,n,r){let e=Promise.resolve();if(n&&n.length>0){let l=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");e=l(n.map(d=>{if(d=L(d),d in A)return;A[d]=!0;const f=d.endsWith(".css"),v=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${v}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":I,f||(h.as="script"),h.crossOrigin="",h.href=d,c&&h.setAttribute("nonce",c),document.head.appendChild(h),f)return new Promise((u,a)=>{h.addEventListener("load",u),h.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return e.then(i=>{for(const c of i||[])c.status==="rejected"&&o(c.reason);return s().catch(o)})},_={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},H=Object.assign({"../../content/posts/test-deployment.md":()=>z(()=>import("./test-deployment-C8CT2bjY.js"),[])});let $=[];async function B(){try{const t=await fetch("/posts-index.json");if(!t.ok)throw new Error("Failed to load posts index");$=(await t.json()).posts,console.log("Posts index loaded:",$.length,"posts")}catch(t){console.error("Error loading posts index:",t),$=[]}}function N(){return $}function W(t){y("Blog","Read the latest news and updates from the DARTS Initiative.");const s=$.map(n=>{const r=n.slug;return`
            <a href="#/post/${r}" class="post-card" data-slug="${r}">
                <h3>${n.title}</h3>
                <div class="post-meta" style="${j(n.category)}">
                    <span class="category-name">${n.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${n.date}</span>
                    ${n.author?`<span class="separator">|</span><span class="author">by ${n.author}</span>`:""}
                </div>
                <p>${n.excerpt||""}</p>
            </a>
        `}).join("");t.innerHTML=`
        <div class="blog-section" style="margin-top: 40px;">
            <h2>All Blog Posts</h2>
            <div class="posts-list">
                ${s||'<p class="no-content-message">No blog posts published yet.</p>'}
            </div>
             <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div>
    `}async function q(t,s){const n=`../../content/posts/${s}.md`,r=H[n];if(!r){b(t);return}try{const e=await r(),{attributes:o,html:i}=e;y(o.title,o.excerpt||o.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${o.title}</h1>
                <div class="post-meta" style="${j(o.category)}">
                    <span class="category-name">${o.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${o.date}</span>
                    ${o.author?`<span class="separator">|</span><span class="author">by ${o.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${T(i)}
                </div>
            </div>
            `}catch(e){console.error("Error loading post:",e),b(t)}}function j(t){const s=_[t]||_.default;return`
        color: ${s.color};
        background-color: ${s.backgroundColor};
        border-color: ${s.borderColor};
    `}const F={title:"About Us"},U=`<h1>About the DARTS Initiative</h1>
<p>Learn more about the vision, the team, and the mission behind the DARTS ecosystem.</p>
<p>[Detailed information coming soon...]</p>
`,X=[{level:"1",content:"About the DARTS Initiative"}],Y=Object.freeze(Object.defineProperty({__proto__:null,attributes:F,html:U,toc:X},Symbol.toStringTag,{value:"Module"})),G={title:"Contributing"},V=`<h1>Contributing to DARTS</h1>
<p>We welcome contributions from the community! Whether you are a researcher, developer, or enthusiast, there are many ways to get involved.</p>
<p>[Contribution guidelines coming soon...]</p>
`,K=[{level:"1",content:"Contributing to DARTS"}],J=Object.freeze(Object.defineProperty({__proto__:null,attributes:G,html:V,toc:K},Symbol.toStringTag,{value:"Module"})),Q={title:"Manifesto"},Z=`<h1>DARTS Manifesto</h1>
<p>DARTS is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.</p>
<p>[Detailed manifesto content coming soon...]</p>
`,tt=[{level:"1",content:"DARTS Manifesto"}],et=Object.freeze(Object.defineProperty({__proto__:null,attributes:Q,html:Z,toc:tt},Symbol.toStringTag,{value:"Module"})),k=Object.assign({"../../content/pages/about-us.md":Y,"../../content/pages/contributing.md":J,"../../content/pages/manifesto.md":et});function ot(){return k}function nt(t,s){const n=`../../content/pages/${s}.md`,r=k[n];if(!r){b(t);return}y(r.attributes.title,r.attributes.excerpt||r.attributes.description),t.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${r.attributes.title}</h1>
            <div class="post-content">
                ${T(r.html)}
            </div>
        </div>
        `}const st=Object.assign({"../../content/intro.md":O});function rt(t){y(null,g.siteDescription);const s=ot(),n=N(),r=Object.entries(s).map(([i,c])=>`
        <a href="#/page/${i.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${c.attributes.title}</h3>
        </a>
    `).join(""),e=n.slice(0,2).map(i=>{const c=i.slug;return`
            <a href="#/post/${c}" class="post-card" data-slug="${c}">
                <h3>${i.title}</h3>
                <div class="post-meta" style="${j(i.category)}">
                    <span class="category-name">${i.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${i.date}</span>
                    ${i.author?`<span class="separator">|</span><span class="author">by ${i.author}</span>`:""}
                </div>
                <p>${i.excerpt||""}</p>
            </a>
        `}).join(""),o=T(st["../../content/intro.md"]?.html);t.innerHTML=`
    <img src="${g.logo.src}" alt="${g.logo.alt}" class="logo">
        <h1 class="title">${g.siteTitle}</h1>
        <p class="description">${g.siteDescription}</p>

        <div class="intro-section">
            ${o}
        </div>

        <div class="buttons-section">
            <h2>Explore the Ecosystem</h2>
            <div class="buttons-list">
                ${r}
            </div>
        </div>

        <div class="blog-section">
            <h2>${g.blog.title}</h2>
            <div class="posts-list">
                ${e||'<p class="no-content-message">No news available yet.</p>'}
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <a href="#/blog" class="text-link">View All Posts →</a>
            </div>
        </div>

        <div class="info-text">
            <p>
                Interested in learning more? Check out our
                <a href="${g.footer.links[0].url}" target="_blank">GitHub repository</a>.
            </p>
        </div>
        `}const it=Object.assign({});let w=[];async function at(){try{const t=await fetch("/projects-index.json");if(!t.ok)throw new Error("Failed to load projects index");w=(await t.json()).projects,console.log("Projects index loaded:",w.length,"projects")}catch(t){console.error("Error loading projects index:",t),w=[]}}function ct(t){y("Projects","Discover the innovative projects developed by the DARTS Initiative.");const s=w.map(n=>{const r=n.slug;return`
            <a href="#/project/${r}" class="post-card project-card" data-slug="${r}">
            <div class="project-info">
                <h3>${n.title}</h3>
                <p>${n.excerpt||""}</p>
            </div>
            <div class="project-logo-container">
                ${n.logo?`<img src="${n.logo}" alt="${n.title}" class="project-logo">`:""}
            </div>
        </a>
        `}).join("");t.innerHTML=`
        <div class="blog-section" style="margin-top: 40px;">
            <h2>Our Projects</h2>
            <div class="posts-list">
                ${s||'<p class="no-content-message">No projects showcased yet.</p>'}
            </div>
            <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div >
        `}async function lt(t,s){const n=`../../content/projects/${s}.md`,r=it[n];if(!r){b(t);return}try{const e=await r(),{attributes:o,html:i}=e;y(o.title,o.excerpt||o.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${o.title}</h1>
                <div class="project-detail-logo-container">
                     ${o.logo?`<img src="${o.logo}" alt="${o.title}" class="project-detail-logo">`:""}
                </div>
                <div class="post-content">
                    ${T(i)}
                </div>
            </div>
            `}catch(e){console.error("Error loading project:",e),b(t)}}function dt(t){const s=document.getElementById(t);function n(e){document.querySelectorAll(".nav-link").forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===e&&o.classList.add("active")}),(e===""||e==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function r(){const e=window.location.hash;if(window.scrollTo(0,0),n(e),e===""||e==="#/")rt(s);else if(e==="#/blog")W(s);else if(e==="#/projects")ct(s);else if(e.startsWith("#/post/")){const o=e.replace("#/post/","");await q(s,o)}else if(e.startsWith("#/project/")){const o=e.replace("#/project/","");await lt(s,o)}else if(e.startsWith("#/page/")){const o=e.replace("#/page/","");nt(s,o)}else b(s)}r(),window.addEventListener("hashchange",r)}function ut(){const t=document.querySelector(".footer-content");if(!t)return;const s=g.footer.links.map(n=>`<a href="${n.url}" target="${n.url.startsWith("http")?"_blank":"_self"}">${n.text}</a>`).join("");t.innerHTML=`
        <p class="copyright">${g.footer.copyright}</p>
        <p class="license-info">${g.footer.license}</p>
        <div class="footer-links">
            ${s}
        </div>
        `}function ht(){const t=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;t==="dark"||!t&&s?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function pt(){const s=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s),s}function gt(){const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",()=>{pt()})}ht();gt();R("background-canvas");await B();await at();dt("app");ut();console.log("DARTS Initiative Website Initialized");
