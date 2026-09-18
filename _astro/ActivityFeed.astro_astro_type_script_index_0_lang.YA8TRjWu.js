import{i as e,n as t,r as n,t as r}from"./github.m-9bjV8m.js";var i=document.getElementById(`activity-feed`),a=Number(i?.getAttribute(`data-limit`)||5),o={push:`<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19V5m0 0-5 5m5-5 5 5"/></svg>`,pr:`<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a3 3 0 1 0-3-3v10a3 3 0 1 0 3 3M6 14a3 3 0 1 0-3-3v8a3 3 0 1 0 3 3M15 6H9a3 3 0 0 0-3 3v2"/></svg>`,star:`<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2.8 5.66 6.2.9-4.5 4.39 1.06 6.19L12 17.2l-5.56 2.94 1.06-6.19L3 9.56l6.2-.9L12 3Z"/></svg>`,fork:`<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9v3a6 6 0 0 0 6 6h3"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v6"/></svg>`,default:`<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>`},s=e=>{switch(e){case`PushEvent`:return o.push;case`PullRequestEvent`:return o.pr;case`WatchEvent`:return o.star;case`ForkEvent`:return o.fork;default:return o.default}},c=()=>{i&&(i.innerHTML=`
      <li class="px-5 py-6 text-sm text-muted sm:px-6">
        Recent GitHub activity is temporarily unavailable.
      </li>
    `)};(async a=>{if(!i)return;let o=await e(`/activity`,0);if(!o||!o.length){c();return}i.innerHTML=o.slice(0,a).map(e=>{let i=n(e.type);return`
          <li class="flex items-start gap-3 px-4 py-5 text-sm sm:gap-4 sm:px-6">
            <span class="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-alt text-accent">
              ${s(e.type)}
            </span>
            <div class="min-w-0 flex-1">
              <p class="break-words text-sm text-text sm:text-base">
                ${i}
                <a class="break-all font-medium text-accent transition hover:opacity-80" href="https://github.com/${r(e.repo.name)}" target="_blank" rel="noopener">
                  ${r(e.repo.name)}
                </a>
              </p>
              <p class="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">${t(e.created_at)}</p>
            </div>
          </li>
        `}).join(``)})(a);