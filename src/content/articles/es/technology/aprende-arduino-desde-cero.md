---
title: Aprende Arduino desde cero
author: dario-otero
altImage: Imagen de una mano sosteniendo una placa Arduino Uno.
description: Aprende a usar la placa Arduino desde cero sin ningún conocimiento previo siguiendo esta guía paso a paso.
date: 2022-01-16
tags:
    - Arduino
    - Curso
---

## Introducción

Durante esta guía hablaremos sobre los conocimientos básicos de Arduino, como bien indica el nombre de esta, reduciéndonos a aprender el funcionamiento de la placa y no la programación de ella, por lo tanto, no hará falta instalarse ningún programa.

Para poder seguir perfectamente esta guía, has de disponer de los siguientes elementos:

- Placa Arduino: puede ser Elegoo. Arduino puede ser editado por cualquier persona, por lo tanto, hay muchas copias del Arduino original más baratas. La diferencia es la duración de estas, pero el funcionamiento será igual.
- Protoboard (placa de pruebas).
- Botón.
- Potenciómetro.
- LED.
- Dos resistencias.

Podéis adquirirlos en cualquiera de las principales tiendas online.

A lo largo de esta guía, haremos las representaciones gráficas en Tinkercad, representando los cables conectados a 5V en rojo, los cables conectados a GND en negro y los cables condicionales (dependen de algo para dar corriente) o con conexión a un pin (analógico o digital), en azul.

En Arduino podemos encontrarnos con tres tipos de cables: macho-macho, hembra-macho y hembra-hembra. Una conexión tipo “macho” hace referencia a la conexión de la izquierda, mientras que una conexión tipo “hembra” hace referencia a la conexión de la derecha, pudiéndose introducir un cable de tipo macho en un cable de tipo hembra.

![Imagen mostrando las conexiones macho y hembra de los cables Arduino.](/images/contenido/aprende-arduino-desde-cero/cables-macho-hembra.webp) 
*Imagen de [murkyrobot.com](murkyrobot.com)*

## Los pines, tipos y funciones

Cualquier placa de Arduino tiene 6 pines analógicos (ANALOG) y 14 pines digitales (DIGITAL) en total.

![Imagen de la placa Arduino en Tinkercad](/images/contenido/aprende-arduino-desde-cero/placa-arduino.webp)

Los pines analógicos dan salidas numéricas de 0 a 1023, mientras que los pines digitales dan salidas de tipo boolean: true o false, 1 o 0, HIGH o LOW…

![Imagen de la placa Arduino en Tinkercad mostrando los 5 pines digitales de su placa.](/images/contenido/aprende-arduino-desde-cero/pines-digitales.webp)

En esta imagen podemos observar los pines digitales, que son los que se encuentran encima de “DIGITAL (PWM)”, que van de 0 a 13.

![Imagen de la placa Arduino en Tinkercad mostrando los 5 pines analógicos de su placa.](/images/contenido/aprende-arduino-desde-cero/pines-analogicos.webp)

También podemos ver los pines analógicos, debajo de “ANALOG IN”, que van desde A0 hasta A5.

![Imagen de la placa Arduino en Tinkercad mostrando los pines de voltaje y tierra.](/images/contenido/aprende-arduino-desde-cero/power.webp)

Finalmente podemos ver los pines debajo de “POWER”. Pueden darnos corriente de 3.3V o de 5V o cerrar un circuito en el pin GND. Veremos cómo conectarlos en el siguiente apartado, conexiones eléctricas.

## Conexiones eléctricas

Vamos a entender el funcionamiento de una placa protoboard, elemento esencial para las prácticas en Arduino.

![Imagen de la placa Protoboard en Tinkercad.](/images/contenido/aprende-arduino-desde-cero/placa-protoboard.webp)

Podemos encontrar dos filas con el signo – y otras dos con el signo +, y en medio de estas, columnas conectadas entre sí. La imagen que se muestra a continuación muestra cómo las **columnas están conectadas entre sí**. Esto es que si conectamos un cable desde 5V a un punto, toda su columna tendrá 5V. Esto ocurre también con las filas negras (-) y rojas (+).

