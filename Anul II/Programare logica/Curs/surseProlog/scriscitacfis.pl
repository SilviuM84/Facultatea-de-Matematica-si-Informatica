:- [arbbin,generatiicuarbgen].

puneinfis :- setof((X,A), ((femeie(X);barbat(X)),arbgen(X,A)), L), tell('d://temporar//termeni.txt'), puneperinfis(L), told.

puneperinfis([]).
puneperinfis([H|ListaPerechiPersoaneArbori]) :- write(H), write(.), nl, puneperinfis(ListaPerechiPersoaneArbori).

reprarbgen :- see('d://temporar//termeni.txt'), reprgrtotiarb, seen.

reprgrtotiarb :- read((Persoana,Arbore)), write('Arborele genealogic al lui '), write(Persoana), write(':'), nl,
                 reprgr(Arbore), nl, sleep(2), reprgrtotiarb.

/* Interogati:
?- reprarbgen.
La intalnirea sfarsitului fisierului, read(Termen) intoarce false si recurenta din "reprgrtotiarb" se incheie.
*/
