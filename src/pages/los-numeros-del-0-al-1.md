---
layout: ../layouts/ArticleLayout.astro
titulo: Los números del 0 al 1
autor: Neplod
fotoDelAutor: /images/autores/neplod.webp
portada: /images/contenido/los-numeros-del-0-al-1/portada.webp
portadaAlt: Imagen del Juego de la Vida.
ciencia: matemáticas
fechaMostrar: 16 noviembre, 2022
fechaOrdenar: Nov 16, 2022
duracion: 5
url: /los-numeros-del-0-al-1
---

¿Crees ser capaz de poder escribir todos los números del 0 al 1? Pues prueba a escribir todos los números del 0 al 1. Si has escrito *[0,1]*, lo has hecho mal, hay muchos más números de lo que tú piensas del 0 al 1. Exactamente hay **Ω** (infinito absoluto) números entre 0 y 1, esto es debido a los números decimales, con ellos podemos crear algo parecido a un sub-número, como los niveles de los videojuegos.

## Intento de escribir todos los números del 0 al 1

Para empezar a escribirlos necesitaremos un sitio donde escribirlos, un folio, un [JSON](https://es.wikipedia.org/wiki/JSON), una lista… un espacio para poder escribirlos, eso es fácil, ahora, empecemos:

miLista = [1*10^(Ω*(-1)),2*10^(Ω*(-1)),3*10^(Ω*(-1)),4*10^(Ω*(-1)),5*10^(Ω*(-1)), …, 0.999…,1]

## Nuevos símbolos

Así nunca acabaríamos, escribir x*(10^(Ω*(-1))+y) es algo muy difícil y largo, habría que hacer una manera más fácil, con un símbolo nuevo, por ejemplo x/^Ωy, así es mucho más fácil escribir algunos números como 1/^Ω0 (1*10^(Ω*(-1))) o 5/^Ωω(omega) (5*(10^(Ω*(-1))+ω)).

Otro símbolo que necesitamos es para escribir un número periódico con x decimales, algo así, 0.x_y.z, dicho de otra manera 0. x repetido y veces y después z, así podemos poner algo como 0.9_(Ω-1).8, que sería 0. 9 repetido Ω – 1 veces y después un 8.

## Reducir nuestra lista

Aunque tengamos una forma de escribir una operación larga de forma reducida o un número periódico de x decimales, aún seguimos teniendo que escribir muchos números, así que necesitamos otro símbolo que haga una operación bucle que ponga todos los números en una lista, es decir un símbolo que represente nuestra lista, algo como esto:

**x[y]z**

**X** y **Z** son el primer y el último número de nuestra serie de números, e Y es el número máximo de decimales que puede haber, es decir con nuestra lista de antes sería algo así:

x[y]z => [x,1/^y0,2/^y0,3/^y0,4/^y0, ...,0.9_(y-1).8,0.9_y,z]

## Escribiendo todos los números del 0 al 1

Con todos nuestros símbolos nuevos escribiremos todos los números de 0 a 1:

**0[Ω]1**

## Conclusión

- Con todos nuestros símbolos nuevos podemos escribir todos los números del 0 al 1 con **0[Ω]1**
- Esto de los decimales es muy difícil.