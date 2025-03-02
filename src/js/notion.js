import { Client } from '@notionhq/client'

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN
})

const DATABASE_ID = import.meta.env.NOTION_DATABASE_ID


export const getBooks = async ({ filterBy } = {}) => {
  const query = { database_id: DATABASE_ID }
  
  if (filterBy) {
    query.filter = {
      property: 'slug',
      rich_text: {
        equals: filterBy
      }
    }
  }

  const { results } = await notion.databases.query(query);

  return results.map(page => {
    const { properties } = page
    const { enlace, titulo, imagen, opinion, autor } = properties

    return {
      id: enlace.rich_text[0].plain_text,
      title: titulo.title[0].plain_text,
      img: imagen.files[0].file.url,
      opinion: opinion.rich_text[0].plain_text,
      author: autor.rich_text[0].plain_text
    }
  })
}

const COLABORADORES_ID = '1aa99529e0d080b3baa7c5bb892872e3'

export const getColaboradores = async ({ filterBy } = {}) => {
  const query = { database_id: COLABORADORES_ID }

  if (filterBy) {
    query.filter = {
      property: 'slug',
      rich_text: {
        equals: filterBy
      }
    }
  }

  const { results } = await notion.databases.query(query)

  return results.map(page => {
    const { properties } = page
    const { Foto, Nombre, Rol, Biografia, Correo } = properties

    const slug = Nombre.title[0].plain_text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-');

    return {
      img: Foto.files.length > 0 ? Foto.files[0].file.url : '/images/jovenes-cientificos/default.webp',
      nombre: Nombre.title[0].plain_text,
      rol: Rol.rich_text[0].plain_text,
      bio: Biografia.rich_text[0].plain_text,
      email: Correo.email ? Correo.email : null,
      slug: slug
    }
  })
}