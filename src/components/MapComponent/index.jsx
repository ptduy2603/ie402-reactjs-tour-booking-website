import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/assets/esri/themes/light/main.css";
import { useRef, useEffect } from "react";

const MapComponent = ({ locations, roads, center_point, zoomVal }) => {
    var template_place = {
        title: "{Name}",
        content: "{Content}",
    }

    const places = locations.map((place) => {
        return {
            type: "point",
            longitude: place.longitude,
            latitude: place.latitude,
            Name: place.Name,
            Content: place.Content,
            symbol: {
                type: "picture-marker",
                url: place.symbolURL,
                width: "40px",
                height: "40px",
            },
            popupTemplate: template_place,
        }
    });


    var template_route = {
        title: "{Name}",
        content: "{description}",
    }

    const routes = roads.map((route) => {
        return {
            type: "polyline",
            paths: route.paths,
            Name: route.Name,
            description: route.description,
            symbol: {
                type: "simple-line",
                color: route.symbol.color,
                width: 4,
            },
            popupTemplate: template_route,
        }
    })

    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            const map = new Map({
                basemap: "topo-vector",
            })

            const view = new MapView({
                container: mapDiv.current,
                map: map,
                center: [center_point.longitude, center_point.latitude],
                zoom: zoomVal,
                ui: {
                    components: ["zoom", "compass"],
                }
            })

            const createGraphic = (data) => {
                return new Graphic({
                    geometry: data,
                    symbol: data.symbol,
                    attributes: data,
                    popupTemplate: data.popupTemplate
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
            }
        }
    }, []);
    return <div style={{ height: "60vh", width: "100%" }} ref={mapDiv}></div>;
}

export default MapComponent;
