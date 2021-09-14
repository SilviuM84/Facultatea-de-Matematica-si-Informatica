:- op(200,xfx,!).

factorial(0,1).
factorial(X,F) :- X>0, Y is X-1, factorial(Y,G), F is G*X.

fact(0,1).
fact(X,F) :- X>0, Y is X-1, fact(Y,G), F=G*X.

0 ! 1.
X ! F :- X>0, Y is X-1, Y ! G, F is G*X.

lung([],0).
lung([_|T],N) :- lung(T,K), N is K+1.

concat([],L,L).
concat([H|T],L,[H|M]) :- concat(T,L,M).








