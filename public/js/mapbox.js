/* eslint-disable*/

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hlZXJ6YWQxMCIsImEiOiJja3hsdm40ZXcxODk4MnFvNXhlaHh3bDI1In0.hjwpNCczsAzkezOF4lrdjQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sheerzad10/ckxlvw1nx0qyu14p3ihwtqyka',
    scrollZoom: false
    //   center: [-118.262075, 34.020161],
    //   zoom: 10,
    //   interactive: false
  });

  // We get to access this method because we have included mapbox in our 'tour.pug' file, header block
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker, the pin whihc will be showed in the map, is not coming from mapbox, it's our own pic
    const el = document.createElement('div');
    el.className = 'marker';

    // Add the marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 40
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend the map bounds to include current location
    bounds.extend(loc.coordinates);

    map.fitBounds(bounds, {
      padding: {
        // Here we add some padding because we have some widgets over our map, with padding we can fit all markers to our map
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
      }
    });
  });
};
