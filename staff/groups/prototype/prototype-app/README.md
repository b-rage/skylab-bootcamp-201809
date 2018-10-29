# Skylab Movie Database App

## Instructions

### Running the application

1. get a new The Movie Database API key [here](https://www.themoviedb.org)

2. update the key in ```src/logic.js```

```js
apiKey: 'newKey',
```

3. start the application

```sh
$ npm start
```

### Building the distribution package

```sh
$ npm run build
```

### Deploying the package in surge

1. run surge

```sh
$ surge
```

2. enter credentials (if they are asked)

3. enter the folder from which to deploy (```build```)

### Running tests

1. open the specs runner in terminal

```sh
$ mocha src/logic.spec.js
```

[Live Demo](https://smdb.surge.sh)