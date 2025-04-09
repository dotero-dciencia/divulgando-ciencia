---
title: Qué es el algoritmo de Dijkstra
author: dario-otero
altImage: Grafo representando las casas de varias personas y la distancia entre ellas.
description: Conocer el algoritmo de Dijkstra te permitirá hallar el camino óptimo en un grafo. Hoy te lo explicamos paso a paso.
date: 2023-10-31
tags:
    - Grafos
---

Hoy veremos qué es el **algoritmo de Dijkstra** y para qué sirve en Teoría de Grafos. Pero antes, vamos a recordar qué es un grafo.

## ¿Qué es un grafo?

La definición más sencilla de un grafo es que es un **conjunto de puntos y rayas**, y nada más de la realidad. Si nos ponemos más exquisitos, podemos llegar a llamar a los puntos nodos o vértices y a las rayas, aristas.

Luego estamos hablando de un **conjunto de nodos unidos por aristas**.

Puedes ver a continuación un ejemplo de grafo formado por 4 nodos y 4 aristas.

![Grafo con 4 vértices y 4 aristas](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo1.webp)

Estas aristas pueden estar sin dirigir (como en el anterior ejemplo) o dirigidas (como en el siguiente ejemplo). Esto es que un vértice está conectado con otro pero no este otro con el primero.

![Grafo con 4 vértices y 4 aristas dirigidas](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo2.webp)

En este ejemplo el vértice A está conectado con B pero no B con A. Lo mismo ocurre con B y C, D y B y D y C.

Lo último que tenemos que recordar de la Teoría de Grafos es que una arista puede tener un **peso**. Un ejemplo de grafo con aristas dirigidas con peso es el siguiente.

![Grafo con pesos.](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3.webp)

## ¿Qué es el algoritmo de Dijkstra?

Este algoritmo es básico para encontrar el **camino óptimo entre dos nodos en un grafo dirigido con pesos**. Es decir, nos sirve para encontrar el camino que une dos vértices pasando por aristas cuya suma de los pesos es la menor posible. 

Por ejemplo, en la siguiente imagen vemos cómo el camino óptimo entre A y B es A-C-B, ya que gastaríamos solamente 2, mientras que en A-B gastaríamos 4. Pues para esto nos sirve el algoritmo de Dijkstra, para conocer a ciencia cierta siempre el camino óptimo.

![Grafo con pesos.](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3.webp)

## ¿En qué consiste?

Consiste en elegir siempre el camino con menos peso y actualizar los pesos elegidos al nuevo nodo. Lo veremos mejor con un ejemplo.

![Grafo con pesos.](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3.webp)

Usando la imagen anterior, vemos cómo desde A salen dos caminos, uno con peso 1 y otro con peso 4. Es decir, ahora mismo tenemos 2 caminos posibles. ¿Cuál elegimos? Pues el que menos peso tiene, que es 1.

Ahora estaríamos en el vértice C, por lo que desde el vértice C actualizamos todos los pesos de las aristas que salen desde él sumándoles el peso de la arista que ya hemos recorrido. Esto es sumarle al peso de la arista que une C y B, que es 1, el peso de la arista que ya habríamos recorrido (1), luego el nuevo peso de esta arista será 2.

![Grafo con pesos.](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3_1.webp)

Ahora tenemos 2 caminos posibles nuevamente, el camino que nos quedó por recorrer desde A, con valencia 4 y el camino que se nos ha abierto ahora nuevo desde C, con valencia 2. Elegimos nuevamente de los caminos posibles el que tenga un menor peso, que es el que une C con B, con peso 2.

Recorremos la arista y verificamos: ¿estamos en el vértice de destino? Sí. Luego hemos llegado.

Ahora tenemos qué ver cuál es la ruta que hemos seguido yendo hacia atrás. En este caso sería fácil. Hemos ido de A a C y de C a B. De esta forma aplicaríamos el algoritmo de **Dijkstra** a un grafo dirigido con pesos.

## Problema para aplicar este algoritmo

En el siguiente grafo ves representadas las casas de diferentes personas: María, Miriam, Javier, Mateo... y mi casa. También ves representado el peso de cada arista, que sería algo como los kilómetros que hay entre cada casa.

![Grafo representando las casas de varias personas y la distancia entre ellas.](/images/contenido/que-es-el-algoritmo-de-dijkstra/portada.webp)

Conociendo las distancias entre cada casa, responde a las siguientes preguntas:

1. ¿Cuál es el **camino óptimo** entre mi casa y la de Eva? Descríbelo.

2. ¿**Cuántas casas** recorres en total hasta llegar al destino?

3. Suponiendo que el peso de las aristas son los kilómetros que hay entre cada casa, tal que entre la casa de Nerea y de la de Mateo hay 4 kilómetros, calcula **cuánto dinero gastarás en combustible**, teniendo en cuenta los siguientes datos: autonomía del coche = 8 km/L; precio del combustible = 1,65 €/L

### Solución al problema

#### Pregunta 1

Tenemos que aplicar el algoritmo de Dijkstra para conocer el camino óptimo entre ambas casas.

