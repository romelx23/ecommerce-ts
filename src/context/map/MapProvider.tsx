import { Map, Marker, Popup } from "mapbox-gl";
import { FC, useContext, useEffect, useReducer } from "react";
import { MapContext, MapReducer } from ".";
import { PlacesContext } from "../places";
export interface Props {
  children: React.ReactNode;
}

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

export const Map_INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: [],
};

export const MapProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(MapReducer, Map_INITIAL_STATE);
  const { places } = useContext(PlacesContext);
  useEffect(() => {
    console.log(places);
    state.markers.forEach((marker) => marker.remove());
    const newMarkes: Marker[] = [];
    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`
        <h3>${place.text}</h3>
        <p>${place.place_name}</p>
        `);
        const newMarker = new Marker({
            color: "red",
        })
        .setLngLat([lng, lat])
        .setPopup(popup).addTo(state.map!);
        newMarkes.push(newMarker);
    }
    // todo limpiar polyline
    dispatch({
        type: "[Map] - setMarkers",
        payload: newMarkes,
    })
  }, [places]);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`
        <h4>Aquí Estoy UWU</h4>
        <p>En algún Lugar del mundo</p>
      `);
    new Marker({
      color: "#4f78ff",
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({
      type: "[Map] - setMap",
      payload: map,
    });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
