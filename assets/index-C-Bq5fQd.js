(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function Y(t){const o=document.getElementById(t);if(!o)return;const e=o.getContext("2d");let i=o.width=window.innerWidth,n=o.height=window.innerHeight,s=-1e3,r=-1e3;const l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",()=>{i=o.width=window.innerWidth,n=o.height=window.innerHeight,D()}),l||(window.addEventListener("mousemove",g=>{s=g.clientX,r=g.clientY}),window.addEventListener("mouseleave",()=>{s=-1e3,r=-1e3})),new MutationObserver(()=>{d.baseColor=f()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function u(g){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function f(){return document.documentElement.getAttribute("data-theme")==="dark"?{...u("#FFFFFF"),a:.022}:{...u("#000000"),a:.1}}const d={baseColor:f(),hoverColor:{...u("#C2A365"),a:.55},hoverRadius:160,transitionSpeed:.06,mobileGlowChance:2e-4,mobileGlowFadeInSpeed:.025,mobileGlowFadeOutSpeed:.01,layers:[{count:.3,sizeRange:[12,20],speedFactor:.4,opacityMult:.5},{count:.4,sizeRange:[22,34],speedFactor:.7,opacityMult:.75},{count:.3,sizeRange:[36,50],speedFactor:1,opacityMult:1}],totalCount:l?90:300};let p=[],A=0;class k{constructor(a,b,c){this.originX=a,this.originY=b,this.x=a,this.y=b,this.layer=c,this.size=c.sizeRange[0]+Math.random()*(c.sizeRange[1]-c.sizeRange[0]),this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=(Math.random()-.5)*.002*c.speedFactor,this.hoverAmount=0,this.glowPhase="idle",this.driftPhaseX=Math.random()*Math.PI*2,this.driftPhaseY=Math.random()*Math.PI*2,this.driftAmplitudeX=12+Math.random()*25*c.speedFactor,this.driftAmplitudeY=10+Math.random()*20*c.speedFactor,this.driftSpeedX=(.001+Math.random()*.0015)*c.speedFactor,this.driftSpeedY=(8e-4+Math.random()*.0012)*c.speedFactor;const v=Math.random()*Math.PI*2;this.linearDriftX=Math.cos(v)*.12*c.speedFactor,this.linearDriftY=Math.sin(v)*.12*c.speedFactor}isMouseNear(){return Math.sqrt((s-this.x)**2+(r-this.y)**2)<d.hoverRadius}draw(){const a=d.baseColor,b=d.hoverColor,c=this.hoverAmount,v=this.layer.opacityMult,F=Math.round(a.r+(b.r-a.r)*c),B=Math.round(a.g+(b.g-a.g)*c),H=Math.round(a.b+(b.b-a.b)*c),q=(a.a+(b.a-a.a)*c)*v;e.save(),e.translate(this.x,this.y),e.rotate(this.rotation);const M=this.size,j=M*.866;e.beginPath(),e.moveTo(0,-j/2),e.lineTo(-M/2,j/2),e.lineTo(M/2,j/2),e.closePath(),e.fillStyle=`rgba(${F}, ${B}, ${H}, ${q})`,e.fill(),e.restore()}update(){this.x=this.originX+Math.sin(A*this.driftSpeedX+this.driftPhaseX)*this.driftAmplitudeX,this.y=this.originY+Math.sin(A*this.driftSpeedY+this.driftPhaseY)*this.driftAmplitudeY,this.originX+=this.linearDriftX,this.originY+=this.linearDriftY;const a=this.size*2;this.originX>i+a&&(this.originX=-a),this.originX<-a&&(this.originX=i+a),this.originY>n+a&&(this.originY=-a),this.originY<-a&&(this.originY=n+a),this.rotation+=this.rotationSpeed,l?(this.glowPhase==="idle"&&Math.random()<d.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+d.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-d.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+d.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-d.transitionSpeed)}}function D(){p=[];for(const g of d.layers){const a=Math.round(d.totalCount*g.count);for(let b=0;b<a;b++){const c=Math.random()*(i+100)-50,v=Math.random()*(n+100)-50;p.push(new k(c,v,g))}}}function _(){A++,e.clearRect(0,0,i,n),p.forEach(g=>{g.update(),g.draw()}),requestAnimationFrame(_)}D(),_()}const N={title:"Introduction"},z=`<p>Current generative AI achieves incredible things, but it learns passively: consuming massive amounts of data without grounding its knowledge in reality.</p>
<p>DARTS explores and shares progress toward AI that can truly reason, understand what it observes, and build its own model of the world.</p>
<p>We believe this is the path toward AI that is genuinely <strong>curious</strong> and capable of <strong>understanding the world</strong>.</p>
`,X=[],W=Object.freeze(Object.defineProperty({__proto__:null,attributes:N,html:z,toc:X},Symbol.toStringTag,{value:"Module"})),h={siteTitle:"DARTS",siteDescription:"Open ecosystem to research and share advances in <strong>AI that understands</strong>.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Logo"},blog:{title:"Latest Updates"},footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"#license"},{text:"Contribute",url:"#contribute"}]}};function y(t,o){document.title=t?`${t} | DARTS`:"DARTS";let e=document.querySelector('meta[name="description"]');e||(e=document.createElement("meta"),e.name="description",document.head.appendChild(e)),e.content=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const i=(r,l)=>{let m=document.querySelector(`meta[property="${r}"]`)||document.querySelector(`meta[name="${r}"]`);m&&(m.content=l||"")},n=t?`${t} | DARTS`:"DARTS",s=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";i("og:title",n),i("og:description",s),i("twitter:title",n),i("twitter:description",s)}function w(t){t.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function I(t){return t?t.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(o,e,i,n,s)=>{const r=n.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(r)?`<img ${e}${i}" style="width: 100%; max-width: ${r};" ${s}`:o}):""}const G="modulepreload",U=function(t){return"/"+t},E={},K=function(o,e,i){let n=Promise.resolve();if(e&&e.length>0){let m=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");n=m(e.map(u=>{if(u=U(u),u in E)return;E[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":G,f||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((A,k)=>{p.addEventListener("load",A),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return n.then(r=>{for(const l of r||[])l.status==="rejected"&&s(l.reason);return o().catch(s)})},R={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},J=Object.assign({"../../content/posts/demo-post.md":()=>K(()=>import("./demo-post-VqW7cEBo.js"),[])});let S=[];async function V(){try{const t=await fetch("/posts-index.json");if(!t.ok)throw new Error("Failed to load posts index");S=(await t.json()).posts||[],console.log("Posts index loaded:",S.length,"posts")}catch(t){console.error("Error loading posts index:",t),S=[]}}function Q(){return S}function Z(t){y("Blog","Read the latest news and updates from the DARTS Initiative.");const o=S.map(e=>{const i=e.slug;return`
            <a href="#/post/${i}" class="post-card" data-slug="${i}">
                <h3>${e.title}</h3>
                <div class="post-meta" style="${P(e.category)}">
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
                ${o||'<p class="no-content-message">No blog posts published yet.</p>'}
            </div>
             <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div>
    `}async function tt(t,o){const e=`../../content/posts/${o}.md`,i=J[e];if(!i){w(t);return}try{const n=await i(),{attributes:s,html:r}=n;y(s.title,s.excerpt||s.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${s.title}</h1>
                <div class="post-meta" style="${P(s.category)}">
                    <span class="category-name">${s.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${s.date}</span>
                    ${s.author?`<span class="separator">|</span><span class="author">by ${s.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${I(r)}
                </div>
            </div>
            `}catch(n){console.error("Error loading post:",n),w(t)}}function P(t){const o=R[t]||R.default;return`
        color: ${o.color};
        border-color: ${o.color};
    `}const et={title:"About DARTS"},ot=`<p>DARTS is a personal initiative to explore and document the <strong>open development</strong> of the artificial intelligence of the future. A place where projects, ideas, and findings are shared openly, with the goal of making this work accessible to anyone who wants to follow it, build on it, or contribute to it.</p>
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
`,nt=[{level:"1",content:"Who is behind DARTS?"}],st=Object.freeze(Object.defineProperty({__proto__:null,attributes:et,html:ot,toc:nt},Symbol.toStringTag,{value:"Module"})),it={title:"Contributing"},rt=`<p>There are no strict contribution guidelines yet, and no formal rules. The idea is for this to grow organically as the project does.</p>
<p>If you want to get involved, there are three main ways to do it:</p>
<h2>Blog content</h2>
<p>Paper analyses, explainers, news, opinions. If you have something worth saying that fits within the space DARTS cares about, <strong>it is welcome here</strong>.</p>
<h2>Projects</h2>
<p>The projects side of DARTS is still taking shape, but the direction is clear: everything developed under the DARTS umbrella will be <strong>Open-Source</strong>, will be featured in the projects tab, and will aim to integrate actively with the rest of the ecosystem.</p>
<h2>Development and outreach</h2>
<p>Improving the website, helping spread the work, or anything else that could <strong>genuinely be useful</strong> to the project.</p>
<p>If you want to contribute, write to me at <strong>contact@dartsinitiative.com</strong>.</p>
`,at=[{level:"2",content:"Blog content"},{level:"2",content:"Projects"},{level:"2",content:"Development and outreach"}],lt=Object.freeze(Object.defineProperty({__proto__:null,attributes:it,html:rt,toc:at},Symbol.toStringTag,{value:"Module"})),ct={title:"Roadmap"},dt=`<p>[Detailed Roadmap content coming soon...]</p>
`,ut=[],ht=Object.freeze(Object.defineProperty({__proto__:null,attributes:ct,html:dt,toc:ut},Symbol.toStringTag,{value:"Module"})),L=Object.assign({"../../content/pages/about-us.md":st,"../../content/pages/contributing.md":lt,"../../content/pages/roadmap.md":ht});function pt(){return L}function gt(t,o){const e=`../../content/pages/${o}.md`,i=L[e];if(!i){w(t);return}y(i.attributes.title,i.attributes.excerpt||i.attributes.description),t.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${i.attributes.title}</h1>
            <div class="post-content">
                ${I(i.html)}
            </div>
        </div>
        `}const O="darts_newsletter",mt=7,bt=30;function ft(){try{return JSON.parse(localStorage.getItem(O))||{}}catch{return{}}}function $(t){localStorage.setItem(O,JSON.stringify(t))}function vt(){const t=ft();return!(t.subscribedAt&&Date.now()-t.subscribedAt<bt*24*60*60*1e3||t.dismissedAt&&Date.now()-t.dismissedAt<mt*24*60*60*1e3)}function x(t){t.classList.remove("newsletter-visible"),t.addEventListener("transitionend",()=>t.remove(),{once:!0})}function C(){const t=document.createElement("div");t.className="newsletter-banner",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Newsletter subscription"),t.innerHTML=`
    <button class="newsletter-close" aria-label="Close">&times;</button>
    <div class="newsletter-body">
      <div class="newsletter-text">
        <strong>Be part of DARTS</strong>
        <span><b>We are just getting started.</b> Don't miss our new projects, and <em class="newsletter-highlight">get exclusive updates!</em></span>
        <button class="newsletter-already">I'm already subscribed</button>
      </div>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/DARTS"
        method="post"
        class="newsletter-form"
        target="_blank"
      >
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          autocomplete="email"
          class="newsletter-input"
        />
        <button type="submit" class="newsletter-submit">>-/-></button>
      </form>
    </div>
  `,document.body.appendChild(t),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.add("newsletter-visible")})});const o=()=>{$({dismissedAt:Date.now()}),x(t),document.removeEventListener("keydown",e)};t.querySelector(".newsletter-close").addEventListener("click",o),t.querySelector(".newsletter-form").addEventListener("submit",()=>{$({subscribedAt:Date.now()}),setTimeout(()=>x(t),300)}),t.querySelector(".newsletter-already").addEventListener("click",()=>{$({subscribedAt:Date.now()}),x(t)});const e=i=>{i.key==="Escape"&&o()};document.addEventListener("keydown",e)}function wt(){$({subscribedAt:Date.now()})}function yt(){document.querySelector(".newsletter-banner")||C()}function At(){vt()&&setTimeout(C,5e3)}const St=Object.assign({"../../content/intro.md":W});function $t(t){y(null,h.siteDescription);const o=pt(),e=Q(),i=Object.entries(o).map(([l,m])=>`
        <a href="#/page/${l.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${m.attributes.title}</h3>
        </a>
    `).join(""),n=e.slice(0,2).map(l=>{const m=l.slug;return`
            <a href="#/post/${m}" class="post-card" data-slug="${m}">
                <h3>${l.title}</h3>
                <div class="post-meta" style="${P(l.category)}">
                    <span class="category-name">${l.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${l.date}</span>
                    ${l.author?`<span class="separator">|</span><span class="author">by ${l.author}</span>`:""}
                </div>
                <p>${l.excerpt||""}</p>
            </a>
        `}).join(""),s=I(St["../../content/intro.md"]?.html);t.innerHTML=`
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
            ${s}
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
                ${n||'<p class="no-content-message">No news available yet.</p>'}
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
                action="https://buttondown.com/api/emails/embed-subscribe/DARTS"
                method="post"
                class="subscribe-form"
                target="_blank"
            >
                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    autocomplete="email"
                    class="subscribe-input"
                />
                <button type="submit" class="subscribe-submit">>-/-></button>
            </form>
            <p class="subscribe-note">(We don't like spam either, so no worries, we'll keep it meaningful)</p>
        </div>

        <div class="info-text">
            <p>
                Interested in learning more? Check out our
                <a href="${h.footer.links[0].url}" target="_blank">GitHub repository</a>.
            </p>
        </div>
        `;const r=t.querySelector(".subscribe-form");r&&r.addEventListener("submit",()=>wt())}const Tt=Object.assign({});let T=[];async function It(){try{const t=await fetch("/projects-index.json");if(!t.ok)throw new Error("Failed to load projects index");T=(await t.json()).projects||[],console.log("Projects index loaded:",T.length,"projects")}catch(t){console.error("Error loading projects index:",t),T=[]}}function kt(t){y("Projects","Discover the innovative projects developed by the DARTS Initiative.");const o=T.map(e=>{const i=e.slug;return`
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
                ${o||'<p class="no-content-message">No projects showcased yet.</p>'}
            </div>
            <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div >
        `}async function Mt(t,o){const e=`../../content/projects/${o}.md`,i=Tt[e];if(!i){w(t);return}try{const n=await i(),{attributes:s,html:r}=n;y(s.title,s.excerpt||s.description),t.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${s.title}</h1>
                <div class="project-detail-logo-container">
                     ${s.logo?`<img src="${s.logo}" alt="${s.title}" class="project-detail-logo">`:""}
                </div>
                <div class="post-content">
                    ${I(r)}
                </div>
            </div>
            `}catch(n){console.error("Error loading project:",n),w(t)}}function jt(t){const o=document.getElementById(t);function e(n){document.querySelectorAll(".nav-link").forEach(s=>{s.classList.remove("active"),s.getAttribute("href")===n&&s.classList.add("active")}),(n===""||n==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function i(){const n=window.location.hash;if(window.scrollTo(0,0),e(n),n===""||n==="#/")$t(o);else if(n==="#/blog")Z(o);else if(n==="#/projects")kt(o);else if(n.startsWith("#/post/")){const s=n.replace("#/post/","");await tt(o,s)}else if(n.startsWith("#/project/")){const s=n.replace("#/project/","");await Mt(o,s)}else if(n.startsWith("#/page/")){const s=n.replace("#/page/","");gt(o,s)}else w(o)}i(),window.addEventListener("hashchange",i)}function xt(){let t=document.querySelector("footer");t||(t=document.createElement("footer"),document.body.appendChild(t));const o=h.footer.links.map(e=>`<a href="${e.url}" target="${e.url.startsWith("http")?"_blank":"_self"}">${e.text}</a>`).join("");t.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${h.footer.copyright}</p>
            <p class="license-info">${h.footer.license}</p>
            <div class="footer-links">
                ${o}
                <a href="#" class="footer-subscribe">Subscribe</a>
            </div>
        </div>
    `,t.querySelector(".footer-subscribe").addEventListener("click",e=>{e.preventDefault(),yt()})}function Pt(){const t=localStorage.getItem("theme"),o=window.matchMedia("(prefers-color-scheme: dark)").matches;t==="dark"||!t&&o?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function Dt(){const o=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o),o}function _t(){const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",()=>{Dt()})}Pt();_t();Y("background-canvas");await V();await It();jt("app");xt();At();console.log("DARTS Initiative Website Initialized");
