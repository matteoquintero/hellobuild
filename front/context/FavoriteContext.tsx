import { createContext, useContext, ReactNode, useState } from "react";
import { Favorite } from "../types/types";

type favoriteContextType = {
    favorites: Favorite[];
    setFavorites: (favorites:Favorite[]) => void;};

const favoriteContextDefaultValues: favoriteContextType = {
    favorites: [],
    setFavorites: () => {},
};

const FavoriteContext = createContext<favoriteContextType>(favoriteContextDefaultValues);

export function useFavorite() {
    return useContext(FavoriteContext);
}

type Props = {
    children: ReactNode;
};

export function FavoriteProvider({ children }: Props) {
    const [favorites, setData] = useState<Favorite[]>([]);

    const setFavorites = (favorites:Favorite[]) => {
        setData(favorites);
    };

    const value = {
        favorites,
        setFavorites
    };

    return (
        <>
            <FavoriteContext.Provider value={value}>
                {children}
            </FavoriteContext.Provider>
        </>
    );
}