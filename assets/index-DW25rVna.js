(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function N(e){const o=document.getElementById(e);if(!o)return;const t=o.getContext("2d");let i=o.width=window.innerWidth,s=o.height=window.innerHeight,n=-1e3,a=-1e3;const r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",()=>{i=o.width=window.innerWidth,s=o.height=window.innerHeight,D()}),r||(window.addEventListener("mousemove",g=>{n=g.clientX,a=g.clientY}),window.addEventListener("mouseleave",()=>{n=-1e3,a=-1e3})),new MutationObserver(()=>{d.baseColor=f()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function u(g){const l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function f(){return document.documentElement.getAttribute("data-theme")==="dark"?{...u("#FFFFFF"),a:.022}:{...u("#000000"),a:.1}}const d={baseColor:f(),hoverColor:{...u("#C2A365"),a:.55},hoverRadius:160,transitionSpeed:.06,mobileGlowChance:2e-4,mobileGlowFadeInSpeed:.025,mobileGlowFadeOutSpeed:.01,layers:[{count:.3,sizeRange:[12,20],speedFactor:.4,opacityMult:.5},{count:.4,sizeRange:[22,34],speedFactor:.7,opacityMult:.75},{count:.3,sizeRange:[36,50],speedFactor:1,opacityMult:1}],totalCount:r?90:300};let p=[],A=0;class M{constructor(l,b,c){this.originX=l,this.originY=b,this.x=l,this.y=b,this.layer=c,this.size=c.sizeRange[0]+Math.random()*(c.sizeRange[1]-c.sizeRange[0]),this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=(Math.random()-.5)*.002*c.speedFactor,this.hoverAmount=0,this.glowPhase="idle",this.driftPhaseX=Math.random()*Math.PI*2,this.driftPhaseY=Math.random()*Math.PI*2,this.driftAmplitudeX=12+Math.random()*25*c.speedFactor,this.driftAmplitudeY=10+Math.random()*20*c.speedFactor,this.driftSpeedX=(.001+Math.random()*.0015)*c.speedFactor,this.driftSpeedY=(8e-4+Math.random()*.0012)*c.speedFactor;const w=Math.random()*Math.PI*2;this.linearDriftX=Math.cos(w)*.12*c.speedFactor,this.linearDriftY=Math.sin(w)*.12*c.speedFactor}isMouseNear(){return Math.sqrt((n-this.x)**2+(a-this.y)**2)<d.hoverRadius}draw(){const l=d.baseColor,b=d.hoverColor,c=this.hoverAmount,w=this.layer.opacityMult,q=Math.round(l.r+(b.r-l.r)*c),B=Math.round(l.g+(b.g-l.g)*c),H=Math.round(l.b+(b.b-l.b)*c),Y=(l.a+(b.a-l.a)*c)*w;t.save(),t.translate(this.x,this.y),t.rotate(this.rotation);const I=this.size,k=I*.866;t.beginPath(),t.moveTo(0,-k/2),t.lineTo(-I/2,k/2),t.lineTo(I/2,k/2),t.closePath(),t.fillStyle=`rgba(${q}, ${B}, ${H}, ${Y})`,t.fill(),t.restore()}update(){this.x=this.originX+Math.sin(A*this.driftSpeedX+this.driftPhaseX)*this.driftAmplitudeX,this.y=this.originY+Math.sin(A*this.driftSpeedY+this.driftPhaseY)*this.driftAmplitudeY,this.originX+=this.linearDriftX,this.originY+=this.linearDriftY;const l=this.size*2;this.originX>i+l&&(this.originX=-l),this.originX<-l&&(this.originX=i+l),this.originY>s+l&&(this.originY=-l),this.originY<-l&&(this.originY=s+l),this.rotation+=this.rotationSpeed,r?(this.glowPhase==="idle"&&Math.random()<d.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+d.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-d.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+d.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-d.transitionSpeed)}}function D(){p=[];for(const g of d.layers){const l=Math.round(d.totalCount*g.count);for(let b=0;b<l;b++){const c=Math.random()*(i+100)-50,w=Math.random()*(s+100)-50;p.push(new M(c,w,g))}}}function _(){A++,t.clearRect(0,0,i,s),p.forEach(g=>{g.update(),g.draw()}),requestAnimationFrame(_)}D(),_()}const z={title:"Introduction"},X=`<p>Current generative AI achieves incredible things, but it learns passively: consuming massive amounts of data without grounding its knowledge in reality.</p>
<p>DARTS explores and shares progress toward AI that can truly reason, understand what it observes, and build its own model of the world.</p>
<p>We believe this is the path toward AI that is genuinely <strong>curious</strong> and capable of <strong>understanding the world</strong>.</p>
`,W=[],U=Object.freeze(Object.defineProperty({__proto__:null,attributes:z,html:X,toc:W},Symbol.toStringTag,{value:"Module"})),h={siteTitle:"DARTS",siteDescription:"Open ecosystem to research and share advances in <strong>AI that understands</strong>.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Logo"},blog:{title:"Latest Updates"},newsletterUrl:"https://buttondown.com/api/emails/embed-subscribe/DARTS",footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"https://creativecommons.org/licenses/by/4.0/"},{text:"Contribute",url:"#/page/contributing"}]}};function y(e,o){document.title=e?`${e} | DARTS`:"DARTS";let t=document.querySelector('meta[name="description"]');t||(t=document.createElement("meta"),t.name="description",document.head.appendChild(t)),t.content=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const i=(a,r)=>{let m=document.querySelector(`meta[property="${a}"]`)||document.querySelector(`meta[name="${a}"]`);m&&(m.content=r||"")},s=e?`${e} | DARTS`:"DARTS",n=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";i("og:title",s),i("og:description",n),i("twitter:title",s),i("twitter:description",n)}function v(e){e.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function T(e){return e?e.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(o,t,i,s,n)=>{const a=s.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(a)?`<img ${t}${i}" style="width: 100%; max-width: ${a};" ${n}`:o}):""}const G="modulepreload",K=function(e){return"/"+e},R={},V=function(o,t,i){let s=Promise.resolve();if(t&&t.length>0){let m=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=a?.nonce||a?.getAttribute("nonce");s=m(t.map(u=>{if(u=K(u),u in R)return;R[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":G,f||(p.as="script"),p.crossOrigin="",p.href=u,r&&p.setAttribute("nonce",r),document.head.appendChild(p),f)return new Promise((A,M)=>{p.addEventListener("load",A),p.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return s.then(a=>{for(const r of a||[])r.status==="rejected"&&n(r.reason);return o().catch(n)})},L={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},J=Object.assign({"../../content/posts/demo-post.md":()=>V(()=>import("./demo-post-VqW7cEBo.js"),[])});let $=[];async function Q(){try{const e=await fetch("/posts-index.json");if(!e.ok)throw new Error("Failed to load posts index");$=(await e.json()).posts||[]}catch(e){console.error("Error loading posts index:",e),$=[]}}function Z(){return $}function ee(e){y("Blog","Read the latest news and updates from the DARTS Initiative.");const o=$.map(t=>{const i=t.slug;return`
            <a href="#/post/${i}" class="post-card" data-slug="${i}">
                <h3>${t.title}</h3>
                <div class="post-meta" style="${P(t.category)}">
                    <span class="category-name">${t.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${t.date}</span>
                    ${t.author?`<span class="separator">|</span><span class="author">by ${t.author}</span>`:""}
                </div>
                <p>${t.excerpt||""}</p>
            </a>
        `}).join("");e.innerHTML=`
        <div class="blog-section" style="margin-top: 40px;">
            <h2>All Blog Posts</h2>
            <div class="posts-list">
                ${o||'<p class="no-content-message">No blog posts published yet.</p>'}
            </div>
             <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div>
    `}async function te(e,o){const t=`../../content/posts/${o}.md`,i=J[t];if(!i){v(e);return}try{const s=await i(),{attributes:n,html:a}=s;y(n.title,n.excerpt||n.description),e.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${n.title}</h1>
                <div class="post-meta" style="${P(n.category)}">
                    <span class="category-name">${n.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${n.date}</span>
                    ${n.author?`<span class="separator">|</span><span class="author">by ${n.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${T(a)}
                </div>
            </div>
            `}catch(s){console.error("Error loading post:",s),v(e)}}function P(e){const o=L[e]||L.default;return`
        color: ${o.color};
        border-color: ${o.color};
    `}const oe={title:"About DARTS"},ne=`<p>DARTS is a personal initiative to explore and document the <strong>open development</strong> of the artificial intelligence of the future. A place where projects, ideas, and findings are shared openly, with the goal of making this work accessible to anyone who wants to follow it, build on it, or contribute to it.</p>
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
`,se=[{level:"1",content:"Who is behind DARTS?"}],ie=Object.freeze(Object.defineProperty({__proto__:null,attributes:oe,html:ne,toc:se},Symbol.toStringTag,{value:"Module"})),re={title:"Contributing"},ae=`<p>There are no strict contribution guidelines yet, and no formal rules. The idea is for this to grow organically as the project does.</p>
<p>If you want to get involved, there are three main ways to do it:</p>
<h2>Blog content</h2>
<p>Paper analyses, explainers, news, opinions. If you have something worth saying that fits within the space DARTS cares about, <strong>it is welcome here</strong>.</p>
<h2>Projects</h2>
<p>The projects side of DARTS is still taking shape, but the direction is clear: everything developed under the DARTS umbrella will be <strong>Open-Source</strong>, will be featured in the projects tab, and will aim to integrate actively with the rest of the ecosystem.</p>
<h2>Development and outreach</h2>
<p>Improving the website, helping spread the work, or anything else that could <strong>genuinely be useful</strong> to the project.</p>
<p>If you want to contribute, write to me at <strong>contact@dartsinitiative.com</strong>.</p>
`,le=[{level:"2",content:"Blog content"},{level:"2",content:"Projects"},{level:"2",content:"Development and outreach"}],ce=Object.freeze(Object.defineProperty({__proto__:null,attributes:re,html:ae,toc:le},Symbol.toStringTag,{value:"Module"})),de={title:"Roadmap"},ue=`<p>[Detailed Roadmap content coming soon...]</p>
`,he=[],pe=Object.freeze(Object.defineProperty({__proto__:null,attributes:de,html:ue,toc:he},Symbol.toStringTag,{value:"Module"})),O=Object.assign({"../../content/pages/about-us.md":ie,"../../content/pages/contributing.md":ce,"../../content/pages/roadmap.md":pe});function ge(){return O}function me(e,o){const t=`../../content/pages/${o}.md`,i=O[t];if(!i){v(e);return}y(i.attributes.title,i.attributes.excerpt||i.attributes.description),e.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${i.attributes.title}</h1>
            <div class="post-content">
                ${T(i.html)}
            </div>
        </div>
        `}const C="darts_newsletter",be=7,fe=30;function ve(){try{return JSON.parse(localStorage.getItem(C))||{}}catch{return{}}}function S(e){localStorage.setItem(C,JSON.stringify(e))}function we(){const e=ve();return!(e.subscribedAt&&Date.now()-e.subscribedAt<fe*24*60*60*1e3||e.dismissedAt&&Date.now()-e.dismissedAt<be*24*60*60*1e3)}function j(e){e.classList.remove("newsletter-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0})}function F(){const e=document.createElement("div");e.className="newsletter-banner",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Newsletter subscription"),e.innerHTML=`
    <button class="newsletter-close" aria-label="Close">&times;</button>
    <div class="newsletter-body">
      <div class="newsletter-text">
        <strong>Be part of DARTS</strong>
        <span><b>We are just getting started.</b> Don't miss our new projects, and <em class="newsletter-highlight">get exclusive updates!</em></span>
        <button class="newsletter-already">I'm already subscribed</button>
      </div>
      <form
        action="${h.newsletterUrl}"
        method="post"
        class="newsletter-form"
        target="_blank"
      >
        <label for="newsletter-email" class="sr-only">Email address</label>
        <input
          type="email"
          name="email"
          id="newsletter-email"
          placeholder="your@email.com"
          required
          autocomplete="email"
          class="newsletter-input"
        />
        <button type="submit" class="newsletter-submit">>-/-></button>
      </form>
    </div>
  `,document.body.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("newsletter-visible")})});const o=()=>{S({dismissedAt:Date.now()}),j(e),document.removeEventListener("keydown",t)};e.querySelector(".newsletter-close").addEventListener("click",o),e.querySelector(".newsletter-form").addEventListener("submit",()=>{S({subscribedAt:Date.now()}),setTimeout(()=>j(e),300)}),e.querySelector(".newsletter-already").addEventListener("click",()=>{S({subscribedAt:Date.now()}),j(e)});const t=i=>{i.key==="Escape"&&o()};document.addEventListener("keydown",t)}function ye(){S({subscribedAt:Date.now()})}function Ae(){document.querySelector(".newsletter-banner")||F()}function Se(){we()&&setTimeout(F,5e3)}const $e=Object.assign({"../../content/intro.md":U});function Te(e){y(null,h.siteDescription);const o=ge(),t=Z(),i=Object.entries(o).map(([r,m])=>`
        <a href="#/page/${r.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${m.attributes.title}</h3>
        </a>
    `).join(""),s=t.slice(0,2).map(r=>{const m=r.slug;return`
            <a href="#/post/${m}" class="post-card" data-slug="${m}">
                <h3>${r.title}</h3>
                <div class="post-meta" style="${P(r.category)}">
                    <span class="category-name">${r.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${r.date}</span>
                    ${r.author?`<span class="separator">|</span><span class="author">by ${r.author}</span>`:""}
                </div>
                <p>${r.excerpt||""}</p>
            </a>
        `}).join(""),n=T($e["../../content/intro.md"]?.html);e.innerHTML=`
    <img 
            src="${h.logo.light.svg}" 
            alt="${h.logo.alt}" 
            class="logo logo-light"
            width="500"
            height="500"
        >
        <img
            src="${h.logo.dark.svg}"
            alt="${h.logo.alt}"
            class="logo logo-dark"
            width="500"
            height="500"
        >
        <h1 class="title">${h.siteTitle}</h1>
        <p class="description">${h.siteDescription}</p>

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
            <h2>${h.blog.title}</h2>
            <div class="posts-list">
                ${s||'<p class="no-content-message">No news available yet.</p>'}
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <a href="#/blog" class="text-link">View All Posts →</a>
            </div>
        </div>

        <h2 class="subscribe-title">Subscribe to DARTS</h2>
        <div class="subscribe-section">
            <p class="subscribe-text">
                We're just getting started, but there are many projects on the horizon.<br>
                If you don't want to miss what's coming,
                <strong>drop your email</strong> and stay in the loop.
                You'll get exclusive updates and a chance to be part of the project.
            </p>
            <form
                action="${h.newsletterUrl}"
                method="post"
                class="subscribe-form"
                target="_blank"
            >
                <label for="subscribe-email" class="sr-only">Email address</label>
                <input
                    type="email"
                    name="email"
                    id="subscribe-email"
                    placeholder="your@email.com"
                    required
                    autocomplete="email"
                    class="subscribe-input"
                />
                <button type="submit" class="subscribe-submit" aria-label="Subscribe">>-/-></button>
            </form>
            <p class="subscribe-note">(We don't like spam either, so no worries, we'll keep it meaningful)</p>
        </div>
        `,e.querySelectorAll(".logo-light").forEach(r=>{r.addEventListener("error",function(){this.src=h.logo.light.png},{once:!0})}),e.querySelectorAll(".logo-dark").forEach(r=>{r.addEventListener("error",function(){this.src=h.logo.dark.png},{once:!0})});const a=e.querySelector(".subscribe-form");a&&a.addEventListener("submit",()=>ye())}const Me=Object.assign({});let E=[];async function Ie(){try{const e=await fetch("/projects-index.json");if(!e.ok)throw new Error("Failed to load projects index");E=(await e.json()).projects||[]}catch(e){console.error("Error loading projects index:",e),E=[]}}function ke(e){y("Projects","Discover the innovative projects developed by the DARTS Initiative.");const o=E.map(t=>{const i=t.slug;return`
            <a href="#/project/${i}" class="post-card project-card" data-slug="${i}">
            <div class="project-info">
                <h3>${t.title}</h3>
                <p>${t.excerpt||""}</p>
            </div>
            <div class="project-logo-container">
                ${t.logo?`<img src="${t.logo}" alt="${t.title}" class="project-logo" width="100" height="100">`:""}
            </div>
        </a>
        `}).join("");e.innerHTML=`
        <div class="blog-section" style="margin-top: 40px;">
            <h2>Our Projects</h2>
            <div class="posts-list">
                ${o||'<p class="no-content-message">No projects showcased yet.</p>'}
            </div>
            <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div >
        `}async function je(e,o){const t=`../../content/projects/${o}.md`,i=Me[t];if(!i){v(e);return}try{const s=await i(),{attributes:n,html:a}=s;y(n.title,n.excerpt||n.description),e.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${n.title}</h1>
                <div class="project-detail-logo-container">
                     ${n.logo?`<img src="${n.logo}" alt="${n.title}" class="project-detail-logo" width="300" height="300">`:""}
                </div>
                <div class="post-content">
                    ${T(a)}
                </div>
            </div>
            `}catch(s){console.error("Error loading project:",s),v(e)}}function x(e){return/^[a-z0-9-]+$/i.test(e)}function xe(e){const o=document.getElementById(e);function t(s){document.querySelectorAll(".nav-link").forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===s&&n.classList.add("active")}),(s===""||s==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function i(){const s=window.location.hash;if(window.scrollTo(0,0),t(s),s===""||s==="#/")Te(o);else if(s==="#/blog")ee(o);else if(s==="#/projects")ke(o);else if(s.startsWith("#/post/")){const n=s.replace("#/post/","");x(n)?await te(o,n):v(o)}else if(s.startsWith("#/project/")){const n=s.replace("#/project/","");x(n)?await je(o,n):v(o)}else if(s.startsWith("#/page/")){const n=s.replace("#/page/","");x(n)?me(o,n):v(o)}else v(o)}i(),window.addEventListener("hashchange",i)}function Ee(){let e=document.querySelector("footer");e||(e=document.createElement("footer"),document.body.appendChild(e));const o=h.footer.links.map(t=>`<a href="${t.url}" target="${t.url.startsWith("http")?"_blank":"_self"}" ${t.url.startsWith("http")?'rel="noopener noreferrer"':""}>${t.text}</a>`).join("");e.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${h.footer.copyright}</p>
            <p class="license-info">${h.footer.license}</p>
            <div class="footer-links">
                ${o}
                <a href="#" class="footer-subscribe">Subscribe</a>
            </div>
        </div>
    `,e.querySelector(".footer-subscribe").addEventListener("click",t=>{t.preventDefault(),Ae()})}function Pe(){const e=localStorage.getItem("theme"),o=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&o?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function De(){const o=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o),o}function _e(){const e=document.getElementById("theme-toggle");e&&e.addEventListener("click",()=>{De()})}Pe();_e();N("background-canvas");await Q();await Ie();xe("app");Ee();Se();
