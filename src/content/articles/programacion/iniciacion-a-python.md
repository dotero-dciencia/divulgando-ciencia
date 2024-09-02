---
titulo: Iniciación a Python
autor: neplod
portadaAlt: Fragmento de código en Python.
descripcion: Aprende el incipiente lenguaje de programación Python desde cero paso a paso.
ciencia: programación
fecha: 2023-11-15
fechaMostrar: 15 noviembre
duracion: 10
url: /iniciacion-a-python
---

# Iniciación a Python

## ¿Qué es Python?

Python es un lenguaje de programación en código, es simple, con sintaxis clara y sin tipado, es decir, no hay que definir el tipo de variables que estamos usando. Normalmente se usa en áreas cómo el desarrollo web, análisis de datos, y lo más usado, I.A.

## Instalación

Aunque existen varios editores de Python, el más facil de usar es PyCharm o Python IDE. Aunque tiene una licencia de pago, en este tutorial nos servirá con la versión gratuita.

URL: https://www.jetbrains.com/pycharm

## Funciones básicas

### Print

La función `print()` es la primera que se enseña dado que es la más sencilla de usar y entender. Su función es escribir en la consola lo que tú le digas.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-1.webp)

En este caso estamos escribiendo en la consola la frase *Hello World*. Las comillas son necesarias para indicarle a Python que “Hello World” es un texto y no otra cosa, más adelante hablaremos de ello. Prueba a escribir tu propia frase.

### Variables

En Python vamos a necesitar almacenar datos, ya sea un número, un boolean, un string… y para ello necesitamos emplear las variables.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-2.webp)

En este caso hemos creado 2 variables **MiVariable** y **MiSegundaVariable**, y les hemos dado los valores “Hola” y “Adiós”. El nombre de una variable no puede contener espacios ni ser solo un número, por ejemplo, no podemos llamar a una variables **A B** o **35**, en este casos las podríamos llamar **A_B** y **Var35**. 

Las variables se pueden editar en cualquier momento, pero, ¿cómo obtenemos su valor? Con la función `print()` podemos escribir en la consola el contenido de la variable que queramos. 

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-3.webp)

Ese programa escribirá en la consola la frase *Mi nombre es:* seguido del valor de la variable **Nombre**, que en este caso es “Pepito”.


### Input

Si nosotros queremos que el usuario/persona que esté usando nuestro programa de Python introduzca un dato para la variable **Nombre** podemos usar la función `input()`. Esta permite que el usuario ingrese un valor desde la consola al programa.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-4.webp)

Con este programa le estamos preguntando al usuario *¿Cuál es tu nombre?*, y después estamos escribiendo en la consola la frase *Hola* seguido del valor de la variable **Nombre**.

### Matemáticas

Hemos estado usando tan solo Strings o cadenas de caracteres, ahora vamos a usar números. Los valores numéricos se definen sin comillas, y se puede operar con ellos, las operaciones básicas son: Suma `+`, Resta `-`, Multiplicación `*`, División `/`.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-5.webp)

También hay más operaciones: Resto de una división `%`, Potencias y raíces(N^1/a) `**`, Redondear un número `round()`…

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-6.webp)

### Condicionales

Si nosotros queremos comprobar que el valor de una variables es igual, mayor, menor… que el de otro valor o variable podemos usar las funciones condicionales: `if`, `else`, `elif`. Son fáciles de usar, solo ponemos `if condición: Nuestro código`, si la condición es cierta entonces se ejecuta el código. Estas se pueden agrupar en cadenas, primero un `if`, después los `elif`, y el `else` al final. El `elif` actúa cómo un `if` normal, y el `else` se ejecuta si no se cumple ninguna condición anterior. Si se cumple una de las condiciones de ejecuta el código y se rompe la cadena.

Las condiciones dan un resultado en boolean **(True || False)**, y están formadas con *Valor 1 `(== != > < >= <=)` Valor 2*, estas también se pueden encadenar con OR `or` o AND `and`.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-7.webp)

### Listas

