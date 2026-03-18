import{a as o}from"./hoisted.DYLvaZzj.js";const M=window.matchMedia("(prefers-reduced-motion: reduce)").matches;M?document.querySelectorAll(".hero-sub, .hero-tags, .hero-cta").forEach(e=>{e.style.opacity="1",e.style.transform="none"}):o({targets:[".hero-sub",".hero-tags",".hero-cta"],translateY:[20,0],opacity:[0,1],delay:o.stagger(100,{start:400}),duration:700,easing:"easeOutCubic"});const g=document.querySelector(".hero-stage"),v=document.getElementById("hero-parallax-image");if(g&&v&&!M){let e=!1;const r=()=>{const t=g.getBoundingClientRect(),a=window.innerHeight||1,l=Math.max(-1,Math.min(1,(a-t.top)/(a+t.height))),n=(l-.5)*70,c=(l-.5)*5;v.style.transform=`translate3d(0, ${n}px, 0) rotate(${c}deg) scale(1.04)`,e=!1},s=()=>{e||(e=!0,requestAnimationFrame(r))};r(),window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s)}window.matchMedia("(prefers-reduced-motion: reduce)").matches?document.querySelectorAll(".hero-letter").forEach(e=>{e.style.opacity="1",e.style.transform="none"}):o({targets:".hero-letter",translateY:[40,0],opacity:[0,1],delay:o.stagger(45),duration:900,easing:"easeOutElastic(1, 0.6)"});const x=document.getElementById("stats-grid"),m=Array.from(document.querySelectorAll(".stat-val")),w="https://github-proxy.prince14asiedu.workers.dev",$=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let f=!1,b=!1;const R=()=>{m.forEach(e=>{e.textContent="—",e.dataset.value=""})},C=()=>{if(!f||b)return;const e=m.filter(r=>/^\d+$/.test(r.dataset.value||""));e.length&&(b=!0,e.forEach(r=>{const s=Number(r.dataset.value||0);if($){r.textContent=String(s);return}o({targets:r,innerHTML:[0,s],round:1,duration:1200,easing:"easeOutExpo"})}))};x&&new IntersectionObserver((r,s)=>{r.forEach(t=>{t.isIntersecting&&(f=!0,C(),s.unobserve(t.target))})},{threshold:.25}).observe(x);const j=async()=>{try{const[e,r]=await Promise.all([fetch(`${w}/stats`),fetch(`${w}/repos`)]);if(!e.ok||!r.ok)throw new Error("GitHub API request failed");const s=await e.json(),a=(await r.json()).reduce((n,c)=>n+(c.stargazers_count||0),0),l={public_repos:s.public_repos,followers:s.followers,following:s.following,stars:a};m.forEach(n=>{const c=n.dataset.key,h=l[c]??0;n.dataset.value=String(h),!f||$?n.textContent=String(h):n.textContent="0"}),C()}catch{R()}};j();const d=document.getElementById("activity-feed"),L="https://github-proxy.prince14asiedu.workers.dev",i={push:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19V5m0 0-5 5m5-5 5 5"/></svg>',pr:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a3 3 0 1 0-3-3v10a3 3 0 1 0 3 3M6 14a3 3 0 1 0-3-3v8a3 3 0 1 0 3 3M15 6H9a3 3 0 0 0-3 3v2"/></svg>',star:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2.8 5.66 6.2.9-4.5 4.39 1.06 6.19L12 17.2l-5.56 2.94 1.06-6.19L3 9.56l6.2-.9L12 3Z"/></svg>',fork:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9v3a6 6 0 0 0 6 6h3"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v6"/></svg>',default:'<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>'},H=e=>{switch(e.type){case"PushEvent":return{label:"Pushed to",icon:i.push};case"PullRequestEvent":return{label:"Opened PR in",icon:i.pr};case"WatchEvent":return{label:"Starred",icon:i.star};case"ForkEvent":return{label:"Forked",icon:i.fork};case"IssueCommentEvent":return{label:"Commented in",icon:i.default};default:return{label:"Updated",icon:i.default}}},S=e=>{const r=Date.now()-new Date(e).getTime(),s=Math.max(1,Math.floor(r/6e4));if(s<60)return`${s}m ago`;const t=Math.floor(s/60);return t<24?`${t}h ago`:`${Math.floor(t/24)}d ago`},_=()=>{d&&(d.innerHTML=`
      <li class="px-5 py-6 text-sm text-muted sm:px-6">
        Recent GitHub activity is temporarily unavailable.
      </li>
    `)},q=async()=>{if(d)try{const e=await fetch(`${L}/activity`);if(!e.ok)throw new Error("GitHub API request failed");const r=await e.json();d.innerHTML=r.slice(0,8).map(s=>{const{label:t,icon:a}=H(s);return`
            <li class="flex items-start gap-3 px-4 py-5 text-sm sm:gap-4 sm:px-6">
              <span class="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-alt text-accent">
                ${a}
              </span>
              <div class="min-w-0 flex-1">
                <p class="break-words text-sm text-text sm:text-base">
                  ${t}
                  <a class="break-all font-medium text-accent transition hover:opacity-80" href="https://github.com/${s.repo.name}" target="_blank" rel="noreferrer">
                    ${s.repo.name}
                  </a>
                </p>
                <p class="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">${S(s.created_at)}</p>
              </div>
            </li>
          `}).join("")}catch{_()}};q();const u=document.getElementById("project-api-cards"),A="https://github-proxy.prince14asiedu.workers.dev",y=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=()=>{document.querySelectorAll(".project-card").forEach(e=>{e.addEventListener("mouseenter",()=>{y||o({targets:e,translateY:-5,duration:250,easing:"easeOutCubic"})}),e.addEventListener("mouseleave",()=>{y||o({targets:e,translateY:0,duration:250,easing:"easeOutCubic"})})})},I=()=>{u&&(u.innerHTML=Array.from({length:3}).map(()=>`
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
        `).join(""),p())},O=async()=>{if(u)try{const e=await fetch(`${A}/repos`);if(!e.ok)throw new Error("GitHub API request failed");const s=(await e.json()).filter(t=>!t.fork).sort((t,a)=>(a.stargazers_count||0)-(t.stargazers_count||0)).slice(0,3);u.innerHTML=s.map(t=>{const a=languageColors[t.language]||"var(--accent)";return`
            <article class="project-card card surface-card reveal flex h-full flex-col justify-between p-5 sm:p-6">
              <div>
                <div class="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                  <div>
                    <p class="eyebrow text-[10px] text-muted">GitHub Repo</p>
                    <h3 class="mt-3 break-words text-xl font-semibold text-text sm:text-2xl">
                      <a class="focus-ring transition hover:text-accent" href="${t.html_url}" target="_blank" rel="noreferrer">${t.name}</a>
                    </h3>
                  </div>
                  <span class="tag-pill">${t.visibility||"public"}</span>
                </div>
                <p class="mt-5 text-sm leading-7 text-muted">${t.description||"No description provided yet."}</p>
              </div>
              <div class="mt-10 flex flex-col items-start justify-between gap-3 text-sm sm:flex-row sm:items-center">
                <span class="inline-flex flex-wrap items-center gap-3 text-muted">
                  <span class="h-2.5 w-2.5 rounded-full" style="background:${a}"></span>
                  ${t.language||"Mixed"}
                  <span>★ ${t.stargazers_count||0}</span>
                </span>
                <a class="focus-ring inline-flex items-center gap-2 font-medium text-accent" href="${t.html_url}" target="_blank" rel="noreferrer">
                  view <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          `}).join(""),p()}catch{I()}};p();O();const k=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll("[data-blog-row]").forEach(e=>{const r=e.querySelector(".blog-arrow");r&&(e.addEventListener("mouseenter",()=>{if(k){r.style.opacity="1",r.style.transform="translateX(0)";return}o({targets:r,translateX:[-8,0],opacity:[0,1],duration:220,easing:"easeOutCubic"})}),e.addEventListener("mouseleave",()=>{if(k){r.style.opacity="0",r.style.transform="translateX(-8px)";return}o({targets:r,translateX:[0,-8],opacity:[1,0],duration:180,easing:"easeOutCubic"})}))});const E=document.getElementById("contrib-grid"),B=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(E){const e=()=>{const s=document.querySelectorAll(".contrib-cell");if(B){s.forEach(t=>{t.style.transform="scale(1)"});return}o({targets:".contrib-cell",scale:[0,1],delay:o.stagger(6,{grid:[52,7],from:"first"}),duration:400,easing:"easeOutBack"})};new IntersectionObserver((s,t)=>{s.forEach(a=>{a.isIntersecting&&(e(),t.unobserve(a.target))})},{threshold:.2}).observe(E)}
