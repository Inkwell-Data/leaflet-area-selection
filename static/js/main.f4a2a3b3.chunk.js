(this["webpackJsonp@bopen/leaflet-area-selection-example"]=this["webpackJsonp@bopen/leaflet-area-selection-example"]||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/B-Open.a8695c4b.svg"},,,function(e,t,a){e.exports=a(12)},,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=(a(6),a(7),a(4)),r=a(1),i=a(3),s={leafletAreaSelectorControl:"_styles-module__leafletAreaSelectorControl__37qQG",leafletMapOverlayPane:"_styles-module__leafletMapOverlayPane__39tTo",endSelectionArea:"_styles-module__endSelectionArea__3Xj9O",areaSelectMarker:"_styles-module__areaSelectMarker__1h_hk",areaSelectGhostMarker:"_styles-module__areaSelectGhostMarker__1KD2U _styles-module__areaSelectMarker__1h_hk"};function c(e){return e.split("-").map((function(e,t){return 0===t?e:"".concat(e[0].toUpperCase()).concat(e.substring(1))})).join("")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=c(e);return s[a]?t?"".concat(s[a]," ").concat(e," ").concat(t):"".concat(s[a]," ").concat(e):t?"".concat(e," ").concat(t):e}function h(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=a?t.add(a):t;e._leaflet_pos=o,n.a.any3d?n.d.setTransform(e,o):(e.style.left=o.x+"px",e.style.top=o.y+"px")}var d=n.a.mobile?"touchstart":"click",g="area-draw-selection";function m(e,t){var a,o,r=e.getContainer().querySelector(".leaflet-map-pane"),i=function(e){var t=e.active,a=e.fadeOnActivation;return n.d.create("div",l("leaflet-map-overlay-pane","leaflet-pane".concat(t?"":" inactive").concat(a?" fading-enabled":"")))}(t);a=i,(o=r).parentNode.insertBefore(a,o.nextSibling);var s=e.createPane(g,i);s.addEventListener(d,(function(t){t.isTrusted&&(t.stopPropagation(),e.fire("as:point-add",t))})),s.style.zIndex=550}function p(e){var t=e.getMap().getPane(g).querySelector(".end-selection-area");t&&t.remove()}function u(e){var t=this;if(!this.map_moving){var a=e.index,o=void 0===a?null:a,s=e.clientX,c=e.clientY;if(void 0===s&&void 0===c){var m=e.touches[0];s=m.clientX,c=m.clientY}var p=this.getMap(),u=p.getContainer().getBoundingClientRect(),v=s-u.left,f=c-u.top;0===this.markers.length&&function(e,t){var a=Object(i.a)(t,2),o=a[0],r=a[1],s=e.getMap(),c=s.getPane(g),m=n.d.create("div",l("end-selection-area"),c),p=m.getBoundingClientRect();m.setAttribute("role","button"),m.addEventListener(d,(function(e){e.isTrusted&&(e.stopPropagation(),s.fire("as:creation-end"))}),{once:!0}),m.addEventListener("mouseenter",e.hoverClosePoint.bind(e)),m.addEventListener("mouseleave",e.outClosePoint.bind(e)),h(m,new n.h(o,r),new n.h(-p.width/2,-p.height/2))}(this,[v,f]);var k=new n.h(v,f),y=new n.c({className:l("area-select-marker"),iconSize:[16,16]}),L=new n.g(p.containerPointToLatLng(k),{icon:y,draggable:!0}),_=b.bind(this);L.on("drag",_(null===o?this.markers.length:o)),L.on("dragstart",(function(e){e.target.getElement().classList.add("active")})),L.on("dragend",(function(e){e.target.getElement().classList.remove("active"),requestAnimationFrame((function(){t.onPolygonReady()}))}));var P,M={point:k,marker:L,index:o};if(L.on("dblclick",(P=this.markers.length,function(e){p.fire("as:marker-remove",Object(r.a)(Object(r.a)({},M),{},{index:null===o?P:o}))})),L.addTo(p),p.fire("as:marker-add",M),null!==o)for(var w=function(e){t.markers[e].marker.off("drag"),t.markers[e].marker.on("drag",_(e)),t.markers[e].marker.off("dblclick"),t.markers[e].marker.on("dblclick",(function(a){p.fire("as:marker-remove",Object(r.a)(Object(r.a)({},t.markers[e]),{},{index:e}))}))},x=o+1;x<this.markers.length;x++)w(x)}}function v(e){var t=e.index,a=void 0===t?null:t,r=Object(o.a)(e,["index"]),i=this.getMap(),s={marker:r.marker,point:r.point},c=this.markers;null===a?c.push(s):c.splice(a,0,s);var h=c.length>=3;"draw"===this.phase&&(h?3===c.length&&c.forEach((function(e,t){var a=e.marker,n=a.getIcon();n.options.className=l("area-select-marker",0===t?"start-marker":null),a.setIcon(n)})):c.forEach((function(e){var t=e.marker,a=t.getIcon();a.options.className=l("area-select-marker","invalid"),t.setIcon(a)}))),i.fire("as:update-polygon"),"adjust"===this.phase&&(i.fire("as:update-ghost-points"),this.onPolygonReady()),"draw"===this.phase&&(this.closeLine&&i.removeLayer(this.closeLine),h&&(this.closeLine=new n.j([c[0].marker.getLatLng(),c[c.length-1].marker.getLatLng()],{weight:3,color:"#c0c0c0"}),i.addLayer(this.closeLine)))}function f(e){var t=this,a=e.index,n=void 0===a?0:a,o=this.getMap();if(this.markers.length>3){this.markers.splice(n||0,1)[0].marker.removeFrom(o),o.fire("as:update-polygon"),"adjust"===this.phase&&o.fire("as:update-ghost-points");for(var i=function(e){t.markers[e].marker.off("drag"),t.markers[e].marker.on("drag",b.bind(t)(e)),t.markers[e].marker.off("dblclick"),t.markers[e].marker.on("dblclick",(function(a){o.fire("as:marker-remove",Object(r.a)(Object(r.a)({},t.markers[e]),{},{index:e}))}))},s=n;s<this.markers.length;s++)i(s);this.onPolygonReady()}}function k(){var e=this.getMap(),t=this.markers,a=t.length>=3,o=new n.i(t.map((function(e){return e.marker.getLatLng()})),Object(r.a)({color:a?"rgb(45, 123, 200)":"rgba(220, 53, 69, 0.7)",weight:2},!a&&{dashArray:"5, 10"}));this.polygon&&e.removeLayer(this.polygon),this.polygon=o,e.addLayer(this.polygon)}function y(){var e=this,t=this.getMap();requestAnimationFrame((function(){e.clearGhostMarkers();var a=e.markers,o=e.ghostMarkers;a.forEach((function(r,i){var s=a[i+1]?a[i+1]:a[0],c=r.marker.getLatLng(),h=s.marker.getLatLng(),d=t.latLngToContainerPoint([(c.lat+h.lat)/2,(c.lng+h.lng)/2]),g=new n.c({className:l("area-select-ghost-marker"),iconSize:[16,16]}),m=new n.g(t.containerPointToLatLng(d),{icon:g,draggable:!0}),p={point:d,marker:m};m.on("drag",P.bind(e)(o.length)),m.on("dragstart",M.bind(e)()),m.on("dragend",w.bind(e)(o.length)),o.push(p),m.addTo(t)}))}))}function L(){var e=this.getMap();e.removeLayer(this.closeLine),this.closeLine=null,this.markers[0].marker.getElement().classList.remove("start-marker"),this.setPhase("adjust"),e.fire("as:update-ghost-points"),this.onPolygonReady(),p(this)}function _(e){if(e.isTrusted){e.preventDefault(),e.target.blur();var t=this.options.active||"adjust"===this.phase;t&&p(this),t?this.activateButton.classList.remove("active"):this.activateButton.classList.add("active"),this.setPhase(t?"inactive":"draw",!0)}}function b(e){var t=this,a=this.getMap();return function(n){var o=n.latlng;requestAnimationFrame((function(){var n=a.latLngToContainerPoint(o),r=t.markers[e].point;r.x=n.x,r.y=n.y,a.fire("as:update-polygon"),a.fire("as:update-ghost-points")}))}}function P(e){var t=this,a=this.getMap();return function(o){var r=o.latlng;requestAnimationFrame((function(){var o=t.markers[e],i=t.markers[e+1]?t.markers[e+1]:t.markers[0];t.ghostPolygon&&a.removeLayer(t.ghostPolygon),t.ghostPolygon=new n.i([a.containerPointToLatLng(o.point),r,a.containerPointToLatLng(i.point)],{color:"rgb(45, 123, 200)",weight:2,opacity:.5,fillOpacity:.1,dashArray:"5, 10"}),a.addLayer(t.ghostPolygon),a.fire("as:update-polygon")}))}}function M(){return function(e){e.target.getElement().classList.add("active")}}function w(e){var t=this,a=this.getMap();return function(n){var o=n.target;o.getElement().classList.remove("active"),o.removeFrom(a),t.ghostPolygon&&a.removeLayer(t.ghostPolygon);var r=a.latLngToContainerPoint(o.getLatLng()),i={clientX:r.x,clientY:r.y,index:e+1};a.fire("as:point-add",i)}}var x=n.b.extend({options:{active:!1,onPolygonReady:function(e){},fadeOnActivation:!0},initialize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.k.setOptions(this,e),this.phase=e.active?"draw":"inactive",this.map_moving=!1,this.markers=[],this.ghostMarkers=[],this.polygon=null,this.closeLine=null,this._mapMoveStart=this.mapMoveStart.bind(this),this._mapMoveEnd=this.mapMoveEnd.bind(this)},onAdd:function(e){return this._container=n.d.create("div",l("leaflet-area-selector-control")),this.activateButton=n.d.create("button","",this._container),this.activateButton.addEventListener(d,_.bind(this)),this.activateButton.addEventListener("dblclick",(function(e){e.stopPropagation()})),this.options.active?this.activateButton.classList.add("active"):this.activateButton.classList.remove("active"),this._map=e,m(e,this.options),e.on("movestart",this._mapMoveStart),e.on("moveend",this._mapMoveEnd),e.on("as:point-add",u.bind(this)),e.on("as:marker-add",v.bind(this)),e.on("as:marker-remove",f.bind(this)),e.on("as:creation-end",L.bind(this)),e.on("as:update-polygon",k.bind(this)),e.on("as:update-ghost-points",y.bind(this)),this._container},onRemove:function(e){e.off("movestart",this._mapMoveStart),e.off("moveend",this._mapMoveEnd),e.off("as:point-add"),e.off("as:marker-add"),e.off("as:marker-remove"),e.off("as:creation-end"),e.off("as:update-polygon"),e.off("as:update-ghost-points")},getMap:function(){return this._map},onPolygonReady:function(){this.options.onPolygonReady(this.polygon)},setPhase(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.phase=e,this.options.active="draw"===e,(t||"draw"===this.phase)&&(this.clearGhostMarkers(),this.clearMarkers(),this.clearPolygon());var a=this._map.getPane(g).parentNode;this.options.active?a.classList.remove("inactive"):a.classList.add("inactive")},mapMoveStart:function(){this.map_moving=!0},mapMoveEnd:function(e){var t=this;requestAnimationFrame((function(){t.map_moving=!1}));var a=this._map,o=a.getPane(g).querySelector(".end-selection-area");if(o){var r=this.markers[0].marker,i=o.getBoundingClientRect();h(o,a.latLngToContainerPoint(r.getLatLng()),new n.h(-i.width/2,-i.height/2))}this.translatePolygon()},translatePolygon:function(){if(0!==this.markers.length){var e=this._map;this.markers.forEach((function(t){t.point=e.latLngToContainerPoint(t.marker.getLatLng())})),this.ghostMarkers.forEach((function(t){t.point=e.latLngToContainerPoint(t.marker.getLatLng())}))}},hoverClosePoint:function(e){this.markers.length>2&&this.closeLine&&this.closeLine.removeFrom(this._map)},outClosePoint:function(e){this.closeLine&&this.closeLine.addTo(this._map)},clearMarkers:function(){var e=this;this.markers.forEach((function(t){t.marker.removeFrom(e._map)})),this.markers=[]},clearGhostMarkers:function(){var e=this;this.ghostMarkers.forEach((function(t){t.marker.removeFrom(e._map)})),this.ghostMarkers=[]},clearPolygon:function(){this.polygon&&this.polygon.removeFrom(this._map),this.polygon=null,this.closeLine&&this.closeLine.removeFrom(this._map),this.closeLine=null}});n.k.extend(n.b,{DrawAreaSelection:x,drawAreaSelection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new x(e)}});a(8);var E=a(2),O=a.n(E);delete n.e.Default.prototype._getIconUrl,n.e.Default.mergeOptions({iconRetinaUrl:a(9),iconUrl:a(10),shadowUrl:a(11)});var S=[41.901493,12.5009157],T=new n.f("root",{tap:!1}).setView(S,13);Object(n.m)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(T);var C=document.createElement("div");C.innerHTML='<div style="text-align: center; font-size: 120%">B-Open</div>\n<img alt="B-Open logo" width="75" src="'.concat(O.a,'" />\n'),Object(n.l)(S).addTo(T).bindPopup(C);var j=new x({onPolygonReady:function(e){var t=document.getElementById("polygon");t.innerText=JSON.stringify(e.toGeoJSON(3),void 0,2),t.scrollTop=t.scrollHeight},position:"bottomleft"});T.addControl(j)}],[[5,1,2]]]);
//# sourceMappingURL=main.f4a2a3b3.chunk.js.map