% Includem fisierul "labirintgrafic_tema.pl", apoi modificam definitiile urmatoarelor predicate:

:- ['labirintgrafic_tema.pl'].

/* Pentru fisiere care nu se afla in directorul curent, trebuie sa dam calea:
:- ['d://temporar//labirintgrafic_tema.pl'].
*/

drawmazensteps(N,K,[]) :- drawmaze(N,K).
drawmazensteps(N,K,L) :- concat(P,[X],L),drawmazensteps(N,K,P),nl,sleep(1),drawmazesglstar(N,K,X).

drawmazenallsteps(_,_,_,[]) :- nl.
drawmazenallsteps(N,K,PrefixDrum,[X|T]) :- concat(PrefixDrum,[X],PrefixNou), drawmazestarncirc(N,K,PrefixDrum,X),
                                           sleep(1), drawmazenallsteps(N,K,PrefixNou,T).

/* Dati interogarile:
?- drawpathnsteps(4,6,(1,1),(4,6)).
?- drawpathnallsteps(4,6,(1,1),(3,5)).
Observati efectul predicatului unar predefinit sleep(NumarSecunde). */

% Este permisa si urmatoarea sintaxa, chiar cu includerea mai multor fisiere simultan:

:- [arbbin,generatiicuarbgen].

reprarbgen :- setof((X,A), ((femeie(X);barbat(X)),arbgen(X,A)), L), reprlistarb(L).

reprlistarb([]).
reprlistarb([(Persoana,Arbore)|ListaPerechiPersoaneArbori]) :- write('Arborele genealogic al lui '), write(Persoana), write(':'), nl,
                                                               reprgr(Arbore), nl, sleep(2), reprlistarb(ListaPerechiPersoaneArbori).

/* Interogati:
?- reprarbgen.
A se observa si faptul ca interogarea:
?- setof((A, ((femeie(X);barbat(X)),arbgen(X,A)), L).
produce liste continand cate un singur arbore genealogic, pentru fiecare valoare a lui X in parte, la cererea mai multor solutii cu ";"/"Next". */
