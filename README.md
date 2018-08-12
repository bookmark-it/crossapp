<h1 align="center">
  <a href="https://bk-it.herokuapp.com/app/bookmarks" target="_blank"><img src="https://github.com/bookmark-it/crossapp/blob/master/static/img/logo.png?raw=true" alt="Bookmark-it" height="160"></a>
  <br>
  Bookmark It - VueJs App
  <br><br>
</h1>

<h4 align="center">Manage your bookmarks from everywhere ! <a href="https://bk-it.herokuapp.com/app/bookmarks" target="_blank">Bookmark It</a></h4>

<p align="center">
  <a href="#librairies">Librairies</a> •
  <a href="#installation">Installation</a> •
  <a href="#license">License</a> •
  <a href="#authors">Authors</a>
</p>

## Librairies

* VueJs
* Vuex

## Installation

### To start:

```bash
$ npm install
```

### To develop:

```bash
$ npm run dev
```

### To build for production:

```bash
$ npm run build
```

### To lint you code:

```bash
$ npm run lint
```

### To run with electron:

Add to package.json
```
"electron-devtools-installer": "^2.0.1",
"electron": "^1.4.2",
```

In build/server.js replace
```
`webpack-hot-middleware/client?reload=true`,
```
by
```
`webpack-hot-middleware/client?reload=true&path=http://localhost:${port}/__webpack_hmr`,
```
and uncomment
```
webpackConfig.output.publicPath = `http://localhost:${port}/assets/`
```

In build/config.js uncomment
```
electron: true,
```

Set to relative path for publicPath `./`

Finally launch electron app with th server running
```
npm run app
```

## License

Distributed under the MIT license.

## Authors

Backend
[Alex Sibony](https://github.com/alsib) – sibony.alexandre@gmail.com

Fullstack
[Julien Rougeron](https://github.com/julienr2) – [Portoflio](https://julienr2.github.io) – julien.rougeron@gmail.com
