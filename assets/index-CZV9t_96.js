(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function X(e){const n=document.getElementById(e);if(!n)return;const t=n.getContext("2d");let r=n.width=window.innerWidth,s=n.height=window.innerHeight,o=-1e3,l=-1e3;const i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;let d=r;window.addEventListener("resize",()=>{const m=window.innerWidth,a=window.innerHeight,w=m!==d;r=n.width=m,s=n.height=a,w&&(d=m,A())}),i||(window.addEventListener("mousemove",m=>{o=m.clientX,l=m.clientY}),window.addEventListener("mouseleave",()=>{o=-1e3,l=-1e3})),new MutationObserver(()=>{c.baseColor=b()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function u(m){const a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(m);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function b(){return document.documentElement.getAttribute("data-theme")==="dark"?{...u("#FFFFFF"),a:i?.03:.022}:{...u("#000000"),a:.1}}const c={baseColor:b(),hoverColor:{...u("#C2A365"),a:.55},hoverRadius:160,transitionSpeed:.06,mobileGlowChance:2e-4,mobileGlowFadeInSpeed:.025,mobileGlowFadeOutSpeed:.01,layers:[{count:.3,sizeRange:[12,20],speedFactor:.4,opacityMult:.5},{count:.4,sizeRange:[22,34],speedFactor:.7,opacityMult:.75},{count:.3,sizeRange:[36,50],speedFactor:1,opacityMult:1}],totalCount:i?90:300};let y=[],g=0;class v{constructor(a,w,p){this.originX=a,this.originY=w,this.x=a,this.y=w,this.layer=p,this.size=p.sizeRange[0]+Math.random()*(p.sizeRange[1]-p.sizeRange[0]),this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=(Math.random()-.5)*.002*p.speedFactor,this.hoverAmount=0,this.glowPhase="idle",this.driftPhaseX=Math.random()*Math.PI*2,this.driftPhaseY=Math.random()*Math.PI*2,this.driftAmplitudeX=12+Math.random()*25*p.speedFactor,this.driftAmplitudeY=10+Math.random()*20*p.speedFactor,this.driftSpeedX=(.001+Math.random()*.0015)*p.speedFactor,this.driftSpeedY=(8e-4+Math.random()*.0012)*p.speedFactor;const $=Math.random()*Math.PI*2;this.linearDriftX=Math.cos($)*.12*p.speedFactor,this.linearDriftY=Math.sin($)*.12*p.speedFactor}isMouseNear(){return Math.sqrt((o-this.x)**2+(l-this.y)**2)<c.hoverRadius}draw(){const a=c.baseColor,w=c.hoverColor,p=this.hoverAmount,$=this.layer.opacityMult,N=Math.round(a.r+(w.r-a.r)*p),Y=Math.round(a.g+(w.g-a.g)*p),B=Math.round(a.b+(w.b-a.b)*p),z=(a.a+(w.a-a.a)*p)*$;t.save(),t.translate(this.x,this.y),t.rotate(this.rotation);const j=this.size,x=j*.866;t.beginPath(),t.moveTo(0,-x/2),t.lineTo(-j/2,x/2),t.lineTo(j/2,x/2),t.closePath(),t.fillStyle=`rgba(${N}, ${Y}, ${B}, ${z})`,t.fill(),t.restore()}update(){this.x=this.originX+Math.sin(g*this.driftSpeedX+this.driftPhaseX)*this.driftAmplitudeX,this.y=this.originY+Math.sin(g*this.driftSpeedY+this.driftPhaseY)*this.driftAmplitudeY,this.originX+=this.linearDriftX,this.originY+=this.linearDriftY;const a=this.size*2;this.originX>r+a&&(this.originX=-a),this.originX<-a&&(this.originX=r+a),this.originY>s+a&&(this.originY=-a),this.originY<-a&&(this.originY=s+a),this.rotation+=this.rotationSpeed,i?(this.glowPhase==="idle"&&Math.random()<c.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+c.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-c.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+c.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-c.transitionSpeed)}}function A(){y=[];for(const m of c.layers){const a=Math.round(c.totalCount*m.count);for(let w=0;w<a;w++){const p=Math.random()*(r+100)-50,$=Math.random()*(s+100)-50;y.push(new v(p,$,m))}}}function I(){g++,t.clearRect(0,0,r,s),y.forEach(m=>{m.update(),m.draw()}),requestAnimationFrame(I)}A(),I()}const W={title:"Introduction"},G=`<p>Current generative AI achieves remarkable things, but it learns <strong>passively</strong>. It does not <strong>understand</strong> — it <strong>imitates</strong>. It imitates our reasoning, our biases, our limitations.</p>
<p><strong>DARTS</strong> is an open research initiative working toward AI that genuinely understands its environment, builds its <strong>own model of the world</strong>, and generates <strong>new knowledge</strong> rather than recombining existing patterns.</p>
<p>We focus on three areas where we believe the next leap forward will happen: <strong>world models</strong>, <strong>causal learning</strong>, and <strong>multi-agent systems</strong>. All of our work is developed in the open.</p>
`,U=[],K=Object.freeze(Object.defineProperty({__proto__:null,attributes:W,html:G,toc:U},Symbol.toStringTag,{value:"Module"})),f={siteTitle:"DARTS",siteDescription:"Open initiative to research and share advances in <strong>AI that understands</strong>.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Logo"},blog:{title:"Latest Updates"},newsletterUrl:"https://buttondown.com/api/emails/embed-subscribe/DARTS",footer:{copyright:"© 2026 DARTS Initiative",license:"Content licensed under CC BY 4.0",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"https://creativecommons.org/licenses/by/4.0/"},{text:"Contact",url:"mailto:contact@dartsinitiative.com"}]}};function k(e,n){document.title=e?`${e} | DARTS`:"DARTS";let t=document.querySelector('meta[name="description"]');t||(t=document.createElement("meta"),t.name="description",document.head.appendChild(t)),t.content=n||"Open initiative to research and share advances in AI that understands";const r=(l,i)=>{let d=document.querySelector(`meta[property="${l}"]`)||document.querySelector(`meta[name="${l}"]`);d&&(d.content=i||"")},s=e?`${e} | DARTS`:"DARTS",o=n||"Open initiative to research and share advances in AI that understands.";r("og:title",s),r("og:description",o),r("twitter:title",s),r("twitter:description",o)}function S(e){e.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function M(e){return e?e.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(n,t,r,s,o)=>{const l=s.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(l)?`<img ${t}${r}" style="width: 100%; max-width: ${l};"${o.slice(1)}`:n}):""}const V="modulepreload",J=function(e){return"/"+e},C={},Q=function(n,t,r){let s=Promise.resolve();if(t&&t.length>0){let d=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),i=l?.nonce||l?.getAttribute("nonce");s=d(t.map(h=>{if(h=J(h),h in C)return;C[h]=!0;const u=h.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${b}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":V,u||(c.as="script"),c.crossOrigin="",c.href=h,i&&c.setAttribute("nonce",i),document.head.appendChild(c),u)return new Promise((y,g)=>{c.addEventListener("load",y),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return s.then(l=>{for(const i of l||[])i.status==="rejected"&&o(i.reason);return n().catch(o)})},R={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},Z=Object.assign({"../../content/posts/welcome-to-darts.md":()=>Q(()=>import("./welcome-to-darts-VqW7cEBo.js"),[])});let T=[];async function ee(){try{const e=await fetch("/posts-index.json");if(!e.ok)throw new Error("Failed to load posts index");T=(await e.json()).posts||[]}catch(e){console.error("Error loading posts index:",e),T=[]}}function te(){return T}function ne(e){k("Content","Read the latest news and updates from the DARTS Initiative.");const n=T.map(t=>{const r=t.slug;return`
            <a href="#/post/${r}" class="post-card" data-slug="${r}">
                <h3>${t.title}</h3>
                <div class="post-meta" style="${D(t.category)}">
                    <span class="category-name">${t.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${t.date}</span>
                    ${t.author?`<span class="separator">|</span><span class="author">by ${t.author}</span>`:""}
                </div>
                <p>${t.excerpt||""}</p>
            </a>
        `}).join("");e.innerHTML=`
        <div class="blog-section" style="margin-top: 40px;">
            <h2>All Posts</h2>
            <div class="posts-list">
                ${n||'<p class="no-content-message">No posts published yet.</p>'}
            </div>
             <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div>
    `}async function oe(e,n){const t=`../../content/posts/${n}.md`,r=Z[t];if(!r){S(e);return}try{const s=await r(),{attributes:o,html:l}=s;k(o.title,o.excerpt||o.description),e.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Content</a>
                <h1>${o.title}</h1>
                <div class="post-meta" style="${D(o.category)}">
                    <span class="category-name">${o.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${o.date}</span>
                    ${o.author?`<span class="separator">|</span><span class="author">by ${o.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${M(l)}
                </div>
            </div>
            `}catch(s){console.error("Error loading post:",s),S(e)}}function D(e){const n=R[e]||R.default;return`
        color: ${n.color};
        border-color: ${n.color};
    `}const se={title:"About DARTS"},re=`<p>DARTS is an open research initiative working toward AI that genuinely understands
its environment, builds its own model of the world, and generates new knowledge
rather than recombining existing patterns.</p>
<p>The most capable AI systems today come out of a handful of closed laboratories.
The research is often published, but the models, the data, and the real engineering
decisions behind them are not. DARTS exists as a response to that: not out of
opposition, but out of the belief that meaningful AI research can happen in the
open, driven by people who contribute simply because they care about the problem.</p>
<p>We focus on three areas that we believe are essential for the next step forward.</p>
<ul>
<li>
<p><strong>World Models</strong> — AI that builds and navigates internal representations of reality,
so it can imagine, plan, and act beyond what it has directly observed.</p>
</li>
<li>
<p><strong>Causal Learning</strong> — moving beyond correlation toward systems that understand why
things happen, through exploration and interaction with the world.</p>
</li>
<li>
<p><strong>Multi-Agent Systems</strong> — AI systems that communicate, coordinate, and learn from
each other. Not because collaboration is a feature, but because we believe emergent
learning through interaction is fundamental to how genuine understanding develops.</p>
</li>
</ul>
<p>These three lines are not independent. They form a single thesis: <strong>an agent that
reasons in isolation, no matter how capable, has a ceiling</strong>. Intelligence that truly
understands the world needs models of it, causal reasoning within it, and the
capacity to learn from others inside it.</p>
<p>All of our work is developed in the open.</p>
`,ie=[],ae=Object.freeze(Object.defineProperty({__proto__:null,attributes:se,html:re,toc:ie},Symbol.toStringTag,{value:"Module"})),le={title:"Contributing"},ce=`<p>DARTS is built on the belief that meaningful research can happen in the open,
driven by people who care about the problem. If that resonates with you,
there are several ways to get involved.</p>
<h2>Content</h2>
<p>Paper analyses, explainers, opinions, news. If you have something worth saying
within the space DARTS cares about, it is welcome here.</p>
<h2>Projects</h2>
<p>Everything developed under DARTS is open source. If you want to contribute to
an active project, propose a new one, or bring work you are already doing into
this space, we want to hear about it.</p>
<h2>Development and outreach</h2>
<p>Improving the website, helping spread the work, translating content, or anything
else that could genuinely move the initiative forward.</p>
<hr>
<p>If you want to contribute in any of these ways, reach out at
<strong>contact@dartsinitiative.com</strong>.</p>
`,de=[{level:"2",content:"Content"},{level:"2",content:"Projects"},{level:"2",content:"Development and outreach"}],he=Object.freeze(Object.defineProperty({__proto__:null,attributes:le,html:ce,toc:de},Symbol.toStringTag,{value:"Module"})),ue={title:"What to Expect"},pe=`<p>DARTS is built around open work. Everything developed here is shared publicly
as it happens: the ideas, the process, the decisions, and the results.</p>
<p>This is what you will find here.</p>
<h2>Projects</h2>
<p>All projects developed under DARTS are open source. This includes code
repositories, utilities, simulation environments, and models. Everything
is accessible directly through our GitHub organization and, where relevant,
through Hugging Face.</p>
<h2>Content</h2>
<p><strong>DARTS updates</strong> — Decisions about the direction of the initiative, new
collaborators, new projects, and anything else that shapes what DARTS is becoming.</p>
<p><strong>Project updates</strong> — As projects move forward, we document them. Not just
the milestones, but the decisions behind them: what was tried, what the results
looked like, and what comes next.</p>
<p><strong>Ecosystem</strong> — Relevant developments in the broader research landscape,
analyzed through the lens of what DARTS is actively working on. Not a
summary of the field, but an assessment of what matters for the problems
we are trying to solve.</p>
`,me=[{level:"2",content:"Projects"},{level:"2",content:"Content"}],ge=Object.freeze(Object.defineProperty({__proto__:null,attributes:ue,html:pe,toc:me},Symbol.toStringTag,{value:"Module"})),F=Object.assign({"../../content/pages/about-us.md":ae,"../../content/pages/contributing.md":he,"../../content/pages/what-to-expect.md":ge});function fe(){return F}function be(e,n){const t=`../../content/pages/${n}.md`,r=F[t];if(!r){S(e);return}k(r.attributes.title,r.attributes.excerpt||r.attributes.description),e.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${r.attributes.title}</h1>
            <div class="post-content">
                ${M(r.html)}
            </div>
        </div>
        `}const O="darts_newsletter",ve=7,we=30;function ye(){try{return JSON.parse(localStorage.getItem(O))||{}}catch{return{}}}function E(e){localStorage.setItem(O,JSON.stringify(e))}function Se(){const e=ye();return!(e.subscribedAt&&Date.now()-e.subscribedAt<we*24*60*60*1e3||e.dismissedAt&&Date.now()-e.dismissedAt<ve*24*60*60*1e3)}function P(e){e.classList.remove("newsletter-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0})}function q(){const e=document.createElement("div");e.className="newsletter-banner",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Newsletter subscription"),e.innerHTML=`
    <button class="newsletter-close" aria-label="Close">&times;</button>
    <div class="newsletter-body">
      <div class="newsletter-text">
        <strong>Follow DARTS</strong>
        <span>Leave your email and we will keep you in the loop with our <em class="newsletter-highlight">open research.</em></span>
        <button class="newsletter-already">I'm already subscribed</button>
      </div>
      <form
        action="${f.newsletterUrl}"
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
  `,document.body.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("newsletter-visible")})});const n=()=>{E({dismissedAt:Date.now()}),P(e),document.removeEventListener("keydown",t)};e.querySelector(".newsletter-close").addEventListener("click",n),e.querySelector(".newsletter-form").addEventListener("submit",()=>{document.removeEventListener("keydown",t),setTimeout(()=>{P(e),H()},300),E({subscribedAt:Date.now()})}),e.querySelector(".newsletter-already").addEventListener("click",()=>{E({subscribedAt:Date.now()}),document.removeEventListener("keydown",t),P(e)});const t=r=>{r.key==="Escape"&&n()};document.addEventListener("keydown",t)}function H(){const e=document.createElement("div");e.className="thankyou-overlay",e.innerHTML=`
    <div class="thankyou-popup" role="dialog" aria-label="Thank you">
      <button class="newsletter-close" aria-label="Close">&times;</button>
      <img src="/images/thanks.png" alt="Thank you" class="thankyou-img" />
      <p class="thankyou-message">Thank you for joining us!</p>
    </div>
  `,document.body.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("thankyou-visible")})});const n=()=>{e.classList.remove("thankyou-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),document.removeEventListener("keydown",t)};e.querySelector(".newsletter-close").addEventListener("click",n),e.addEventListener("click",r=>{r.target===e&&n()});const t=r=>{r.key==="Escape"&&n()};document.addEventListener("keydown",t)}function Ae(){E({subscribedAt:Date.now()}),H()}function $e(){document.querySelector(".newsletter-banner")||q()}function ke(){Se()&&setTimeout(q,5e3)}const Ee=Object.assign({"../../content/intro.md":K});function Te(e){k(null,f.siteDescription);const n=fe(),t=te(),r=Object.entries(n).map(([i,d])=>`
        <a href="#/page/${i.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${d.attributes.title}</h3>
        </a>
    `).join(""),s=t.slice(0,2).map(i=>{const d=i.slug;return`
            <a href="#/post/${d}" class="post-card" data-slug="${d}">
                <h3>${i.title}</h3>
                <div class="post-meta" style="${D(i.category)}">
                    <span class="category-name">${i.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${i.date}</span>
                    ${i.author?`<span class="separator">|</span><span class="author">by ${i.author}</span>`:""}
                </div>
                <p>${i.excerpt||""}</p>
            </a>
        `}).join(""),o=M(Ee["../../content/intro.md"]?.html);e.innerHTML=`
    <div class="logo-wrapper">
        <img
            src="${f.logo.light.svg}"
            alt="${f.logo.alt}"
            class="logo logo-light"
            width="500"
            height="500"
        >
        <img
            src="${f.logo.dark.svg}"
            alt="${f.logo.alt}"
            class="logo logo-dark"
            width="500"
            height="500"
        >
    </div>
        <h1 class="title">${f.siteTitle}</h1>
        <p class="description">${f.siteDescription}</p>

        <div class="intro-section">
            ${o}
        </div>

        <div class="buttons-section">
            <h2>Explore DARTS</h2>
            <div class="buttons-list">
                ${r}
            </div>
        </div>

        <div class="blog-section">
            <h2>${f.blog.title}</h2>
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
                DARTS publishes project updates, technical content, and research notes as the work happens.
                If you want to follow along, <strong>leave your email</strong> here.
            </p>
            <form
                action="${f.newsletterUrl}"
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
        `,e.querySelectorAll(".logo-light").forEach(i=>{i.addEventListener("error",function(){this.src=f.logo.light.png},{once:!0})}),e.querySelectorAll(".logo-dark").forEach(i=>{i.addEventListener("error",function(){this.src=f.logo.dark.png},{once:!0})});{const i=e.querySelectorAll(".logo");let d=1,h=0,u=null;const b=()=>{if(h=h*.872+(1-d)*.08,d+=h,Math.abs(1-d)<5e-4&&Math.abs(h)<5e-4){d=1,h=0,i.forEach(A=>{A.style.transform=""}),u=null;return}i.forEach(A=>{A.style.transform=`scale(${d})`}),u=requestAnimationFrame(b)};let c=0,y=!1;i.forEach(g=>{g.style.cursor="pointer",g.style.willChange="transform",g.addEventListener("click",()=>{if(!y&&(d=Math.max(.3,d-.22),h=0,u&&cancelAnimationFrame(u),u=requestAnimationFrame(b),c++,c===10)){y=!0,u&&cancelAnimationFrame(u);const v=e.querySelector(".logo-wrapper");v&&(v.dispatchEvent(new Event("escaped")),v.style.transition="transform 0.6s cubic-bezier(0.4, 0, 1, 1), opacity 0.6s ease",v.style.transform="translateX(150%)",v.style.opacity="0")}})})}if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const i=e.querySelector(".logo-wrapper");if(i){const d=i.getBoundingClientRect().top;let h=!1;i.addEventListener("escaped",()=>{h=!0});const u=()=>{if(!i.isConnected){window.removeEventListener("scroll",u);return}if(h)return;const b=i.getBoundingClientRect(),c=b.height;if(!c)return;const y=d+c,g=Math.max(0,Math.min(1,(d-b.top)/y)),v=2*g*g*g;i.style.transform=v>0?`translateX(${v*130}%)`:"",i.style.opacity=v>0?1-g:""};window.addEventListener("scroll",u,{passive:!0})}}const l=e.querySelector(".subscribe-form");l&&l.addEventListener("submit",()=>Ae())}const Me=Object.assign({});let _=[];async function je(){try{const e=await fetch("/projects-index.json");if(!e.ok)throw new Error("Failed to load projects index");_=(await e.json()).projects||[]}catch(e){console.error("Error loading projects index:",e),_=[]}}function xe(e){k("Projects","Discover the innovative projects developed by the DARTS Initiative.");const n=_.map(t=>{const r=t.slug;return`
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
                ${n||'<p class="no-content-message">No projects showcased yet.</p>'}
            </div>
            <div style="text-align:center; margin-top:40px;">
                <a href="#/" class="text-link">← Back to Home</a>
            </div>
        </div >
        `}async function Pe(e,n){const t=`../../content/projects/${n}.md`,r=Me[t];if(!r){S(e);return}try{const s=await r(),{attributes:o,html:l}=s;k(o.title,o.excerpt||o.description),e.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${o.title}</h1>
                <div class="project-detail-logo-container">
                     ${o.logo?`<img src="${o.logo}" alt="${o.title}" class="project-detail-logo" width="300" height="300">`:""}
                </div>
                <div class="post-content">
                    ${M(l)}
                </div>
            </div>
            `}catch(s){console.error("Error loading project:",s),S(e)}}function L(e){return/^[a-z0-9-]+$/i.test(e)}function Le(e){const n=document.getElementById(e);function t(s){document.querySelectorAll(".nav-link").forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===s&&o.classList.add("active")}),(s===""||s==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function r(){const s=window.location.hash;try{if(window.scrollTo(0,0),t(s),s===""||s==="#/")Te(n);else if(s==="#/blog")ne(n);else if(s==="#/projects")xe(n);else if(s.startsWith("#/post/")){const o=s.replace("#/post/","");L(o)?await oe(n,o):S(n)}else if(s.startsWith("#/project/")){const o=s.replace("#/project/","");L(o)?await Pe(n,o):S(n)}else if(s.startsWith("#/page/")){const o=s.replace("#/page/","");L(o)?be(n,o):S(n)}else S(n)}catch(o){console.error("Route error:",o),S(n)}}r(),window.addEventListener("hashchange",r)}function _e(){let e=document.querySelector("footer");e||(e=document.createElement("footer"),document.body.appendChild(e));const n=f.footer.links.map(t=>`<a href="${t.url}" target="${t.url.startsWith("http")?"_blank":"_self"}" ${t.url.startsWith("http")?'rel="noopener noreferrer"':""}>${t.text}</a>`).join("");e.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${f.footer.copyright}</p>
            <p class="license-info">${f.footer.license}</p>
            <div class="footer-links">
                ${n}
                <a href="#" class="footer-subscribe">Subscribe</a>
            </div>
        </div>
    `,e.querySelector(".footer-subscribe").addEventListener("click",t=>{t.preventDefault(),$e()})}function De(){const e=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&n?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function Ie(){const n=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n),n}function Ce(){const e=document.getElementById("theme-toggle");e&&e.addEventListener("click",()=>{Ie()})}De();Ce();X("background-canvas");try{await ee()}catch(e){console.error("Failed to load posts:",e)}try{await je()}catch(e){console.error("Failed to load projects:",e)}Le("app");_e();ke();
