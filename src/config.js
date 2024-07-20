/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Capas',
		completeWith: 'Completar con:',
		editWith: 'Editar con:',
		openWith: 'Abrir con:',
		showWith: 'Mostrar con:',
		show2With: 'Mostrar también con:',
		checkTools: 'Validar con:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Nodo:',
		noNodesFound: 'No se ha encontrado información.',
		wayLabel: 'Vía:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = true;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://overpass.kumi.systems/api/interpreter';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap DE',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			maxZoom: 18,
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap FR',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'OI.OrthoimageCoverage', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [



		
				
		
		{	
			group: 'Llocs/Lugares/Places',
			title: 'Vía ferrata',
			query: '(nwr["highway"="via_ferrata"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'sports/via_ferrata.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'sports/via_ferrata.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Botigues/Tiendas/Shops',
			title: 'Suplementos alimenticios',
			query: '(nwr["shop"="nutrition_supplements"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Esports/Deportes/Sports',
			title: 'Futbol',
			query: '(nwr["sport"="soccer"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Esports/Deportes/Sports',
			title: 'Baloncesto',
			query: '(nwr["sport"="basketball"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Esports/Deportes/Sports',
			title: 'Hockey',
			query: '(nwr["sport"="hockey"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Esports/Deportes/Sports',
			title: 'Balonmano',
			query: '(nwr["sport"="handball"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Esports/Deportes/Sports',
			title: 'Fútbol americano',
			query: '(nwr["sport"="football"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Esports/Deportes/Sports',
			title: 'Rugby',
			query: '(nwr["sport"="rugby"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Movilidad',
			title: 'Alquiler bicis',
			query: '(nwr["amenity"="bicycle_rental"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Movilidad',
			title: 'Reparación bicis',
			query: '(nwr["amenity"="bicycle_repair_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Aigua/Agua/Water',
			title: 'Piscina/Swimming pool',
			query: '(nwr["leisure"="swimming_pool"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'sports/swimming.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'sports/swimming.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Aigua/Agua/Water',
			title: 'Piscina (públic/o) Pool',
			query: '(nwr["name"~"iscina"]["access"!="private"][!"amenity"][!"shop"]({{bbox}});nwr["leisure"="swimming_pool"]["name"~"iscina"]["access"!="private"]({{bbox}}););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 46, 204, 113 ,0.4)',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba( 46, 204, 113 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 46, 204, 113 ,0.4)',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Aigua/Agua/Water',
			title: 'Piscina privada/private pool',
			query: '(nwr["leisure"="swimming_pool"]["access"="private"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:#FF0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: '#FF0000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
  },
		{
			group: 'Oci/o/Leisure',
			title: 'Minigolf',
			query: '(nwr["leisure"="miniature_golf"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Oci/o/Leisure',
			title: 'Pista de hielo',
			query: '(nwr["leisure"="ice_rink"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Oci/o/Leisure',
			title: 'Boleras',
			query: '(nwr["leisure"="bowling_alley"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Movilidad',
			title: 'Aparcamiento para bicis <b><a href="https://osm-es.github.io/osmparkingmap">Ampliar</a></b>',
			query: '(nwr["amenity"="bicycle_parking"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Estadios',
			query: '(nwr["leisure"="stadium"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Campos / Pistas',
			query: '(nwr["leisure"="pitch"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Pistas de atletismo',
			query: '(nwr["leisure"="track"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Centro deportivo',
			query: '(nwr["leisure"="sports_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Gimnasio',
			query: '(nwr["leisure"="fitness_centre"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Fitness exterior',
			query: '(nwr["leisure"="fitness_station"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Botigues/Tiendas/Shops',
			title: 'Tienda bicicletas',
			query: '(nwr["shop"="bicycle"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Botigues/Tiendas/Shops',
			title: 'Tienda deportes',
			query: '(nwr["shop"="sports"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Botigues/Tiendas/Shops',
			title: 'Tiendas excursionismo',
			query: '(nwr["shop"="outdoor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Campo de golf',
			query: '(nwr["leisure"="golf_course"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Montar a caballo',
			query: '(nwr["leisure"="horse_riding"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Llocs/Lugares/Places',
			title: 'Plataforma cazadores',
			query: '(nwr["amenity"="hunting_stand"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
		{
			group: 'Oci/o/Leisure',
			title: 'Duchas',
			query: '(nwr["amenity"="shower"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
							src: imgSrc + 'icones/maxspeed_empty.svg',
							scale:0.03
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
				},
 {

   group: 'Test',
   title: 'BCN (CC 4.0 Dades Ajuntament BCN)',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^Nom_Local/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'Nom_Local': {
      'Citroen': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Citroen_2022.svg/1024px-Citroen_2022.svg.png',
       rotation: 0,
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'Nom_Local': {
      'Sn': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
       rotation:9.4,
              scale: 0.9
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
       })
      })
     },
     'traffic_sign': {
      'ES:B1a': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
		{	
			group: 'Test',
			title: 'ES:R2',
			query: '(nwr[~"^traffic_sign"~"ES:R2"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^traffic_sign/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'traffic_sign:forward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
							rotation: 0,
							scale: 1
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
					})
				})
			},
					'traffic_sign:backward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
							rotation:9.4,
						scale: 1
      }),
       text: new ol.style.Text({
        text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
					})
				})
			},
					'traffic_sign': {
						'ES:R2': new ol.style.Style({
							zIndex: 100,
							stroke: new ol.style.Stroke({
								color: 'rgba(246, 99, 79, 1.0)',
								width: 1
							}),
							fill: new ol.style.Fill({
								color: 'rgba(246, 99, 79, 0.3)'
							}),
							text: new ol.style.Text({
								text: name
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
},
		{	
			group: 'Test',
			title: 'Industrial|Construcció|MaquinàriaBCN (CC 4.0 Dades Ajuntament BCN)',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/industrial.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						'Maquinària': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/industrial_wheel.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -18,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Activitats industrials': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/industrial.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -18,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Activitats de la construcció': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/build.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -18 ,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						})
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
},

		{	
			group: 'Test',
			title: 'Allotjament BCN (CC 4.0 Dades Ajuntament BCN)',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/hotel.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						"serveis d'allotjament": new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/hotel.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
},

		{	
			group: 'Test',
			title: 'Restauració BCN (CC 4.0 Dades Ajuntament BCN)',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/eat_drink.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						'Xocolateries / Geladeries / Degustació': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/ice_cream.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Serveis de menjar take away MENJAR RÀPID': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/fast_food.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'serveis de menjar i begudes': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/eat_drink.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Restaurants': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/restaurant.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Bars   / CIBERCAFÈ': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/cafe.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Bars especials amb actuació / Bars musicals / Discoteques /PUB': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/drink.svg',
							scale: 1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
},

		{	
			group: 'Test',
			title: 'Ja sense activitat BCN (CC 4.0 Dades Ajuntament BCN)',
			geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/closed.svg',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^Nom_Local/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'Nom_Activitat': {
						'Locals buits en venda i lloguer': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/rent_sell.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Locals buits en venda': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/sell.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Sense informació': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/noinfo.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Sense informació - Havia tingut activitat (rètol)': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/noinfo.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
						'Locals buits en lloguer': new ol.style.Style({
					image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/rent.svg',
							scale:1
						}),
							text: new ol.style.Text({
								text: name,
								offsetX : 7,
								offsetY : -12,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
							})
						}),
					}
				};
				for (var key in styles) {
					var value = feature.get(key);
					if (value !== undefined) {
						for (var regexp in styles[key]) {
							if (new RegExp(regexp).test(value)) {
								return styles[key][regexp];
							}
						}
					}
				}
				return null;
			} 
		 
},
 {

   group: 'Test',
   title: 'Test BCN (CC 4.0 Dades Ajuntament BCN)',
   geojson: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/test_bcn.geojson',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/build.svg',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^Nom_Local/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'Nom_Activitat': {
      'Activitats de la construcció': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/osmpoismap/main/src/img/icones/build.svg',
       rotation: 0,
       scale: 0.10
      }),
       text: new ol.style.Text({
        text: name
       })
      })
     },
     'Nom_Local': {
      '.*': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
       rotation:9.4,
	   scale: 0.10
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     },
     'traffic_sign': {
      'ES:B1a': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
},
				
		
		{
			group: 'MTB',
			title: 'mtb=yes',
			query: '(nwr["mtb"="yes"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#00ff00',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,128,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,128,0,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb=designated',
			query: '(nwr["mtb"="designated"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#003399',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,51,153,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,51,153,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Gill Sans Extrabold',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb=no',
			query: '(nwr["mtb"="no"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ff0000',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(255,0,0,0.4)',
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb:type=crosscountry',
			query: '(nwr["mtb:type"="crosscountry"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffc0cb',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,192,203,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,192,203,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb:type=allmountain',
			query: '(nwr["mtb:type"="allmountain"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff00ff',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,255,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,255,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Gill Sans Extrabold',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb:type=downhill',
			query: '(nwr["mtb:type"="downhill"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#800080',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,128,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(255,0,0,0.4)',
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb:type=freeride',
			query: '(nwr["mtb:type"="freeride"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#003399',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,51,153,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,51,153,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Gill Sans Extrabold',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb:type=trail',
			query: '(nwr["mtb:type"="trail"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000080',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,128,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '14px Gill Sans Extrabold',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb:name (node)',
			query: '(node["mtb:name"][name]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#808080',
			style: function (feature) {
				var key_regex = /^mtb:name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128,128,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(128,128,128,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB',
			title: 'mtb:name (way)',
			query: '(wr["mtb:name"][name]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#808080',
			style: function (feature) {
				var key_regex = /^mtb:name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128,128,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(128,128,128,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								placement: 'line',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB path',
			title: 'mtb:scale=0',
			query: '(nwr["mtb:scale"="0"]["highway"="path"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB path',
			title: 'mtb:scale=1',
			query: '(nwr["mtb:scale"="1"]["highway"="path"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB path',
			title: 'mtb:scale=2',
			query: '(nwr["mtb:scale"="2"]["highway"="path"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB path',
			title: 'mtb:scale=3',
			query: '(nwr["mtb:scale"="3"]["highway"="path"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB path',
			title: 'mtb:scale=4',
			query: '(nwr["mtb:scale"="4"]["highway"="path"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB path',
			title: 'mtb:scale=5',
			query: '(nwr["mtb:scale"="5"]["highway"="path"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB path',
			title: 'mtb:scale=6',
			query: '(nwr["mtb:scale"="6"]["highway"="path"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#800000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB track',
			title: 'mtb:scale=0',
			query: '(nwr["mtb:scale"="0"]["highway"="track"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB track',
			title: 'mtb:scale=1',
			query: '(nwr["mtb:scale"="1"]["highway"="track"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB track',
			title: 'mtb:scale=2',
			query: '(nwr["mtb:scale"="2"]["highway"="track"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB track',
			title: 'mtb:scale=3',
			query: '(nwr["mtb:scale"="3"]["highway"="track"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB track',
			title: 'mtb:scale=4',
			query: '(nwr["mtb:scale"="4"]["highway"="track"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB track',
			title: 'mtb:scale=5',
			query: '(nwr["mtb:scale"="5"]["highway"="track"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB track',
			title: 'mtb:scale=6',
			query: '(nwr["mtb:scale"="6"]["highway"="track"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#800000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale=0',
			query: '(nwr["mtb:scale"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale=1',
			query: '(nwr["mtb:scale"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale=2',
			query: '(nwr["mtb:scale"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale=3',
			query: '(nwr["mtb:scale"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale=4',
			query: '(nwr["mtb:scale"="4"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale=5',
			query: '(nwr["mtb:scale"="5"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale=6',
			query: '(nwr["mtb:scale"="6"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#800000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:uphill=0',
			query: '(nwr["mtb:scale:uphill"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:uphill=1',
			query: '(nwr["mtb:scale:uphill"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:uphill=2',
			query: '(nwr["mtb:scale:uphill"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:uphill=3',
			query: '(nwr["mtb:scale:uphill"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:uphill=4',
			query: '(nwr["mtb:scale:uphill"="4"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:uphill=5',
			query: '(nwr["mtb:scale:uphill"="5"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:uphill=6',
			query: '(nwr["mtb:scale:uphill"="6"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#800000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:imba=0',
			query: '(nwr["mtb:scale:tdot2"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:imba=1',
			query: '(nwr["mtb:scale:imba"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:imba=2',
			query: '(nwr["mtb:scale:imba"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:imba=3',
			query: '(nwr["mtb:scale:imba"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'mtb:scale:imba=4',
			query: '(nwr["mtb:scale:imba"="4"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'class:bicycle:mtb=3',
			query: '(nwr["class:bicycle:mtb"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'class:bicycle:mtb=2',
			query: '(nwr["class:bicycle:mtb"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'class:bicycle:mtb=1',
			query: '(nwr["class:bicycle:mtb"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'class:bicycle:mtb=0',
			query: '(nwr["class:bicycle:mtb"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'class:bicycle:mtb=-1',
			query: '(nwr["class:bicycle:mtb"="-1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'class:bicycle:mtb=-2',
			query: '(nwr["class:bicycle:mtb"="-2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'MTB :scale',
			title: 'class:bicycle:mtb=-3',
			query: '(nwr["class:bicycle:mtb"="-3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#800000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		
		}
	],


	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var complete = $('<div>').html(config.i18n.completeWith);
		
		//Mapcomplete direcciones
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Direcciones', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fwherethestreetshavenonumber.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/mcquests/master/images/icones_adreces/casa_plena.svg', height: 20, width: 20})));
		
		//Mapcomplete nombres antiguos
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Nombres antiguos', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fturnbacktime.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://cdn.pixabay.com/photo/2016/12/20/05/24/store-1919713_960_720.png', height: 20, width: 20})));
		
		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeGo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',transit', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));
		//Apple
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Apple Maps', href: 'https://duckduckgo.com/?t=ffab&q=' + coordinateLL[1] + ',' + coordinateLL[0] + '+Show+on+Map&ia=maps&iaxm=maps,' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'applemaps_logo.png', height: 20, width: 20})));
		//Bing
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Bing', href: 'https://www.bing.com/maps?cp=' + coordinateLL[1] + '~' + coordinateLL[0] + '&lvl=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'bing_logo.png', height: 20, width: 20})));
		//Mapillary
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Mapillary', href: 'https://www.mapillary.com/app/?lat=' + coordinateLL[1] + '&lng=' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapillary_logo.png', height: 20, width: 20})));
		
		//Karta View
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Karta View', href: 'https://kartaview.org/map/@' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 20) + 'z' , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'kartaview_logo.png', height: 20, width: 20})));
		
		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));
		
		//Notes Review
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes Review', href: 'https://ent8r.github.io/NotesReview/?view=map&map=' + Math.min(view.getZoom(), 20) + '%2F' + coordinateLL[1] + '%2F' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'notesreview_logo.png', height: 20, width: 20})));
		
		//Latest OpenStreetMap Edits per Tile
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		
		var show = $('<div>').html(config.i18n.showWith);
		//OpenLevelUp
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenLevelUp!', href: 'https://openlevelup.net/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'openlevelup_logo.png', height: 20, width: 20})));
		
		//Waymarkedtrails
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Waymarked trails', href: 'https://hiking.waymarkedtrails.org/#?map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'waymarkedtrails_logo.png', height: 20, width: 20})));
		
		//OpenCampingMap
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenCampingMap', href: 'https://opencampingmap.org/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/0/1/fff', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'opencampingmap_logo.svg', height: 20, width: 20})));
		
		//Osmand
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Osmand', href: 'https://osmand.net/map#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmand_logo.png', height: 20, width: 20})));
		
		//Openrouteservice
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenRouteService', href: 'https://maps.openrouteservice.org/#/place/@' + coordinateLL[0] + ',' + coordinateLL[1] + ',' + Math.min(view.getZoom(), 20) , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ors_logo.svg', height: 20, width: 20})));
		
		//OSM Routing Machine
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Routing Machine', href: 'http://map.project-osrm.org/?z=' + Math.min(view.getZoom(), 20) + '&center=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&hl=en&alt=0&srv=0', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osrm_logo.png', height: 20, width: 20})));
		
		//Graphhopper
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Graphhopper', href: 'https://graphhopper.com/maps/?point=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&locale=en&elevation=true&profile=car&use_miles=false&selected_detail=Elevation&layer=Omniscale', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'graphhopper_logo.png', height: 20, width: 20})));
		
		//Brouter
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Brouter', href: 'http://brouter.de/brouter-web/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/standard', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'brouter_logo.png', height: 20, width: 20})));
		
		//F4 Map 3D
		show.append($('<a>').css('marginLeft', 5).attr({title: 'F4 Map 3D', href: 'https://demo.f4map.com/#lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0] + '&zoom=' + Math.min(view.getZoom(), 20) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'f4map_logo.png', height: 20, width: 20})));
		
		//Qwant
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Qwant', href: 'https://www.qwant.com/maps/place/latlon:' + coordinateLL[1] + ':' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'qwantmaps_logo.svg', height: 20, width: 20})));
		
		//Mapy.cz
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Mapy.cz', href: 'https://en.mapy.cz/zakladni?x=' + coordinateLL[0] + '&y=' + coordinateLL[1] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapycz_logo.png', height: 20, width: 20})));
		
		//OpenStreetBrowser
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenStreetBrowser', href: 'https://www.openstreetbrowser.org/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osb_logo.png', height: 20, width: 20})));
		
		var show2 = $('<div>').html(config.i18n.show2With);
		
		//OSM Accessibility Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Accessibility Map', href: 'https://yopaseopor.github.io/osmaccessibilitymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
				//OSM FireFighters Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Fire Fighters Map', href: 'https://yopaseopor.github.io/osmffmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmffmap_logo.svg', height: 20, width: 20})));
		
				//OSM Historic Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Historic Map', href: 'https://yopaseopor.github.io/osmhistoricmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmhistoricmap_logo.png', height: 20, width: 20})));
				
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Lit Map', href: 'https://yopaseopor.github.io/osmlitmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlitmap_logo.svg', height: 20, width: 20})));
		
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Limits Map', href: 'https://yopaseopor.github.io/osmlimitsmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlimitsmap_logo.svg', height: 20, width: 20})));
		
				//OSM Library Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Library Map', href: 'https://yopaseopor.github.io/osmlibrarymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlibrarymap_logo.svg', height: 20, width: 20})));
		
				//OSM MTB Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM MTB Map', href: 'https://yopaseopor.github.io/osmmtbmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
				//OSM Parking Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Parking Map', href: 'https://osm-es.github.io/osmparkingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmparkingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Recycling Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Recycling Map', href: 'https://yopaseopor.github.io/osmrecyclingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmrecyclingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Validator Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Validator Map', href: 'https://yopaseopor.github.io/osmvalidatormap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmvalidatormap_logo.svg', height: 20, width: 20})));
		
				//OSM POIs Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM POIs Map', href: 'https://yopaseopor.github.io/osmpoismap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmpoismap_logo.svg', height: 20, width: 20})));
		
					return $.merge($.merge($.merge($.merge($.merge(open, show), show2), tool), complete), edit);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
