import arc from '@architect/functions'
import render from '@architect/views/render.mjs'
import Head from '@architect/views/head.mjs'

export const handler = arc.http.async(Index)
async function Index(req) {
  const title = req.rawPath.split('/')[1] || 'index'
  const html = render({})
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html`
${Head({ title })}
<page-${title}></page-${title}>
    `
  }
}