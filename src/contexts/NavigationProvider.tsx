import React, { ReactNode, useContext, useState } from "react";

interface ComponentProps {
  children: ReactNode;
}

type NavigationContextType = {
  homeNavOpen: boolean;
  setHomeNavOpen: (value: boolean) => void;
  adminNavOpen: boolean;
  setAdminNavOpen: (value: boolean) => void;
};

const NavigationContext = React.createContext<NavigationContextType | null>(
  null
);

export const useNavigation = () => {
  return useContext(NavigationContext) as NavigationContextType;
};

const NavigationProvider = ({ children }: ComponentProps) => {
  const [homeNavState, setHomeNavState] = useState<boolean>(false);
  const [adminNavState, setAdminNavState] = useState<boolean>(false);

  const setHomeNavOpen = (value: boolean): void => {
    setHomeNavState(value);
  };

  const setAdminNavOpen = (value: boolean): void => {
    setAdminNavState(value);
  };

  return (
    <>
      <NavigationContext.Provider
        value={{
          homeNavOpen: homeNavState,
          setHomeNavOpen,
          adminNavOpen: adminNavState,
          setAdminNavOpen,
        }}
      >
        {children}
      </NavigationContext.Provider>
    </>
  );
};

export default NavigationProvider;
