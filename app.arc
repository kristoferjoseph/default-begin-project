@app
dflt

@static
fingerprint true

@shared
src .begin/shared

@views
src app

@http
/*
  method any
  src .begin/http/any-catchall

@plugins
architect/plugin-bundles

@bundles
store 'node_modules/@enhance/store'
