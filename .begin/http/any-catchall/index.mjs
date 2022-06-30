import arc from '@architect/functions'
import Head from '@architect/views/head.mjs'
import elements from '@architect/views/elements.mjs'
import enhance from '@enhance/ssr'
import importTransform from '@enhance/import-transform'
import styleTransform from '@enhance/enhance-style-transform'

export const handler = arc.http.async(json, main)

async function json(req) {
  if (isJSON(req)) {
    try {
      const title = req.rawPath.split('/')[1] || 'index'
      const getData = await import(`@architect/views/app/data/${title}.mjs`)
      try {
        const data = await getData(req)
        return {
          statusCode: 200,
          headers: {
            'content-type': 'application/json; charset=utf8'
          },
          body: JSON.stringify(data)
        }
      }
      finally {
        return {
          statusCode: 500,
          headers: {
            'content-type': 'application/json; charset=utf8'
          },
          body: JSON.stringify({ error: err.message })
        }
      }
    }
    catch (err) {
      // do nothing, just means the data file doesn't exist
    }
  }
  else {
    return false
  }
}

async function main(req) {
  try {
    const title = req.rawPath.split('/')[1] || 'index'
    const getData = await import(`@architect/views/app/data/${title}.mjs`)

    try {
      const initialState = await getData(req)
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
<page-${title}></page-${title}>
        `
      }
    }
    catch(err) {
      return {
        statusCode: 500,
        headers: {
          'content-type': 'text/html; charset=utf8'
        },
        body: err.message
      }
    }
  }
  catch (err) {
    // do nothing, just means the data file doesn't exist
  }
}

function isJSON(req) {
  let contentType = req.headers['Content-Type'] ||
    req.headers['content-type']

  return /application\/json/ig.test(contentType)
}
