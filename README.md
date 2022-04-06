# ixtlan_naloga Koledar

## Funkcionalnosti koledarja

- Prikaz dnevov v mesecu, po 7 v vrsti kjer so nedelje drugačnega izgleda.
- Možnost izbire meseca (dropdown) in leta (input).
- Vnos točnega datuma oblike dd.mm.yyyy in skok koledarja na tisto stran.
- Branje datoteke holidays.txt, kjer se nahajajo podatki o praznikih, in prikaz praznikov na koledarju z modro barvo ozadja.

## Oblika datoteke holidays.txt

```json
{
  "0": [
    { "day": 0, "name": "Novo leto", "year": -1 },
    { "day": 1, "name": "Novo leto", "year": -1 }
  ],

  "1": [{ "day": 7, "name": "Prešernov dan", "year": -1 }],
  "2": [{ "day": 15, "name": "Samo eno leto je praznik", "year": 1985 }],
  "3": [],
  "4": [
    { "day": 0, "name": "Dan dela", "year": -1 },
    { "day": 1, "name": "Dan dela", "year": -1 }
  ],
  "5": [],
  "6": [],
  "7": [],
  "8": [],
  "9": [],
  "10": [],
  "11": [{ "day": 24, "name": "Božič", "year": -1 }]
}
```

Oblika podatkov je json objekt kjer so ključi indexi mesecev (januar - 0, februar- 1), vrednosti pa tabele objektov z informacijami o imenu, dnevu (dan-1), in letu praznika. Če je vrednost leta nastavljena na -1 je praznik ponavljajoč.
