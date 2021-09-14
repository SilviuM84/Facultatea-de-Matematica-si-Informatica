% A se vedea predicatele urmatoare si in fisierul liste.pl:

concat([],L,L).
concat([H|T],L,[H|M]) :- concat(T,L,M).

/* opermc(L,P) e satisfacut ddaca P e o permutare circulara intr-un singur pas a lui L,
adica P se obtine din L prin mutarea capului lui L la coada. */

opermc([],[]).
opermc([H|T],P) :- concat(T,[H],P).

/* permcirc(L,P,LL) e satisfacut ddaca LL e lista permutarilor circulare ale lui L
incepand cu P si terminand cu L. */

permcirc(L,L,[L]).
permcirc(L,P,[P|LL]) :- L\=P, opermc(P,Q), permcirc(L,Q,LL).

/* permutcirc(L,LL) e satisfacut ddaca LL e lista tuturor permutarilor circulare ale lui L,
incepand cu prima permutare circulara a lui L, intr-un singur pas, si terminand cu L. Cand
ne intoarcem la L, generarea permutarilor circulare se opreste, asadar permutarile circulare
sunt generate fara duplicate. Dati, de exemplu, interogarile:
?- permutcirc([1,2,3,1,2,3],L).
?- permutcirc([c,d,1,2,a,b,c,d,1,2,a,b],L), write(L).
*/

permutcirc(L,LL) :- opermc(L,P), permcirc(L,P,LL).

/* De exemplu, interogarea:
?- sterge(a,[1,2,3,4,5],L).
da ca raspuns fiecare dintre cele 6 liste care se obtin prin adaugarea lui "a" pe fiecare
pozitie in lista [1,2,3,4,5]. Putem obtine lista acestor 6 liste interogand:
?- setof(L,sterge(a,[1,2,3,4,5],L),LL).
Interogati si:
?- setof(L,sterge(a,[1,a,a,4,a],L),LL).
*/

sterge(X,[X|T],T).
sterge(X,[H|T],[H|L]) :- sterge(X,T,L).

/* permut(L,P) e satisfacut ddaca P e permutare (arbitrara) a lui L. P este obtinuta recursiv,
pornind de la lista vida [] si inserand fiecare element al lui L (pentru fiecare aparitie a sa
in L) in lista curenta pe toate pozitiile posibile. */

permut([],[]).
permut([H|T],P) :- permut(T,Q), sterge(H,P,Q).

% Folosind "setof", colectarea permutarilor se face fara duplicate:

permutari(L,LL) :- setof(P,permut(L,P),LL).
