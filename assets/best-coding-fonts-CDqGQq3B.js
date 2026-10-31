import"./modulepreload-polyfill-B5Qt9EMX.js";import{b as h,f as c,d as v,a as b}from"./slug-Cja3KUdo.js";const m=h(c),y=window.matchMedia("(prefers-reduced-motion: reduce)");function w(){const e=document.querySelector(".nav");if(!e)return;let t=!1,a=!1;function n(){const r=window.scrollY>50;r!==t&&(t=r,e.classList.toggle("scrolled",t)),a=!1}window.addEventListener("scroll",()=>{a||(a=!0,window.requestAnimationFrame(n))},{passive:!0})}function L(){const e=document.querySelector(".nav-theme-toggle");if(!e)return;const t=document.documentElement.classList.contains("dark");e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",t?"Switch to light theme":"Switch to dark theme")}const s=document.getElementById("fontGrid"),S=document.getElementById("loadingState"),i=document.getElementById("searchInput"),d=document.querySelectorAll(".filter-tab");let u="all",o="";function k(e){switch(e){case"system":return'<span class="font-status-badge system">System</span>';case"google-fonts-loaded":return'<span class="font-status-badge google-fonts">Google Fonts</span>';case"installed":return'<span class="font-status-badge installed">Installed</span>';default:return'<span class="font-status-badge not-available">Download Required</span>'}}document.addEventListener("DOMContentLoaded",function(){if(localStorage.getItem("darkMode")===null){const e=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.setItem("darkMode",String(e)),document.documentElement.classList.toggle("dark",e)}w(),L(),l({initial:!0}),E(),S?.classList.add("hidden")});function E(){const e=F(function(t){o=t.trim().toLowerCase(),l()},120);i?.addEventListener("input",t=>e(t.target.value)),i?.addEventListener("keydown",t=>{t.key==="Escape"&&i.value&&(i.value="",e(""))}),d.forEach(t=>{t.addEventListener("click",function(){u=this.dataset.filter,d.forEach(a=>a.setAttribute("aria-pressed",String(a===this))),l()})})}function F(e,t){let a;return function(...n){clearTimeout(a),a=setTimeout(()=>e.apply(this,n),t)}}function T(){o="",u="all",i&&(i.value=""),d.forEach(e=>{e.setAttribute("aria-pressed",String(e.dataset.filter==="all"))}),l()}function l({initial:e=!1}={}){const t=c.filter(n=>{if(o&&!n.name.toLowerCase().includes(o))return!1;switch(u){case"free":return n.type==="free";case"paid":return n.type==="paid";case"ligatures":return n.ligatures;case"recommended":return n.recommended;default:return!0}});if(s.setAttribute("aria-busy","true"),s.innerHTML="",t.length===0){s.innerHTML=`
            <div class="empty-state">
                <h3>No fonts match these filters</h3>
                <p>Try a different name, or clear the filters to see all ${c.length} families.</p>
                <button type="button" class="filter-tab empty-state-reset">Clear filters</button>
            </div>
        `,s.querySelector(".empty-state-reset")?.addEventListener("click",T),s.setAttribute("aria-busy","false");return}const a=document.createDocumentFragment();t.forEach(n=>a.appendChild($(n))),s.appendChild(a),s.setAttribute("aria-busy","false"),e&&!y.matches&&(s.classList.add("is-entering"),s.addEventListener("animationend",()=>{s.classList.remove("is-entering")},{once:!0}))}function $(e){const t=document.createElement("div");t.className="font-card",t.id=`font-${m.get(e.name)}`;const a=v(e.name),n=k(a),r=[];e.type==="free"?r.push('<span class="badge free">Free</span>'):r.push('<span class="badge paid">Paid</span>'),e.ligatures&&r.push('<span class="badge ligatures">Ligatures</span>');const p=e.links.map(f=>`<a href="${f.url}" class="font-link" target="_blank" rel="noopener">${f.label}</a>`).join("");t.innerHTML=`
        <h3 class="font-name"><a class="font-name-link" href="/fonts/${m.get(e.name)}">${e.name}</a></h3>
        <div class="font-meta">
            ${r.join("")}
            ${n}
        </div>
        <div class="font-preview" data-font-name="${e.name}"><pre>
abcdefghijklmnopqrstuvwxyz 1234567890 (){}[]
ABCDEFGHIJKLMNOPQRSTUVWXYZ +-*/=.,;:! #&$%@^
oO08 iIlL1 g9qCGQ ~-+=>
        </pre></div>
        <p class="font-description">${e.description}</p>
        <div class="font-links">
            ${p}
        </div>
    `;const g=t.querySelector(".font-preview");return I(g,e.name,a),t}async function I(e,t,a){switch(a){case"system":case"installed":case"google-fonts-loaded":M(e,t);break;default:A(e,t);break}}function M(e,t){const a=b(t);e.style.fontFamily=a,e.classList.remove("font-preview-placeholder")}function A(e,t){e.innerHTML=`
        <div class="font-preview-placeholder">
            <div>${t} requires a manual download</div>
            <div class="font-preview-placeholder-note">Install it from the links below, then refresh the page.</div>
        </div>
    `}
