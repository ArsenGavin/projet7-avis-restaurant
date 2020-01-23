var tabRestau = [];
var tabStars1 = [];
var tabStars2 = [];
var tabStars3 = [];
var tabStars4 = [];
var tabStars5 = [];

//fonction pour initialisé la map Google, son contenu et egalement le contenu html qui en découle.
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // Centré sur Paris par défault
        center: {lat: 48.853251, lng: 2.349875},
        zoom: 14,
        // Skin map Black
        styles: [
                  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                  {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                  },
                  {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                  },
                  {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                  },
                  {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                  },
                  {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                  },
                  {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                  },
                  {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                  },
                  {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                  },
                  {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                  },
                  {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                  },
                  {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                  },
                  {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                  },
                  {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                  }
                ]
        });

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation. on cherche la position du client
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.open(map);

        // On marque la position du client
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/hospital.png'
        });
        // On centre la map sur la position du client
        map.setCenter(pos);

        // On va chercher le fichier json
        $.getJSON( "main.json", function( result ) {
            for (var i = 0; i < result.length; i++) {
              // On fait une moyenne du ratings pour l'exemple
                var self = this;
                var num1 = result[i].ratings[0].stars;
                var num2 = result[i].ratings[1].stars;
                var somme = num1 + num2;
                var x = Math.round(somme / result[i].ratings.length);

                // On fait un objet location pour la position du restaurant
                var location = {
                  lat: result[i].lat,
                  lng: result[i].long
                };

                var lat = result[i].lat;
                var lng = result[i].long;

                // Lien url GoogleStreet views avec la lat et lng recuperé dans le détails
                var photoStreet = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+lat+","+lng+"&key=AIzaSyACiT6NwKFG2FY4uHBZI3ZH0Kwqf9eNigM";

                // le contenu de l'infobulle
                var contentString = '<span style="padding: 0px; text-align:left" align="left"><img src="./src/logobis.png" style="width: 12%; float: left; margin-top: -2%;"alt="logo eatHere"><h5 style="color:darkblue;">EatHere vous proposes le restaurant ' + result[i].restaurantName + '&nbsp; &nbsp; noté ' + x  + ' étoiles</h5><p>' + result[i].address + '<img src="'+photoStreet+'" alt="photo du restaurant"><br />';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                  });

                // On crée des objets restaurantJson
                var restaurantJson = new RestaurantJson(map,
                            result[i].id,
                            location,
                            result[i].restaurantName,
                            result[i].address,
                            x,
                            null,
                            result[i].ratings
                            );
                // Methode de l'objet pour un marker sur la position cf restaurantJson.js
                restaurantJson.createMarker();
                // Methode de l'objet pour l'ajout les informations récolté au contenu html   cf restaurantJson.js
                restaurantJson.addHtml();
                // Methode pour ajouté un commentaire sur le restaurant
                restaurantJson.addComment();
                // Push dans un tableau pour réunir tout les objets restaurant
                tabRestau.push(restaurantJson);

                // Push le restaurant dans un des cinq tableau en fonction de son ratingGlobal, (on s'en sert pour la funtion filtre)
                if (x < 2) {
                    tabStars1.push(restaurantJson);
                }
                if (x >= 2 && x < 3) {
                    tabStars2.push(restaurantJson);
                }
                if (x >= 3 && x < 4) {
                    tabStars3.push(restaurantJson);
                }
                if (x >= 4 && x < 5) {
                    tabStars4.push(restaurantJson);
                }
                if (x == 5) {
                    tabStars5.push(restaurantJson);
                }

                // Si un click est détecté sur le marker du restaurant ca affiche l'infobulle du restaurant
                restaurantJson.marker.addListener('click', function() {
                    infowindow.open(map, restaurantJson.marker);
                });
            }
       });


       var request = {
           location: pos,
           radius: '500',
           type: ['restaurant']
       };
       // On recherche les "restaurants" dans un rayon de 500m avec google place
       // On s'en sert surtout pour récupéré le place_id pour une recherche en détails avec callback2
       var service = new google.maps.places.PlacesService(map);
       service.nearbySearch(request, callback);

       function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                  // On envoie une requete avec le place_id pour récupéré les détails du restaurant (les fields de l'objet request ci dessous) et s'en servir dans callback2
                  var request = {
                    placeId: results[i].place_id,
                    fields: ['name', 'rating', 'reviews', 'photos', 'vicinity', 'geometry', 'place_id']
                  };
                  service.getDetails(request, callback2);
                  function callback2(results2, status2) {
                      if (status2 == google.maps.places.PlacesServiceStatus.OK) {
                          // On crée des objets restaurant
                          var restaurant = new Restaurant(map,
                                      results2.place_id,
                                      results2.geometry.location,
                                      results2.name,
                                      results2.vicinity,
                                      results2.rating,
                                      results2.photos,
                                      results2.reviews
                                    );

                          // Methode pour ajouté le marker du restaurant avec la méthode createMarker  cf restaurant.js
                          restaurant.createMarker();
                          // Methode pour ajouté le contenu du restaurant avec la methode addHtml      cf restaurant.js
                          restaurant.addHtml();
                          // Methode pour ajouté un commentaire sur le restaurant
                          restaurant.addComment();
                          // On ajoute l'objet restaurant au tableau qui regroupe tout les objets restaurant et restaurantJson
                          tabRestau.push(restaurant);
                          console.log(results2.reviews);
                          // On ajoute l'objet restaurant au tableau qui correspond en fonction du ratingGlobal (on s'en sert pour le filtre)
                          if (results2.rating < 2) {
                              tabStars1.push(restaurant);
                          }
                          if (results2.rating >= 2 && results2.rating < 3) {
                              tabStars2.push(restaurant);
                          }
                          if (results2.rating >= 3 && results2.rating < 4) {
                              tabStars3.push(restaurant);
                          }
                          if (results2.rating >= 4 && results2.rating < 5) {
                              tabStars4.push(restaurant);
                          }
                          if (results2.rating == 5) {
                              tabStars5.push(restaurant);
                          }

                          // On récupere la localisation du restaurant (lat, lng)
                          var GPS = results2.geometry.location;
                          var lat = GPS.lat();
                          var lng = GPS.lng();
                          // Lien url GoogleStreet views avec la lat et lng recuperé dans le détails
                          var photoStreet = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+lat+","+lng+"&key=AIzaSyACiT6NwKFG2FY4uHBZI3ZH0Kwqf9eNigM";
                          // Contenu de l'infobulle
                          var contentString = '<span style="padding: 0px; text-align:left" align="left"><img src="./src/logobis.png" style="width: 12%; float: left; margin-top: -2%;"alt="logo eatHere"><h5 style="color:darkblue;">EatHere vous proposes le restaurant ' + results2.name + '&nbsp; &nbsp; noté ' + results2.rating  + ' étoiles</h5><p>' + results2.vicinity + '<img src="'+photoStreet+'" alt="photo du restaurant"><br />';
                          var infowindow = new google.maps.InfoWindow({
                              content: contentString
                            });
                            restaurant.marker.addListener('click', function() {
                                infowindow.open(map, restaurant.marker);
                            });

                      }
                  }
              }
          }
        }


            // Ajout d'un restaurant avec un clickdroit sur la map
            google.maps.event.addListener(map , 'rightclick', function (event) {
                // On déclare des variables par défaut
                var id = Math.floor(Math.random());
                var rating = 3;
                var comTab = [{
                                text : " ",
                                rating : 3
                              },
                              {
                                text : " ",
                                rating : 3
                              }

                            ];
                //fonction qui permet de switch le contenu html
                function switchDiv(){
                    var defaut = document.getElementById('places');
                    var autre = document.getElementById('add-restau-form');

                    defaut.style.display = (defaut.style.display == 'none' ? '' : 'none');
                    autre.style.display = (autre.style.display == 'none' ? '' : 'none');
                }
                switchDiv();

                // Si click sur fermer on reswitch
                $("#form-close").on("click",function(){
                    switchDiv();
                });
                // Si click sur envoyer on crée un objet restaurant avec les variables par défaut et la location récupéré avec le click droit sur la map
                $("#form-send").on("click",function(){
                    var nameRestau = document.getElementById("new-restaurant-name").value;
                    var addressRestau = document.getElementById("new-restaurant-address").value;

                    if (nameRestau != 0 && addressRestau != 0){
                        console.log(nameRestau);
                        console.log(addressRestau);
                        var restaurant = new Restaurant(map,
                                    id,
                                    event.latLng,
                                    nameRestau,
                                    addressRestau,
                                    rating,
                                    null,
                                    comTab
                                  );

                        // Methode pour ajouté le marker du restaurant avec la méthode createMarker  cf restaurant.js
                        restaurant.createMarker();
                        // Methode pour ajouté le contenu du restaurant avec la methode addHtml      cf restaurant.js
                        restaurant.addHtml();
                        // Methode pour ajouté un commentaire sur le restaurant
                        restaurant.addComment();
                        // On ajoute l'objet restaurant au tableau qui regroupe tout les objets restaurant et restaurantJson
                        tabRestau.push(restaurant);

                        // On ajoute l'objet restaurant au tableau 3etoiles par défaut (on s'en sert pour le filtre)
                        tabStars3.push(restaurant);

                        // On récupere la localisation du restaurant (lat, lng)
                        var GPS = event.latLng;
                        var lat = GPS.lat();
                        var lng = GPS.lng();
                        // Lien url GoogleStreet views avec la lat et lng recuperé dans le détails
                        var photoStreet = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+lat+","+lng+"&key=AIzaSyACiT6NwKFG2FY4uHBZI3ZH0Kwqf9eNigM";
                        // Contenu de l'infobulle
                        var contentString = '<span style="padding: 0px; text-align:left" align="left"><img src="./src/logobis.png" style="width: 12%; float: left; margin-top: -2%;"alt="logo eatHere"><h5 style="color:darkblue;">EatHere vous proposes le restaurant ' + nameRestau + '&nbsp; &nbsp; noté ' + rating  + ' étoiles</h5><p>' + addressRestau + '<img src="'+photoStreet+'" alt="photo du restaurant"><br />';
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                          });
                          restaurant.marker.addListener('click', function() {
                              infowindow.open(map, restaurant.marker);
                          });

                    }
                    // Si le nom ou l'adresse récupéré est vide alors Alert
                    else {
                        alert("Echec de l'ajout de restaurant.     > Information manquante");
                    }

                    // On reswitch a la fin
                    switchDiv();
                });


            })






          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
        // le navigateur ne supporte pas la géolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
