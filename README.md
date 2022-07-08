# default-begin-project
Prototype default begin project

## Pages
Drop a template into `app/pages` with the file name `page-${title}.mjs` and it will be loaded at the `/${title}` URL.

## API Routes
Look in `.begin/http/get-index/index.mjs` to see what the template for api routes should look like.

An api route loads a "data" handler file from `/api/${route name}.mjs` then populates `initialState` in enhance with the returned data object.
### TODOS

[] make generator that scaffolds an api route.
    - creates an http handler in the `.begin` folder
    - create a file with the same name as the route `/api/about.mjs`

[] make an architect plugin that adds the `.begin` folder and the catchall handler with the index handler.

A plugin that adds other plugins???