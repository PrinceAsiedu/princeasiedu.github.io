import{a as o}from"./hoisted.DYLvaZzj.js";const j=window.matchMedia("(prefers-reduced-motion: reduce)").matches;j?document.querySelectorAll(".hero-sub, .hero-tags, .hero-cta").forEach(e=>{e.style.opacity="1",e.style.transform="none"}):o({targets:[".hero-sub",".hero-tags",".hero-cta"],translateY:[20,0],opacity:[0,1],delay:o.stagger(100,{start:400}),duration:700,easing:"easeOutCubic"});const y=document.querySelector(".hero-stage"),k=document.getElementById("hero-parallax-image");if(y&&k&&!j){let e=!1;const t=()=>{const a=y.getBoundingClientRect(),s=window.innerHeight||1,l=Math.max(-1,Math.min(1,(s-a.top)/(s+a.height))),i=(l-.5)*70,u=(l-.5)*5;k.style.transform=`translate3d(0, ${i}px, 0) rotate(${u}deg) scale(1.04)`,e=!1},r=()=>{e||(e=!0,requestAnimationFrame(t))};t(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r)}window.matchMedia("(prefers-reduced-motion: reduce)").matches?document.querySelectorAll(".hero-letter").forEach(e=>{e.style.opacity="1",e.style.transform="none"}):o({targets:".hero-letter",translateY:[40,0],opacity:[0,1],delay:o.stagger(45),duration:900,easing:"easeOutElastic(1, 0.6)"});const E=document.getElementById("stats-grid"),v=Array.from(document.querySelectorAll(".stat-val")),C="https://github-proxy.prince14asiedu.workers.dev",A=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let x=!1,$=!1;const _=()=>{v.forEach(e=>{e.textContent="—",e.dataset.value=""})},H=()=>{if(!x||$)return;const e=v.filter(t=>/^\d+$/.test(t.dataset.value||""));e.length&&($=!0,e.forEach(t=>{const r=Number(t.dataset.value||0);if(A){t.textContent=String(r);return}o({targets:t,innerHTML:[0,r],round:1,duration:1200,easing:"easeOutExpo"})}))};E&&new IntersectionObserver((t,r)=>{t.forEach(a=>{a.isIntersecting&&(x=!0,H(),r.unobserve(a.target))})},{threshold:.25}).observe(E);const q=async()=>{try{const[e,t]=await Promise.all([fetch(`${C}/stats`),fetch(`${C}/repos`)]);if(!e.ok||!t.ok)throw new Error("GitHub API request failed");const r=await e.json(),s=(await t.json()).reduce((i,u)=>i+(u.stargazers_count||0),0),l={public_repos:r.public_repos,followers:r.followers,following:r.following,stars:s};v.forEach(i=>{const u=i.dataset.key,f=l[u]??0;i.dataset.value=String(f),!x||A?i.textContent=String(f):i.textContent="0"}),H()}catch{_()}};q();const h=document.getElementById("activity-feed"),O="https://github-proxy.prince14asiedu.workers.dev",d={push:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19V5m0 0-5 5m5-5 5 5"/></svg>',pr:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a3 3 0 1 0-3-3v10a3 3 0 1 0 3 3M6 14a3 3 0 1 0-3-3v8a3 3 0 1 0 3 3M15 6H9a3 3 0 0 0-3 3v2"/></svg>',star:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2.8 5.66 6.2.9-4.5 4.39 1.06 6.19L12 17.2l-5.56 2.94 1.06-6.19L3 9.56l6.2-.9L12 3Z"/></svg>',fork:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9v3a6 6 0 0 0 6 6h3"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v6"/></svg>',default:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>'},B=e=>{switch(e.type){case"PushEvent":return{label:"Pushed to",icon:d.push};case"PullRequestEvent":return{label:"Opened PR in",icon:d.pr};case"WatchEvent":return{label:"Starred",icon:d.star};case"ForkEvent":return{label:"Forked",icon:d.fork};case"IssueCommentEvent":return{label:"Commented in",icon:d.default};default:return{label:"Updated",icon:d.default}}},P=e=>{const t=Date.now()-new Date(e).getTime(),r=Math.max(1,Math.floor(t/6e4));if(r<60)return`${r}m ago`;const a=Math.floor(r/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`},G=()=>{h&&(h.innerHTML=`
      <li class="px-5 py-6 text-sm text-muted sm:px-6">
        Recent GitHub activity is temporarily unavailable.
      </li>
    `)},T=async()=>{if(h)try{const e=await fetch(`${O}/activity`);if(!e.ok)throw new Error("GitHub API request failed");const t=await e.json();h.innerHTML=t.slice(0,8).map(r=>{const{label:a,icon:s}=B(r);return`
            <li class="flex items-start gap-3 px-4 py-5 text-sm sm:gap-4 sm:px-6">
              <span class="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-alt text-accent">
                ${s}
              </span>
              <div class="min-w-0 flex-1">
                <p class="break-words text-sm text-text sm:text-base">
                  ${a}
                  <a class="break-all font-medium text-accent transition hover:opacity-80" href="https://github.com/${r.repo.name}" target="_blank" rel="noreferrer">
                    ${r.repo.name}
                  </a>
                </p>
                <p class="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">${P(r.created_at)}</p>
              </div>
            </li>
          `}).join("")}catch{G()}};T();const g=document.getElementById("project-api-cards"),F="https://github-proxy.prince14asiedu.workers.dev",M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,w=()=>{document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("mouseenter",()=>{M||o({targets:e,translateY:-5,duration:250,easing:"easeOutCubic"})}),e.addEventListener("mouseleave",()=>{M||o({targets:e,translateY:0,duration:250,easing:"easeOutCubic"})})})},U=()=>{g&&(g.innerHTML=Array.from({length:3}).map(()=>`
          <article class="project-card card surface-card reveal flex h-full flex-col justify-between p-5 sm:p-6">
            <div>
              <p class="eyebrow text-[10px] text-muted">GitHub Repo</p>
              <h3 class="mt-3 text-xl font-semibold text-text sm:text-2xl">Unavailable</h3>
              <p class="mt-5 text-sm leading-7 text-muted">GitHub repository data could not be loaded right now.</p>
            </div>
            <div class="mt-10 flex flex-col items-start justify-between gap-3 text-sm sm:flex-row sm:items-center">
              <span class="text-muted">-</span>
              <span class="font-medium text-accent">view →</span>
            </div>
          </article>
        `).join(""),w())},W=async()=>{if(g)try{const e=await fetch(`${F}/repos`);if(!e.ok)throw new Error("GitHub API request failed");const r=(await e.json()).filter(a=>!a.fork).sort((a,s)=>(s.stargazers_count||0)-(a.stargazers_count||0)).slice(0,3);g.innerHTML=r.map(a=>{const s=languageColors[a.language]||"var(--accent)";return`
            <article class="project-card card surface-card reveal flex h-full flex-col justify-between p-5 sm:p-6">
              <div>
                <div class="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                  <div>
                    <p class="eyebrow text-[10px] text-muted">GitHub Repo</p>
                    <h3 class="mt-3 break-words text-xl font-semibold text-text sm:text-2xl">
                      <a class="focus-ring transition hover:text-accent" href="${a.html_url}" target="_blank" rel="noreferrer">${a.name}</a>
                    </h3>
                  </div>
                  <span class="tag-pill">${a.visibility||"public"}</span>
                </div>
                <p class="mt-5 text-sm leading-7 text-muted">${a.description||"No description provided yet."}</p>
              </div>
              <div class="mt-10 flex flex-col items-start justify-between gap-3 text-sm sm:flex-row sm:items-center">
                <span class="inline-flex flex-wrap items-center gap-3 text-muted">
                  <span class="h-2.5 w-2.5 rounded-full" style="background:${s}"></span>
                  ${a.language||"Mixed"}
                  <span>★ ${a.stargazers_count||0}</span>
                </span>
                <a class="focus-ring inline-flex items-center gap-2 font-medium text-accent" href="${a.html_url}" target="_blank" rel="noreferrer">
                  view <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          `}).join(""),w()}catch{U()}};w();W();const R=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-blog-row]").forEach(e=>{const t=e.querySelector(".blog-arrow");t&&(e.addEventListener("mouseenter",()=>{if(R){t.style.opacity="1",t.style.transform="translateX(0)";return}o({targets:t,translateX:[-8,0],opacity:[0,1],duration:220,easing:"easeOutCubic"})}),e.addEventListener("mouseleave",()=>{if(R){t.style.opacity="0",t.style.transform="translateX(-8px)";return}o({targets:t,translateX:[0,-8],opacity:[1,0],duration:180,easing:"easeOutCubic"})}))});const c=document.getElementById("contrib-grid"),m=document.getElementById("contrib-summary"),p=document.getElementById("contrib-total"),z="https://github-proxy.prince14asiedu.workers.dev",I=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let S=!1;const Y=e=>{const t=Math.sin(e)*1e4;return t-Math.floor(t)},K=e=>{const t=Y(e);return t<.4?"l0":t<.7?"l1":t<.87?"l2":t<.96?"l3":"l4"},L=(e,t)=>{c&&(c.setAttribute("aria-label",t),c.innerHTML=e.map(r=>`<span class="contrib-cell ${r.level}" data-level="${r.level}" title="${r.title}" aria-hidden="true"></span>`).join(""))};if(c){const e=()=>{const r=c.querySelectorAll(".contrib-cell");if(I){r.forEach(a=>{a.style.transform="scale(1)"});return}o({targets:".contrib-cell",scale:[0,1],delay:o.stagger(6,{grid:[52,7],from:"first"}),duration:400,easing:"easeOutBack"})};new IntersectionObserver((r,a)=>{r.forEach(s=>{s.isIntersecting&&(S=!0,e(),a.unobserve(s.target))})},{threshold:.2}).observe(c)}const X=async()=>{try{const e=await fetch(`${z}/contribs`);if(!e.ok)throw new Error("GitHub API request failed");const r=(await e.json())?.data?.user?.contributionsCollection?.contributionCalendar,a=r?.weeks??[],s=r?.totalContributions??0,l=a.flatMap(n=>n.contributionDays).slice(-364);if(!l.length)throw new Error("Contribution data unavailable");const i=Math.max(...l.map(n=>n.contributionCount),1),u=n=>n===0?"l0":n<=i*.15?"l1":n<=i*.4?"l2":n<=i*.7?"l3":"l4",f=l.map(n=>({level:u(n.contributionCount),title:`${n.contributionCount} contributions on ${n.date}`}));if(L(f,`${s} contributions in the past year`),m&&(m.textContent=`${s.toLocaleString()} contributions in the past year, loaded live through the Cloudflare Worker proxy.`),p&&(p.textContent=`${s.toLocaleString()} contributions in the past 52 weeks`),S&&c){const n=c.querySelectorAll(".contrib-cell");n.forEach(b=>{b.style.transform="scale(0)"}),I?n.forEach(b=>{b.style.transform="scale(1)"}):o({targets:".contrib-cell",scale:[0,1],delay:o.stagger(6,{grid:[52,7],from:"first"}),duration:400,easing:"easeOutBack"})}}catch{const t=Array.from({length:364},(r,a)=>({level:K(a+17),title:"Contribution activity unavailable"}));L(t,"Contribution activity unavailable"),m&&(m.textContent="Fallback contribution cells are shown because live contribution data could not be loaded."),p&&(p.textContent="Contribution activity · past 52 weeks")}};X();
