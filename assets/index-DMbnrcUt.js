(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function N(e){const o=document.getElementById(e);if(!o)return;const t=o.getContext("2d");let r=o.width=window.innerWidth,s=o.height=window.innerHeight,n=-1e3,a=-1e3;const i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",()=>{r=o.width=window.innerWidth,s=o.height=window.innerHeight,D()}),i||(window.addEventListener("mousemove",f=>{n=f.clientX,a=f.clientY}),window.addEventListener("mouseleave",()=>{n=-1e3,a=-1e3})),new MutationObserver(()=>{d.baseColor=p()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function c(f){const l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function p(){return document.documentElement.getAttribute("data-theme")==="dark"?{...c("#FFFFFF"),a:.022}:{...c("#000000"),a:.1}}const d={baseColor:p(),hoverColor:{...c("#C2A365"),a:.55},hoverRadius:160,transitionSpeed:.06,mobileGlowChance:2e-4,mobileGlowFadeInSpeed:.025,mobileGlowFadeOutSpeed:.01,layers:[{count:.3,sizeRange:[12,20],speedFactor:.4,opacityMult:.5},{count:.4,sizeRange:[22,34],speedFactor:.7,opacityMult:.75},{count:.3,sizeRange:[36,50],speedFactor:1,opacityMult:1}],totalCount:i?90:300};let h=[],b=0;class v{constructor(l,w,g){this.originX=l,this.originY=w,this.x=l,this.y=w,this.layer=g,this.size=g.sizeRange[0]+Math.random()*(g.sizeRange[1]-g.sizeRange[0]),this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=(Math.random()-.5)*.002*g.speedFactor,this.hoverAmount=0,this.glowPhase="idle",this.driftPhaseX=Math.random()*Math.PI*2,this.driftPhaseY=Math.random()*Math.PI*2,this.driftAmplitudeX=12+Math.random()*25*g.speedFactor,this.driftAmplitudeY=10+Math.random()*20*g.speedFactor,this.driftSpeedX=(.001+Math.random()*.0015)*g.speedFactor,this.driftSpeedY=(8e-4+Math.random()*.0012)*g.speedFactor;const A=Math.random()*Math.PI*2;this.linearDriftX=Math.cos(A)*.12*g.speedFactor,this.linearDriftY=Math.sin(A)*.12*g.speedFactor}isMouseNear(){return Math.sqrt((n-this.x)**2+(a-this.y)**2)<d.hoverRadius}draw(){const l=d.baseColor,w=d.hoverColor,g=this.hoverAmount,A=this.layer.opacityMult,q=Math.round(l.r+(w.r-l.r)*g),B=Math.round(l.g+(w.g-l.g)*g),H=Math.round(l.b+(w.b-l.b)*g),Y=(l.a+(w.a-l.a)*g)*A;t.save(),t.translate(this.x,this.y),t.rotate(this.rotation);const k=this.size,I=k*.866;t.beginPath(),t.moveTo(0,-I/2),t.lineTo(-k/2,I/2),t.lineTo(k/2,I/2),t.closePath(),t.fillStyle=`rgba(${q}, ${B}, ${H}, ${Y})`,t.fill(),t.restore()}update(){this.x=this.originX+Math.sin(b*this.driftSpeedX+this.driftPhaseX)*this.driftAmplitudeX,this.y=this.originY+Math.sin(b*this.driftSpeedY+this.driftPhaseY)*this.driftAmplitudeY,this.originX+=this.linearDriftX,this.originY+=this.linearDriftY;const l=this.size*2;this.originX>r+l&&(this.originX=-l),this.originX<-l&&(this.originX=r+l),this.originY>s+l&&(this.originY=-l),this.originY<-l&&(this.originY=s+l),this.rotation+=this.rotationSpeed,i?(this.glowPhase==="idle"&&Math.random()<d.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+d.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-d.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+d.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-d.transitionSpeed)}}function D(){h=[];for(const f of d.layers){const l=Math.round(d.totalCount*f.count);for(let w=0;w<l;w++){const g=Math.random()*(r+100)-50,A=Math.random()*(s+100)-50;h.push(new v(g,A,f))}}}function _(){b++,t.clearRect(0,0,r,s),h.forEach(f=>{f.update(),f.draw()}),requestAnimationFrame(_)}D(),_()}const z={title:"Introduction"},X=`<p>Current generative AI achieves incredible things, but it learns passively: consuming massive amounts of data without grounding its knowledge in reality.</p>
<p>DARTS explores and shares progress toward AI that can truly reason, understand what it observes, and build its own model of the world.</p>
<p>We believe this is the path toward AI that is genuinely <strong>curious</strong> and capable of <strong>understanding the world</strong>.</p>
`,W=[],U=Object.freeze(Object.defineProperty({__proto__:null,attributes:z,html:X,toc:W},Symbol.toStringTag,{value:"Module"})),m={siteTitle:"DARTS",siteDescription:"Open ecosystem to research and share advances in <strong>AI that understands</strong>.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Logo"},blog:{title:"Latest Updates"},newsletterUrl:"https://buttondown.com/api/emails/embed-subscribe/DARTS",footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"https://creativecommons.org/licenses/by/4.0/"},{text:"Contribute",url:"#/page/contributing"}]}};function S(e,o){document.title=e?`${e} | DARTS`:"DARTS";let t=document.querySelector('meta[name="description"]');t||(t=document.createElement("meta"),t.name="description",document.head.appendChild(t)),t.content=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const r=(a,i)=>{let u=document.querySelector(`meta[property="${a}"]`)||document.querySelector(`meta[name="${a}"]`);u&&(u.content=i||"")},s=e?`${e} | DARTS`:"DARTS",n=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";r("og:title",s),r("og:description",n),r("twitter:title",s),r("twitter:description",n)}function y(e){e.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function T(e){return e?e.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(o,t,r,s,n)=>{const a=s.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(a)?`<img ${t}${r}" style="width: 100%; max-width: ${a};" ${n}`:o}):""}const G="modulepreload",V=function(e){return"/"+e},R={},K=function(o,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");s=u(t.map(c=>{if(c=V(c),c in R)return;R[c]=!0;const p=c.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":G,p||(h.as="script"),h.crossOrigin="",h.href=c,i&&h.setAttribute("nonce",i),document.head.appendChild(h),p)return new Promise((b,v)=>{h.addEventListener("load",b),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return s.then(a=>{for(const i of a||[])i.status==="rejected"&&n(i.reason);return o().catch(n)})},L={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},J=Object.assign({"../../content/posts/demo-post.md":()=>K(()=>import("./demo-post-VqW7cEBo.js"),[])});let M=[];async function Q(){try{const e=await fetch("/posts-index.json");if(!e.ok)throw new Error("Failed to load posts index");M=(await e.json()).posts||[]}catch(e){console.error("Error loading posts index:",e),M=[]}}function Z(){return M}function ee(e){S("Blog","Read the latest news and updates from the DARTS Initiative.");const o=M.map(t=>{const r=t.slug;return`
            <a href="#/post/${r}" class="post-card" data-slug="${r}">
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
    `}async function te(e,o){const t=`../../content/posts/${o}.md`,r=J[t];if(!r){y(e);return}try{const s=await r(),{attributes:n,html:a}=s;S(n.title,n.excerpt||n.description),e.innerHTML=`
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
            `}catch(s){console.error("Error loading post:",s),y(e)}}function P(e){const o=L[e]||L.default;return`
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
`,se=[{level:"1",content:"Who is behind DARTS?"}],re=Object.freeze(Object.defineProperty({__proto__:null,attributes:oe,html:ne,toc:se},Symbol.toStringTag,{value:"Module"})),ie={title:"Contributing"},ae=`<p>There are no strict contribution guidelines yet, and no formal rules. The idea is for this to grow organically as the project does.</p>
<p>If you want to get involved, there are three main ways to do it:</p>
<h2>Blog content</h2>
<p>Paper analyses, explainers, news, opinions. If you have something worth saying that fits within the space DARTS cares about, <strong>it is welcome here</strong>.</p>
<h2>Projects</h2>
<p>The projects side of DARTS is still taking shape, but the direction is clear: everything developed under the DARTS umbrella will be <strong>Open-Source</strong>, will be featured in the projects tab, and will aim to integrate actively with the rest of the ecosystem.</p>
<h2>Development and outreach</h2>
<p>Improving the website, helping spread the work, or anything else that could <strong>genuinely be useful</strong> to the project.</p>
<p>If you want to contribute, write to me at <strong>contact@dartsinitiative.com</strong>.</p>
`,le=[{level:"2",content:"Blog content"},{level:"2",content:"Projects"},{level:"2",content:"Development and outreach"}],ce=Object.freeze(Object.defineProperty({__proto__:null,attributes:ie,html:ae,toc:le},Symbol.toStringTag,{value:"Module"})),de={title:"Roadmap"},ue=`<p>[Detailed Roadmap content coming soon...]</p>
`,he=[],pe=Object.freeze(Object.defineProperty({__proto__:null,attributes:de,html:ue,toc:he},Symbol.toStringTag,{value:"Module"})),C=Object.assign({"../../content/pages/about-us.md":re,"../../content/pages/contributing.md":ce,"../../content/pages/roadmap.md":pe});function ge(){return C}function me(e,o){const t=`../../content/pages/${o}.md`,r=C[t];if(!r){y(e);return}S(r.attributes.title,r.attributes.excerpt||r.attributes.description),e.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${r.attributes.title}</h1>
            <div class="post-content">
                ${T(r.html)}
            </div>
        </div>
        `}const O="darts_newsletter",fe=7,be=30;function ve(){try{return JSON.parse(localStorage.getItem(O))||{}}catch{return{}}}function $(e){localStorage.setItem(O,JSON.stringify(e))}function we(){const e=ve();return!(e.subscribedAt&&Date.now()-e.subscribedAt<be*24*60*60*1e3||e.dismissedAt&&Date.now()-e.dismissedAt<fe*24*60*60*1e3)}function E(e){e.classList.remove("newsletter-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0})}function F(){const e=document.createElement("div");e.className="newsletter-banner",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Newsletter subscription"),e.innerHTML=`
    <button class="newsletter-close" aria-label="Close">&times;</button>
    <div class="newsletter-body">
      <div class="newsletter-text">
        <strong>Be part of DARTS</strong>
        <span><b>We are just getting started.</b> Don't miss our new projects, and <em class="newsletter-highlight">get exclusive updates!</em></span>
        <button class="newsletter-already">I'm already subscribed</button>
      </div>
      <form
        action="${m.newsletterUrl}"
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
  `,document.body.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("newsletter-visible")})});const o=()=>{$({dismissedAt:Date.now()}),E(e),document.removeEventListener("keydown",t)};e.querySelector(".newsletter-close").addEventListener("click",o),e.querySelector(".newsletter-form").addEventListener("submit",()=>{$({subscribedAt:Date.now()}),document.removeEventListener("keydown",t),setTimeout(()=>E(e),300)}),e.querySelector(".newsletter-already").addEventListener("click",()=>{$({subscribedAt:Date.now()}),document.removeEventListener("keydown",t),E(e)});const t=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",t)}function ye(){$({subscribedAt:Date.now()})}function Ae(){document.querySelector(".newsletter-banner")||F()}function Se(){we()&&setTimeout(F,5e3)}const $e=Object.assign({"../../content/intro.md":U});function Me(e){S(null,m.siteDescription);const o=ge(),t=Z(),r=Object.entries(o).map(([i,u])=>`
        <a href="#/page/${i.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${u.attributes.title}</h3>
        </a>
    `).join(""),s=t.slice(0,2).map(i=>{const u=i.slug;return`
            <a href="#/post/${u}" class="post-card" data-slug="${u}">
                <h3>${i.title}</h3>
                <div class="post-meta" style="${P(i.category)}">
                    <span class="category-name">${i.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${i.date}</span>
                    ${i.author?`<span class="separator">|</span><span class="author">by ${i.author}</span>`:""}
                </div>
                <p>${i.excerpt||""}</p>
            </a>
        `}).join(""),n=T($e["../../content/intro.md"]?.html);e.innerHTML=`
    <div class="logo-wrapper">
        <img
            src="${m.logo.light.svg}"
            alt="${m.logo.alt}"
            class="logo logo-light"
            width="500"
            height="500"
        >
        <img
            src="${m.logo.dark.svg}"
            alt="${m.logo.alt}"
            class="logo logo-dark"
            width="500"
            height="500"
        >
    </div>
        <h1 class="title">${m.siteTitle}</h1>
        <p class="description">${m.siteDescription}</p>

        <div class="intro-section">
            ${n}
        </div>

        <div class="buttons-section">
            <h2>Explore DARTS</h2>
            <div class="buttons-list">
                ${r}
            </div>
        </div>

        <div class="blog-section">
            <h2>${m.blog.title}</h2>
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
                action="${m.newsletterUrl}"
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
        `,e.querySelectorAll(".logo-light").forEach(i=>{i.addEventListener("error",function(){this.src=m.logo.light.png},{once:!0})}),e.querySelectorAll(".logo-dark").forEach(i=>{i.addEventListener("error",function(){this.src=m.logo.dark.png},{once:!0})});{const i=e.querySelectorAll(".logo");let u=1,c=0,p=null;const d=()=>{if(c=c*.208+(1-u)*.058,u+=c,Math.abs(1-u)<5e-4&&Math.abs(c)<5e-4){u=1,c=0,i.forEach(v=>{v.style.transform=""}),p=null;return}i.forEach(v=>{v.style.transform=`scale(${u})`}),p=requestAnimationFrame(d)};i.forEach(h=>{h.style.cursor="pointer",h.style.willChange="transform",h.addEventListener("click",()=>{u=Math.max(.3,u-.22),c=0,p&&cancelAnimationFrame(p),p=requestAnimationFrame(d)})})}if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const i=e.querySelector(".logo-wrapper");if(i){const u=i.getBoundingClientRect().top,c=()=>{if(!i.isConnected){window.removeEventListener("scroll",c);return}const p=i.getBoundingClientRect(),d=p.height;if(!d)return;const h=u+d,b=Math.max(0,Math.min(1,(u-p.top)/h)),v=2*b*b*b;i.style.transform=v>0?`translateX(${v*130}%)`:"",i.style.opacity=v>0?1-b:""};window.addEventListener("scroll",c,{passive:!0})}}const a=e.querySelector(".subscribe-form");a&&a.addEventListener("submit",()=>ye())}const Te=Object.assign({});let x=[];async function ke(){try{const e=await fetch("/projects-index.json");if(!e.ok)throw new Error("Failed to load projects index");x=(await e.json()).projects||[]}catch(e){console.error("Error loading projects index:",e),x=[]}}function Ie(e){S("Projects","Discover the innovative projects developed by the DARTS Initiative.");const o=x.map(t=>{const r=t.slug;return`
            <a href="#/project/${r}" class="post-card project-card" data-slug="${r}">
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
        `}async function Ee(e,o){const t=`../../content/projects/${o}.md`,r=Te[t];if(!r){y(e);return}try{const s=await r(),{attributes:n,html:a}=s;S(n.title,n.excerpt||n.description),e.innerHTML=`
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
            `}catch(s){console.error("Error loading project:",s),y(e)}}function j(e){return/^[a-z0-9-]+$/i.test(e)}function je(e){const o=document.getElementById(e);function t(s){document.querySelectorAll(".nav-link").forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===s&&n.classList.add("active")}),(s===""||s==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function r(){const s=window.location.hash;try{if(window.scrollTo(0,0),t(s),s===""||s==="#/")Me(o);else if(s==="#/blog")ee(o);else if(s==="#/projects")Ie(o);else if(s.startsWith("#/post/")){const n=s.replace("#/post/","");j(n)?await te(o,n):y(o)}else if(s.startsWith("#/project/")){const n=s.replace("#/project/","");j(n)?await Ee(o,n):y(o)}else if(s.startsWith("#/page/")){const n=s.replace("#/page/","");j(n)?me(o,n):y(o)}else y(o)}catch(n){console.error("Route error:",n),y(o)}}r(),window.addEventListener("hashchange",r)}function xe(){let e=document.querySelector("footer");e||(e=document.createElement("footer"),document.body.appendChild(e));const o=m.footer.links.map(t=>`<a href="${t.url}" target="${t.url.startsWith("http")?"_blank":"_self"}" ${t.url.startsWith("http")?'rel="noopener noreferrer"':""}>${t.text}</a>`).join("");e.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${m.footer.copyright}</p>
            <p class="license-info">${m.footer.license}</p>
            <div class="footer-links">
                ${o}
                <a href="#" class="footer-subscribe">Subscribe</a>
            </div>
        </div>
    `,e.querySelector(".footer-subscribe").addEventListener("click",t=>{t.preventDefault(),Ae()})}function Pe(){const e=localStorage.getItem("theme"),o=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&o?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function De(){const o=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o),o}function _e(){const e=document.getElementById("theme-toggle");e&&e.addEventListener("click",()=>{De()})}Pe();_e();N("background-canvas");try{await Q()}catch(e){console.error("Failed to load posts:",e)}try{await ke()}catch(e){console.error("Failed to load projects:",e)}je("app");xe();Se();
