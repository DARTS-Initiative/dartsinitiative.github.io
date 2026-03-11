(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function E(e){const s=document.getElementById(e);if(!s)return;const n=s.getContext("2d");let i=s.width=window.innerWidth,t=s.height=window.innerHeight,o=-1e3,a=-1e3;const c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",()=>{i=s.width=window.innerWidth,t=s.height=window.innerHeight,$()}),c||(window.addEventListener("mousemove",p=>{o=p.clientX,a=p.clientY}),window.addEventListener("mouseleave",()=>{o=-1e3,a=-1e3})),new MutationObserver(()=>{r.baseColor=m()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function d(p){const l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function m(){return document.documentElement.getAttribute("data-theme")==="dark"?{...d("#FFFFFF"),a:.018}:{...d("#000000"),a:.07}}const r={size:40,speed:.18,baseColor:m(),hoverColor:{...d("#C2A365"),a:.65},rows:16,hoverRadius:90,transitionSpeed:.1,mobileGlowChance:3e-4,mobileGlowFadeInSpeed:.04,mobileGlowFadeOutSpeed:.015};let u=[];class S{constructor(l,g){this.x=l,this.y=g,this.size=r.size,this.speed=r.speed+(Math.random()-.5)*.2,this.hoverAmount=0,this.isGlowing=!1,this.glowPhase="idle"}isMouseNear(){const l=this.x+this.size/2,g=this.y+this.size/2;return Math.sqrt((o-l)**2+(a-g)**2)<r.hoverRadius}draw(){const l=r.baseColor,g=r.hoverColor,f=this.hoverAmount,k=Math.round(l.r+(g.r-l.r)*f),x=Math.round(l.g+(g.g-l.g)*f),D=Math.round(l.b+(g.b-l.b)*f),R=l.a+(g.a-l.a)*f;n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x+this.size,this.y+this.size/2),n.lineTo(this.x,this.y+this.size),n.closePath(),n.fillStyle=`rgba(${k}, ${x}, ${D}, ${R})`,n.fill()}update(){this.x+=this.speed,this.x>i+this.size&&(this.x=-this.size*2),c?(this.glowPhase==="idle"&&Math.random()<r.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+r.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-r.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+r.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-r.transitionSpeed)}}function $(){u=[];const p=t/r.rows;for(let l=0;l<r.rows;l++){const g=Math.ceil(i/(r.size*2));for(let f=0;f<g+2;f++){const k=f*(r.size*2)-r.size*3+(l%2===0?0:r.size),x=l*p+Math.random()*p/4;u.push(new S(k,x))}}}function I(){n.clearRect(0,0,i,t),u.forEach(p=>{p.update(),p.draw()}),requestAnimationFrame(I)}$(),I()}const C={title:"Introduction"},O=`<h1>Why DARTS</h1>
<p>Current generative AI achieves incredible things, but it learns passively: consuming massive amounts of data without grounding its knowledge in reality. My goal is to explore and share advances in AI that truly reasons, that understands what it observes, and that builds its own model of the world.</p>
<h1>Main lines</h1>
<p>The areas this initiative focuses on:</p>
<ul>
<li><strong>World Models</strong>, enabling AI to <em>dream</em> realities and plan based on them.</li>
<li><strong>Causal Learning</strong>, enabling AI to <em>understand</em> reality through exploration and observation.</li>
<li><strong>Multi-Agent AI</strong>, developing native capabilities for collaboration, communication, and collective planning.</li>
</ul>
<h1>Want to join?</h1>
<p>That is the reason why DARTS exists. Check below how to contribute.</p>
`,L=[{level:"1",content:"Why DARTS"},{level:"1",content:"Main lines"},{level:"1",content:"Want to join?"}],H=Object.freeze(Object.defineProperty({__proto__:null,attributes:C,html:O,toc:L},Symbol.toStringTag,{value:"Module"})),h={siteTitle:"DARTS",siteDescription:"Open ecosystem to research and share advances in <strong>AI that understands</strong>.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Logo"},blog:{title:"Latest Updates"},footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"#license"},{text:"Contribute",url:"#contribute"}]}};function y(e,s){document.title=e?`${e} | DARTS`:"DARTS";let n=document.querySelector('meta[name="description"]');n||(n=document.createElement("meta"),n.name="description",document.head.appendChild(n)),n.content=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const i=(a,c)=>{let b=document.querySelector(`meta[property="${a}"]`)||document.querySelector(`meta[name="${a}"]`);b&&(b.content=c||"")},t=e?`${e} | DARTS`:"DARTS",o=s||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";i("og:title",t),i("og:description",o),i("twitter:title",t),i("twitter:description",o)}function v(e){e.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function T(e){return e?e.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(s,n,i,t,o)=>{const a=t.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(a)?`<img ${n}${i}" style="width: 100%; max-width: ${a};" ${o}`:s}):""}const z="modulepreload",B=function(e){return"/"+e},P={},F=function(s,n,i){let t=Promise.resolve();if(n&&n.length>0){let b=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(r=>({status:"fulfilled",value:r}),r=>({status:"rejected",reason:r}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");t=b(n.map(d=>{if(d=B(d),d in P)return;P[d]=!0;const m=d.endsWith(".css"),r=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${r}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":z,m||(u.as="script"),u.crossOrigin="",u.href=d,c&&u.setAttribute("nonce",c),document.head.appendChild(u),m)return new Promise((S,$)=>{u.addEventListener("load",S),u.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return t.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return s().catch(o)})},M={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},W=Object.assign({"../../content/posts/demo-post.md":()=>F(()=>import("./demo-post-VqW7cEBo.js"),[])});let w=[];async function q(){try{const e=await fetch("/posts-index.json");if(!e.ok)throw new Error("Failed to load posts index");w=(await e.json()).posts||[],console.log("Posts index loaded:",w.length,"posts")}catch(e){console.error("Error loading posts index:",e),w=[]}}function N(){return w}function G(e){y("Blog","Read the latest news and updates from the DARTS Initiative.");const s=w.map(n=>{const i=n.slug;return`
            <a href="#/post/${i}" class="post-card" data-slug="${i}">
                <h3>${n.title}</h3>
                <div class="post-meta" style="${j(n.category)}">
                    <span class="category-name">${n.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${n.date}</span>
                    ${n.author?`<span class="separator">|</span><span class="author">by ${n.author}</span>`:""}
                </div>
                <p>${n.excerpt||""}</p>
            </a>
        `}).join("");e.innerHTML=`
        <div class="blog-section" style="margin-top: 40px;">
            <h2>All Blog Posts</h2>
            <div class="posts-list">
                ${s||'<p class="no-content-message">No blog posts published yet.</p>'}
            </div>
             <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div>
    `}async function U(e,s){const n=`../../content/posts/${s}.md`,i=W[n];if(!i){v(e);return}try{const t=await i(),{attributes:o,html:a}=t;y(o.title,o.excerpt||o.description),e.innerHTML=`
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
                    ${T(a)}
                </div>
            </div>
            `}catch(t){console.error("Error loading post:",t),v(e)}}function j(e){const s=M[e]||M.default;return`
        color: ${s.color};
        background-color: ${s.backgroundColor};
        border-color: ${s.borderColor};
    `}const X={title:"About DARTS"},Y=`<p>DARTS is a personal initiative to explore and document the <strong>open development</strong> of the artificial intelligence of the future. A place where projects, ideas, and findings are shared openly, with the goal of making this work accessible to anyone who wants to follow it, build on it, or contribute to it.</p>
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
`,V=[{level:"1",content:"Who is behind DARTS?"}],K=Object.freeze(Object.defineProperty({__proto__:null,attributes:X,html:Y,toc:V},Symbol.toStringTag,{value:"Module"})),J={title:"Contributing"},Q=`<p>There are no strict contribution guidelines yet, and no formal rules. The idea is for this to grow organically as the project does.</p>
<p>If you want to get involved, there are three main ways to do it:</p>
<h2>Blog content</h2>
<p>Paper analyses, explainers, news, opinions. If you have something worth saying that fits within the space DARTS cares about, <strong>it is welcome here</strong>.</p>
<h2>Projects</h2>
<p>The projects side of DARTS is still taking shape, but the direction is clear: everything developed under the DARTS umbrella will be <strong>Open-Source</strong>, will be featured in the projects tab, and will aim to integrate actively with the rest of the ecosystem.</p>
<h2>Development and outreach</h2>
<p>Improving the website, helping spread the work, or anything else that could <strong>genuinely be useful</strong> to the project.</p>
<p>If you want to contribute, write to me at <strong>pablo.magarinos@outlook.com</strong>.</p>
`,Z=[{level:"2",content:"Blog content"},{level:"2",content:"Projects"},{level:"2",content:"Development and outreach"}],ee=Object.freeze(Object.defineProperty({__proto__:null,attributes:J,html:Q,toc:Z},Symbol.toStringTag,{value:"Module"})),te={title:"Roadmap"},oe=`<p>[Detailed Roadmap content coming soon...]</p>
`,ne=[],se=Object.freeze(Object.defineProperty({__proto__:null,attributes:te,html:oe,toc:ne},Symbol.toStringTag,{value:"Module"})),_=Object.assign({"../../content/pages/about-us.md":K,"../../content/pages/contributing.md":ee,"../../content/pages/roadmap.md":se});function ie(){return _}function ae(e,s){const n=`../../content/pages/${s}.md`,i=_[n];if(!i){v(e);return}y(i.attributes.title,i.attributes.excerpt||i.attributes.description),e.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${i.attributes.title}</h1>
            <div class="post-content">
                ${T(i.html)}
            </div>
        </div>
        `}const re=Object.assign({"../../content/intro.md":H});function le(e){y(null,h.siteDescription);const s=ie(),n=N(),i=Object.entries(s).map(([a,c])=>`
        <a href="#/page/${a.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${c.attributes.title}</h3>
        </a>
    `).join(""),t=n.slice(0,2).map(a=>{const c=a.slug;return`
            <a href="#/post/${c}" class="post-card" data-slug="${c}">
                <h3>${a.title}</h3>
                <div class="post-meta" style="${j(a.category)}">
                    <span class="category-name">${a.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${a.date}</span>
                    ${a.author?`<span class="separator">|</span><span class="author">by ${a.author}</span>`:""}
                </div>
                <p>${a.excerpt||""}</p>
            </a>
        `}).join(""),o=T(re["../../content/intro.md"]?.html);e.innerHTML=`
    <img 
            src="${h.logo.light.svg}" 
            alt="${h.logo.alt}" 
            class="logo logo-light"
            width="500"
            height="500"
            onerror="this.onerror=null; this.src='${h.logo.light.png}'"
        >
        <img 
            src="${h.logo.dark.svg}" 
            alt="${h.logo.alt}" 
            class="logo logo-dark"
            width="500"
            height="500"
            onerror="this.onerror=null; this.src='${h.logo.dark.png}'"
        >
        <h1 class="title">${h.siteTitle}</h1>
        <p class="description">${h.siteDescription}</p>

        <div class="intro-section">
            ${o}
        </div>

        <div class="buttons-section">
            <h2>Explore DARTS</h2>
            <div class="buttons-list">
                ${i}
            </div>
        </div>

        <div class="blog-section">
            <h2>${h.blog.title}</h2>
            <div class="posts-list">
                ${t||'<p class="no-content-message">No news available yet.</p>'}
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <a href="#/blog" class="text-link">View All Posts →</a>
            </div>
        </div>

        <div class="info-text">
            <p>
                Interested in learning more? Check out our
                <a href="${h.footer.links[0].url}" target="_blank">GitHub repository</a>.
            </p>
        </div>
        `}const ce=Object.assign({});let A=[];async function de(){try{const e=await fetch("/projects-index.json");if(!e.ok)throw new Error("Failed to load projects index");A=(await e.json()).projects||[],console.log("Projects index loaded:",A.length,"projects")}catch(e){console.error("Error loading projects index:",e),A=[]}}function he(e){y("Projects","Discover the innovative projects developed by the DARTS Initiative.");const s=A.map(n=>{const i=n.slug;return`
            <a href="#/project/${i}" class="post-card project-card" data-slug="${i}">
            <div class="project-info">
                <h3>${n.title}</h3>
                <p>${n.excerpt||""}</p>
            </div>
            <div class="project-logo-container">
                ${n.logo?`<img src="${n.logo}" alt="${n.title}" class="project-logo">`:""}
            </div>
        </a>
        `}).join("");e.innerHTML=`
        <div class="blog-section" style="margin-top: 40px;">
            <h2>Our Projects</h2>
            <div class="posts-list">
                ${s||'<p class="no-content-message">No projects showcased yet.</p>'}
            </div>
            <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div >
        `}async function ue(e,s){const n=`../../content/projects/${s}.md`,i=ce[n];if(!i){v(e);return}try{const t=await i(),{attributes:o,html:a}=t;y(o.title,o.excerpt||o.description),e.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${o.title}</h1>
                <div class="project-detail-logo-container">
                     ${o.logo?`<img src="${o.logo}" alt="${o.title}" class="project-detail-logo">`:""}
                </div>
                <div class="post-content">
                    ${T(a)}
                </div>
            </div>
            `}catch(t){console.error("Error loading project:",t),v(e)}}function pe(e){const s=document.getElementById(e);function n(t){document.querySelectorAll(".nav-link").forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===t&&o.classList.add("active")}),(t===""||t==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function i(){const t=window.location.hash;if(window.scrollTo(0,0),n(t),t===""||t==="#/")le(s);else if(t==="#/blog")G(s);else if(t==="#/projects")he(s);else if(t.startsWith("#/post/")){const o=t.replace("#/post/","");await U(s,o)}else if(t.startsWith("#/project/")){const o=t.replace("#/project/","");await ue(s,o)}else if(t.startsWith("#/page/")){const o=t.replace("#/page/","");ae(s,o)}else v(s)}i(),window.addEventListener("hashchange",i)}function ge(){let e=document.querySelector("footer");e||(e=document.createElement("footer"),document.body.appendChild(e));const s=h.footer.links.map(n=>`<a href="${n.url}" target="${n.url.startsWith("http")?"_blank":"_self"}">${n.text}</a>`).join("");e.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${h.footer.copyright}</p>
            <p class="license-info">${h.footer.license}</p>
            <div class="footer-links">
                ${s}
            </div>
        </div>
    `}function me(){const e=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&s?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function fe(){const s=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s),s}function be(){const e=document.getElementById("theme-toggle");e&&e.addEventListener("click",()=>{fe()})}me();be();E("background-canvas");await q();await de();pe("app");ge();console.log("DARTS Initiative Website Initialized");
