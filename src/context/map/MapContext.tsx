import { Map } from "mapbox-gl";
import { createContext } from "react";

interface ContextProps {
  isMapReady: boolean;
  map?:Map;
  setMap: (map:Map)=>void;
}

export const MapContext = createContext({} as ContextProps);
