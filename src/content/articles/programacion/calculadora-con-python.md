---
titulo: Calculadora con Python
autor: dario-otero
portadaAlt: Fotografía de código en Python.
descripcion: Enfréntate al reto de crear tu propia calculadora hoy mismo usando el famoso lenguaje de programación Python paso a paso.
fecha: 2022-10-01
---

En este reto realizaremos una calculadora con [Python](https://python.org/). La dificultad de este reto es **baja**.

Es importante que, si quieres realizar el reto, leas los enunciados de cada reto y no llegues a leer la solución, para así poder intentar realizar cada reto por tu cuenta.

## Realizar una calculadora con Python

### Recoger 2 números en la calculadora

#### Enunciado

El primer paso para nuestra calculadora en Python **será recoger dos números**, que serán los que se usarán en la operación que queramos hacer.

#### Solución

Declararemos dos variables, llamadas ‘a’ y ‘b’. ‘a’ contendrá el primer número y ‘b’ el segundo, para ello usaremos un ‘input’ para declarar las variables. Se vería tal que así.

![Fragmento de código en Python](/images/contenido/calculadora-con-python/fragmento-1.webp)

Hagamos un repaso de lo que hace cada línea del código:

Declara una variable llamada ‘a’ que será igual al ‘int’ (integger, número entero) de lo que escriba el usuario en el ‘input(“Número 1: “)’.
Declara una variable llamada ‘b’ que será igual al ‘int’ (integger, número entero) de lo que escriba el usuario en el ‘input(“Número 2:”)’.

// Número 1: 18

// Número 2: 8

En este ejemplo, 18 y 8 sería lo que escribe el usuario.

### Recoger el tipo de operación en la calculadora

#### Enunciado

El siguiente paso del reto es **recoger el tipo de operación que el usuario marque**.

#### Solución

Este paso del reto se resuelve igual que el paso anterior. Lo primero que hacemos es declarar una variable, la llamaremos ‘op’ (de operación), y será igual a la entrada del usuario.

![Fragmento de código en Python](/images/contenido/calculadora-con-python/fragmento-2.webp)

Expliquemos lo que hace la línea de código:

Declara una variable llamada ‘op’, la cual es igual al ‘input(“Operación: “)’, es decir, a lo que el usuario responda al texto ‘Operación’.
La consola de salida se vería tal que así:

// Operación: +

Igual que en el caso anterior, lo que está en negrita es lo que ya está escrito por el programa y lo que no es lo que está escrito por el usuario.

### Leer el tipo de operación

#### Enunciado

Llegados a este punto, tenemos que hacer que el programa identifique lo que el usuario ha escrito para saber qué operación tiene que hacer.

**PISTA**: Contaremos con las operaciones de suma (+), resta (-), multiplicación (*) y división (/).

Para hacer este paso, partimos de lo que ya teníamos escrito en pasos anteriores, es decir:

a = int(input("Número 1: "))
b = int(input("Número 2: "))
op = input("Operación: ")

El objetivo de este paso del reto es que en la consola de salida, tras añadir los dos números y la operación, me diga **qué operación he introducido de la siguiente manera**:

- Si he introducido ‘+’, me tiene que decir: ‘Has introducido una suma’.
- Si he introducido ‘-, me tiene que decir: ‘Has introducido una resta’.
- Si he introducido ‘*’, me tiene que decir: ‘Has introducido una multiplicación’.
- Si he introducido ‘/’, me tiene que decir: ‘Has introducido una división’.
- Si no he introducido uno de estos signos, debe indicarme que no es válido el signo que he introducido.

#### Solución

Este paso es un pelín más complicado que los otros dos, puesto que en este añadiremos el condicional if else.

El código después de este paso se vería tal que así:

![Fragmento de código en Python](/images/contenido/calculadora-con-python/fragmento-3.webp)

A continuación, explicaremos cada línea de código:

1. Declara una variable llamada ‘a’ que será igual al ‘int’ (integger, número entero) de lo que escriba el usuario en el ‘input(“Número 1: “)’.
2. Declara una variable llamada ‘b’ que será igual al ‘int’ (integger, número entero) de lo que escriba el usuario en el ‘input(“Número 2:”)’.
3. Declara una variable llamada ‘op’, la cual es igual al ‘input(“Operación: “)’, es decir, a lo que el usuario responda al texto ‘Operación’.
4. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘+’, si son iguales, se ejecuta la línea 5, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 6.
5. Imprime en consola ‘Has introducido una suma.’.
6. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘-‘, si son iguales, se ejecuta la línea 7, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 8.
7. Imprime en consola ‘Has introducido una resta.’.
8. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘*’, si son iguales, se ejecuta la línea 9, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 10.
9. Imprime en consola ‘Has introducido una multiplicación.’.
10. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘/’, si son iguales, se ejecuta la línea 11, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 12.
11. Imprime en consola ‘Has introducido una división.’.
12. Si cualquiera de las anteriores comparaciones no es verdadera (True), se pasa a la línea 13, de haber sido alguna verdadera, esto no se toma en cuenta.
13. Imprime en consola ‘No es válido el signo que has utilizado.’

Esta sería la consola de salida por el momento:

//Número 1: 18

//Número 2: 8

//Operación: +

Has introducido una suma.

### Hacer las operaciones

#### Enunciado

Con los primeros tres pasos el usuario ha podido introducir los números con los que quiere operar y el programa, gracias a los condicionales, ha conseguido saber qué operador ha introducido el usuario.

El siguiente paso será **operar sabiendo los números que ha introducido y el operador**.

**PISTA**: Los condicionales te ayudarán.

#### Solución

Si tenemos bien asentado el código de los pasos anteriores, este es pan comido. Lo único que tendremos que hacer es operar dentro de cada condicional con el operador que indica ese condicional, es decir:

![Fragmento de código en Python](/images/contenido/calculadora-con-python/fragmento-4.webp)

Veamos qué es lo que hace cada línea:

1. Declara una variable llamada ‘a’ que será igual al ‘int’ (integger, número entero) de lo que escriba el usuario en el ‘input(“Número 1: “)’.
2. Declara una variable llamada ‘b’ que será igual al ‘int’ (integger, número entero) de lo que escriba el usuario en el ‘input(“Número 2:”)’.
3. Declara una variable llamada ‘op’, la cual es igual al ‘input(“Operación: “)’, es decir, a lo que el usuario responda al texto ‘Operación’.
4. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘+’, si son iguales, se ejecuta la línea 5, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 6.
5. Imprime en consola el resultado de la suma del número 1 (variable a) más el número 2 (variable b).
6. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘-‘, si son iguales, se ejecuta la línea 7, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 8.
7. Imprime en consola el resultado de la resta del número 1 (variable a) menos el número 2 (variable b).
8. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘*’, si son iguales, se ejecuta la línea 9, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 10.
9. Imprime en consola el resultado de la multiplicación del número 1 (variable a) por el número 2 (variable b).
10. Compara la variable ‘op’ con el str (string, cadena de caracteres) ‘/’, si son iguales, se ejecuta la línea 11, de no ser iguales, se ejecuta la siguiente línea, es decir, la número 12.
11. Imprime en consola el resultado de la división del número 1 (variable a) entre el número 2 (variable b).
12. Si cualquiera de las anteriores comparaciones no es verdadera (True), se pasa a la línea 13, de haber sido alguna verdadera, esto no se toma en cuenta.
13. Imprime en consola ‘No es válido el signo que has utilizado.’

Esta sería la consola de salida:

//Número 1: 18

//Número 2: 8

//Operación: +

//26

Y esta sería otra consola de salida posible:

//Número 1: 2

//Número 2: 50

//Operación: p

//No es válido el signo que has introducido.

## Conclusiones sobre la calculadora en Python

Con este último paso del reto habríamos finalizado el reto, puesto que ya tenemos una calculadora creada en Python, que nos calcula el resultado de una de estas cuatro operaciones (+, -, *, /) con dos números.

Debido a la baja dificultad de este reto, no he extendido más el programa, pero se podría hacer que se repitiera el **programa tantas veces como se quiera**, que se puedan **introducir más de dos números**, añadir **potencias**...