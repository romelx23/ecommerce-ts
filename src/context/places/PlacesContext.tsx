import { createContext } from "react";
import { Feature } from "../../interfaces/places";

interface ContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
    searchPlacesByTerm: (query: string) => Promise<Feature[]>;
    isLoadingPlaces: boolean;
    places: Feature[];
}

export const PlacesContext = createContext({} as ContextProps);
