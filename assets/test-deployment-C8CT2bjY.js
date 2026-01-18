const e={title:"Testing Automatic Deployment",date:"2026-01-18",category:"Updates",author:"DARTS Team",excerpt:"This is a test post to verify that the automatic deployment pipeline works correctly."},t=`<h1>Testing Automatic Deployment</h1>
<p>This post was created to test the new CI/CD pipeline. If you can read this, it means:</p>
<p>✅ The GitHub Actions workflow triggered successfully<br>
✅ The content indices were generated automatically<br>
✅ Vite built the project correctly<br>
✅ The site was deployed to the <code>gh-pages</code> branch</p>
<h2>How it works</h2>
<ol>
<li>We push changes to the <code>main</code> branch</li>
<li>GitHub Actions detects the push</li>
<li>The workflow runs <code>npm run generate-indices</code> to create the JSON files</li>
<li>Then it builds the project with Vite</li>
<li>Finally, it publishes everything to <code>gh-pages</code></li>
</ol>
<p>Pretty cool, right? 🚀</p>
`,o=[{level:"1",content:"Testing Automatic Deployment"},{level:"2",content:"How it works"}];export{e as attributes,t as html,o as toc};
