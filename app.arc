@app
dflt

@static
fingerprint true

@shared
src .begin/shared

@views
src src

@http
/
  method get
  src .begin/http/get-index

@plugins
architect/plugin-bundles

@bundles
store 'node_modules/@enhance/store'
