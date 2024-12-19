import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const MapComponent = ({ locations, roads, centerPoint, zoomVal }) => {
  const template_place = {
    title: "{Name}",
    content: "{Content}",
  };

  const template_route = {
    title: "{Name}",
    content: "{description}",
  };

  const colors = [
    [29, 93, 222],
    [235, 21, 57],
    [34, 139, 34],
    [255, 165, 0],
  ];

  const places = locations.map((place) => {
    return {
      type: "point",
      longitude: place?.point.longitude,
      latitude: place?.point.latitude,
      Name: place?.Name,
      Content: place?.description,
      symbol: {
        type: "picture-marker",
        url: place?.icon,
        width: "40px",
        height: "40px",
      },
      popupTemplate: template_place,
    };
  });

  const routes = roads.map((route, index) => {
    return {
      type: "polyline",
      paths: route.points.map((point) => [point.longitude, point.latitude]),
      Name: route.name,
      description: route.description,
      symbol: {
        type: "simple-line",
        color: colors[index % colors.length],
        width: 4,
      },
      popupTemplate: template_route,
    };
  });
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "topo-vector",
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [centerPoint?.longitude, centerPoint?.latitude],
        zoom: zoomVal,
        ui: {
          components: ["zoom", "compass"],
        },
      });

      const createGraphic = (data) => {
        return new Graphic({
          geometry: data,
          symbol: data.symbol,
          attributes: data,
          popupTemplate: data.popupTemplate,
        });
      };

      const graphicsLayer = new GraphicsLayer();
      places.forEach((place) => {
        graphicsLayer.add(createGraphic(place));
      });
      routes.forEach((route) => {
        graphicsLayer.add(createGraphic(route));
      });
      map.add(graphicsLayer);

      return () => {
        if (view) {
          view.destroy();
        }
      };
    }
  }, []);

  return <div style={{ height: "60vh", width: "100%" }} ref={mapDiv}></div>;
};

MapComponent.propTypes = {
  locations: PropTypes.array.isRequired,
  roads: PropTypes.array.isRequired,
  centerPoint: PropTypes.object.isRequired,
  zoomVal: PropTypes.number.isRequired,
};

export default MapComponent;
