b(1,5).
b(2,7).

c(m,u).
c(n,v).

d(ct1).
d(ct2).

a(X,Y) :- b(X,Y).
a(X,Y) :- c(Y,X).
a(X,_) :- d(X).

/* Interogati:
?- setof(X, a(X,_), L).
?- bagof(X, a(X,_), L).
?- findall(X, a(X,_), L).
Observati diferenta intre "bagof" si "findall": "findall" colecteaza toate instantele, pentru toate valorile posibile
ale celui de-al doilea argument al lui a(X,_), in timp ce "bagof" genereaza cate o lista separata pentru fiecare
dintre aceste valori, si intoarce aceste liste pe rand, cand cerem mai multe solutii cu ";"/"Next". Iar "setof"
functioneaza ca "bagof", dar generand lista acelor instante fara duplicate.*/


