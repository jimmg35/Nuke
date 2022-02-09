/* eslint-disable */
import React, { useEffect } from "react";
import "./MapPage.scss";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import "esri-leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const iconDefault = leaflet.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
leaflet.Marker.prototype.options.icon = iconDefault;

const MapPage = () => {
  useEffect(() => {
    var map = leaflet.map("mapid").setView([23.8, 120.7], 7);
    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '<a href="https://www.openstreetmap.org/">OSM</a>',
        maxZoom: 18,
      })
      .addTo(map);

    var marker = leaflet.marker([25.021676734665977, 121.54532183900099]); //台北和平籃球館
    marker.addTo(map);

    var marker = leaflet.marker([24.19844165115327, 120.68487446781825]); //洲際迷你蛋
    marker.addTo(map);

    var marker = leaflet.marker([22.621376584991026, 120.35449989661993]); //高雄鳳山體育館
    marker.addTo(map);

    var marker = leaflet.marker([24.82010655404438, 121.02006946968734]); //新竹縣體育館
    marker.addTo(map);

    var marker = leaflet.marker([24.993636718481298, 121.32372000830922]); //桃園市立體育館
    marker.addTo(map);

    var marker = leaflet.marker([25.03966881619817, 121.45208214239256]); //新莊體育館
    marker.addTo(map);

    var marker = leaflet.marker([25.116188111014647, 121.53647851151324]); //北市大天母校區體育館
    marker.addTo(map);

    var marker = leaflet.marker([24.14947910977818, 120.68768628552554]); //台體大體育館
    marker.addTo(map);

    var marker = leaflet.marker([24.960171919708188, 121.24236351016316]); //中原大學體育館
    marker.addTo(map);

    var marker = leaflet.marker([22.923291350237463, 120.22969381011727]); //嘉藥紹宗體育館
    marker.addTo(map);

    var marker = leaflet.marker([22.669174787236386, 120.30268598102121]); //高雄巨蛋
    marker.addTo(map);

    var marker = leaflet.marker([25.022222809041796, 121.5352537543466]); //台大綜合體育館
    marker.addTo(map);

    var marker = leaflet.marker([25.013611060837956, 121.45654423158221]); //板橋體育館
    marker.addTo(map);

    var marker = leaflet.marker([25.03846178296701, 121.43159104885878]); //輔仁大學體育館
    marker.addTo(map);
  }, []);
  return (
    <div>
      <header className="headerstyle">
        Taiwan Official Basketball Arena Map
      </header>
      <div id="mapid" className="MapPage"></div>
    </div>
  );
};

export default MapPage;
