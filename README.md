# leaflet-map-server-component [![Build Status](https://travis-ci.org/pimterry/leaflet-map-server-component.svg?branch=master)](https://travis-ci.org/pimterry/leaflet-map-server-component)

A server component for server-rendering leaflet maps

## How to use this component

This component statically renders a map. It uses the client-side Leaflet library, running entirely inside a [Domino](https://github.com/fgnass/domino)-based server-side DOM, serving up the rendered HTML output.

To use it, install it from NPM with `npm install leaflet-map-server-component` and just render:

```html
<leaflet-map lat="41.3851" long="2.1734" zoom="12">
    <leaflet-marker lat="41.4036" long="2.1744"></leaflet-marker>
    <leaflet-marker lat="41.4225" long="2.1186"></leaflet-marker>
    <leaflet-marker lat="41.3640" long="2.1675"></leaflet-marker>    
</leaflet-map>
```

Don't have server components set up yet? Take a look in [demo.js](https://github.com/pimterry/leaflet-map-server-component/blob/master/demo.js) for a working example of the whole setup.

Want to see it in action right now? Clone this repo and run `npm install && npm run dev` to start the server and see the result.

## Coming soon:

- [ ] Map shape overlays
- [ ] Serve static content server-agnostically (with [server-components-static](https://github.com/pimterry/server-components-static))
- [ ] Isomorphism: server and web components, so you can server-render this then progressively enhance it client-side too
