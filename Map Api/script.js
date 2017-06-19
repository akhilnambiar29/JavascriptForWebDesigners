		var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('hplus-map'), {
          center: {lat: 19.223571962759944, lng: 73.09860104105907},
          zoom: 16,
          mapTypeId : google.maps.MapTypeId.ROADMAP,
          draggable : false,
          scrollwheel : false
        });
        var marker = new google.maps.Marker({
          position: {lat: 19.2218923, lng: 73.1006878},
          map: map , 
          title : "HPlus Sport"
        });

        var marker2 = new google.maps.Marker({
          position: {lat: 19.2256889, lng: 73.0970259},
          map: map , 
          title : "HPlus Sport - 2nd one"
        });

        var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
    content: contentString
  		});


       marker.addListener('click', function() {
    infowindow.open(map, marker);
  		});


      }