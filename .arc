@app
dflt

@static
fingerprint true

@shared
src api

@views
src app

@http
/*
  method any
  src .begin/http/any-catchall

/
  method get
  src .begin/http/get-index

@plugins
architect/plugin-bundles

@bundles
store 'node_modules/@enhance/store'
