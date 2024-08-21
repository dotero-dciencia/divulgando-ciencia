---
layout: "@/article"
titulo: "El proyecto del futuro está en Valladolid: Proyecto Presente"
autor: Darío O.
fotoDelAutor: /images/autores/dario-o.webp
portada: /images/contenido/el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente/portada.webp
portadaAlt: Señor depositando su voto en una urna. Imagen generada con inteligencia artificial.
descripcion: El método de reparto electoral d'Hondt es uno de los más populares, de hecho es el que se usa en España. Entra para descubrir en qué consiste.
ciencia: física
fechaMostrar: 29 junio, 2024
fechaOrdenar: Jun 29, 2024
duracion: 4
url: /el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente
x: https://x.com/tecnomagia_es
instagram: https://instagram.com/tecnomagia_es
github: https://github.com/dotero-dev
rrss: x instagram github
---

En el [anterior artículo](/el-grupo-optica-atmosferica-de-la-uva) hablamos sobre GOA-UVa, el Grupo de Óptica Atmosférica de la Universidad de Valladolid, cuyas instalaciones tuvimos el placer de visitar el pasado viernes 28 de junio de la mano de Roberto Román.

Ese día también aprendimos sobre el proyecto que están desarrollando: Presente. Es un proyecto que no dejará a nadie indiferente y que ya está empezando a dar sus frutos.

## Objetivos del proyecto

Este proyecto tiene como objetivo poner una red de cámaras de cielo en Valladolid, de forma que haya 1 por cada 2 km aproximadamente. ¿Por qué quieren construir una red de cámaras? Para ser capaces de predecir el movimiento de las nubes. Y de nuevo, ¿para qué sirve esto? Pues para mejorar las instalaciones de placas solares, dando lugar a una producción de energía solar más inteligente.

¿Muchas cosas? Pues todo esto y mucho más lo hace este grupo universitario. En este artículo te explicaré paso por paso todo este proyecto.

## Pretexto

Antes de nada tenemos que saber alguna cosa sobre las cámaras de cielo. Como comentamos en el [anterior artículo](/el-grupo-optica-atmosferica-de-la-uva), una cámara de cielo hace fotos del cielo, valga la redundancia, luego hace fotos también a las nubes. Con una foto en la que veamos el cielo y las nubes, podemos saber en qué dirección, desde el punto central, que es donde está colocada la cámara, se encuentra una nube.

![Cámara de cielo de cerca.](/images/contenido/el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente/camara-de-cielo.webp)

*Cámara de cielo. Fotografía de Lucas Pérez.*

Conociendo la dirección en la que está una nube no conseguiremos mucho, pero si combinamos dos cámaras y los ángulos de las nubes podemos empezar a triangular usando cálculos trigonométricos la posición de las nubes.

![Imagen que muestra la transformación de la imagen según se muestra en la cámara de cielo.](/images/contenido/el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente/camara-de-cielo.webp)

*Transformación de la imagen. Fotografía de Lucas Pérez.*

## Desarrollo y transcurso

Inicialmente se preveía poner 25 cámaras en diferentes puntos de la provincia vallisoletana, pero por el momento solo se han colocado 14 cámaras. A la hora de poner nuevos dispositivos se encuentran con algunos de los siguientes problemas:

- No hay edificios (preferiblemente públicos) en el área seleccionada.
- En el caso de haber edificios:
  - Ponen pegas (pocas veces sucede).
  - Es un mal sitio, porque está incomunicado (sin acceso a Internet) o porque tiene árboles que provocan una sombra continua a la cámara.

![Mapa de la provincia de Valladolid con chinchetas que son las diferentes cámaras.](/images/contenido/el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente/mapa.webp)

*Mapa donde se marcan las diferentes cámaras. Fotografía de Lucas Pérez.*

Desde [la web de GOA-UVa](https://goa.uva.es/proyecto-presente/) podemos ver todas las estaciones del proyecto Presente, así como una vista desde las diferentes cámaras de la ciudad.

![Fotografía de lo que se ve en una cámara de cielo con un relámpago.](/images/contenido/el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente/relampago.webp)

*Cámara de cielo del CEIP Gonzalo de Berceo con relámpago. Fotografía de Lucas Pérez.*

## Lo que no se ve

El grupo universitario ha desarrollado un software que permite saber a qué altura se encuentra un punto exacto (clicado en la vista de una cámara) seleccionando dos cámaras. Por ejemplo, desde este software seleccionamos una nube que se ve desde la cámara del IESO Arroyo y seleccionamos como segunda cámara la que se encuentra en CEIP El Peral. De esta forma el software buscará este mismo punto desde la vista de la cámara ubicada en el CEIP El Peral y mediante cálculos matemáticos hallará la altura a la que se encuentra la nube.

![Fotografía de Roberto señalando el software con el que trabajan en el monitor del ordenador.](/images/contenido/el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente/software.webp)

*Ordenador mostrando el software con el que trabajan. Fotografía de Lucas Pérez.*

Con esta programación pretenden crear un modelo de inteligencia artificial que sea capaz de predecir el movimiento de las nubes y, esto, como dijimos al principio, servirá para mejorar las instalaciones de placas solares produciendo más energía, ya que según el modelo de predicción meteorológica podremos saber dónde se encuentran las nubes y qué radiación habrá en ese lugar según las siguientes afirmaciones:

- Si las nubes tapan el sol: no llega la suficiente radiación solar a la placa fotovoltaica.
- Si las nubes rodean el sol: llega más radiación a la placa, puesto que rebota en estas nubes y termina incidiendo sobre la instalación.
- Si no hay nubes: llega un nivel de radiación solar normal a la placa.

![Fotografía que muestra en el ordenador cómo se ve una nube con el software.](/images/contenido/el-proyecto-del-futuro-esta-en-valladolid-proyecto-presente/vista-general-de-una-nube.webp)

*Vista general de una nube. Fotografía de Lucas Pérez.*

## Historia

Llevan trabajando mucho tiempo con este instrumento y habían tenido varias veces la idea, pero no habían conseguido en ningún momento financiación. Cuando salió la oportunidad para poder financiar el proyecto se lanzaron y les concedieron la financiación.

Roberto estudió Física y al principio no tenía mucho interés por la Física Medioambiental, sino por la Material, aunque luego empezó a trabajar en la Medioambiental y le gustó. También nos dice que "la ciencia es como una noria" y que no está todo hecho en la ciencia: "al resolver una pregunta salen más preguntas todavía".