var map;
var win = $(this);

function initMap() {
  map = new google.maps.Map($('.inevioMap')[0], {
    center: {lat: 40.3601317, lng: -3.381495},
    zoom: 8,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
    },
    mapTypeControl: true
  });
}

win.on( 'ui-view-resize ui-view-maximize ui-view-unmaximize', function(){
	console.log('max');
	var center = map.getCenter();
	google.maps.event.trigger(map, "resize");
	map.setCenter(center);
});


var interval = setInterval(function(){

  if( typeof google !== 'undefined' && typeof google.maps !== 'undefined' ){
    clearInterval( interval );
    initMap();
  }

}, 50);
