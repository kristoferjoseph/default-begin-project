import arc from '@architect/functions'
import enhance from '@enhance/ssr'
import importTransform from '@enhance/import-transform'
import styleTransform from '@enhance/enhance-style-transform'
import defaultElements from './elements.mjs'
import Head from './head.mjs'

export default function render({ elements, initialState={}, str='', title='' }) {
  elements = elements || defaultElements
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

  return html`
${Head({ title })}
${str}
  `
}