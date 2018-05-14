# Kopjes Web

## Development

Ensure Node.js and Yarn are installed.

```sh
$ yarn install
$ yarn start
```

It should open http://localhost:3000 in your browser.

The page will automatically reload if you make changes to the code.

You will see the build errors and lint warnings in the console.

### Some notes to start

In the source files, you'll find a mix of what looks like HTML and JS. This is JSX and the major differences are:

* Everything must be wrapped in a single top-level tag (I usually use <div>)
* `class` is now `className`
* Empty tags need to self-close: `<br>` should be `<br />`
* Inline CSS needs to be DOM style properties: `background-color` should be `backgroundColor`. Usually best to stick to the .css files.
* React components can become tags ie. `<Link></Link>`
* More info: https://reactjs.org/docs/introducing-jsx.html

Routes are defined in `App.js` and are routed on the client-side. This means the web browser downloads all the website logic (a bundle) at the start, and each page is rendered without hitting the server.

Make sure your changes work on mobile! You can open the network link on your phone to check.
