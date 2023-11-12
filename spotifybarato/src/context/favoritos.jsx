import React, { createContext, useContext, useReducer } from 'react';

const FavoriteSongsContext = createContext();

const initialState = {
  favorites: [],
};

const favoriteSongsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.song] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((song) => song.id !== action.song.id),
      };
    default:
      return state;
  }
};

export const FavoriteSongsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteSongsReducer, initialState);

  return (
    <FavoriteSongsContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteSongsContext.Provider>
  );
};

export const useFavoriteSongs = () => {
  const context = useContext(FavoriteSongsContext);
  if (!context) {
    throw new Error('useFavoriteSongs must be used within a FavoriteSongsProvider');
  }
  return context;
};
