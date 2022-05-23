import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
function AppContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [myCollection, setMyCollection] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        myCollection,
        setMyCollection,
        searchedBooks,
        setSearchedBooks,
        searchValue,
        setSearchValue,
        isSearchOpen,
        setIsSearchOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export const useLoadingHook = () => {
  const { isLoading, setIsLoading } = useContext(AppContext);
  return { isLoading, setIsLoading };
};
export const useBookCollection = () => {
  const { myCollection, setMyCollection } = useContext(AppContext);
  return { myCollection, setMyCollection };
};
export const useSearchList = () => {
  const { searchedBooks, setSearchedBooks } = useContext(AppContext);
  return { searchedBooks, setSearchedBooks };
};
export const useSearchValue = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  return { searchValue, setSearchValue };
};
export const useSearchBtn = () => {
  const { isSearchOpen, setIsSearchOpen } = useContext(AppContext);
  return { isSearchOpen, setIsSearchOpen };
};

export default AppContextProvider;
