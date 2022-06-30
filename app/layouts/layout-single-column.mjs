export default function SingleColumnLayout({ html, state }) {
  return html`
<style>
  :host {
    display: grid;
  }
  ::slotted(header) {
  }
  ::slotted(main) {
  }
  ::slotted(footer) {
  }
</style>
<slot name="header"></slot>
<slot name="content"></slot>
<slot name="footer"></slot>
`
}