import { Client } from '@notionhq/client';

const DATABASE_ID = import.meta.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN
});

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