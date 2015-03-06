function initialize() {
	// Disable dragging on smaller mobile devices
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var isDraggable = w > 480 ? true : false;
  
	// Set Center of the Map
  var mapOptions = {
    center: new google.maps.LatLng(29.8047377,-95.4077045),
    disableDefaultUI: true,
    styles: flatMap,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: false,
    scrollwheel: false,
    draggable: isDraggable,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
	
	// Define Map Conatainer ID
  var map = new google.maps.Map(document.getElementById("map-wrapper"),
      mapOptions);

  var infowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var marker, i;

  // Location Pin
	// Copy this block to add more markers on the map
	
  var myIcon = new google.maps.MarkerImage("http://cdn.audiologydesign.com/ppc/images/map-marker.png", null, null, null, new google.maps.Size(30,30));
                                     
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(29.8047377,-95.4077045),
    map: map,
    icon: myIcon
  });

  bounds.extend(marker.position);
	
	// Add Text for Map Info Window
  google.maps.event.addListener(marker, "mousedown", (function(marker, i) {
    return function() {
      infowindow.setContent("<div class='map-info-box'><p><strong>AudiologyDesign</strong><br />538 West 21st St.<br />Suite #79931<br />Houston, TX 77008-3642</p></div>");
    infowindow.open(map, marker);
      }
  })(marker, i));

  map.fitBounds(bounds);
	
	// End Location Block

  //Set Zoom Level 1-21 Default is 10
  google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    map.setZoom(10);
  });

  // Responsive Handler
	// Reset Map Center on Window Resize
  google.maps.event.addDomListener(window, "resize", function() {
    var center = new google.maps.LatLng(29.8047377,-95.4077045);
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);