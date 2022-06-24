import arc from '@architect/functions'
import render from '@architect/views/render.mjs'

export const handler = arc.http.async(Index)
async function Index(req) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: render({ str: '<page-index></page-index>' })
  }
}