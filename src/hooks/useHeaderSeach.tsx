import React, { createContext, ReactNode, useContext, useState } from 'react';

interface HeaderSearchContextType {
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderSearchContext = createContext<HeaderSearchContextType | undefined>(
  undefined,
);

export const useHeaderSearch = () => {
  const context = useContext(HeaderSearchContext);
  if (!context) {
    throw new Error(
      'useHeaderSearch must be used within a HeaderSearchProvider',
    );
  }
  return context;
};

export const HeaderSearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchContent, setSearchContent] = useState<string>('');

  return (
    <HeaderSearchContext.Provider value={{ searchContent, setSearchContent }}>
      {children}
    </HeaderSearchContext.Provider>
  );
};
