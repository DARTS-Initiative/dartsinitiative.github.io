(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();function F(t){const s=document.getElementById(t);if(!s)return;const e=s.getContext("2d");let i=s.width=window.innerWidth,o=s.height=window.innerHeight,n=-1e3,a=-1e3;const l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",()=>{i=s.width=window.innerWidth,o=s.height=window.innerHeight,P()}),l||(window.addEventListener("mousemove",g=>{n=g.clientX,a=g.clientY}),window.addEventListener("mouseleave",()=>{n=-1e3,a=-1e3})),new MutationObserver(()=>{d.baseColor=f()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function h(g){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function f(){return document.documentElement.getAttribute("data-theme")==="dark"?{...h("#FFFFFF"),a:.022}:{...h("#000000"),a:.1}}const d={baseColor:f(),hoverColor:{...h("#C2A365"),a:.55},hoverRadius:160,transitionSpeed:.06,mobileGlowChance:2e-4,mobileGlowFadeInSpeed:.025,mobileGlowFadeOutSpeed:.01,layers:[{count:.3,sizeRange:[12,20],speedFactor:.4,opacityMult:.5},{count:.4,sizeRange:[22,34],speedFactor:.7,opacityMult:.75},{count:.3,sizeRange:[36,50],speedFactor:1,opacityMult:1}],totalCount:l?90:300};let p=[],$=0;class T{constructor(r,m,c){this.originX=r,this.originY=m,this.x=r,this.y=m,this.layer=c,this.size=c.sizeRange[0]+Math.random()*(c.sizeRange[1]-c.sizeRange[0]),this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=(Math.random()-.5)*.002*c.speedFactor,this.hoverAmount=0,this.glowPhase="idle",this.driftPhaseX=Math.random()*Math.PI*2,this.driftPhaseY=Math.random()*Math.PI*2,this.driftAmplitudeX=12+Math.random()*25*c.speedFactor,this.driftAmplitudeY=10+Math.random()*20*c.speedFactor,this.driftSpeedX=(.001+Math.random()*.0015)*c.speedFactor,this.driftSpeedY=(8e-4+Math.random()*.0012)*c.speedFactor;const v=Math.random()*Math.PI*2;this.linearDriftX=Math.cos(v)*.12*c.speedFactor,this.linearDriftY=Math.sin(v)*.12*c.speedFactor}isMouseNear(){return Math.sqrt((n-this.x)**2+(a-this.y)**2)<d.hoverRadius}draw(){const r=d.baseColor,m=d.hoverColor,c=this.hoverAmount,v=this.layer.opacityMult,E=Math.round(r.r+(m.r-r.r)*c),O=Math.round(r.g+(m.g-r.g)*c),C=Math.round(r.b+(m.b-r.b)*c),L=(r.a+(m.a-r.a)*c)*v;e.save(),e.translate(this.x,this.y),e.rotate(this.rotation);const I=this.size,j=I*.866;e.beginPath(),e.moveTo(0,-j/2),e.lineTo(-I/2,j/2),e.lineTo(I/2,j/2),e.closePath(),e.fillStyle=`rgba(${E}, ${O}, ${C}, ${L})`,e.fill(),e.restore()}update(){this.x=this.originX+Math.sin($*this.driftSpeedX+this.driftPhaseX)*this.driftAmplitudeX,this.y=this.originY+Math.sin($*this.driftSpeedY+this.driftPhaseY)*this.driftAmplitudeY,this.originX+=this.linearDriftX,this.originY+=this.linearDriftY;const r=this.size*2;this.originX>i+r&&(this.originX=-r),this.originX<-r&&(this.originX=i+r),this.originY>o+r&&(this.originY=-r),this.originY<-r&&(this.originY=o+r),this.rotation+=this.rotationSpeed,l?(this.glowPhase==="idle"&&Math.random()<d.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+d.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-d.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+d.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-d.transitionSpeed)}}function P(){p=[];for(const g of d.layers){const r=Math.round(d.totalCount*g.count);for(let m=0;m<r;m++){const c=Math.random()*(i+100)-50,v=Math.random()*(o+100)-50;p.push(new T(c,v,g))}}}function x(){$++,e.clearRect(0,0,i,o),p.forEach(g=>{g.update(),g.draw()}),requestAnimationFrame(x)}P(),x()}const H={title:"Introduction"},B=`<p>Current generative AI achieves incredible things, but it learns passively: consuming massive amounts of data without grounding its knowledge in reality.</p>
<p>DARTS explores and shares progress toward AI that can truly reason, understand what it observes, and build its own model of the world.</p>
<p>We believe this is the path toward AI that is genuinely <strong>curious</strong> and capable of <strong>understanding the world</strong>.</p>
`,z=[],X=Object.freeze(Object.defineProperty({__proto__:null,attributes:H,html:B,toc:z},Symbol.toStringTag,{value:"Module"})),u={siteTitle:"DARTS",siteDescription:"Open ecosystem to research and share advances in <strong>AI that understands</strong>.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Logo"},blog:{title:"Latest Updates"},footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"#license"},{text:"Contribute",url:"#contribute"}]}};function w(t,s){document.title=t?`${t} | DARTS`:"DARTS";let e=document.querySelector('meta[name="description"]');e||(e=document.createElement("meta"),e.name="description",document.head.appendChild(e)),e.content=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const i=(a,l)=>{let b=document.querySelector(`meta[property="${a}"]`)||document.querySelector(`meta[name="${a}"]`);b&&(b.content=l||"")},o=t?`${t} | DARTS`:"DARTS",n=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";i("og:title",o),i("og:description",n),i("twitter:title",o),i("twitter:description",n)}function y(t){t.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function M(t){return t?t.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(s,e,i,o,n)=>{const a=o.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(a)?`<img ${e}${i}" style="width: 100%; max-width: ${a};" ${n}`:s}):""}const Y="modulepreload",q=function(t){return"/"+t},_={},N=function(s,e,i){let o=Promise.resolve();if(e&&e.length>0){let b=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");o=b(e.map(h=>{if(h=q(h),h in _)return;_[h]=!0;const f=h.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":Y,f||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise(($,T)=>{p.addEventListener("load",$),p.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function n(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&n(l.reason);return s().catch(n)})},R={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},W=Object.assign({"../../content/posts/demo-post.md":()=>N(()=>import("./demo-post-VqW7cEBo.js"),[])});let A=[];async function G(){try{const t=await fetch("/posts-index.json");if(!t.ok)throw new Error("Failed to load posts index");A=(await t.json()).posts||[],console.log("Posts index loaded:",A.length,"posts")}catch(t){console.error("Error loading posts index:",t),A=[]}}function U(){return A}function V(t){w("Blog","Read the latest news and updates from the DARTS Initiative.");const s=A.map(e=>{const i=e.slug;return`
            <a href="#/post/${i}" class="post-card" data-slug="${i}">
                <h3>${e.title}</h3>
                <div class="post-meta" style="${k(e.category)}">
                    <span class="category-name">${e.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${e.date}</span>
                    ${e.author?`<span class="separator">|</span><span class="author">by ${e.author}</span>`:""}
                </div>
                <p>${e.excerpt||""}</p>
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
    `}async function K(t,s){const e=`../../content/posts/${s}.md`,i=W[e];if(!i){y(t);return}try{const o=await i(),{attributes:n,html:a}=o;w(n.title,n.excerpt||n.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${n.title}</h1>
                <div class="post-meta" style="${k(n.category)}">
                    <span class="category-name">${n.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${n.date}</span>
                    ${n.author?`<span class="separator">|</span><span class="author">by ${n.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${M(a)}
                </div>
            </div>
            `}catch(o){console.error("Error loading post:",o),y(t)}}function k(t){const s=R[t]||R.default;return`
        color: ${s.color};
        border-color: ${s.color};
    `}const J={title:"About DARTS"},Q=`<p>DARTS is a personal initiative to explore and document the <strong>open development</strong> of the artificial intelligence of the future. A place where projects, ideas, and findings are shared openly, with the goal of making this work accessible to anyone who wants to follow it, build on it, or contribute to it.</p>
<p>It is not a lab. It is not a company. It is a purpose: to work on AI that genuinely understands its environment, builds models of it, and learns from exploration rather than passive consumption of data, and to do all of that in the open.</p>
<p>The most capable AI systems today come out of a handful of closed laboratories. The research is often published, but the models, the data, and the real engineering decisions behind them are not. DARTS exists as a response to that: not out of opposition, but out of the belief that <strong>meaningful AI research can happen in the open</strong>, driven by people who contribute simply because they care about the problem.</p>
<p>Current generative AI achieves remarkable things. But they have gaps that matter for where AI needs to go next: grounding knowledge in reality, reasoning about causes and consequences, and developing the capacity to act, plan, and collaborate in the physical world.</p>
<p>These are the areas where progress is most needed, and where DARTS focuses its attention:</p>
<ul>
<li><strong>World Models</strong> — enabling AI to build and navigate internal representations of reality, so it can imagine, plan, and act beyond what it has directly observed.</li>
<li><strong>Causal Learning</strong> — moving beyond correlation toward systems that understand why things happen, through exploration and interaction with the world.</li>
<li><strong>Multi-Agent AI</strong> — developing the foundations for AI systems that communicate, coordinate, and reason collectively rather than operating in isolation.</li>
</ul>
<h1>Who is behind DARTS?</h1>
<p>I like to say &quot;we&quot;, because I genuinely see DARTS as a place where more people could come together around these ideas. But right now, it is just me.</p>
<p>My name is <strong>Pablo Magariños</strong>. I studied Aerospace Engineering and I am currently pursuing an MSc in Industrial Mathematics at Universidad Carlos III de Madrid. That might sound like an unusual path, but it makes sense to me: engineering taught me to think in systems, mathematics taught me to think in depth, and somewhere along the way I became fascinated with intelligence itself.</p>
<p>Not AI as a product. <strong>Intelligence as a phenomenon</strong>. How the brain builds knowledge, how understanding actually works, what it would mean for a machine to truly reason rather than just predict.</p>
<p>That curiosity is what brought me to research. I focus on AI that grounds itself in reality rather than loosely correlating patterns in data. Two things pull me forward in particular: building systems that generate new knowledge and develop their own methods, and pushing Multi-Agent AI toward something closer to genuine collective intelligence.</p>
<p>To do that, I work with world models, causal learning, and new training paradigms. I also enjoy building algorithms from scratch, even when things do not go as planned, especially then.</p>
`,Z=[{level:"1",content:"Who is behind DARTS?"}],tt=Object.freeze(Object.defineProperty({__proto__:null,attributes:J,html:Q,toc:Z},Symbol.toStringTag,{value:"Module"})),et={title:"Contributing"},ot=`<p>There are no strict contribution guidelines yet, and no formal rules. The idea is for this to grow organically as the project does.</p>
<p>If you want to get involved, there are three main ways to do it:</p>
<h2>Blog content</h2>
<p>Paper analyses, explainers, news, opinions. If you have something worth saying that fits within the space DARTS cares about, <strong>it is welcome here</strong>.</p>
<h2>Projects</h2>
<p>The projects side of DARTS is still taking shape, but the direction is clear: everything developed under the DARTS umbrella will be <strong>Open-Source</strong>, will be featured in the projects tab, and will aim to integrate actively with the rest of the ecosystem.</p>
<h2>Development and outreach</h2>
<p>Improving the website, helping spread the work, or anything else that could <strong>genuinely be useful</strong> to the project.</p>
<p>If you want to contribute, write to me at <strong>contact@dartsinitiative.com</strong>.</p>
`,nt=[{level:"2",content:"Blog content"},{level:"2",content:"Projects"},{level:"2",content:"Development and outreach"}],st=Object.freeze(Object.defineProperty({__proto__:null,attributes:et,html:ot,toc:nt},Symbol.toStringTag,{value:"Module"})),it={title:"Roadmap"},at=`<p>[Detailed Roadmap content coming soon...]</p>
`,rt=[],lt=Object.freeze(Object.defineProperty({__proto__:null,attributes:it,html:at,toc:rt},Symbol.toStringTag,{value:"Module"})),D=Object.assign({"../../content/pages/about-us.md":tt,"../../content/pages/contributing.md":st,"../../content/pages/roadmap.md":lt});function ct(){return D}function dt(t,s){const e=`../../content/pages/${s}.md`,i=D[e];if(!i){y(t);return}w(i.attributes.title,i.attributes.excerpt||i.attributes.description),t.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${i.attributes.title}</h1>
            <div class="post-content">
                ${M(i.html)}
            </div>
        </div>
        `}const ht=Object.assign({"../../content/intro.md":X});function ut(t){w(null,u.siteDescription);const s=ct(),e=U(),i=Object.entries(s).map(([a,l])=>`
        <a href="#/page/${a.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${l.attributes.title}</h3>
        </a>
    `).join(""),o=e.slice(0,2).map(a=>{const l=a.slug;return`
            <a href="#/post/${l}" class="post-card" data-slug="${l}">
                <h3>${a.title}</h3>
                <div class="post-meta" style="${k(a.category)}">
                    <span class="category-name">${a.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${a.date}</span>
                    ${a.author?`<span class="separator">|</span><span class="author">by ${a.author}</span>`:""}
                </div>
                <p>${a.excerpt||""}</p>
            </a>
        `}).join(""),n=M(ht["../../content/intro.md"]?.html);t.innerHTML=`
    <img 
            src="${u.logo.light.svg}" 
            alt="${u.logo.alt}" 
            class="logo logo-light"
            width="500"
            height="500"
            onerror="this.onerror=null; this.src='${u.logo.light.png}'"
        >
        <img 
            src="${u.logo.dark.svg}" 
            alt="${u.logo.alt}" 
            class="logo logo-dark"
            width="500"
            height="500"
            onerror="this.onerror=null; this.src='${u.logo.dark.png}'"
        >
        <h1 class="title">${u.siteTitle}</h1>
        <p class="description">${u.siteDescription}</p>

        <div class="intro-section">
            ${n}
        </div>

        <div class="buttons-section">
            <h2>Explore DARTS</h2>
            <div class="buttons-list">
                ${i}
            </div>
        </div>

        <div class="blog-section">
            <h2>${u.blog.title}</h2>
            <div class="posts-list">
                ${o||'<p class="no-content-message">No news available yet.</p>'}
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
        `}const pt=Object.assign({});let S=[];async function gt(){try{const t=await fetch("/projects-index.json");if(!t.ok)throw new Error("Failed to load projects index");S=(await t.json()).projects||[],console.log("Projects index loaded:",S.length,"projects")}catch(t){console.error("Error loading projects index:",t),S=[]}}function mt(t){w("Projects","Discover the innovative projects developed by the DARTS Initiative.");const s=S.map(e=>{const i=e.slug;return`
            <a href="#/project/${i}" class="post-card project-card" data-slug="${i}">
            <div class="project-info">
                <h3>${e.title}</h3>
                <p>${e.excerpt||""}</p>
            </div>
            <div class="project-logo-container">
                ${e.logo?`<img src="${e.logo}" alt="${e.title}" class="project-logo">`:""}
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
        `}async function ft(t,s){const e=`../../content/projects/${s}.md`,i=pt[e];if(!i){y(t);return}try{const o=await i(),{attributes:n,html:a}=o;w(n.title,n.excerpt||n.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${n.title}</h1>
                <div class="project-detail-logo-container">
                     ${n.logo?`<img src="${n.logo}" alt="${n.title}" class="project-detail-logo">`:""}
                </div>
                <div class="post-content">
                    ${M(a)}
                </div>
            </div>
            `}catch(o){console.error("Error loading project:",o),y(t)}}function bt(t){const s=document.getElementById(t);function e(o){document.querySelectorAll(".nav-link").forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===o&&n.classList.add("active")}),(o===""||o==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function i(){const o=window.location.hash;if(window.scrollTo(0,0),e(o),o===""||o==="#/")ut(s);else if(o==="#/blog")V(s);else if(o==="#/projects")mt(s);else if(o.startsWith("#/post/")){const n=o.replace("#/post/","");await K(s,n)}else if(o.startsWith("#/project/")){const n=o.replace("#/project/","");await ft(s,n)}else if(o.startsWith("#/page/")){const n=o.replace("#/page/","");dt(s,n)}else y(s)}i(),window.addEventListener("hashchange",i)}function vt(){let t=document.querySelector("footer");t||(t=document.createElement("footer"),document.body.appendChild(t));const s=u.footer.links.map(e=>`<a href="${e.url}" target="${e.url.startsWith("http")?"_blank":"_self"}">${e.text}</a>`).join("");t.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${u.footer.copyright}</p>
            <p class="license-info">${u.footer.license}</p>
            <div class="footer-links">
                ${s}
            </div>
        </div>
    `}function yt(){const t=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;t==="dark"||!t&&s?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function wt(){const s=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s),s}function $t(){const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",()=>{wt()})}yt();$t();F("background-canvas");await G();await gt();bt("app");vt();console.log("DARTS Initiative Website Initialized");
