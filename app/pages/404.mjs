export default function FourOFour({ html, state }) {
  const { attrs } = state
  const { error } = attrs
  const message = error?.message || 'The page you are looking for does not exist.'
  return html`
<section>
  <h1>Oops, something went wrong</h1>
  <p>${message}</p>
</section>
`
}