![Imagen de la placa Protoboard en Tinkercad mostrando cómo las diferentes columnas y filas están conectadas entre sí.](/images/contenido/aprende-arduino-desde-cero/placa-protoboard.webp)

**¡Alto! ¿Has entendido bien este esquema? ¡¡Es vital para continuar!!**

Normalmente, se conecta un cable **desde 5V hasta cualquier conexión de las dos filas rojas** (+) para conseguir que **toda la fila roja tenga 5V**. 

También se conecta un cable **desde GND hasta cualquier conexión de las dos filas negras** (-) para conseguir que **toda la fila negra sirva para cerrar el circuito**. 

***IMPORTANTE: si se conecta en una fila, solo llega la conexión a esa fila entera, no a las dos filas del mismo color.***

Como bien hemos dicho antes, también están conectadas sus columnas, cualquier conexión de cualquier columna nutrirá al resto de la columna. De forma que, si conectas el ánodo del LED a una conexión y en esa misma columna pones un cable desde 5V, el LED se encenderá, pero **CUIDADO**, lo haremos en el apartado 4. Con esto hay que tener cuidado, ya que puedes fundir el LED e, **incluso quemarte**.

## La Ley de Ohm

Para entender perfectamente el funcionamiento de cualquier circuito eléctrico, es necesario conocer la Ley de Ohm.

Un circuito recibe un **voltaje**, medido en voltios (volts). El objetivo del circuito es hacer funcionar uno o varios componentes, pero he aquí el problema, pues muchos componentes no aguantan tanta **intensidad**. Para ello, utilizamos la **resistencia**, medida en ohmios (ohms). Que lo que hace es regular la **intensidad de salida** (medida en amperios) de la resistencia. Se podría decir que la resistencia actúa como un **graduador** o, para entenderlo mejor, como un **grifo**. Al grifo le llega agua (el voltaje), y dependiendo de la apertura del grifo (los ohmios), se puede graduar la intensidad (los amperios) saliente de la resistencia.

![Dibujo del triángulo de la Ley de Ohm, con la V en la parte superior y en la parte inferior, la I y la R.](/images/contenido/aprende-arduino-desde-cero/triangulo-ley-de-ohm.webp)

En el anterior triángulo, el **voltaje hace referencia a los voltios de entrada** del circuito. La **resistencia a la cantidad de ohmios** que se le imponen a ese voltaje. Mientras que, la **intensidad hace referencia a los amperios salientes** de la resistencia, es decir, lo que le llegará a lo que queramos conectar. Podemos calcular las diferentes partes de esta forma:

- **Voltaje** = Resistencia · Intensidad
- **Resistencia** = Voltaje / Intensidad
- **Intensidad** = Voltaje / Resistencia

El cálculo más interesante es el de la resistencia, pues con él podremos saber de cuántos ohmios será necesaria la resistencia en función de la intensidad máxima requerida por lo que queramos conectar.

Pongamos un ejemplo. El circuito tendrá un **voltaje de entrada de 5V**, y querremos conectar un LED, cuya **intensidad máxima es de 0.02 amperios**, que le hará funcionar al LED a su máxima potencia. Así que haremos el cálculo para saber la resistencia necesaria:

Conociendo que la resistencia es igual al voltaje entre la intensidad, hacemos el siguiente cálculo: **5V / 0,02A = 250 ohmios.**

Para conectar un LED, teniendo en cuenta que el voltaje de inicio es de 5V, hará falta una resistencia mínima de 250 ohmios. De esta forma, conseguiremos que luzca lo máximo posible sin fundirse/explotar.

## Primeras prácticas con un LED

### Encender un LED

Para encender un LED necesitaremos: el propio LED, una resistencia, la placa Arduino y la placa protoboard.

![Circuito en Tinkercad conectando un LED a una placa Arduino para que se pueda encender.](/images/contenido/aprende-arduino-desde-cero/circuito-led-1.webp)

Con  este  montaje  ya   podríamos  encenderlo,  pero, a continuación, veremos el montaje a fondo:

- Un cable está conectado desde **5V hasta una conexión de la línea roja** (+).
- Un cable está conectado desde **GND hasta una conexión de la línea negra** (-).
- Un LED está conectado en dos distintas columnas:
    - La columna del **ánodo*** tiene una conexión a la línea roja, **para que el LED reciba energía**.
    - La columna del **cátodo*** tiene una conexión a la línea negra, **para cerrar el circuito del LED**.
    - **IMPORTANTE: una de estas dos conexiones tiene que ser con una resistencia para evitar que el LED se funda.**

*El ánodo es la pata más larga del LED, mientras que el cátodo es la pata más corta del LED.

### Encender el LED al tocar un botón

Para encender un LED al tocar un botón, necesitaremos: el propio **LED**, una **resistencia**, el propio **botón**, la placa **Arduino** y la placa **Protoboard**.

![Circuito en Tinkercad conectando un LED a una placa Arduino para que se pueda encender al tocar un botón.](/images/contenido/aprende-arduino-desde-cero/circuito-led-2.webp)

Con este montaje ya podríamos encenderlo, pero, a continuación, veremos el montaje a fondo:

- Un cable está conectado desde **5V hasta una conexión de la línea roja** (+).
- Un cable está conectado desde **GND hasta una conexión de la línea negra** (-).
- Un botón está conectado por:
    - En la columna de una de sus patas por una **resistencia hasta la línea roja** (+), lo cual hace llegar la energía al botón.
    - En la columna de la otra de sus patas, por un **cable hasta el ánodo del LED** que queramos encender. Este cable es el que llevará la corriente de salida del botón.
- El LED está conectado por:
    - En la columna del ánodo por un **cable desde el botón** que lo encenderá cuando toquemos el botón.
    - En la columna del cátodo por un **cable para cerrar el circuito hasta la línea negra** (-).

### Regular el LED con un potenciómetro

Un potenciómetro es como un grifo, pues dependiendo de su inclinación dejará pasar **más o menos voltaje**. Esto está explicado en la ley de Ohm (apartado 3).

![Circuito en Tinkercad conectando un LED a una placa Arduino para que se pueda encender según la intensidad marcada por el potenciómetro.](/images/contenido/aprende-arduino-desde-cero/circuito-led-3.webp)

Para regular la potencia de un LED con un potenciómetro, necesitaremos: el propio **LED**, el propio **potenciómetro**, una **resistencia**, la placa **Arduino** y la placa **Protoboard**.

Con este montaje ya podríamos encenderlo y regularlo, pero, a continuación, veremos el montaje a fondo:

- Un cable está conectado desde **5V hasta una conexión de la línea roja** (+).
- Un cable está conectado desde **GND hasta una conexión de la línea negra** (-).
- Un potenciómetro está conectado por:
    - En la columna **central** por un **cable que se conectará a la columna del ánodo del LED** que queramos encender.
    - En una de las dos **columnas laterales** por un **cable conectado desde la línea roja** (+) para hacer llegar la corriente al potenciómetro.
    - En la otra **columna lateral** por un **cable conectado desde la línea negra** (-) para cerrar el circuito.
- El LED está conectado por:
    - La columna del ánodo **está conectada a la salida del potenciómetro**.
    - La columna del cátodo tiene un **cable** conectado a una **resistencia conectada a la línea negra** (-) para cerrar el circuito.

## Componentes, ¿qué se puede hacer?

Lo bueno de Arduino es que cuenta con una inmensa cantidad de componentes, así como de utilidades y programas posibles.

Hay una gran variedad de proyectos que podemos hacer en Arduino, desde juegos hasta cosas de domótica para tu casa, en [este enlace puedes ver 46 proyectos que puedes hacer](https://www.xataka.com/makers/46-proyectos-makers-para-hacer-verano-arduino-raspberry-pi).

Si quieres conocer más sobre estos componentes, estate atento al apartado 6 de esta guía, donde explicamos dónde se puede aprender más al respecto.

## ¿Dónde aprender más? Webs de referencia

Esta guía ha sido un pequeño **acercamiento al mundo del Arduino y al mundo de la electricidad**, pero, si te ha gustado, puedes indagar más al respecto.

Hay una página web muy recomendable para aprender Arduino y aprender a manejar algunos componentes, que es la web de Luis Llamas en el apartado de tutoriales de Arduino: [https://www.luisllamas.es/tutoriales-de-arduino/](https://www.luisllamas.es/tutoriales-de-arduino/).