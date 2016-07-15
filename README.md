# leaflet-map-server-component [![Build Status](https://travis-ci.org/pimterry/leaflet-map-server-component.svg?branch=master)](https://travis-ci.org/pimterry/leaflet-map-server-component)

A server component for server-rendering leaflet maps

## How to use this component

This component statically renders a map. To use it, install it from NPM with `npm install leaflet-map-server-component` and render:

```html
<leaflet-map lat="41.3851" long="2.1734" zoom="12"></leaflet-map>
```

Don't have server components set up yet at all? Take a look in [demo.js](https://github.com/pimterry/leaflet-map-server-component/blob/master/demo.js) for a working example of the whole setup.

Want to see it in action? Clone this repo and run `npm install && npm run dev` to start the server and see the result.

## Coming soon:

- [ ] Map pins
- [ ] Map shape overlays
- [ ] Isomorphism: server and web components, so you can server-render this then progressively enhance it client-side too
