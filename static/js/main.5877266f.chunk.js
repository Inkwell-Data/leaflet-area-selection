(this["webpackJsonp@bopen/leaflet-area-selection-example"]=this["webpackJsonp@bopen/leaflet-area-selection-example"]||[]).push([[0],[,function(t,e,n){t.exports=n.p+"static/media/B-Open.a8695c4b.svg"},function(t,e,n){t.exports=n(9)},,function(t,e,n){},function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var o=n(0),a=(n(3),n(4),{leafletAreaSelectorControl:"_37qQG",leafletMapOverlayPane:"_39tTo",endSelectionArea:"_3Xj9O",areaSelectMarker:"_1h_hk",areaSelectGhostMarker:"_1KD2U _1h_hk"});function i(t,e){void 0===e&&(e="");var n=function(t){return t.split("-").map((function(t,e){return 0===e?t:""+t[0].toUpperCase()+t.substring(1)})).join("")}(t);return a[n]?e?a[n]+" "+t+" "+e:a[n]+" "+t:e?t+" "+e:t}function r(t,e,n){void 0===n&&(n=null);var a=n?e.add(n):e;t._leaflet_pos=a,o.Browser.any3d?o.DomUtil.setTransform(t,a):(t.style.left=a.x+"px",t.style.top=a.y+"px")}var s=o.Browser.mobile?"touchstart":"click",l="area-draw-selection";function c(t,e){var n,a,r=t.getContainer().querySelector(".leaflet-map-pane"),c=function(t){var e=t.active,n=t.fadeOnActivation;return o.DomUtil.create("div",i("leaflet-map-overlay-pane","leaflet-pane"+(e?"":" inactive")+(n?" fading-enabled":"")))}(e);n=c,(a=r).parentNode.insertBefore(n,a.nextSibling);t.createPane(l,c).addEventListener(s,(function(e){e.isTrusted&&(e.stopPropagation(),t.fire("as:point-add",e))}))}function h(t){var e=t.getMap().getPane(l).querySelector(".end-selection-area");e&&e.remove()}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function g(t){t.originalEvent.preventDefault(),t.originalEvent.stopPropagation()}function p(t){var e=this;if(!this.map_moving){var n=t.index,a=void 0===n?null:n,c=t.clientX,h=t.clientY;if(void 0===c&&void 0===h){var p=t.touches[0];c=p.clientX,h=p.clientY}var m=this.getMap(),u=m.getContainer().getBoundingClientRect(),v=c-u.left,f=h-u.top;0===this.markers.length&&function(t,e){var n=e[0],a=e[1],c=t.getMap(),h=c.getPane(l),d=o.DomUtil.create("div",i("end-selection-area"),h),g=d.getBoundingClientRect();d.setAttribute("role","button"),d.addEventListener(s,(function(t){t.isTrusted&&(t.stopPropagation(),c.fire("as:creation-end"))}),{once:!0}),d.addEventListener("mouseenter",t.hoverClosePoint.bind(t)),d.addEventListener("mouseleave",t.outClosePoint.bind(t)),r(d,new o.Point(n,a),new o.Point(-g.width/2,-g.height/2))}(this,[v,f]);var k=new o.Point(v,f),y=new o.DivIcon({className:i("area-select-marker"),iconSize:[16,16]}),P=new o.Marker(m.containerPointToLatLng(k),{icon:y,draggable:!0}),b=L.bind(this);P.on("drag",b(null===a?this.markers.length:a)),P.on("dragstart",(function(t){t.target.getElement().classList.add("active")})),P.on("dragend",(function(t){t.target.getElement().classList.remove("active"),requestAnimationFrame((function(){e.onPolygonReady()}))}));var w,M={point:k,marker:P,index:a};if(P.on("dblclick",(w=this.markers.length,function(t){t.originalEvent.stopPropagation(),m.fire("as:marker-remove",d({},M,{index:null===a?w:a}))})),P.on("click",g),P.addTo(m),m.fire("as:marker-add",M),null!==a)for(var _=function(t){e.markers[t].marker.off("drag"),e.markers[t].marker.on("drag",b(t)),e.markers[t].marker.off("click"),e.markers[t].marker.on("click",g),e.markers[t].marker.off("dblclick"),e.markers[t].marker.on("dblclick",(function(n){m.fire("as:marker-remove",d({},e.markers[t],{index:t}))}))},C=a+1;C<this.markers.length;C++)_(C)}}function m(t){var e=t.index,n=void 0===e?null:e,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["index"]),r=this.getMap(),s={marker:a.marker,point:a.point},l=this.markers;null===n?l.push(s):l.splice(n,0,s);var c=l.length>=3;"draw"===this.phase&&(c?3===l.length&&l.forEach((function(t,e){var n=t.marker,o=n.getIcon();o.options.className=i("area-select-marker",0===e?"start-marker":null),n.setIcon(o)})):l.forEach((function(t){var e=t.marker,n=e.getIcon();n.options.className=i("area-select-marker","invalid"),e.setIcon(n)}))),r.fire("as:update-polygon"),"adjust"===this.phase&&(r.fire("as:update-ghost-points"),this.onPolygonReady()),"draw"===this.phase&&(this.closeLine&&r.removeLayer(this.closeLine),c&&(this.closeLine=new o.Polyline([l[0].marker.getLatLng(),l[l.length-1].marker.getLatLng()],{weight:3,color:"#c0c0c0",className:"areaCloseLine"}),r.addLayer(this.closeLine)))}function u(t){var e=this,n=t.index,o=void 0===n?0:n,a=this.getMap();if(this.markers.length>3){this.markers.splice(o||0,1)[0].marker.removeFrom(a),a.fire("as:update-polygon"),"adjust"===this.phase&&a.fire("as:update-ghost-points");for(var i=function(t){e.markers[t].marker.off("drag"),e.markers[t].marker.on("drag",L.bind(e)(t)),e.markers[t].marker.off("click"),e.markers[t].marker.on("click",g),e.markers[t].marker.off("dblclick"),e.markers[t].marker.on("dblclick",(function(n){n.originalEvent.stopPropagation(),a.fire("as:marker-remove",d({},e.markers[t],{index:t}))}))},r=o;r<this.markers.length;r++)i(r);this.onPolygonReady()}}function v(){var t=this,e=this.getMap(),n=this.markers,a=n.length>=3,i=new o.Polygon(n.map((function(t){return t.marker.getLatLng()})),d({color:a?"rgb(45, 123, 200)":"rgba(220, 53, 69, 0.7)",weight:2},!a&&{dashArray:"5, 10"},{className:"drawing-area-poligon"}));i.on("click",(function(t){o.DomEvent.stopPropagation(t)})),i.on("dblclick",(function(e){return o.DomEvent.stopPropagation(e),t.onPolygonDblClick(e),!1})),this.polygon&&e.removeLayer(this.polygon),this.polygon=i,e.addLayer(this.polygon)}function f(){var t=this,e=this.getMap();requestAnimationFrame((function(){t.clearGhostMarkers();var n=t.markers,a=t.ghostMarkers;n.forEach((function(r,s){var l=n[s+1]?n[s+1]:n[0],c=r.marker.getLatLng(),h=l.marker.getLatLng(),d=e.latLngToContainerPoint([(c.lat+h.lat)/2,(c.lng+h.lng)/2]),p=new o.DivIcon({className:i("area-select-ghost-marker"),iconSize:[16,16]}),m=new o.Marker(e.containerPointToLatLng(d),{icon:p,draggable:!0}),u={point:d,marker:m};m.on("click",g),m.on("dblclick",g),m.on("drag",P.bind(t)(a.length)),m.on("dragstart",b.bind(t)()),m.on("dragend",w.bind(t)(a.length)),a.push(u),m.addTo(e)}))}))}function k(){var t=this.getMap();t.removeLayer(this.closeLine),this.closeLine=null,this.markers[0].marker.getElement().classList.remove("start-marker"),this.setPhase("adjust"),t.fire("as:update-ghost-points"),this.onPolygonReady(),h(this)}function y(t){if(t.isTrusted){t.stopPropagation();var e=this.getMap();t.target.blur(),this.options.active||"adjust"===this.phase?(this.options.onButtonDeactivate(this.polygon,this,t),t.defaultPrevented||this.deactivate()):(this.options.onButtonActivate(this,t),t.defaultPrevented||(this.activateButton.classList.add("active"),e.getContainer().classList.add("drawing-area"),this.setPhase("draw",!0)))}}function L(t){var e=this,n=this.getMap();return function(o){var a=o.latlng;requestAnimationFrame((function(){var o=n.latLngToContainerPoint(a),i=e.markers[t].point;i.x=o.x,i.y=o.y,n.fire("as:update-polygon"),n.fire("as:update-ghost-points")}))}}function P(t){var e=this,n=this.getMap();return function(a){var i=a.latlng;requestAnimationFrame((function(){var a=e.markers[t],r=e.markers[t+1]?e.markers[t+1]:e.markers[0];e.ghostPolygon&&n.removeLayer(e.ghostPolygon),e.ghostPolygon=new o.Polygon([n.containerPointToLatLng(a.point),i,n.containerPointToLatLng(r.point)],{color:"rgb(45, 123, 200)",weight:2,opacity:.5,fillOpacity:.1,dashArray:"5, 10"}),n.addLayer(e.ghostPolygon),n.fire("as:update-polygon")}))}}function b(){return function(t){t.target.getElement().classList.add("active")}}function w(t){var e=this,n=this.getMap();return function(o){var a=o.target;a.getElement().classList.remove("active"),a.removeFrom(n),e.ghostPolygon&&n.removeLayer(e.ghostPolygon);var i=n.latLngToContainerPoint(a.getLatLng()),r=n.getContainer().getBoundingClientRect(),s={clientX:i.x+r.left,clientY:i.y+r.top,index:t+1};n.fire("as:point-add",s)}}var M=o.Control.extend({options:{active:!1,fadeOnActivation:!0,onPolygonReady:function(t,e){},onPolygonDblClick:function(t,e,n){},onButtonActivate:function(t,e){},onButtonDeactivate:function(t,e,n){}},initialize:function(t){void 0===t&&(t={}),o.Util.setOptions(this,t),this._map=null,this.phase=t.active?"draw":"inactive",this.map_moving=!1,this.markers=[],this.ghostMarkers=[],this.polygon=null,this.closeLine=null,this._mapMoveStart=this.mapMoveStart.bind(this),this._mapMoveEnd=this.mapMoveEnd.bind(this)},onAdd:function(t){return this._container=o.DomUtil.create("div",i("leaflet-area-selector-control")),this.activateButton=o.DomUtil.create("button","",this._container),this.activateButton.addEventListener(s,y.bind(this)),this.activateButton.addEventListener("dblclick",(function(t){t.stopPropagation()})),this.options.active?this.activateButton.classList.add("active"):this.activateButton.classList.remove("active"),this._map=t,c(t,this.options),t.on("movestart",this._mapMoveStart),t.on("moveend",this._mapMoveEnd),t.on("as:point-add",p.bind(this)),t.on("as:marker-add",m.bind(this)),t.on("as:marker-remove",u.bind(this)),t.on("as:creation-end",k.bind(this)),t.on("as:update-polygon",v.bind(this)),t.on("as:update-ghost-points",f.bind(this)),this._container},onRemove:function(t){t.off("movestart",this._mapMoveStart),t.off("moveend",this._mapMoveEnd),t.off("as:point-add"),t.off("as:marker-add"),t.off("as:marker-remove"),t.off("as:creation-end"),t.off("as:update-polygon"),t.off("as:update-ghost-points")},getMap:function(){return this._map},onPolygonReady:function(){this.options.onPolygonReady(this.polygon,this)},onPolygonDblClick:function(t){this.options.onPolygonDblClick(this.polygon,this,t)},setPhase:function(t,e){void 0===e&&(e=!1),this.phase=t,this.options.active="draw"===t,(e||"draw"===this.phase)&&(this.clearGhostMarkers(),this.clearMarkers(),this.clearPolygon());var n=this._map.getPane(l).parentNode;this.options.active?n.classList.remove("inactive"):n.classList.add("inactive")},mapMoveStart:function(){this.map_moving=!0},mapMoveEnd:function(t){var e=this;requestAnimationFrame((function(){e.map_moving=!1}));var n=this._map,a=n.getPane(l).querySelector(".end-selection-area");if(a){var i=this.markers[0].marker,s=a.getBoundingClientRect();r(a,n.latLngToContainerPoint(i.getLatLng()),new o.Point(-s.width/2,-s.height/2))}this.translatePolygon()},translatePolygon:function(){if(0!==this.markers.length){var t=this._map;this.markers.forEach((function(e){e.point=t.latLngToContainerPoint(e.marker.getLatLng())})),this.ghostMarkers.forEach((function(e){e.point=t.latLngToContainerPoint(e.marker.getLatLng())}))}},hoverClosePoint:function(t){this.markers.length>2&&this.closeLine&&this.closeLine.removeFrom(this._map)},outClosePoint:function(t){this.closeLine&&this.closeLine.addTo(this._map)},clearMarkers:function(){var t=this;this.markers.forEach((function(e){e.marker.removeFrom(t._map)})),this.markers=[]},clearGhostMarkers:function(){var t=this;this.ghostMarkers.forEach((function(e){e.marker.removeFrom(t._map)})),this.ghostMarkers=[]},clearPolygon:function(){this.polygon&&this.polygon.removeFrom(this._map),this.polygon=null,this.closeLine&&this.closeLine.removeFrom(this._map),this.closeLine=null},deactivate:function(){h(this),this.activateButton.classList.remove("active"),this._map.getContainer().classList.remove("drawing-area"),this.setPhase("inactive",!0)}});o.Util.extend(o.Control,{DrawAreaSelection:M,drawAreaSelection:function(t){return void 0===t&&(t={}),new M(t)}});n(5);var _=n(1),C=n.n(_);delete o.Icon.Default.prototype._getIconUrl,o.Icon.Default.mergeOptions({iconRetinaUrl:n(6),iconUrl:n(7),shadowUrl:n(8)});var E=[41.901493,12.5009157],x=new o.Map("root",{tap:!1}).setView(E,13);Object(o.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(x);var B=document.createElement("div");B.innerHTML='<div style="text-align: center; font-size: 120%">B-Open</div>\n<img alt="B-Open logo" width="75" src="'.concat(C.a,'" />\n'),Object(o.marker)(E).addTo(x).bindPopup(B);var O=new M({onPolygonReady:function(t){var e=document.getElementById("polygon");e.textContent=JSON.stringify(t.toGeoJSON(3),void 0,2),e.scrollTop=e.scrollHeight},onPolygonDblClick:function(t,e,n){Object(o.geoJSON)(t.toGeoJSON(),{style:{opacity:.5,fillOpacity:.2,color:"red"}}).addTo(x),e.deactivate()},onButtonActivate:function(){document.getElementById("polygon").textContent="Please, draw your polygon",console.log("Please, draw your polygon")},onButtonDeactivate:function(t){var e=document.getElementById("polygon");console.log("Deactivated"),e.textContent="Deactivated! Current polygon is:\n\n".concat(t?JSON.stringify(t.toGeoJSON(3),void 0,2):"null")},position:"topleft"});x.addControl(O)}],[[2,1,2]]]);
//# sourceMappingURL=main.5877266f.chunk.js.map