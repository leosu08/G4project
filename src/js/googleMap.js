
function initMap() {
    markerb = [];
    markers =[];
    markerArray = [];
    var styles = [{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }]
    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
    twCenter = { lat: 23.876571, lng: 121.091443 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: twCenter,
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    });

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

function toggleBounce() {
  if (markera.getAnimation() !== null) {
    markera.setAnimation(null);
  } else {
    markera.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function initAutocomplete() {
  var styles= [
                  {
                      "featureType": "water",
                      "elementType": "geometry.fill",
                      "stylers": [
                          {
                              "color": "#444444"
                          }
                      ]
                  }
              ]

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  twCenter={lat: 23.876571, lng: 121.091443};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: twCenter,
    zoom: 7,
    // disableDefaultUI:true,
    mapTypeControl:false,
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    
  });//map結束
>>>>>>> 37054db9ce31a52e4a8ada23b8773f7f84b807eb
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');




    /*=====================================
                北中南東
        =======================================*/
    var north = document.getElementById("a-north");
    google.maps.event.addDomListener(north, 'click', function() {
        map.setZoom(9);
        map.setCenter(new google.maps.LatLng(25.105497, 121.597366));
    });
    var a_center = document.getElementById("a-center");
    google.maps.event.addDomListener(a_center, 'click', function() {
        map.setZoom(9);
        map.setCenter(new google.maps.LatLng(23.876571, 121.091443));
    });
    var south = document.getElementById("a-south");
    google.maps.event.addDomListener(south, 'click', function() {
        map.setZoom(9);
        map.setCenter(new google.maps.LatLng(22.876571, 120.991443));
    });
    var east = document.getElementById("a-east");
    google.maps.event.addDomListener(east, 'click', function() {
        map.setZoom(9);
        map.setCenter(new google.maps.LatLng(23.80083, 121.63528));
    });



    /*================================
              新建marker
    ===================================*/
    // markera = new google.maps.Marker({
    //     map: map,
    //     title: 'Hello World!',
    //     draggable: true,
    //     animation: google.maps.Animation.DROP,
    //     position: twCenter
    // });


} //initMap end



/*================================
        newMarker
===================================*/
function newMarker() {
    clearMarkers();
    // markerArray=[];
    // clearMarkers();

    for (var i = 0; i <= act.length; i++) {

        // console.log("creatMarker", parseFloat(act[i].act_lat), parseFloat(act[i].act_lng));
        tmp = new google.maps.LatLng(parseFloat(act[i].act_lat), parseFloat(act[i].act_lng));
        // var marker="marker";
        markerb = new google.maps.Marker({
            map: map,
            title: 'Hello World!',
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: tmp
        });

        markerArray.push(markerb);//用一個陣列將產出的marker存起來
        // console.log("markerArray", markerArray);
    }

}

function setMapOnAll(map) {//把所有之前產出的marder都設成null
    for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(map);
    }
}

// Removes themarkerArray from the map, but keeps them in the array.
function clearMarkers() {//將null值帶入setMapOnAll()
    setMapOnAll(null);
}

// // Shows anymarkerArray currently in the array.
// function showMarkers() {
//   setMapOnAll(map);
// }
