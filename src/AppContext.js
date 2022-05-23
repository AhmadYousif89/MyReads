import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
function AppContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [myCollection, setMyCollection] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
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

export default AppContextProvider;
