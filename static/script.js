var map;
var win = $('this');

function initMap() {
  map = new google.maps.Map($('#inevioMap')[0], {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

/*win.on('ui-view-resize', function(){
	console.log('resize');
});*/

win.on( 'ui-view-resize ui-view-maximize ui-view-unmaximize', function(){
	console.log('max');
	/*var center = map.getCenter();
	google.maps.event.trigger(map, "resize");
	map.setCenter(center);*/
});

setTimeout(initMap, 150);