Las **listas** son listas de variables de cualquier tipo, estas listas se definen igual que una variable, pero su valor es *[A, B, “Juan”, 22]*. Si nosotros queremos saber el valor del elemento **X** de una lista tenemos que poner el nombre de las lista seguido de [**X**]. Se empieza a contar desde 0, es decir, en la lista *[1,3,4,5]* el elemento [0] es 1, el elemento [2] es 4. Si nosotros queremos saber el último elemento de la lista se puede poner [-1], y si queremos saber la longitud usamos la función `len()`.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-8.webp)

Nosotros podemos editar cada elemento de la lista con *lista[x] = V*, también podemos añadir elementos a la lista con la función `append()`, insertarlos con la función `insert()`, eliminar x elemento con la función `pop()`, o buscar la posición de un elemento con la función `index()`.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-9.webp)

### Bucles

Los bucles permiten repetir un bloque de código varias veces. Vamos a ver 2: 

#### For

El bucle `for` se utiliza cuando se conoce de antemano el número de veces que se repite el código o cuando se desea repetir sobre una lista. Se puede usar la función `range()` para crear un lista de números desde x a y-1.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-10.webp)

#### While

El bucle `while` se utiliza cuando no se conoce de antemano el número de repeticiones y se desea repetir el bloque de código mientras una condición sea verdadera. Con `while True` se puede hacer un por siempre.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-11.webp)

### Convertir de String a Integer y viceversa

Puedes convertir un **String** a un **Integer** mediante la función `int()`. Puedes convertir un **Integer** a un **String** mediante la función `str()`.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-12.webp)

### Try Except

Se utilizan para manejar excepciones o errores durante la ejecución del código. Permite que el programa continúe ejecutándose incluso si ocurre un error, en lugar de interrumpirse. Esto es especialmente útil para anticipar y gestionar posibles problemas en el código.

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-13.webp)

### RETO #1

Con todos los conocimientos que tienes intenta hacer una calculadora en la consola que:
- Recoja 2 números y la operación `(+ - * /)`
- De un resultado
Solución al final del artículo

## Introducción a funciones

En Python, una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones permiten organizar el código en bloques más pequeños y modulares, lo que facilita la lectura, la comprensión y el mantenimiento del programa. Al definir funciones, puedes llamarlas varias veces desde diferentes partes del programa sin tener que repetir el mismo código.

Se forma de un `def` para definir la función, el `nombre de la función`, algunos `parámetros` que son valores que puedes pasar a la función cuando la llamas, `el código que debe ejecutar` la función y un `return()`, que es el valor que devuelve la función.
 
![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-14.webp)


El uso de funciones en Python promueve la reutilización del código, la legibilidad y la organización del programa. Puedes definir funciones para realizar tareas específicas y luego llamar esas funciones según sea necesario en tu código.

Las funciones también sirven para hacer algoritmos, un ejemplo de ello es el algoritmo de **Dijkstra**.
La recursividad es cuando una función se llama a si misma, no es algo bueno y es algo que normalmente debemos evitar usar, pero en algunos casos puede servir.

### RETO #2
Generador de Contraseñas

Crea un programa que genere contraseñas automáticamente según ciertos criterios. Para ello, implementa una función llamada `generar_contraseña` que no tome ningún parámetro y devuelva una contraseña generada.

Los criterios para la contraseña generada son los siguientes:
- Usa la librería Random (Busca en google)
- La contraseña debe tener al menos 10 caracteres.
- Debe contener al menos una letra mayúscula y una letra minúscula.
- Debe incluir al menos un número.
- Puede contener caracteres especiales como '@', '#', '$', '%', '&', '*'.

La solución está al final del artículo.

# Librerías
Algo que te puede ayudar a la hora de crear tus programas son las librerías de Python cómo `Math`, `Tkinter`, `PyGame`… Investiga en Google sobre más librerías que seguro que serán muy útiles en tus programas.

# Ahora tú
Es tu turno de crear tu juego, intenta crear una historia o aventura en la consola con Python y todo lo que has aprendido y aprendas próximamente.
#### ¡Adéntrate en una aventura de coding en Python!

# Soluciones
## RETO #1

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-15.webp)

## RETO #2

![Fragmento de código en Python.](/images/contenido/iniciacion-a-python/codigo-16.webp)