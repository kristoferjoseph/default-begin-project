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

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@plugins
architect/plugin-bundles

@bundles
store 'node_modules/@enhance/store'
