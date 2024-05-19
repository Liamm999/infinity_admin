import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface HeaderButtonContextType {
  type?: 'create' | 'edit' | 'save' | 'export';
  setType: Dispatch<
    SetStateAction<'create' | 'save' | 'edit' | 'export' | undefined>
  >;
}

const HeaderButtonContext = createContext<HeaderButtonContextType | undefined>(
  undefined,
);

export const useHeaderButton = () => {
  const context = useContext(HeaderButtonContext);
  if (!context) {
    throw new Error('useHeaderButton need a provider');
  }
  return context;
};

export const HeaderButtonProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<
    'create' | 'edit' | 'save' | 'export' | undefined
  >(undefined);

  return (
    <HeaderButtonContext.Provider value={{ type, setType }}>
      {children}
    </HeaderButtonContext.Provider>
  );
};
