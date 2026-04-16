Web-kalkulator

En enkel webapplikasjon med tre matematiske funksjoner: Fakultet, FizzBuzz og Fibonacci.

Funksjoner

Fakultet – beregner n! feks 5! = 120)
FizzBuzz – returnerer "Fizz", "Buzz", "FizzBuzz" eller tallet selv
Fibonacci – returnerer det n-te fibonacci-tallet

Kom i gang

Åpne `index.html` i en nettleser.

## Kjør tester

```bash
npm install
npm test
```
## Feil og løsning

I starten returnerte funksjonen `fakultet` alltid verdien 120. Dette gjorde at én test passerte, selv om funksjonen var feil.  

Da flere tester ble lagt til (f.eks. for 3 og 0), begynte testene å feile. Jeg oppdaget da at funksjonen ikke var implementert riktig, og løste det ved å implementere selve fakultet-logikken med en løkke.