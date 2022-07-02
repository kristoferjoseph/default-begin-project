import arc from '@architect/functions'
import enhance from '@enhance/ssr'
import Head from '@architect/views/head.mjs'
import importTransform from '@enhance/import-transform'
import styleTransform from '@enhance/enhance-style-transform'
import elements from '@architect/views/elements.mjs'
import getData from '@architect/shared/index.mjs'

export const handler = arc.http.async(Main)

async function Main(req) {
  const initialState = await getData(req).data
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
    html: html`
${Head({ title: 'index' })}
<page-index></page-index>
`
  }
}