Si recordamos, lo primero que tenemos que hacer es ver cuáles son los caminos posibles actualmente en el grafo. Vemos que tenemos 2 posibles caminos desde mi casa, que son a casa de Javier, con peso 2 y a casa de Miriam, con peso 3.

De estos dos elegimos el que menor peso tiene, el camino a la casa de Javier. Verificamos si hemos llegado a nuestro vértice de destino, ¿hemos llegado a casa de Eva? No, luego tenemos que seguir con el algoritmo.

Una vez hemos elegido el que menos peso tiene, tenemos que actualizar los pesos de los caminos que salen desde ese vértice, sumando a los diferentes pesos 2, el peso que ya hemos recorrido, así que ahora el peso hasta la casa de Eva será de 6 + 2 = 8 y hasta la casa de María de 3 + 2 = 5.

![Grafo representando las casas de varias personas y la distancia entre ellas.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso1.webp)

Ahora que ya hemos actualizado los pesos vemos cuáles son los caminos posibles actualmente, y estos son:

- Desde mi casa hay 1 camino posible: a casa de Miriam (peso 3)
- Desde la casa de Javier hay 2 caminos posibles: a casa de María (peso 5) y a casa de Eva (peso 8).

Elegimos de los tres caminos el que menor peso tiene (a casa de Miriam, con peso 3). Verificamos si hemos llegado a nuestro destino, la respuesta es no. Así que seguimos con el algoritmo.

Actualizamos los pesos desde el vértice de Miriam. Cambiamos el peso de la casa de Miriam a la de Mateo de 3 a 6, ya que tenemos que sumarle la distancia entre mi casa y la de Miriam (3 + 3).

![Grafo representando las casas de varias personas y la distancia entre ellas.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso2.webp)

Seguimos con el siguiente paso, que es ver los posibles caminos:

- Desde la casa de Javier hay 2 caminos posibles: a casa de María (peso 5) y a casa de Eva (peso 8).
- Desde la casa de Miriam hay 1 camino posible: a casa de Mateo (peso 6).

De los tres caminos posibles que tenemos, elegimos el de la casa de Javier a la de María, ya que es el camino con menor peso (peso 5). Verificamos si hemos llegado a nuestro destino: claramente la respuesta es no, hemos llegado a casa de María.

Así que seguimos actualizando pesos. Desde la casa de María actualizamos el peso de la conexión con la casa de Eva de 2 a 7, ya que le sumamos 5 (el peso que acabamos de recorrer).

![Grafo representando las casas de varias personas y la distancia entre ellas.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso3.webp)

Evaluamos los diferentes caminos que se nos abren ahora:

- Desde la casa de Javier hay 1 camino posible: a casa de Eva (peso 8).
- Desde la casa de Miriam hay 1 camino posible: a casa de Mateo (peso 6).
- Desde la casa de María hay 1 camino posible: a casa de Eva (peso 7).

Elegimos el camino con menor peso, de la casa de Miriam a la casa de Mateo, con peso 6. No hemos llegado a nuestro destino, así que actualizamos pesos. Desde la casa de Mateo salen 2 conexiones, a las casas de María y Paula. Ambas tenían conexiones con peso 3, así que sumándole 6 (el peso que acabamos de recoger), se quedan con peso 9 ambos.

![Grafo representando las casas de varias personas y la distancia entre ellas.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso4.webp)

Evaluamos los diferentes caminos actuales:

- Desde la casa de Javier hay 1 camino posible: a casa de Eva (peso 8).
- Desde la casa de Mateo hay 2 caminos posibles: a casa de María (peso 9) y a casa de Paula (peso 9).
- Desde la casa de María hay 1 camino posible: a casa de Eva (peso 7).

Vemos cuál es el que menos peso tiene, que es la conexión desde la casa de María a la de Eva, con peso 7.

Verificamos si hemos llegado a nuestro destino y sí, hemos llegado a la casa de Eva.

![Grafo representando las casas de varias personas y la distancia entre ellas.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso5.webp)

Ahora nos queda ir hacia atrás y ver qué camino hemos seguido. Yendo hacia atrás vemos que el camino seguido ha sido:

Mi casa -> Casa de Javier -> Casa de María -> Casa de Eva

![Grafo representando las casas de varias personas y la distancia entre ellas.](/images/contenido/que-es-el-algoritmo-de-dijkstra/caminofinal.webp)

#### Pregunta 2

Con la respuesta a la pregunta anterior podemos responder esta también. Y es que recorremos 2 casas sin contar la propia y la destino.

#### Pregunta 3

Recorremos 7 kilómetros según el algoritmo que hemos realizado. 

Conociendo la distancia, necesitamos saber cuántos L consumiría nuestro coche para esos kilómetros, así que conociendo que la autonomía del coche es de 8 km/L, consumiríamos 7/8 L.

Conociendo ahora el consumo, que son 7/8 L, necesitamos saber cuánto pagaríamos por eso, que es 7/8 * 1,65 ≈ 1,44 €	

Luego la respuesta a la tercera pregunta es que gastaríamos 1,44 € en combustible.

¿Te ha gustado el artículo de hoy? ¿Conocías el algoritmo de Dijkstra?