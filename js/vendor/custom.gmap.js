function initialize() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var isDraggable = w > 480 ? true : false;
  
  var mapOptions = {
    center: new google.maps.LatLng(40.247162,-75.243832),
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

  var map = new google.maps.Map(document.getElementById("map-wrapper"),
      mapOptions);

  var infowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var marker, i;

  // Bethlehem Location
  var myIcon = new google.maps.MarkerImage("http://cdn.audiologydesign.com/ppc/images/map-marker.png", null, null, null, new google.maps.Size(30,30));
                                     
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.261905,-75.248958),
    map: map,
    icon: myIcon
  });

  bounds.extend(marker.position);
  google.maps.event.addListener(marker, "mousedown", (function(marker, i) {
    return function() {
      infowindow.setContent("<div class='map-info-box'><p><strong>Listen 2 Life Hearing Center</strong><br />595 Bethlehem Pike<br />Suite 301<br />Montgomeryville, PA 18936</p></div>");
    infowindow.open(map, marker);
      }
  })(marker, i));

  map.fitBounds(bounds);

  // Phoenixville Location
  var myIcon = new google.maps.MarkerImage("http://cdn.audiologydesign.com/ppc/images/map-marker.png", null, null, null, new google.maps.Size(30,30));
                                     
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.131428,-75.450874),
    map: map,
    icon: myIcon
  });

  bounds.extend(marker.position);
  google.maps.event.addListener(marker, "mousedown", (function(marker, i) {
    return function() {
      infowindow.setContent("<div class='map-info-box'><p><strong>Listen 2 Life Hearing Center</strong><br />595 Bethlehem Pike<br />Suite 301<br />Montgomeryville, PA 18936</p></div>");
    infowindow.open(map, marker);
      }
  })(marker, i));

  map.fitBounds(bounds);

  //Set Zoom Level
  google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    map.setZoom(10);
  });

  //Responsive Handler
  google.maps.event.addDomListener(window, "resize", function() {
    var center = new google.maps.LatLng(40.247162,-75.243832);
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);