// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.2-esm/index.mjs";function a(a,s,t){var d,e,i,o,f,n,m,b,c,j,l,p,v,h,u,x,y,g,k,q,w,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr;if(v=(T=s[3])[3],h=T[2],u=T[1],x=T[0],!(v<=0||h<=0||u<=0||x<=0))for(Z=(Y=r(a[0],s[0],T)).data,d=(U=Y.strides)[3],e=U[2],i=U[1],o=U[0],$=(Y=r(a[1],s[1],T)).data,f=(U=Y.strides)[3],n=U[2],m=U[1],b=U[0],_=(Y=r(a[2],s[2],T)).data,c=(U=Y.strides)[3],j=U[2],l=U[1],p=U[0],rr=a[3],B=0,F=0,J=0,q=0;q<x;q++){for(A=0,E=0,I=0,M=Z[B],P=$[F],S=_[J],X=rr[q],k=0;k<u;k++){for(z=0,D=0,H=0,L=M[A],O=P[E],R=S[I],W=X[k],g=0;g<h;g++){for(w=0,C=0,G=0,K=L[z],N=O[D],Q=R[H],V=W[g],y=0;y<v;y++)V[y]=t(K[w],N[C],Q[G]),w+=d,C+=f,G+=c;z+=e,D+=n,H+=j}A+=i,E+=m,I+=l}B+=o,F+=b,J+=p}}export{a as default};
//# sourceMappingURL=index.mjs.map