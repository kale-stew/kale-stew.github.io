import{S as a,i as t,s as e,e as s,t as r,k as o,c as l,a as c,g as n,d as h,n as f,b as d,f as i,D as m,h as p,l as g,J as u,E as v,O as b}from"../chunks/vendor-d79afd49.js";import{b as E}from"../chunks/paths-28a87002.js";function $(a,t,e){const s=a.slice();return s[1]=t[e],s}function y(a){let t,e,g,u,v,b,$,y,x,j,k,q,w,B,H=a[1].metadata.title+"",C=a[1].metadata.date.toUpperCase()+"",D=a[1].metadata.category?` ·  ${a[1].metadata.category}`:"",L=a[1].metadata.excerpt+"";return{c(){t=s("div"),e=s("a"),g=s("h2"),u=r(H),v=o(),b=s("p"),$=r(C),y=o(),x=r(D),j=o(),k=s("p"),q=r(L),B=o(),this.h()},l(a){t=l(a,"DIV",{class:!0});var s=c(t);e=l(s,"A",{href:!0});var r=c(e);g=l(r,"H2",{class:!0});var o=c(g);u=n(o,H),o.forEach(h),v=f(r),b=l(r,"P",{class:!0});var d=c(b);$=n(d,C),y=f(d),x=n(d,D),d.forEach(h),j=f(r),k=l(r,"P",{class:!0});var i=c(k);q=n(i,L),i.forEach(h),r.forEach(h),B=f(s),s.forEach(h),this.h()},h(){d(g,"class","title svelte-mnabfq"),d(b,"class","labels svelte-mnabfq"),d(k,"class","excerpt svelte-mnabfq"),d(e,"href",w=`${E}/${a[1].slug}`),d(t,"class","blog-card")},m(a,s){i(a,t,s),m(t,e),m(e,g),m(g,u),m(e,v),m(e,b),m(b,$),m(b,y),m(b,x),m(e,j),m(e,k),m(k,q),m(t,B)},p(a,t){1&t&&H!==(H=a[1].metadata.title+"")&&p(u,H),1&t&&C!==(C=a[1].metadata.date.toUpperCase()+"")&&p($,C),1&t&&D!==(D=a[1].metadata.category?` ·  ${a[1].metadata.category}`:"")&&p(x,D),1&t&&L!==(L=a[1].metadata.excerpt+"")&&p(q,L),1&t&&w!==(w=`${E}/${a[1].slug}`)&&d(e,"href",w)},d(a){a&&h(t)}}}function x(a){let t,e,p,E,x,j,k,q,w=a[0],B=[];for(let s=0;s<w.length;s+=1)B[s]=y($(a,w,s));return{c(){t=o(),e=s("h1"),p=r("Blog"),E=o(),x=s("h4"),j=r("Long-form Twitter."),k=o();for(let a=0;a<B.length;a+=1)B[a].c();q=g(),this.h()},l(a){u('[data-svelte="svelte-1en87v3"]',document.head).forEach(h),t=f(a),e=l(a,"H1",{});var s=c(e);p=n(s,"Blog"),s.forEach(h),E=f(a),x=l(a,"H4",{class:!0});var r=c(x);j=n(r,"Long-form Twitter."),r.forEach(h),k=f(a);for(let t=0;t<B.length;t+=1)B[t].l(a);q=g(),this.h()},h(){document.title="kylieis.online · Blog",d(x,"class","svelte-mnabfq")},m(a,s){i(a,t,s),i(a,e,s),m(e,p),i(a,E,s),i(a,x,s),m(x,j),i(a,k,s);for(let t=0;t<B.length;t+=1)B[t].m(a,s);i(a,q,s)},p(a,[t]){if(1&t){let e;for(w=a[0],e=0;e<w.length;e+=1){const s=$(a,w,e);B[e]?B[e].p(s,t):(B[e]=y(s),B[e].c(),B[e].m(q.parentNode,q))}for(;e<B.length;e+=1)B[e].d(1);B.length=w.length}},i:v,o:v,d(a){a&&h(t),a&&h(e),a&&h(E),a&&h(x),a&&h(k),b(B,a),a&&h(q)}}}async function j({fetch:a}){return{props:{posts:await a(`${E}/blog.json`).then((a=>a.json()))}}}function k(a,t,e){let{posts:s}=t;return a.$$set=a=>{"posts"in a&&e(0,s=a.posts)},[s]}class q extends a{constructor(a){super(),t(this,a,k,x,e,{posts:0})}}export{q as default,j as load};