import React, {createContext, useState, ReactNode, Children ,useContext} from 'react';

interface MyContextProps {
  medal: string ;
  numberPeople: number;
  restaurent: String;
  dish: String;
  serving: Number;
  newServing: any;
  setmedal: (newmedal: string) => void;
  setnumberPeople: (newnumberPeople: Number) => void;
  setrestaurent: (newrestaurent: String) => void;
  setdish: (newdish: string) => void;
  setServing:(newServing: Number) => void;
  setnewServing:(newnewServing: any) => void;
}



interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);

export const ContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [medal, setmedal] = React.useState<string>('');
  const [numberPeople, setnumberPeople] = React.useState<any>();
  const [restaurent, setrestaurent] = React.useState<String>('');
  const [dish, setdish] = React.useState<String>('');
  const [serving, setserving] = React.useState<any>();
  const [newServing, setnewServing] = React.useState<any>();
  return (
    <MyContext.Provider value={{medal, numberPeople, restaurent, dish,serving,newServing,setnewServing:setnewServing, setmedal:setmedal, setnumberPeople:setnumberPeople, setrestaurent:setrestaurent, setdish:setdish,setServing:setserving}}>
      {children}
    </MyContext.Provider>
  );
};


 export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('Error');
    }
    return context;
  };