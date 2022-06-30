export default function About({ html, state }) {
  return html`
<section>
  <h1>About page</h1>
  <pre>
    ${JSON.stringify(state, null, 2)}
  </pre>
</section>
`
}