concat([],L,L).
concat([H|T],L,[H|M]) :- concat(T,L,M).

% modul(N,M) e satisfacut ddaca M e valoarea absoluta a lui N

modul(N,N) :- N>=0.
modul(N,K) :- N<0, K is -N.

% Declaram un operator unar postfixat "e_prim", de precedenta 500:

:- op(500,xf,e_prim).

/* Amintesc ca precedentele sunt opusul prioritatilor, adica operatorii
de precedenta mai mica au prioritatea mai mare, deci leaga mai tare. */

% N e_prim e satisfacut ddaca N e numar intreg prim

N e_prim :- integer(N), modul(N,K), testprim(K).

/* Pentru N numar natural (si cu un astfel de argument e chemat din "e_prim" acest predicat auxiliar),
testprim(N) e satisfacut ddaca N e prim, adica nu se divide cu niciun numar natural cuprins intre 2 si N-1. */

testprim(0) :- fail.
testprim(1) :- fail.
testprim(N) :- N>1, nusediv(N,2).

/* Pentru N numar natural si D numar natural cuprins intre 2 si N, nusediv(N,D) e satisfacut ddaca
fie D=N, fie D<N si N nu se divide cu niciun numar natural cuprins intre 2 si N. */

nusediv(N,N).
nusediv(N,D) :- D<N, N mod D =\= 0, E is D+1, nusediv(N,E).

/* Putem declara operatori de acelasi tip intr-o lista: aici, lista operatorilor unari prefixati
de precedenta 700 "prime_pana_la" si "ciur": */

:- op(700, fx, [prime_pana_la, ciur]).

/* Generam lista numerelor naturale cuprinse intre 2 si un N natural nenul,
apoi selectam din aceasta lista numerele prime, prin doua metode:
- testand primalitatea fiecarui numar din aceasta lista in parte,
- prin ciurul lui Eratostene,
apoi comparam timpii de executie pentru cele doua metode, cu operatorul zeroar predefinit cputime.
In timp ce prima metoda presupune, pentru fiecare numar N, testarea divizibilitatii cu fiecare numar
cuprins intre 2 si N-1, metoda ciurului lui Eratostene presupune testarea doar a divizibilitatii cu
numerele naturale prime mai mici decat N, dar are mai multe apeluri recursive. Vedeti ce se intampla
cand numarul pana la care generam sirul numerelor naturale prime este de ordinul miilor, apoi al
zecilor de mii. */

prime_pana_la N :- Start is cputime, integer(N), N>0, genlista(N,L), select_prime(L,P), write(P), nl,
                   Stop is cputime, TimpExec is Stop-Start, write('timpul de executie in secunde: '), write(TimpExec).

genlista(1,[]).
genlista(N,L) :- N>1, K is N-1, genlista(K,M), concat(M,[N],L).

select_prime([],[]).
select_prime([H|T],[H|L]) :- H e_prim, select_prime(T,L).
select_prime([H|T],L) :- not(H e_prim), select_prime(T,L).

ciur N :- Start is cputime, integer(N), N>0, genlista(N,L), ciuruieste(L,P), write(P), nl,
          Stop is cputime, TimpExec is Stop-Start, write('timpul de executie in secunde: '), write(TimpExec).

filtreaza(_,[],[]).
filtreaza(D,[H|T],[H|L]) :- H mod D =\= 0, filtreaza(D,T,L).
filtreaza(D,[H|T],L) :- H mod D =:= 0, filtreaza(D,T,L).

ciuruieste([],[]).
ciuruieste([H|T],[H|P]) :- filtreaza(H,T,L), ciuruieste(L,P).

