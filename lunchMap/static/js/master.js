var map_spots = [[1,'1, Wind turbines by the sea',38.713228,-9.044651], [2,'2, Barrio chino',38.680337,-9.156918],
				/*[3,'3, ',38.723473,-9.12147],
				[4,'4, ',38.710213,-9.142584],
				[5,'5, Forest Park',38.712758,-9.12765],
				[6,'6, Hall',38.714969,-9.156231],*/
				[7,'7, A bookshelf made from steam pipes',38.715237,-9.182668],
				[8,'8, Suburban area',38.733718,-9.22215],
				[9,'9, Schema of biogas engine',38.654134,-9.205327],
				/*[10,'10, ',38.660032,-9.160695],*/
				[11,'11, open gold mine',38.672095,-9.060788],
				[12,'12, Maglev Express - magnet train',38.744965,-9.245496],
				[13,'13, Bosque',38.775753,-9.410634],
				[14,'14, Education - A craft class in an elementary school',38.757818,-9.357076],
				[15,'15, Maglev Express - magnet train',38.76103,-9.345403],
				[16,'16, La casa',38.741485,-9.298711],
				[17,'17, Biogas Express',38.71229,-9.300428],
				[18,'18, Urban Life - Tea House',38.730772,-9.202924],
				/*[19,'19, ',38.750589,-9.128766],
				[20,'20, ',38.723809,-9.11366],
				[21,'21, ',38.715237,-9.125677],
				[22,'22, ',38.689248,-9.176832],*/
				[23,'23, Propaganda for energy conservation',38.668878,-9.068342],
				[24,'24, Playa',38.678528,-9.152112],
				[25,'25, Market of Biogas Worldwide by 2030',38.670219,-9.208074],
				[26,'26, Municipal Biogas Collection and Distribution Center',38.663517,-9.217],
				[27,'27, How Windmill works',38.662713,-9.072118],
				[28,'28, Energy - wave power',38.697287,-9.048429],
				/*[29,'29, ',38.708272,-9.138036],
				[30,'30, ',38.710683,-9.124303],
				[31,'31, ',38.755141,-9.031606],*/
				[32,'32, The Alps - Meions\' top choice for skiing and mountaineering ',38.799035,-9.23348],
				/*[33,'33, ',38.793416,-9.174085],
				[34,'34, ',38.748715,-9.178205],*/
				[35,'35, Urban Life - New Friend',38.742557,-9.198805],
				[36,'36, Urban Life - Salon',38.729434,-9.172712],
				/*[37,'37, ',38.81161,-9.091345],
				[38,'38, ',38.743092,-8.982168],*/
				[39,'39, Winter',38.770133,-9.268842],
				[40,'40, Windmill turbines',38.681745,-9.326521]];

var map = new google.maps.Map;
var markers_zindex = 0;

// Load Google Map
function load_map() {
	
  var myLatlng = new google.maps.LatLng("38.262985","140.873508");
  var myOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeControl: false,
	streetViewControl: false,
	zoomControlOptions: {
        			position: google.maps.ControlPosition.LEFT_CENTER
    			},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  
/*  for( var i = 0; i < map_spots.length; ++i ){
	  add_marker(i);
  }*/
}

	//var len = map_spots.length;
	
	//var infowindow = null;
//	infowindow = new google.maps.InfoWindow({
//		content:"loading..."
//	});
	
function add_marker(i){
		markers_zindex++;
		// map_spots[i][0] id
		// map_spots[i][1] title
		// map_spots[i][2] latitude
		// map_spots[i][3] longitude
		
		
		var en_ltlg = new google.maps.LatLng(map_spots[i][2], map_spots[i][3]);

		
		var icon_image = new google.maps.MarkerImage("img/marker.png",
							new google.maps.Size(18,18),
							new google.maps.Point(0,0),
							new google.maps.Point(9.0,9.0)
						);
							
  		var shadow = new google.maps.MarkerImage("img/shadow.png",
							new google.maps.Size(28.0, 18.0),
							new google.maps.Point(0, 0),
							new google.maps.Point(9.0, 9.0)
						);
		
		var marker = new google.maps.Marker({
							position: en_ltlg,
							map: map,
							photo_id: map_spots[i][0],
							icon: icon_image,
							shadow: shadow,
							title: map_spots[i][1],
							zIndex: markers_zindex
						});
								
		var infowindow = new google.maps.InfoWindow({
							content: '<img src="photo/'+ marker.photo_id +'.jpg" />'
										+'<div id="title">'+ marker.title +'</div>'
							});
		
		google.maps.event.addListener(marker, 'click', function() {
									infowindow.open(map,marker);	
									});
  
}
