(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function D(t){const s=document.getElementById(t);if(!s)return;const n=s.getContext("2d");let i=s.width=window.innerWidth,e=s.height=window.innerHeight,o=-1e3,r=-1e3;window.addEventListener("resize",()=>{i=s.width=window.innerWidth,e=s.height=window.innerHeight,x()}),window.addEventListener("mousemove",l=>{o=l.clientX,r=l.clientY}),window.addEventListener("mouseleave",()=>{o=-1e3,r=-1e3});function h(l){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}const c={size:40,speed:.18,baseColor:{...h("#000000"),a:.07},hoverColor:{...h("#C2A365"),a:.65},rows:16,hoverRadius:90,transitionSpeed:.1};let y=[];class _{constructor(a,d){this.x=a,this.y=d,this.size=c.size,this.speed=c.speed+(Math.random()-.5)*.2,this.hoverAmount=0}isMouseNear(){const a=this.x+this.size/2,d=this.y+this.size/2;return Math.sqrt((o-a)**2+(r-d)**2)<c.hoverRadius}draw(){const a=c.baseColor,d=c.hoverColor,p=this.hoverAmount,$=Math.round(a.r+(d.r-a.r)*p),w=Math.round(a.g+(d.g-a.g)*p),M=Math.round(a.b+(d.b-a.b)*p),k=a.a+(d.a-a.a)*p;n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x+this.size,this.y+this.size/2),n.lineTo(this.x,this.y+this.size),n.closePath(),n.fillStyle=`rgba(${$}, ${w}, ${M}, ${k})`,n.fill()}update(){this.x+=this.speed,this.x>i+this.size&&(this.x=-this.size*2),this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+c.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-c.transitionSpeed)}}function x(){y=[];const l=e/c.rows;for(let a=0;a<c.rows;a++){const d=Math.ceil(i/(c.size*2));for(let p=0;p<d+2;p++){const $=p*(c.size*2)-c.size*3+(a%2===0?0:c.size),w=a*l+Math.random()*l/4;y.push(new _($,w))}}}function j(){n.clearRect(0,0,i,e),y.forEach(l=>{l.update(),l.draw()}),requestAnimationFrame(j)}x(),j()}const R={title:"Introduction"},C=`<p>DARTS (Drone Autonomous Research and Technology for Swarms) is a cutting-edge initiative designed to democratize access to advanced swarm technology.</p>
<h3>The Mission</h3>
<p>The project bridges the gap in a fragmented and predominantly proprietary field by providing high-value resources to <strong>startups, hobbyists, researchers, and organizations</strong>. Our goal is to accelerate the drone revolution, ensuring that the next generation of breakthroughs remains open and accessible to all.</p>
<h3>Future Work</h3>
<p>Currently in its early stages, we will soon publish the <strong>Manifesto</strong>, <strong>Core Objectives</strong>, and a detailed <strong>Development Roadmap</strong>. Stay tuned as we build the foundation for the future of autonomous swarms.</p>
`,P=[{level:"3",content:"The Mission"},{level:"3",content:"Future Work"}],I=Object.freeze(Object.defineProperty({__proto__:null,attributes:R,html:C,toc:P},Symbol.toStringTag,{value:"Module"})),u={siteTitle:"DARTS Initiative",siteDescription:"DARTS is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.",logo:{src:"/images/logo_small.png",alt:"DARTS Initiative Logo"},blog:{title:"Latest Updates"},footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"#license"},{text:"Contribute",url:"#contribute"}]}};function m(t,s){document.title=t?`${t} | DARTS Initiative`:"DARTS Initiative";let n=document.querySelector('meta[name="description"]');n||(n=document.createElement("meta"),n.name="description",document.head.appendChild(n)),n.content=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const i=(r,h)=>{let c=document.querySelector(`meta[property="${r}"]`)||document.querySelector(`meta[name="${r}"]`);c&&(c.content=h||"")},e=t?`${t} | DARTS Initiative`:"DARTS Initiative",o=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";i("og:title",e),i("og:description",o),i("twitter:title",e),i("twitter:description",o)}function g(t){t.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function v(t){return t?t.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(s,n,i,e,o)=>{const r=e.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(r)?`<img ${n}${i}" style="width: 100%; max-width: ${r};" ${o}`:s}):""}const S={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},O=Object.assign({});let f=[];async function L(){try{const t=await fetch("/posts-index.json");if(!t.ok)throw new Error("Failed to load posts index");f=(await t.json()).posts,console.log("Posts index loaded:",f.length,"posts")}catch(t){console.error("Error loading posts index:",t),f=[]}}function z(){return f}function E(t){m("Blog","Read the latest news and updates from the DARTS Initiative.");const s=f.map(n=>{const i=n.slug;return`
            <a href="#/post/${i}" class="post-card" data-slug="${i}">
                <h3>${n.title}</h3>
                <div class="post-meta" style="${T(n.category)}">
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
    `}async function H(t,s){const n=`../../content/posts/${s}.md`,i=O[n];if(!i){g(t);return}try{const e=await i(),{attributes:o,html:r}=e;m(o.title,o.excerpt||o.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${o.title}</h1>
                <div class="post-meta" style="${T(o.category)}">
                    <span class="category-name">${o.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${o.date}</span>
                    ${o.author?`<span class="separator">|</span><span class="author">by ${o.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${v(r)}
                </div>
            </div>
            `}catch(e){console.error("Error loading post:",e),g(t)}}function T(t){const s=S[t]||S.default;return`
        color: ${s.color};
        background-color: ${s.backgroundColor};
        border-color: ${s.borderColor};
    `}const B={title:"About Us"},W=`<h1>About the DARTS Initiative</h1>
<p>Learn more about the vision, the team, and the mission behind the DARTS ecosystem.</p>
<p>[Detailed information coming soon...]</p>
`,N=[{level:"1",content:"About the DARTS Initiative"}],q=Object.freeze(Object.defineProperty({__proto__:null,attributes:B,html:W,toc:N},Symbol.toStringTag,{value:"Module"})),F={title:"Contributing"},X=`<h1>Contributing to DARTS</h1>
<p>We welcome contributions from the community! Whether you are a researcher, developer, or enthusiast, there are many ways to get involved.</p>
<p>[Contribution guidelines coming soon...]</p>
`,Y=[{level:"1",content:"Contributing to DARTS"}],G=Object.freeze(Object.defineProperty({__proto__:null,attributes:F,html:X,toc:Y},Symbol.toStringTag,{value:"Module"})),U={title:"Manifesto"},K=`<h1>DARTS Manifesto</h1>
<p>DARTS is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.</p>
<p>[Detailed manifesto content coming soon...]</p>
`,V=[{level:"1",content:"DARTS Manifesto"}],J=Object.freeze(Object.defineProperty({__proto__:null,attributes:U,html:K,toc:V},Symbol.toStringTag,{value:"Module"})),A=Object.assign({"../../content/pages/about-us.md":q,"../../content/pages/contributing.md":G,"../../content/pages/manifesto.md":J});function Q(){return A}function Z(t,s){const n=`../../content/pages/${s}.md`,i=A[n];if(!i){g(t);return}m(i.attributes.title,i.attributes.excerpt||i.attributes.description),t.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${i.attributes.title}</h1>
            <div class="post-content">
                ${v(i.html)}
            </div>
        </div>
        `}const tt=Object.assign({"../../content/intro.md":I});function et(t){m(null,u.siteDescription);const s=Q(),n=z(),i=Object.entries(s).map(([r,h])=>`
        <a href="#/page/${r.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${h.attributes.title}</h3>
        </a>
    `).join(""),e=n.slice(0,2).map(r=>{const h=r.slug;return`
            <a href="#/post/${h}" class="post-card" data-slug="${h}">
                <h3>${r.title}</h3>
                <div class="post-meta" style="${T(r.category)}">
                    <span class="category-name">${r.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${r.date}</span>
                    ${r.author?`<span class="separator">|</span><span class="author">by ${r.author}</span>`:""}
                </div>
                <p>${r.excerpt||""}</p>
            </a>
        `}).join(""),o=v(tt["../../content/intro.md"]?.html);t.innerHTML=`
    <img src="${u.logo.src}" alt="${u.logo.alt}" class="logo">
        <h1 class="title">${u.siteTitle}</h1>
        <p class="description">${u.siteDescription}</p>

        <div class="intro-section">
            ${o}
        </div>

        <div class="buttons-section">
            <h2>Explore the Ecosystem</h2>
            <div class="buttons-list">
                ${i}
            </div>
        </div>

        <div class="blog-section">
            <h2>${u.blog.title}</h2>
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
                <a href="${u.footer.links[0].url}" target="_blank">GitHub repository</a>.
            </p>
        </div>
        `}const ot=Object.assign({});let b=[];async function st(){try{const t=await fetch("/projects-index.json");if(!t.ok)throw new Error("Failed to load projects index");b=(await t.json()).projects,console.log("Projects index loaded:",b.length,"projects")}catch(t){console.error("Error loading projects index:",t),b=[]}}function nt(t){m("Projects","Discover the innovative projects developed by the DARTS Initiative.");const s=b.map(n=>{const i=n.slug;return`
            <a href="#/project/${i}" class="post-card project-card" data-slug="${i}">
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
        `}async function it(t,s){const n=`../../content/projects/${s}.md`,i=ot[n];if(!i){g(t);return}try{const e=await i(),{attributes:o,html:r}=e;m(o.title,o.excerpt||o.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${o.title}</h1>
                <div class="project-detail-logo-container">
                     ${o.logo?`<img src="${o.logo}" alt="${o.title}" class="project-detail-logo">`:""}
                </div>
                <div class="post-content">
                    ${v(r)}
                </div>
            </div>
            `}catch(e){console.error("Error loading project:",e),g(t)}}function rt(t){const s=document.getElementById(t);function n(e){document.querySelectorAll(".nav-link").forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===e&&o.classList.add("active")}),(e===""||e==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function i(){const e=window.location.hash;if(window.scrollTo(0,0),n(e),e===""||e==="#/")et(s);else if(e==="#/blog")E(s);else if(e==="#/projects")nt(s);else if(e.startsWith("#/post/")){const o=e.replace("#/post/","");await H(s,o)}else if(e.startsWith("#/project/")){const o=e.replace("#/project/","");await it(s,o)}else if(e.startsWith("#/page/")){const o=e.replace("#/page/","");Z(s,o)}else g(s)}i(),window.addEventListener("hashchange",i)}function at(){const t=document.querySelector(".footer-content");if(!t)return;const s=u.footer.links.map(n=>`<a href="${n.url}" target="${n.url.startsWith("http")?"_blank":"_self"}">${n.text}</a>`).join("");t.innerHTML=`
        <p class="copyright">${u.footer.copyright}</p>
        <p class="license-info">${u.footer.license}</p>
        <div class="footer-links">
            ${s}
        </div>
        `}function ct(){const t=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;t==="dark"||!t&&s?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function lt(){const s=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s),s}function dt(){const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",()=>{lt()})}ct();dt();D("background-canvas");await L();await st();rt("app");at();console.log("DARTS Initiative Website Initialized");
