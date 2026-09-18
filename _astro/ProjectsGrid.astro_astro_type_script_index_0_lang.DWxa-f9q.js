import{t as e}from"./animation.Cu1vNBI_.js";var t=document.getElementById(`project-api-cards`),n=`https://github-proxy.prince14asiedu.workers.dev`,r=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=()=>{document.querySelectorAll(`.project-card`).forEach(t=>{t.addEventListener(`mouseenter`,()=>{r||e({targets:t,translateY:-5,duration:250,ease:`outCubic`})}),t.addEventListener(`mouseleave`,()=>{r||e({targets:t,translateY:0,duration:250,ease:`outCubic`})})})},a=()=>{t&&(t.innerHTML=Array.from({length:3}).map(()=>`
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
        `).join(``),i())};i(),(async()=>{if(t)try{let e=await fetch(`${n}/repos`);if(!e.ok)throw Error(`GitHub API request failed`);t.innerHTML=(await e.json()).filter(e=>!e.fork).sort((e,t)=>(t.stargazers_count||0)-(e.stargazers_count||0)).slice(0,3).map(e=>{let t=languageColors[e.language]||`var(--accent)`;return`
            <article class="project-card card surface-card reveal flex h-full flex-col justify-between p-5 sm:p-6">
              <div>
                <div class="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                  <div>
                    <p class="eyebrow text-[10px] text-muted">GitHub Repo</p>
                    <h3 class="mt-3 break-words text-xl font-semibold text-text sm:text-2xl">
                      <a class="focus-ring transition hover:text-accent" href="${e.html_url}" target="_blank" rel="noreferrer">${e.name}</a>
                    </h3>
                  </div>
                  <span class="tag-pill">${e.visibility||`public`}</span>
                </div>
                <p class="mt-5 text-sm leading-7 text-muted">${e.description||`No description provided yet.`}</p>
              </div>
              <div class="mt-10 flex flex-col items-start justify-between gap-3 text-sm sm:flex-row sm:items-center">
                <span class="inline-flex flex-wrap items-center gap-3 text-muted">
                  <span class="h-2.5 w-2.5 rounded-full" style="background:${t}"></span>
                  ${e.language||`Mixed`}
                  <span>★ ${e.stargazers_count||0}</span>
                </span>
                <a class="focus-ring inline-flex items-center gap-2 font-medium text-accent" href="${e.html_url}" target="_blank" rel="noreferrer">
                  view <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          `}).join(``),i()}catch{a()}})();