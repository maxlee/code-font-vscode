import"./disclose-version.Pu9au5Ty.js";import{B as e,C as t,E as n,F as r,I as i,L as a,N as o,O as s,R as c,S as l,T as u,a as d,b as f,c as p,d as m,f as h,g,j as _,k as v,l as y,o as b,r as x,t as S,u as C,v as w,z as T}from"./client.DIEI55MT.js";import{n as E,r as D}from"./font-availability.D5rt2YGM.js";import{t as O}from"./format.Bm_AhlrV.js";var k={code:`function debounce(fn, ms = 250) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

const isOdd = (n) => n % 2 !== 0;`,alphabet:`abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ

0123456789
+-*/=<>!&|^%$#@~?.,;:(){}[]`,numerals:`0123456789

0 1 2 3 4 5 6 7 8 9
O o 0   I l 1   |   L
8 B   g 9 q   rn m`,punctuation:`() [] {} <>
= == === != !== => ->
&& || ?? ?. ... ::
/* comment */ // note
const s = 'text';`,ligatures:`->  =>  <=  >=  !=  ===
::  :=  ++  --  **  //
/*  */  /**  <|  |>  <$>

!= !==  == ===  <= >=  -->`},A=f(`<div class="setup-block"><pre class="setup-code" id="editorSnippet"> </pre> <button type="button" aria-live="polite"> </button></div>`);function j(n,a){T(a,!0);let l=i(`copy`),d,f;async function p(){try{await navigator.clipboard.writeText(a.value),r(l,`copied`)}catch{let e=window.getSelection(),t=document.createRange();t.selectNodeContents(f),e?.removeAllRanges(),e?.addRange(t),r(l,`selectCopy`)}clearTimeout(d),d=setTimeout(()=>r(l,`copy`),_(l)===`copied`?1600:2400)}m(()=>clearTimeout(d));var h=A(),y=u(h),x=s(y,!0);S(y,e=>f=e,()=>f);var C=v(y,2);let E;var D=s(C,!0);e(h),o(()=>{g(x,a.value),E=b(C,1,`copy-button`,null,E,{"is-copied":_(l)===`copied`}),g(D,a.copy[_(l)])}),t(`click`,C,p),w(n,h),c()}l([`click`]);var M=f(`<button type="button" class="preset"> </button>`),N=f(`<button type="button" class="preset" data-preset="custom"> </button>`),P=f(`<button type="button" class="preset" data-ligature-toggle=""> </button>`),F=f(`<div class="specimen-toolbar"><h2> </h2> <div class="preset-row" role="group"><!> <!></div> <!></div> <div class="specimen-panel specimen-input" spellcheck="false"> </div> <div class="specimen-settings"><h2> </h2> <p> </p> <!></div>`,1);function I(l,f){T(f,!0);let m=Object.keys(k),b=i(`code`),A=i(void 0),I=i(!0),L=a(()=>JSON.stringify({"editor.fontFamily":E(f.name),...f.ligatures?{"editor.fontLigatures":_(I)}:{}},null,2)),R=i(!1),z;h(()=>{r(R,!0)});function B(e){r(b,e,!0),z.innerText=e===`custom`?_(A)??``:k[e]}var V=F(),H=n(V),U=u(H),W=s(U,!0),G=v(U,2),K=u(G);p(K,17,()=>m,y,(e,n)=>{var r=M(),i=s(r,!0);o(()=>{x(r,`data-preset`,_(n)),x(r,`aria-pressed`,_(b)===_(n)),g(i,f.copy[_(n)])}),t(`click`,r,()=>B(_(n))),w(e,r)});var q=v(K,2),J=e=>{var n=N(),r=s(n,!0);o(()=>{x(n,`aria-pressed`,_(b)===`custom`),g(r,f.copy.custom)}),t(`click`,n,()=>B(`custom`)),w(e,n)};C(q,e=>{_(A)!==void 0&&e(J)}),e(G);var ee=v(G,2),te=e=>{var n=P(),i=s(n,!0);o(()=>{x(n,`aria-pressed`,_(I)),g(i,_(I)?f.copy.ligaturesOn:f.copy.ligaturesOff)}),t(`click`,n,()=>r(I,!_(I))),w(e,n)};C(ee,e=>{f.ligatures&&e(te)}),e(H);var Y=v(H,2);let X;var ne=s(Y,!0);S(Y,e=>z=e,()=>z);var Z=v(Y,2),Q=u(Z),re=s(Q,!0),$=v(Q,2),ie=s($,!0);j(v($,2),{get value(){return _(L)},get copy(){return f.clipboard}}),e(Z),o((e,t,n)=>{g(W,e),x(G,`aria-label`,f.copy.sample),x(Y,`contenteditable`,_(R)?`plaintext-only`:!1),x(Y,`role`,_(R)?`textbox`:void 0),x(Y,`aria-multiline`,_(R)?!0:void 0),x(Y,`aria-label`,t),X=d(Y,``,X,{"font-family":n,"font-variant-ligatures":f.ligatures?_(I)?`contextual`:`none`:void 0}),g(ne,k.code),g(re,f.setupTitle),g(ie,f.setupHelp)},[()=>O(f.copy.typeOwn,{name:f.name}),()=>O(f.copy.rendered,{name:f.name}),()=>D(f.name)]),t(`input`,Y,()=>{r(A,z.innerText,!0),r(b,`custom`)}),w(l,V),c()}l([`click`,`input`]);export{I as default};