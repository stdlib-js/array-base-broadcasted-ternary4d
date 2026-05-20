"use strict";var dr=function(t,a){return function(){return a||t((a={exports:{}}).exports,a),a.exports}};var ar=dr(function(xr,rr){
var l=require('@stdlib/array-base-broadcast-array/dist');function tr(t,a,vr){var B,C,D,E,F,G,H,I,J,K,L,M,z,y,f,s,i,e,x,o,u,m,n,c,j,k,w,S,b,q,A,g,N,O,P,Q,R,T,U,V,W,d,r,X,Y,Z,v,_,$,p,h;if(d=a[3],z=d[3],y=d[2],f=d[1],s=d[0],!(z<=0||y<=0||f<=0||s<=0))for(v=l(t[0],a[0],d),_=v.data,r=v.strides,B=r[3],C=r[2],D=r[1],E=r[0],v=l(t[1],a[1],d),$=v.data,r=v.strides,F=r[3],G=r[2],H=r[1],I=r[0],v=l(t[2],a[2],d),p=v.data,r=v.strides,J=r[3],K=r[2],L=r[1],M=r[0],h=t[3],c=0,S=0,g=0,o=0;o<s;o++){for(n=0,w=0,A=0,P=_[c],T=$[S],W=p[g],Z=h[o],x=0;x<f;x++){for(m=0,k=0,q=0,O=P[n],R=T[w],V=W[A],Y=Z[x],e=0;e<y;e++){for(u=0,j=0,b=0,N=O[m],Q=R[k],U=V[q],X=Y[e],i=0;i<z;i++)X[i]=vr(N[u],Q[j],U[b]),u+=B,j+=F,b+=J;m+=C,k+=G,q+=K}n+=D,w+=H,A+=L}c+=E,S+=I,g+=M}}rr.exports=tr
});var ir=ar();module.exports=ir;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
