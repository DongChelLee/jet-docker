/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var p;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(a){this.Init(a)}function c(a,b,c,d){this.Init(b,c,d);this.ga=a}function d(){}function e(){this.Init({alta:e.ji})}function f(a,b,c){this.Init(a,b,c)}function h(a,b,c,d,e,f,h){this.Init(a,b,c,d,e,f,h)}function k(a){this.hD=a}a.vh=function(a,b,c){this.Init(a,b,c)};a.v.D(a.vh,a.xe);a.vh.newInstance=function(b,c,d){return new a.vh(b,c,d)};a.vh.prototype.Init=function(d,f,h){a.vh.C.Init.call(this,d,f,h);this.u().Le.pb().setAttributeNS(null,"text-rendering","geometricPrecision");
this.H=new c(this,d,this.Ef,this);this.H.ig(this);a.B.Ua()||this.H.ws(new b(this.H));this.hh=new e;this.Xb=[];this.$u=[];this.Kj=null;this.wj=new a.lf(this.u());this.H.FP(this.wj)};a.vh.prototype.ya=function(b,c,d){isNaN(c)||isNaN(d)||(this.Cb=c,this.Pb=d);this.wX();this.Hf(b);this.Os();this.jj=this.Ca;this.OZ=this.Xb;this.Xb=[];this.qGa=[];this.Ca=new a.ia(this.u());this.A(this.Ca);l.ya(this,this.Ca,new a.Y(0,0,this.Cb,this.Pb));this.Uc&&this.Uc.Rt(this.X.selection,this.vv());c=this.X.animationDuration;
d=new a.Y(0,0,this.Cb,this.Pb);this.jj?"none"!==this.X.animationOnDataChange&&b&&(this.xh=new a.ia(this.u()),this.A(this.xh),b=new a.Gp(this.u(),this.xh),b.jq(this.OZ,this.Xb),this.wc=b.pv()):"none"!==this.X.animationOnDisplay&&(this.wc=a.fc.yD(this.u(),a.fc.zB,this.Ca,d,c));this.wc?(this.H.ce(),this.H.cm(this),this.wc.Pf(this.Pxa,this),this.wc.play()):this.Pxa();this.Br()};a.vh.prototype.Vsa=function(a){this.Xb=a};a.vh.prototype.ti=function(){this.Ud||(this.Ud=new k(this));return this.Ud};a.vh.prototype.JK=
function(a,b){this.$u.push(a);this.qGa[b]=a};a.vh.prototype.vv=function(){return this.$u};a.vh.prototype.Fk=function(){return this.qGa};a.vh.prototype.Oe=function(b){this.X.highlightedCategories=a.Ec.clone(b);a.Vg.Oe(b,this.vv(),"any"===this.X.highlightMatch);this.Kj&&this.Kj.Oe(b)};a.vh.prototype.select=function(b){this.X.selection=a.Ec.clone(b);this.Uc&&this.Uc.Rt(this.X.selection,this.vv())};a.vh.prototype.Hf=function(b){b?this.X=this.hh.an(b):this.X||(this.X=this.jE());b=this.X.selectionMode;
this.Uc="single"===b?new a.Uc(a.Uc.Kz):"multiple"===b?new a.Uc(a.Uc.Jz):null;this.H.wB(this.Uc);a.B.Xi()||(this.X.animationOnDisplay="none",this.X.animationOnDataChange="none")};a.vh.prototype.Im=function(){return a.K.Qg(this.F(),"componentName",a.K.Ma,"TAG_CLOUD")};a.vh.prototype.Pxa=function(){this.jj&&(this.removeChild(this.jj),this.jj.va(),this.jj=null);this.xh&&(this.removeChild(this.xh),this.xh.va(),this.xh=null);this.wc&&this.H.ig(this);this.X.highlightedCategories&&0<this.X.highlightedCategories.length&&
this.Oe(this.X.highlightedCategories);this.Mn||this.su();this.wc=null;this.Mn=!1};a.vh.prototype.wX=function(){this.H.ce();this.$u.length=0};a.vh.prototype.Ef=function(b,c){var d=b.type;if("categoryHide"==d||"categoryShow"==d){var e=b.category,f=a.na.qb(this.X.hiddenCategories,e);"categoryHide"==d&&0>f&&this.X.hiddenCategories.push(e);"categoryShow"==d&&0<=f&&this.X.hiddenCategories.splice(f,1);this.ya(this.X,this.Cb,this.Pb)}else"categoryHighlight"==d&&(this!=c?this.Oe(b.categories):this.Kj&&this.Kj!=
c&&this.Kj.Ef(b,c));b&&this.dispatchEvent(b)};a.vh.prototype.Wgb=function(a){return this.Uc?a[0]:null};a.vh.prototype.Hdb=function(a){a.xb()||(this.Uc.zp(a,!1),this.H.tG());a=[];for(var b=this.Uc.getSelection(),c=0;c<b.length;c++){var d=b[c];d instanceof f&&a.push(d.getId())}return a};a.vh.prototype.Ft=function(){for(var a=[],b=this.Uc.getSelection(),c=0;c<b.length;c++)a=a.concat(b[c].Ce());return a};a.vh.prototype.bm=function(a,b,c){return this.wj.bm(c)};a.vh.prototype.ym=function(a,b){return this.wj.ym(a,
b)};a.vh.prototype.Uy=function(a,b){return this.wj.Uy(a,b)};a.vh.prototype.WA=function(a,b){return this.wj.WA(a,b)};a.v.D(k,a.Ud);k.prototype.Po=function(a){return(a=this.hD.H.kb(a))&&a instanceof f?"item["+this.hD.Fk().indexOf(a)+"]":null};k.prototype.vi=function(b){if(b==a.Ud.UB)return this.nE(this.hD);var c=b.indexOf("[");return 0<c&&"item"===b.substring(0,c)&&(b=parseInt(b.substring(c+1,b.length-1)),b=this.hD.Fk()[b])?b.Ce()[0].pb():null};k.prototype.getItem=function(a){if(a=this.hD.Fk()[a]){var b=
{};b.color=a.tl();b.tooltip=a.be();b.label=a.me();b.value=a.getValue();b.selected=a.xb();return b}return null};k.prototype.fK=function(){return this.hD.vv().length};a.v.D(h,a.oe);h.sZa=.3;h.tZa=.6;h.Rca=0;h.Tca=1;h.Sca=2;h.prototype.Init=function(a,b,c,d,e,f,k){h.C.Init.call(this,b,c,d,e,f,k);this.hD=a;this.RJ();f&&this.fDa(f)};h.prototype.qc=function(a){this.ml!=a&&((this.ml=a)?this.ep?this.Db(this.W7):this.Db(this.P9):this.Db(this.yN))};h.prototype.zd=function(){this.ep||(this.ep=!0,this.ml?this.Db(this.W7):
this.Db(this.dla))};h.prototype.Rc=function(){this.ml?this.Db(this.P9):this.Db(this.yN);this.ep=!1};h.prototype.qh=function(b,c){var d=new a.Nd(this.u(),this,n.ob(this.hD)),e=this.Gd(),f=c.Gd(),k=!1,l=f.M(a.j.hc),u=e.M(a.j.hc);if(l!=u){var B=this;this.Db(e.la(a.j.hc,l));d.ka.O(a.I.wza,this,function(){return B.Gd().M(a.j.hc)},function(b){B.Db(B.Gd().la(a.j.hc,b))},u)}f=parseFloat(f.M(a.j.Eh));e=parseFloat(e.M(a.j.Eh));f!=e&&(k=!0,B=this,this.Lg(f),d.ka.O(a.I.W,this,function(){return parseFloat(B.Gd().M(a.j.Eh))},
this.Lg,e));e=c.Va();f=this.Va();l=c.$q();u=this.$q();if(f!=e||k&&u!=l)u!=l&&(e=h.V0a(c,e,l)),this.Ia(e),d.ka.O(a.I.W,this,this.Va,this.Ia,f);k=c.hb();e=this.hb();e!=k&&(this.jb(k),d.ka.O(a.I.W,this,this.hb,this.jb,e));c.U(0);b.add(d,h.Tca)};h.prototype.bk=function(b){b.add(new a.Lj(this.u(),this,n.ob(this.hD)),h.Rca)};h.prototype.Si=function(b){this.U(0);b.add(new a.Dh(this.u(),this,n.ob(this.hD)),h.Sca)};h.prototype.Lg=function(a){h.C.Lg.call(this,a);this.fDa(this.Gd())};h.prototype.fDa=function(b){this.yN=
b.clone();b=this.yN.M(a.j.hc);this.yN.la(a.j.Ob,null);this.dla=this.yN.clone();var c=h.MGa(b,h.sZa);this.dla.la(a.j.Ob,c);this.dla.la(a.j.hc,a.N.cn(c));this.P9=this.yN.clone();this.P9.la(a.j.Ob,b);this.P9.la(a.j.hc,a.N.cn(b));this.W7=this.yN.clone();b=h.MGa(b,h.tZa);this.W7.la(a.j.Ob,b);this.W7.la(a.j.hc,a.N.cn(b))};h.V0a=function(b,c,d){b=b.Ofb();return d==a.ba.Qo?c+b.a:d==a.ba.Cl?c-b.a:c};h.MGa=function(b,c){var d=a.N.zg(b),e=a.N.vg(b),f=a.N.tg(b);return a.N.PG(Math.floor(255*(1-c)+c*d),Math.floor(255*
(1-c)+c*e),Math.floor(255*(1-c)+c*f))};a.v.D(f,a.v);f.prototype.Init=function(b,c,d){this.ga=b;this.ej=c;this.Qb=d;this.qM=this.ml=!1;d.url?(c.Of("link"),this.Zla=a.L.kK("_blank",d.url)):c.Of("img");this.iv()};f.prototype.getId=function(){return this.Qb.id};f.prototype.me=function(){return this.Qb.label};f.prototype.getValue=function(){return this.Qb.value};f.prototype.be=function(){return this.Qb.shortDesc};f.prototype.bh=function(){return this.Qb.action};f.prototype.ug=function(){var a=this.ga.F().tooltip;
return(a=a?a.renderer:null)?this.ga.u().jf().Zw(a,this.wm()):this.be()};f.prototype.wm=function(){return{id:this.getId(),label:this.me(),color:this.tl(),value:this.getValue()}};f.prototype.kK=function(){return this.Zla};f.prototype.tl=function(){this.Hu||(this.Hu=(new a.j(this.Qb.style)).M(a.j.hc));return this.Hu};f.prototype.bi=function(a){this.qM=a};f.prototype.rb=function(){return this.qM};f.prototype.xb=function(){return this.ml};f.prototype.qc=function(a){this.ml=a;this.ej.qc(a);this.iv()};f.prototype.zd=
function(){this.ej.zd()};f.prototype.Rc=function(){this.ej.Rc()};f.prototype.Xd=function(c){var d=this.ga.H.Eb;return c.type==a.MouseEvent.ye||d.Cv(c)?this:d.Yi(c)?b.Xd(this,c,this.ga.vv()):null};f.prototype.wf=function(a){return this.ej.aa(a)};f.prototype.Bm=function(){return this.ej.pb()};f.prototype.Qf=function(){this.dd=!0;this.zd()};f.prototype.Md=function(){this.dd&&(this.dd=!1,this.Rc())};f.prototype.Od=function(){return this.dd};f.prototype.Ce=function(){return[this.ej]};f.prototype.Fd=function(){var b=
[];this.rb()&&b.push(a.K.ua(a.K.Ma,this.xb()?"STATE_SELECTED":"STATE_UNSELECTED"));return a.oa.Ck(this.be(),b)};f.prototype.we=function(){return this.Qb.categories};f.prototype.iv=function(){a.B.Ki()||this.ej.yd("label",this.Fd())};f.prototype.hf=function(){if(!this.Ke&&(this.Ke=[],this.Qb.showPopupBehaviors))for(var b=this.Qb.showPopupBehaviors,c=0;c<b.length;c++)this.Ke.push(new a.Mc(b[c].popupId,b[c].triggerType,b[c].alignId,b[c].align));return this.Ke};f.prototype.bm=function(a){return this.ga.Wgb(a)};
f.prototype.ym=function(){return this.ga.Hdb(this)};f.prototype.Ft=function(){return this.ga.Ft()};a.v.D(e,a.ab);e.ji={animationOnDisplay:"none",animationOnDataChange:"none",emptyText:null,hiddenCategories:[],hideAndShowBehavior:"none",highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",layout:"rectangular",selectionMode:"none",_statusMessageStyle:new a.j(a.ab.im+"color: #333333;"),styleDefaults:{animationDuration:500,hoverBehaviorDelay:200,style:new a.j(a.ab.im+"color: #333333;")},
touchResponse:"auto"};var l={};a.v.D(l,a.v);l.ya=function(a,b,c){l.cv(a,b,c);l.BJ(a,b,c);l.cC(c);var d=a.F();d.items&&0<d.items.length?(d=l.vna(a,b,c),0<d.length?(a.Vsa(d),a.H.vs(a.vv()[0])):l.x_(a,b,c)):l.x_(a,b,c)};l.x_=function(b,c,d){var e=b.F(),f=e.emptyText;f||(f=a.K.Qg(e,"labelNoData",a.K.Ma,"NO_DATA",null));a.Da.uq(c,f,new a.Y(d.x,d.y,d.a,d.b),b.H,e._statusMessageStyle)};l.cv=function(b,c,d){b=new a.Rect(b.u(),d.x,d.y,d.a,d.b);b.Ub();c.A(b)};l.vna=function(b,c,e){for(var k=b.F(),l=[],n=k.items,
z=Number.MAX_VALUE,u=-Number.MAX_VALUE,B=0;B<n.length;B++)z=Math.min(z,n[B].value),u=Math.max(u,n[B].value);z=d.Vdb(z,u);u=a.na.wO(k.hiddenCategories);for(B=0;B<n.length;B++){var y=n[B];y.categories||(y.categories=[y.label]);if(!u||!a.na.UU(u,y.categories)){var C=k.styleDefaults.style.clone(),G=y.color;G&&C.la(a.j.hc,G);C.Ph(y.style);C.la(a.j.Eh,z.call(null,y.value).toString());C=new h(b,b.u(),y.label,0,0,C,y.id);G=new f(b,C,y);b.H.mb(C,G);b.JK(G,B);"none"!==k.selectionMode&&G.bi(!0);(G.rb()||y.url||
G.bh())&&C.setCursor("pointer");l.push(C);c.A(C)}}0<l.length&&("cloud"===k.layout?d.ubb(e,l):d.Vib(e,l,a.B.fa(b.u())));return l};l.BJ=function(b,c,d){var e=b.F(),f=e.legend;if(f&&f.sections){f=a.Ec.clone(f);f.orientation="horizontal";f.halign="center";f.hoverBehavior=e.hoverBehavior;f.hideAndShowBehavior=e.hideAndShowBehavior;f.hiddenCategories=e.hiddenCategories;e=a.df.newInstance(b.u(),b.Ef,b);c.A(e);var h=e.cs(f,d.a,d.b/3);e.ya(f,h.a,h.b);a.Pn.position(d,"bottom",e,h.a,h.b,0);b.Kj&&(b.Kj.va(),
c.removeChild(b.Kj));b.Kj=e}};l.cC=function(a){a.x=Math.round(a.x);a.y=Math.round(a.y);a.a=Math.round(a.a);a.b=Math.round(a.b)};a.v.D(d,a.v);d.Vdb=function(a,b){return function(c){return 12+Math.ceil(2*(c-a)/(b-a)*12)}};d.ubb=function(b,c){var d=[],e=10/180,f=10/180;b.a>b.b?e*=b.a/b.b:f*=b.b/b.a;for(var h=2*Math.PI/180,k=null,l=0,n=[],y=[],C=0;C<c.length;C++)for(var G=!1,J=0,A=4,F=c[C],O=F.aa(),l=Math.max(l,parseFloat(F.Gd().M(a.j.Eh))),V=-1;!G;){var S=J%180;void 0===n[S]&&(n[S]=Math.cos(J*h));void 0===
y[S]&&(y[S]=Math.sin(J*h));var ia=e*J*n[S],fa=f*J*y[S],ga=new a.Y(ia,fa,O.a,O.b),G=!0;-1!=V&&d[V].Ora(ga)&&(G=!1);if(G)for(S=0;S<C;S++)if(d[S].Ora(ga)){V=S;G=!1;break}G&&(k=k?k.pj(ga):ga,V=-1,d[C]=ga,F.Ia(ia),F.jb(-O.y+fa));3600===J?A=3:5400===J?A=2:10800===J&&(A=1);J+=A}d=Math.max(k.a/b.a,k.b/b.b);e=k.x+k.a/2;k=k.y+k.b/2;for(S=0;S<c.length;S++)F=c[S],F.Ia(b.x+F.Va()/d+(b.a/2-e/d)),F.jb(b.y+F.hb()/d+(b.b/2-k/d)),f=parseFloat(F.Gd().M(a.j.Eh)),F.Lg(f/d)};d.Vib=function(b,c,e){for(var f=[],h=0,k=0,
l=0,n=0;n<c.length;n++){var B=c[n],y=B.aa(),h=Math.max(h,y.a),k=Math.max(k,y.b),l=Math.max(l,parseFloat(B.Gd().M(a.j.Eh)));f.push(new a.hk(y.a,y.b))}n=0;for(B=(b.a-10)/h;.001<B-n;)h=(n+B)/2,l=d.zCa(f,(b.a-10)/h),l.length*(h*k+2)-2>b.b-10?B=h:n=h;h=n;l=d.zCa(f,(b.a-10)/h);l.push(c.length);for(n=0;n<l.length-1;n++){var y=l[n],C=l[n+1],G=0,J=0,A=!0;if(1<C-y){for(var B=0,F=y;F<C;F++)B+=f[F].a*h,J=Math.max(J,f[F].b*h);G=(b.a-10-B)/(C-y-1);n==l.length-2&&(F=.5*J,F<G&&B+(C-y)*F<.9*(b.a-10)&&(G=F,A=!1))}for(var J=
5+(n+1)*(k*h+2)-2,O=e?b.a-5:5,F=y;F<C;F++){var B=c[F],V=parseFloat(B.Gd().M(a.j.Eh));B.Lg(V*h);B.jb(b.y+J);A&&F==C-1&&F!=y?e?(B.Cj(),B.Ia(b.x+5)):(B.Dj(),B.Ia(b.x+b.a-5)):(B.Ia(b.x+O),e?(B.Dj(),O-=f[F].a*h+G):(B.Cj(),O+=f[F].a*h+G))}}};d.zCa=function(a,b){var c=[0],d=a[0].a+2;if(1<a.length)for(var e=1;e<a.length;e++)d+a[e].a>b&&(c.push(e),d=0),d+=a[e].a+2;return c};var n={};a.v.D(n,a.v);n.ob=function(a){return a.F().styleDefaults.animationDuration/1E3};a.v.D(c,a.H);c.prototype.HQ=function(a){a=this.kb(a.target);
this.Uka(a);this.TN(a)};c.prototype.KW=function(a){a=this.kb(a.target);this.TN(a)};c.prototype.Uv=function(a){a=this.kb(a.target);this.Uka(a);this.TN(a)};c.prototype.Uka=function(a){a instanceof f&&(a=a.kK())&&a.call()};c.prototype.Nk=function(b){var d=!0,e=this.$e();b.keyCode==a.KeyboardEvent.Ci?this.Uka(e):d=c.C.Nk.call(this,b);return d};c.prototype.Jp=function(b,c,d){b=this.ga.F();"dim"==b.hoverBehavior&&(c=c.we?c.we():[],b.highlightedCategories=d?c.slice():null,d=a.Xa.RG(b.highlightedCategories,
d),c=a.Sa.hs(b.styleDefaults.hoverBehaviorDelay),this.NH.Ef(d,this.ga.vv(),c,"any"==b.highlightMatch))};c.prototype.TN=function(b){b&&b.bh&&b.bh()&&this.Kk(a.Xa.QG("action",b.bh(),b.getId()))};c.prototype.yz=function(){return this.ga.F().touchResponse};a.v.D(b,a.Eb);b.prototype.Init=function(a){b.C.Init.call(this,a)};b.prototype.ND=function(a){return this.Yi(a)&&!a.ctrlKey};b.prototype.Cv=function(b){return b.keyCode==a.KeyboardEvent.Di&&b.ctrlKey};b.Xd=function(b,c,d){c=c.keyCode==a.KeyboardEvent.bg||
c.keyCode==a.KeyboardEvent.mg?!0:!1;b=a.na.qb(d,b)+(c?1:-1);return b<d.length&&0<=b?d[b]:null};a.v.D(function(){},a.kQ);a.Ta(a,"TagCloud",a.vh);a.Ta(a.vh,"newInstance",a.vh.newInstance);a.Ta(a.vh.prototype,"render",a.vh.prototype.ya);a.Ta(a.vh.prototype,"getAutomation",a.vh.prototype.ti);a.Ta(a.vh.prototype,"highlight",a.vh.prototype.Oe);a.Ta(a.vh.prototype,"select",a.vh.prototype.select);a.Ta(k.prototype,"getDomElementForSubId",k.prototype.vi);a.Ta(k.prototype,"getItem",k.prototype.getItem);a.Ta(k.prototype,
"getItemCount",k.prototype.fK)})(dvt);
  return dvt;
});