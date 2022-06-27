import arc from '@architect/functions'
import data from '@begin/data'
import Head from '@architect/views/head.mjs'
import elements from '@architect/views/elements.mjs'
import enhance from '@enhance/ssr'
import importTransform from '@enhance/import-transform'
import styleTransform from '@enhance/enhance-style-transform'

export const handler = arc.http.async(Index)

async function Index(req) {
  const title = req.rawPath.split('/')[1] || 'index'
  let initialState = {}
  try {
    initialState = await data.get({
      table: 'pages',
      key: title
    })
  }
  catch (err) {
    return {
      statusCode: 500,
      error: err.message
    }
  }

  const html = enhance({
    elements,
    initialState,
    scriptTransforms: [
      importTransform({ map: arc.static })
    ],
    styleTranstforms: [
      styleTransform
    ]
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html`
${Head({ title })}
<page-${title} yolo="wut"></page-${title}>
    `
  }
}