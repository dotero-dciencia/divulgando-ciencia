# Nuestro *Modus operandi*

A la hora de publicar un artículo, seguimos el siguiente proceso:

```mermaid
block-beta
	columns 5
	A(["Vemos algo que nos interesa"]) space B(["Investigamos sobre ello"]) space C(["Recopilamos informacion"])
	space space space space space
	F(["Valoramos los resultados"]) space E(["Publicamos"]) space D(["Redactamos el artículo"])

	A-->B
	B-->C
	C-->D
	D-->E
	E-->F
```

Mediante estos pasos, logramos que nuestro sitio se pueda definir mediante dos características principales: **calidad** y **coherencia**. Además, para publicar artículos que nos envía la comunidad seguimos el siguiente diagrama:

```mermaid
flowchart LR;
	A([Recibimos un artículo])
	B([Revisamos la información])
	C([Contactamos con el autor])
	D([Publicamos])

	A-->B;
	B-->C;
	C-->D;
```
