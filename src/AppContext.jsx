import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
function AppContextProvider({ children }) {
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

export default AppContextProvider;
