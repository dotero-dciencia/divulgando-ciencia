---
layout: ../layouts/ArticleLayout.astro
titulo: Las matemáticas en una telaraña
autor: Darío O.
fotoDelAutor: /images/autores/dario-o.webp
portada: /images/contenido/las-matematicas-en-una-telarana/portada.webp
portadaAlt: Dibujo de una telaraña con una araña en ella.
ciencia: matemáticas
fechaMostrar: 31 octubre, 2022
fechaOrdenar: Oct 31, 2022
duracion: 4
url: /las-matematicas-en-una-telarana
---

Hoy veremos todas las matemáticas en una telaraña, que parecen muy simples, pero allí donde las ves, contienen muuuuuchas matemáticas.

## Introducción

Para poder comprender este artículo y seguir la explicación, explicaremos las partes de una telaraña. Una telaraña se puede decir que se divide en dos tipos de hilos: los **hilos en espiral** y los **hilos radiales**. En la imagen se puede ver qué hilo pertenece a qué tipo.

<img src="/images/contenido/las-matematicas-en-una-telarana/partes-de-una-telarana.webp" alt="Dibujo explicando las partes de una telaraña." class="bg-principal-white">

En este artículo trabajaremos con 5 variables de las telarañas, que son:

- **n_e**: Hace referencia al **número de hilos en espiral de una telaraña**.
- **n_r**: Hace referencia al **número de hilos radiales de una telaraña**.
- **n_j**: Hace referencia al **número de juntas de una telaraña**.
- **l_e**: Hace referencia a la **longitud de cada hilo en espiral de una telaraña**.
- **d_j**: Hace referencia a la **distancia entre juntas consecutivas de una telaraña**, o lo que es lo mismo, a la distancia entre hilos radiales consecutivos de una telaraña.

## Explicación de las matemáticas en una telaraña

Gracias a las matemáticas podemos deducir una de las cinco variables comentadas en la introducción sabiendo las otras variables, dependiendo de qué variable queramos deducir serán más o menos variables las necesarias para deducirla.

### Hallando la variable número de hilos en espiral (n_e)

Para saber cuál es el número de hilos en espiral de una telaraña tenemos dos maneras de hacerlo:

1. Sabiendo la variable **número de juntas** (n_j). Luego **n_e = n_j**.  
Es decir, el número de hilos en espiral es igual al número de juntas.

2. Sabiendo las variables **número de hilos radiales** (n_r), **longitud de hilo radial** (l_r) y **distancia entre juntas** (d_j). Luego **n_e = n_r · (l_e / d_j)**  
Aquí lo que estamos haciendo es multiplicar el número de hilos radiales que haya en la telaraña por la razón de la longitud de cada hilo radial entre la distancia entre las juntas, es decir, la cantidad de hilos espirales que salen por hilo radial, resumiendo: hilos radiales por hilos espirales que hay en cada hilo radial.

Por ejemplo, vamos a intentar hallar la variable n_e sabiendo las variables n_r, l_r y d_j:

(n_r = 5; l_r = 8; d_j = 2)  
n_e = n_r · (l_r / d_j) = 5 · (8 / 2) = 5 · 4 = 20

### Hallando la variable número de hilos radiales (n_r)

Para saber cuál es el número de hilos radiales de una telaraña tan solo tenemos una manera de hacerlo, y es la siguiente:

Sabiendo las variables **número de hilos en espiral** (n_e) o **número de juntas** (n_j), **longitud de hilo radial** (l_r) y **distancia entre juntas** (d_j). Luego **n_r = n_e / (l_r / d_j)**  
Aquí lo que estamos haciendo es dividir la cantidad de hilos en espiral que haya entre la razón de la longitud de cada hilo radial entre la distancia entre las juntas, es decir, la cantidad de hilos espirales que salen por hilo radial, así lograremos saber cuántos hilos radiales hay en la telaraña.

Por ejemplo, vamos a intentar hallar la variable n_r sabiendo las variables n_e, l_r y d_j:

(n_e = 40; l_r = 10; d_j = 5):  
n_r = n_e / (l_r / d_j) = 40 / (10 / 5) = 40 / 2 = 20

### Hallando la variable número de juntas (n_j)

Para saber cuál es el número de juntas de una telaraña tenemos dos formas de hacerlo, que son:

1. Sabiendo la variable **número de hilos en espiral** (n_e). Luego **n_j = n_e**  
Tal y como comentamos antes, el número de hilos en espiral es igual al número de juntas de una telaraña.
2. Sabiendo las variables número de **hilos radiales** (n_r), **longitud de hilo radial** (l_r) y **distancia entre juntas** (d_j). Luego **n_j = n_r · (l_e / d_j)**  
Esta es la misma manera que usamos antes para conocer la variable número de hilos en espiral, ya que el mismo número de juntas es el de hilos en espiral, por lo que tenemos la misma explicación para esta fórmula que en el primer apartado.

### Hallando la variable longitud de hilo en espiral (l_e)

Para saber cuál es la longitud de cada hilo en espiral, necesitamos saber tres variables: **número de hilos en espiral** (n_e) o **número de juntas** (n_j), **número de hilos radiales** (n_r) y **distancia entre juntas** (d_j). La fórmula a seguir será la siguiente: **l_e = n_e / n_r · d_j**

A continuación explicaremos el porqué de esta fórmula, lo que hacemos es dividir el número de hilos en espiral entre el número de hilos radiales para obtener así la cantidad de hilos en espiral de cada hilo radial, ahora esta cantidad la multiplicamos por la distancia que hay entre juntas, es decir, la que hay entre cada hilo en espiral consecutivo partiendo del mismo hilo radial y obtenemos de esta manera la longitud de cada hilo en espiral.

Ahora intentaremos hallar la longitud de un hilo en espiral (l_e) sabiendo que n_e = 66; n_r = 11; d_j = 1

Realizamos la fórmula: **l_e = 66 / 11 · 1 = 6 · 1 = 6**

### Hallando la variable distancia entre juntas (d_j)

Finalmente trataremos de hallar la variable distancia entre juntas, para ello, haremos la siguiente fórmula, usando las variables **longitud de hilo en espiral** (l_e), **número de hilos en espiral** (n_e) o **número de juntas** (n_j) y **número de hilos radiales** (n_r). La fórmula es la siguiente: **d_j = l_e / (n_e / n_r)**

Aquí lo que hacemos es dividir la longitud de cada hilo en espiral entre la razón del número de hilos en espiral entre el número de hilos radiales, es decir, el número de hilos en espiral que corresponden a cada hilo radial, hallando así la distancia entre cada junta o entre cada hilo en espiral consecutivo de un hilo radial.

Por ejemplo, trataremos de hallar la distancia entre juntas (d_j) sabiendo las siguientes variables: l_e = 10; n_e = 50; n_r = 10.

Realizamos la fórmula sustituyendo por los valores de las variables: d_j = l_e / (n_e / n_r) = 10 / (50 / 10) = 10 / 5 = 2

## Conclusiones

Como has podido llegar a ver, las telarañas tienen muchísimas matemáticas en su interior.

¡Feliz *Halloween*!