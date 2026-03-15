(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function z(e){const o=document.getElementById(e);if(!o)return;const t=o.getContext("2d");let r=o.width=window.innerWidth,s=o.height=window.innerHeight,n=-1e3,a=-1e3;const i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0;window.addEventListener("resize",()=>{r=o.width=window.innerWidth,s=o.height=window.innerHeight,b()}),i||(window.addEventListener("mousemove",v=>{n=v.clientX,a=v.clientY}),window.addEventListener("mouseleave",()=>{n=-1e3,a=-1e3})),new MutationObserver(()=>{d.baseColor=h()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function c(v){const l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(v);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function h(){return document.documentElement.getAttribute("data-theme")==="dark"?{...c("#FFFFFF"),a:.022}:{...c("#000000"),a:.1}}const d={baseColor:h(),hoverColor:{...c("#C2A365"),a:.55},hoverRadius:160,transitionSpeed:.06,mobileGlowChance:2e-4,mobileGlowFadeInSpeed:.025,mobileGlowFadeOutSpeed:.01,layers:[{count:.3,sizeRange:[12,20],speedFactor:.4,opacityMult:.5},{count:.4,sizeRange:[22,34],speedFactor:.7,opacityMult:.75},{count:.3,sizeRange:[36,50],speedFactor:1,opacityMult:1}],totalCount:i?90:300};let p=[],y=0;class f{constructor(l,w,m){this.originX=l,this.originY=w,this.x=l,this.y=w,this.layer=m,this.size=m.sizeRange[0]+Math.random()*(m.sizeRange[1]-m.sizeRange[0]),this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=(Math.random()-.5)*.002*m.speedFactor,this.hoverAmount=0,this.glowPhase="idle",this.driftPhaseX=Math.random()*Math.PI*2,this.driftPhaseY=Math.random()*Math.PI*2,this.driftAmplitudeX=12+Math.random()*25*m.speedFactor,this.driftAmplitudeY=10+Math.random()*20*m.speedFactor,this.driftSpeedX=(.001+Math.random()*.0015)*m.speedFactor,this.driftSpeedY=(8e-4+Math.random()*.0012)*m.speedFactor;const $=Math.random()*Math.PI*2;this.linearDriftX=Math.cos($)*.12*m.speedFactor,this.linearDriftY=Math.sin($)*.12*m.speedFactor}isMouseNear(){return Math.sqrt((n-this.x)**2+(a-this.y)**2)<d.hoverRadius}draw(){const l=d.baseColor,w=d.hoverColor,m=this.hoverAmount,$=this.layer.opacityMult,B=Math.round(l.r+(w.r-l.r)*m),H=Math.round(l.g+(w.g-l.g)*m),Y=Math.round(l.b+(w.b-l.b)*m),N=(l.a+(w.a-l.a)*m)*$;t.save(),t.translate(this.x,this.y),t.rotate(this.rotation);const I=this.size,j=I*.866;t.beginPath(),t.moveTo(0,-j/2),t.lineTo(-I/2,j/2),t.lineTo(I/2,j/2),t.closePath(),t.fillStyle=`rgba(${B}, ${H}, ${Y}, ${N})`,t.fill(),t.restore()}update(){this.x=this.originX+Math.sin(y*this.driftSpeedX+this.driftPhaseX)*this.driftAmplitudeX,this.y=this.originY+Math.sin(y*this.driftSpeedY+this.driftPhaseY)*this.driftAmplitudeY,this.originX+=this.linearDriftX,this.originY+=this.linearDriftY;const l=this.size*2;this.originX>r+l&&(this.originX=-l),this.originX<-l&&(this.originX=r+l),this.originY>s+l&&(this.originY=-l),this.originY<-l&&(this.originY=s+l),this.rotation+=this.rotationSpeed,i?(this.glowPhase==="idle"&&Math.random()<d.mobileGlowChance&&(this.glowPhase="fadeIn"),this.glowPhase==="fadeIn"?(this.hoverAmount=Math.min(1,this.hoverAmount+d.mobileGlowFadeInSpeed),this.hoverAmount>=1&&(this.glowPhase="fadeOut")):this.glowPhase==="fadeOut"&&(this.hoverAmount=Math.max(0,this.hoverAmount-d.mobileGlowFadeOutSpeed),this.hoverAmount<=0&&(this.glowPhase="idle"))):this.isMouseNear()?this.hoverAmount=Math.min(1,this.hoverAmount+d.transitionSpeed):this.hoverAmount=Math.max(0,this.hoverAmount-d.transitionSpeed)}}function b(){p=[];for(const v of d.layers){const l=Math.round(d.totalCount*v.count);for(let w=0;w<l;w++){const m=Math.random()*(r+100)-50,$=Math.random()*(s+100)-50;p.push(new f(m,$,v))}}}function S(){y++,t.clearRect(0,0,r,s),p.forEach(v=>{v.update(),v.draw()}),requestAnimationFrame(S)}b(),S()}const X={title:"Introduction"},W=`<p>Current generative AI achieves incredible things, but it learns passively: consuming massive amounts of data without grounding its knowledge in reality.</p>
<p>DARTS explores and shares progress toward AI that can truly reason, understand what it observes, and build its own model of the world.</p>
<p>We believe this is the path toward AI that is genuinely <strong>curious</strong> and capable of <strong>understanding the world</strong>.</p>
`,U=[],G=Object.freeze(Object.defineProperty({__proto__:null,attributes:X,html:W,toc:U},Symbol.toStringTag,{value:"Module"})),g={siteTitle:"DARTS",siteDescription:"Open ecosystem to research and share advances in <strong>AI that understands</strong>.",logo:{light:{svg:"/images/darts_logo.svg",png:"/images/darts_logo.png"},dark:{svg:"/images/darts_logo_black.svg",png:"/images/darts_logo_black.png"},alt:"DARTS Logo"},blog:{title:"Latest Updates"},newsletterUrl:"https://buttondown.com/api/emails/embed-subscribe/DARTS",footer:{copyright:"© 2026 DARTS Initiative - Pablo Magariños Docampo",license:"Content distributed under open licenses | Committed to Open Source & Open Access",links:[{text:"GitHub",url:"https://github.com/DARTS-Initiative"},{text:"License",url:"https://creativecommons.org/licenses/by/4.0/"},{text:"Contribute",url:"#/page/contributing"}]}};function k(e,o){document.title=e?`${e} | DARTS`:"DARTS";let t=document.querySelector('meta[name="description"]');t||(t=document.createElement("meta"),t.name="description",document.head.appendChild(t)),t.content=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";const r=(a,i)=>{let u=document.querySelector(`meta[property="${a}"]`)||document.querySelector(`meta[name="${a}"]`);u&&(u.content=i||"")},s=e?`${e} | DARTS`:"DARTS",n=o||"Decentralized Autonomous Research & Technology System - Advancing open science and technology.";r("og:title",s),r("og:description",n),r("twitter:title",s),r("twitter:description",n)}function A(e){e.innerHTML=`
        <div class="post-detail" style="text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The content you are looking for does not exist.</p>
            <a href="#/" class="back-button">Return to Home</a>
        </div>
        `}function E(e){return e?e.replace(/<img ([^>]*alt=")([^"|]*)\|([^"|]*)("[^>]*>)/g,(o,t,r,s,n)=>{const a=s.trim();return/^\d+(px|%|em|rem|vw|vh)$/.test(a)?`<img ${t}${r}" style="width: 100%; max-width: ${a};" ${n}`:o}):""}const K="modulepreload",V=function(e){return"/"+e},_={},J=function(o,t,r){let s=Promise.resolve();if(t&&t.length>0){let u=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");s=u(t.map(c=>{if(c=V(c),c in _)return;_[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":K,h||(p.as="script"),p.crossOrigin="",p.href=c,i&&p.setAttribute("nonce",i),document.head.appendChild(p),h)return new Promise((y,f)=>{p.addEventListener("load",y),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return s.then(a=>{for(const i of a||[])i.status==="rejected"&&n(i.reason);return o().catch(n)})},R={News:{color:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",borderColor:"rgba(16, 185, 129, 0.2)"},Articles:{color:"#8b5cf6",backgroundColor:"rgba(139, 92, 246, 0.1)",borderColor:"rgba(139, 92, 246, 0.2)"},Others:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"},default:{color:"#6b7280",backgroundColor:"rgba(107, 114, 128, 0.1)",borderColor:"rgba(107, 114, 128, 0.2)"}},Q=Object.assign({"../../content/posts/welcome-to-darts.md":()=>J(()=>import("./welcome-to-darts-VqW7cEBo.js"),[])});let M=[];async function Z(){try{const e=await fetch("/posts-index.json");if(!e.ok)throw new Error("Failed to load posts index");M=(await e.json()).posts||[]}catch(e){console.error("Error loading posts index:",e),M=[]}}function ee(){return M}function te(e){k("Blog","Read the latest news and updates from the DARTS Initiative.");const o=M.map(t=>{const r=t.slug;return`
            <a href="#/post/${r}" class="post-card" data-slug="${r}">
                <h3>${t.title}</h3>
                <div class="post-meta" style="${L(t.category)}">
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
    `}async function oe(e,o){const t=`../../content/posts/${o}.md`,r=Q[t];if(!r){A(e);return}try{const s=await r(),{attributes:n,html:a}=s;k(n.title,n.excerpt||n.description),e.innerHTML=`
            <div class="post-detail">
                <a href="#/blog" class="back-button">Back to Blog</a>
                <h1>${n.title}</h1>
                <div class="post-meta" style="${L(n.category)}">
                    <span class="category-name">${n.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${n.date}</span>
                    ${n.author?`<span class="separator">|</span><span class="author">by ${n.author}</span>`:""}
                </div>
                <div class="post-content">
                    ${E(a)}
                </div>
            </div>
            `}catch(s){console.error("Error loading post:",s),A(e)}}function L(e){const o=R[e]||R.default;return`
        color: ${o.color};
        border-color: ${o.color};
    `}const ne={title:"About DARTS"},se=`<p>DARTS is a personal initiative to explore and document the <strong>open development</strong> of the artificial intelligence of the future. A place where projects, ideas, and findings are shared openly, with the goal of making this work accessible to anyone who wants to follow it, build on it, or contribute to it.</p>
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
`,re=[{level:"1",content:"Who is behind DARTS?"}],ie=Object.freeze(Object.defineProperty({__proto__:null,attributes:ne,html:se,toc:re},Symbol.toStringTag,{value:"Module"})),ae={title:"Contributing"},le=`<p>There are no strict contribution guidelines yet, and no formal rules. The idea is for this to grow organically as the project does.</p>
<p>If you want to get involved, there are three main ways to do it:</p>
<h2>Blog content</h2>
<p>Paper analyses, explainers, news, opinions. If you have something worth saying that fits within the space DARTS cares about, <strong>it is welcome here</strong>.</p>
<h2>Projects</h2>
<p>The projects side of DARTS is still taking shape, but the direction is clear: everything developed under the DARTS umbrella will be <strong>Open-Source</strong>, will be featured in the projects tab, and will aim to integrate actively with the rest of the ecosystem.</p>
<h2>Development and outreach</h2>
<p>Improving the website, helping spread the work, or anything else that could <strong>genuinely be useful</strong> to the project.</p>
<p>If you want to contribute, write to me at <strong>contact@dartsinitiative.com</strong>.</p>
`,ce=[{level:"2",content:"Blog content"},{level:"2",content:"Projects"},{level:"2",content:"Development and outreach"}],de=Object.freeze(Object.defineProperty({__proto__:null,attributes:ae,html:le,toc:ce},Symbol.toStringTag,{value:"Module"})),ue={title:"Roadmap"},he=`<p>[Detailed Roadmap content coming soon...]</p>
`,pe=[],me=Object.freeze(Object.defineProperty({__proto__:null,attributes:ue,html:he,toc:pe},Symbol.toStringTag,{value:"Module"})),C=Object.assign({"../../content/pages/about-us.md":ie,"../../content/pages/contributing.md":de,"../../content/pages/roadmap.md":me});function ge(){return C}function fe(e,o){const t=`../../content/pages/${o}.md`,r=C[t];if(!r){A(e);return}k(r.attributes.title,r.attributes.excerpt||r.attributes.description),e.innerHTML=`
        <div class="post-detail">
            <a href="#/" class="back-button">Back to Home</a>
            <h1>${r.attributes.title}</h1>
            <div class="post-content">
                ${E(r.html)}
            </div>
        </div>
        `}const O="darts_newsletter",be=7,ve=30;function ye(){try{return JSON.parse(localStorage.getItem(O))||{}}catch{return{}}}function T(e){localStorage.setItem(O,JSON.stringify(e))}function we(){const e=ye();return!(e.subscribedAt&&Date.now()-e.subscribedAt<ve*24*60*60*1e3||e.dismissedAt&&Date.now()-e.dismissedAt<be*24*60*60*1e3)}function x(e){e.classList.remove("newsletter-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0})}function F(){const e=document.createElement("div");e.className="newsletter-banner",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Newsletter subscription"),e.innerHTML=`
    <button class="newsletter-close" aria-label="Close">&times;</button>
    <div class="newsletter-body">
      <div class="newsletter-text">
        <strong>Be part of DARTS</strong>
        <span><b>We are just getting started.</b> Don't miss our new projects, and <em class="newsletter-highlight">get exclusive updates!</em></span>
        <button class="newsletter-already">I'm already subscribed</button>
      </div>
      <form
        action="${g.newsletterUrl}"
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
  `,document.body.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("newsletter-visible")})});const o=()=>{T({dismissedAt:Date.now()}),x(e),document.removeEventListener("keydown",t)};e.querySelector(".newsletter-close").addEventListener("click",o),e.querySelector(".newsletter-form").addEventListener("submit",()=>{document.removeEventListener("keydown",t),setTimeout(()=>{x(e),q()},300),T({subscribedAt:Date.now()})}),e.querySelector(".newsletter-already").addEventListener("click",()=>{T({subscribedAt:Date.now()}),document.removeEventListener("keydown",t),x(e)});const t=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",t)}function q(){const e=document.createElement("div");e.className="thankyou-overlay",e.innerHTML=`
    <div class="thankyou-popup" role="dialog" aria-label="Thank you">
      <button class="newsletter-close" aria-label="Close">&times;</button>
      <img src="/images/thanks.png" alt="Thank you" class="thankyou-img" />
      <p class="thankyou-message">Thank you for joining us!</p>
    </div>
  `,document.body.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("thankyou-visible")})});const o=()=>{e.classList.remove("thankyou-visible"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),document.removeEventListener("keydown",t)};e.querySelector(".newsletter-close").addEventListener("click",o),e.addEventListener("click",r=>{r.target===e&&o()});const t=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",t)}function Ae(){T({subscribedAt:Date.now()}),q()}function Se(){document.querySelector(".newsletter-banner")||F()}function $e(){we()&&setTimeout(F,5e3)}const ke=Object.assign({"../../content/intro.md":G});function Te(e){k(null,g.siteDescription);const o=ge(),t=ee(),r=Object.entries(o).map(([i,u])=>`
        <a href="#/page/${i.split("/").pop().replace(".md","")}" class="section-box">
            <h3>${u.attributes.title}</h3>
        </a>
    `).join(""),s=t.slice(0,2).map(i=>{const u=i.slug;return`
            <a href="#/post/${u}" class="post-card" data-slug="${u}">
                <h3>${i.title}</h3>
                <div class="post-meta" style="${L(i.category)}">
                    <span class="category-name">${i.category||"Others"}</span>
                    <span class="separator">|</span>
                    <span>${i.date}</span>
                    ${i.author?`<span class="separator">|</span><span class="author">by ${i.author}</span>`:""}
                </div>
                <p>${i.excerpt||""}</p>
            </a>
        `}).join(""),n=E(ke["../../content/intro.md"]?.html);e.innerHTML=`
    <div class="logo-wrapper">
        <img
            src="${g.logo.light.svg}"
            alt="${g.logo.alt}"
            class="logo logo-light"
            width="500"
            height="500"
        >
        <img
            src="${g.logo.dark.svg}"
            alt="${g.logo.alt}"
            class="logo logo-dark"
            width="500"
            height="500"
        >
    </div>
        <h1 class="title">${g.siteTitle}</h1>
        <p class="description">${g.siteDescription}</p>

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
            <h2>${g.blog.title}</h2>
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
                action="${g.newsletterUrl}"
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
        `,e.querySelectorAll(".logo-light").forEach(i=>{i.addEventListener("error",function(){this.src=g.logo.light.png},{once:!0})}),e.querySelectorAll(".logo-dark").forEach(i=>{i.addEventListener("error",function(){this.src=g.logo.dark.png},{once:!0})});{const i=e.querySelectorAll(".logo");let u=1,c=0,h=null;const d=()=>{if(c=c*.872+(1-u)*.08,u+=c,Math.abs(1-u)<5e-4&&Math.abs(c)<5e-4){u=1,c=0,i.forEach(S=>{S.style.transform=""}),h=null;return}i.forEach(S=>{S.style.transform=`scale(${u})`}),h=requestAnimationFrame(d)};let p=0,y=!1;i.forEach(f=>{f.style.cursor="pointer",f.style.willChange="transform",f.addEventListener("click",()=>{if(!y&&(u=Math.max(.3,u-.22),c=0,h&&cancelAnimationFrame(h),h=requestAnimationFrame(d),p++,p===10)){y=!0,h&&cancelAnimationFrame(h);const b=e.querySelector(".logo-wrapper");b&&(b.dispatchEvent(new Event("escaped")),b.style.transition="transform 0.6s cubic-bezier(0.4, 0, 1, 1), opacity 0.6s ease",b.style.transform="translateX(150%)",b.style.opacity="0")}})})}if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const i=e.querySelector(".logo-wrapper");if(i){const u=i.getBoundingClientRect().top;let c=!1;i.addEventListener("escaped",()=>{c=!0});const h=()=>{if(!i.isConnected){window.removeEventListener("scroll",h);return}if(c)return;const d=i.getBoundingClientRect(),p=d.height;if(!p)return;const y=u+p,f=Math.max(0,Math.min(1,(u-d.top)/y)),b=2*f*f*f;i.style.transform=b>0?`translateX(${b*130}%)`:"",i.style.opacity=b>0?1-f:""};window.addEventListener("scroll",h,{passive:!0})}}const a=e.querySelector(".subscribe-form");a&&a.addEventListener("submit",()=>Ae())}const Me=Object.assign({});let D=[];async function Ee(){try{const e=await fetch("/projects-index.json");if(!e.ok)throw new Error("Failed to load projects index");D=(await e.json()).projects||[]}catch(e){console.error("Error loading projects index:",e),D=[]}}function Ie(e){k("Projects","Discover the innovative projects developed by the DARTS Initiative.");const o=D.map(t=>{const r=t.slug;return`
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
        `}async function je(e,o){const t=`../../content/projects/${o}.md`,r=Me[t];if(!r){A(e);return}try{const s=await r(),{attributes:n,html:a}=s;k(n.title,n.excerpt||n.description),e.innerHTML=`
            <div class="post-detail">
                <a href="#/projects" class="back-button">Back to Projects</a>
                <h1>${n.title}</h1>
                <div class="project-detail-logo-container">
                     ${n.logo?`<img src="${n.logo}" alt="${n.title}" class="project-detail-logo" width="300" height="300">`:""}
                </div>
                <div class="post-content">
                    ${E(a)}
                </div>
            </div>
            `}catch(s){console.error("Error loading project:",s),A(e)}}function P(e){return/^[a-z0-9-]+$/i.test(e)}function xe(e){const o=document.getElementById(e);function t(s){document.querySelectorAll(".nav-link").forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===s&&n.classList.add("active")}),(s===""||s==="#/")&&document.querySelector('.nav-link[href="#/"]')?.classList.add("active")}async function r(){const s=window.location.hash;try{if(window.scrollTo(0,0),t(s),s===""||s==="#/")Te(o);else if(s==="#/blog")te(o);else if(s==="#/projects")Ie(o);else if(s.startsWith("#/post/")){const n=s.replace("#/post/","");P(n)?await oe(o,n):A(o)}else if(s.startsWith("#/project/")){const n=s.replace("#/project/","");P(n)?await je(o,n):A(o)}else if(s.startsWith("#/page/")){const n=s.replace("#/page/","");P(n)?fe(o,n):A(o)}else A(o)}catch(n){console.error("Route error:",n),A(o)}}r(),window.addEventListener("hashchange",r)}function Pe(){let e=document.querySelector("footer");e||(e=document.createElement("footer"),document.body.appendChild(e));const o=g.footer.links.map(t=>`<a href="${t.url}" target="${t.url.startsWith("http")?"_blank":"_self"}" ${t.url.startsWith("http")?'rel="noopener noreferrer"':""}>${t.text}</a>`).join("");e.innerHTML=`
        <div class="footer-content">
            <p class="copyright">${g.footer.copyright}</p>
            <p class="license-info">${g.footer.license}</p>
            <div class="footer-links">
                ${o}
                <a href="#" class="footer-subscribe">Subscribe</a>
            </div>
        </div>
    `,e.querySelector(".footer-subscribe").addEventListener("click",t=>{t.preventDefault(),Se()})}function De(){const e=localStorage.getItem("theme"),o=window.matchMedia("(prefers-color-scheme: dark)").matches;e==="dark"||!e&&o?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}function Le(){const o=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";return document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o),o}function _e(){const e=document.getElementById("theme-toggle");e&&e.addEventListener("click",()=>{Le()})}De();_e();z("background-canvas");try{await Z()}catch(e){console.error("Failed to load posts:",e)}try{await Ee()}catch(e){console.error("Failed to load projects:",e)}xe("app");Pe();$e();
