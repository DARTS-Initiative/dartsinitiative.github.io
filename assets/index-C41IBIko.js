(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function C(t){const s=document.getElementById(t);if(!s)return;const n=s.getContext("2d");let i=s.width=window.innerWidth,e=s.height=window.innerHeight,o=-1e3,r=-1e3;const h=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",()=>{i=s.width=window.innerWidth,e=s.height=window.innerHeight,j()}),h||(window.addEventListener("mousemove",d=>{o=d.clientX,r=d.clientY}),window.addEventListener("mouseleave",()=>{o=-1e3,r=-1e3})),new MutationObserver(()=>{c.baseColor=S()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function $(d){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(d);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function S(){return document.documentElement.getAttribute("data-theme")==="dark"?{...$("#FFFFFF"),a:.03}:{...$("#000000"),a:.07}}const c={size:40,speed:.18,baseColor:S(),hoverColor:{...$("#C2A365"),a:.65},rows:16,hoverRadius:90,transitionSpeed:.1,mobileGlowChance:3e-4,mobileGlowFadeInSpeed:.04,mobileGlowFadeOutSpeed:.015};let w=[];class P{constructor(a,u){this.x=a,this.y=u,this.size=c.size,this.speed=c.speed+(Math.random()-.5)*.2,this.hoverAmount=0,this.isGlowing=!1,this.glowPhase="idle"}isMouseNear(){const a=this.x+this.size/2,u=this.y+this.size/2;return Math.sqrt((o-a)**2+(r-u)**2)<c.hoverRadius}draw(){const a=c.baseColor,u=c.hoverColor,g=this.hoverAmount,T=Math.round(a.r+(u.r-a.r)*g),A=Math.round(a.g+(u.g-a.g)*g),D=Math.round(a.b+(u.b-a.b)*g),O=a.a+(u.a-a.a)*g;n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x+this.size,this.y+this.size/2),n.lineTo(this.x,this.y+this.size),n.closePath(),n.fillStyle=`rgba(${T}, ${A}, ${D}, ${O})`,n.fill()}update(){this.x+=this.speed,this.x>i+this.size&&(this.x=-this.size*2),h?(this.glowPhase==="idle"&&Math.random()<c.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+c.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-c.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+c.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-c.transitionSpeed)}}function j(){w=[];const d=e/c.rows;for(let a=0;a<c.rows;a++){const u=Math.ceil(i/(c.size*2));for(let g=0;g<u+2;g++){const T=g*(c.size*2)-c.size*3+(a%2===0?0:c.size),A=a*d+Math.random()*d/4;w.push(new P(T,A))}}}function k(){n.clearRect(0,0,i,e),w.forEach(d=>{d.update(),d.draw()}),requestAnimationFrame(k)}j(),k()}const I={title:"Introduction"},R=`<p>DARTS (Drone Autonomous Research and Technology for Swarms) is a cutting-edge initiative designed to democratize access to advanced swarm technology.</p>
<h3>The Mission</h3>
<p>The project bridges the gap in a fragmented and predominantly proprietary field by providing high-value resources to <strong>startups, hobbyists, researchers, and organizations</strong>. Our goal is to accelerate the drone revolution, ensuring that the next generation of breakthroughs remains open and accessible to all.</p>
<h3>Future Work</h3>
<p>Currently in its early stages, we will soon publish the <strong>Manifesto</strong>, <strong>Core Objectives</strong>, and a detailed <strong>Development Roadmap</strong>. Stay tuned as we build the foundation for the future of autonomous swarms.</p>
`,E=[{level:"3",content:"The Mission"},{level:"3",content:"Future Work"}],L=Object.freeze(Object.defineProperty({__proto__:null,attributes:I,html:R,toc:E},Symbol.toStringTag,{value:"Module"})),l={siteTitle:"DARTS Initiative",siteDescription:"DARTS is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Initiative Logo"},blog:{title:"Latest Updates"},footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"#license"},{text:"Contribute",url:"#contribute"}]}};function m(t,s){document.title=t?`${t} | DARTS Initiative`:"DARTS Initiative";let n=document.querySelector('meta[name="description"]');n||(n=document.createElement("meta"),n.name="description",document.head.appendChild(n)),n.content=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const i=(r,h)=>{let b=document.querySelector(`meta[property="${r}"]`)||document.querySelector(`meta[name="${r}"]`);b&&(b.content=h||"")},e=t?`${t} | DARTS Initiative`:"DARTS Initiative",o=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";i("og:title",e),i("og:description",o),i("twitter:title",e),i("twitter:description",o)}function p(t){t.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function y(t){return t?t.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(s,n,i,e,o)=>{const r=e.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(r)?`<img ${n}${i}" style="width: 100%; max-width: ${r};" ${o}`:s}):""}const _={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},z=Object.assign({});let f=[];async function H(){try{const t=await fetch("/posts-index.json");if(!t.ok)throw new Error("Failed to load posts index");f=(await t.json()).posts||[],console.log("Posts index loaded:",f.length,"posts")}catch(t){console.error("Error loading posts index:",t),f=[]}}function F(){return f}function B(t){m("Blog","Read the latest news and updates from the DARTS Initiative.");const s=f.map(n=>{const i=n.slug;return`
            <a href="#/post/${i}" class="post-card" data-slug="${i}">
                <h3>${n.title}</h3>
                <div class="post-meta" style="${x(n.category)}">
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
    `}async function W(t,s){const n=`../../content/posts/${s}.md`,i=z[n];if(!i){p(t);return}try{const e=await i(),{attributes:o,html:r}=e;m(o.title,o.excerpt||o.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${o.title}</h1>
                <div class="post-meta" style="${x(o.category)}">
                    <span class="category-name">${o.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${o.date}</span>
                    ${o.author?`<span class="separator">|</span><span class="author">by ${o.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${y(r)}
                </div>
            </div>
            `}catch(e){console.error("Error loading post:",e),p(t)}}function x(t){const s=_[t]||_.default;return`
        color: ${s.color};
        background-color: ${s.backgroundColor};
        border-color: ${s.borderColor};
    `}const N={title:"About Us"},q=`<h1>About the DARTS Initiative</h1>
<p>Learn more about the vision, the team, and the mission behind the DARTS ecosystem.</p>
<p>[Detailed information coming soon...]</p>
`,G=[{level:"1",content:"About the DARTS Initiative"}],X=Object.freeze(Object.defineProperty({__proto__:null,attributes:N,html:q,toc:G},Symbol.toStringTag,{value:"Module"})),Y={title:"Contributing"},U=`<h1>Contributing to DARTS</h1>
<p>We welcome contributions from the community! Whether you are a researcher, developer, or enthusiast, there are many ways to get involved.</p>
<p>[Contribution guidelines coming soon...]</p>
`,K=[{level:"1",content:"Contributing to DARTS"}],V=Object.freeze(Object.defineProperty({__proto__:null,attributes:Y,html:U,toc:K},Symbol.toStringTag,{value:"Module"})),J={title:"Manifesto"},Q=`<h1>DARTS Manifesto</h1>
<p>DARTS is an open ecosystem for the research and development of autonomous, resilient, and scalable drone swarms.</p>
<p>[Detailed manifesto content coming soon...]</p>
`,Z=[{level:"1",content:"DARTS Manifesto"}],tt=Object.freeze(Object.defineProperty({__proto__:null,attributes:J,html:Q,toc:Z},Symbol.toStringTag,{value:"Module"})),M=Object.assign({"../../content/pages/about-us.md":X,"../../content/pages/contributing.md":V,"../../content/pages/manifesto.md":tt});function et(){return M}function ot(t,s){const n=`../../content/pages/${s}.md`,i=M[n];if(!i){p(t);return}m(i.attributes.title,i.attributes.excerpt||i.attributes.description),t.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${i.attributes.title}</h1>
            <div class="post-content">
                ${y(i.html)}
            </div>
        </div>
        `}const st=Object.assign({"../../content/intro.md":L});function nt(t){m(null,l.siteDescription);const s=et(),n=F(),i=Object.entries(s).map(([r,h])=>`
        <a href="#/page/${r.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${h.attributes.title}</h3>
        </a>
    `).join(""),e=n.slice(0,2).map(r=>{const h=r.slug;return`
            <a href="#/post/${h}" class="post-card" data-slug="${h}">
                <h3>${r.title}</h3>
                <div class="post-meta" style="${x(r.category)}">
                    <span class="category-name">${r.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${r.date}</span>
                    ${r.author?`<span class="separator">|</span><span class="author">by ${r.author}</span>`:""}
                </div>
                <p>${r.excerpt||""}</p>
            </a>
        `}).join(""),o=y(st["../../content/intro.md"]?.html);t.innerHTML=`
    <img 
            src="${l.logo.light.svg}" 
            alt="${l.logo.alt}" 
            class="logo logo-light"
            onerror="this.onerror=null; this.src='${l.logo.light.png}'"
        >
        <img 
            src="${l.logo.dark.svg}" 
            alt="${l.logo.alt}" 
            class="logo logo-dark"
            onerror="this.onerror=null; this.src='${l.logo.dark.png}'"
        >
        <h1 class="title">${l.siteTitle}</h1>
        <p class="description">${l.siteDescription}</p>

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
            <h2>${l.blog.title}</h2>
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
                <a href="${l.footer.links[0].url}" target="_blank">GitHub repository</a>.
            </p>
        </div>
        `}const it=Object.assign({});let v=[];async function rt(){try{const t=await fetch("/projects-index.json");if(!t.ok)throw new Error("Failed to load projects index");v=(await t.json()).projects||[],console.log("Projects index loaded:",v.length,"projects")}catch(t){console.error("Error loading projects index:",t),v=[]}}function at(t){m("Projects","Discover the innovative projects developed by the DARTS Initiative.");const s=v.map(n=>{const i=n.slug;return`
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
        `}async function ct(t,s){const n=`../../content/projects/${s}.md`,i=it[n];if(!i){p(t);return}try{const e=await i(),{attributes:o,html:r}=e;m(o.title,o.excerpt||o.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${o.title}</h1>
                <div class="project-detail-logo-container">
                     ${o.logo?`<img src="${o.logo}" alt="${o.title}" class="project-detail-logo">`:""}
                </div>
                <div class="post-content">
                    ${y(r)}
                </div>
            </div>
            `}catch(e){console.error("Error loading project:",e),p(t)}}function lt(t){const s=document.getElementById(t);function n(e){document.querySelectorAll(".nav-link").forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===e&&o.classList.add("active")}),(e===""||e==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function i(){const e=window.location.hash;if(window.scrollTo(0,0),n(e),e===""||e==="#/")nt(s);else if(e==="#/blog")B(s);else if(e==="#/projects")at(s);else if(e.startsWith("#/post/")){const o=e.replace("#/post/","");await W(s,o)}else if(e.startsWith("#/project/")){const o=e.replace("#/project/","");await ct(s,o)}else if(e.startsWith("#/page/")){const o=e.replace("#/page/","");ot(s,o)}else p(s)}i(),window.addEventListener("hashchange",i)}function dt(){let t=document.querySelector("footer");t||(t=document.createElement("footer"),document.body.appendChild(t));const s=l.footer.links.map(n=>`<a href="${n.url}" target="${n.url.startsWith("http")?"_blank":"_self"}">${n.text}</a>`).join("");t.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${l.footer.copyright}</p>
            <p class="license-info">${l.footer.license}</p>
            <div class="footer-links">
                ${s}
            </div>
        </div>
    `}function ut(){const t=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;t==="dark"||!t&&s?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function ht(){const s=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s),s}function gt(){const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",()=>{ht()})}ut();gt();C("background-canvas");await H();await rt();lt("app");dt();console.log("DARTS Initiative Website Initialized");
