import { createContext, useCallback } from "react";


interface IUsuarioLogadoContextData {

    nomeUsuario: string;
    logout?: () => void;
    

}

interface IUsuarioLogadoProviderProps {

    children?: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);


export const UsuarioLogadoProvider = ({children}: IUsuarioLogadoProviderProps) => {
    
    const handleLogout = useCallback (() =>{

        console.log("Logout executou")

    },[])
    return (

        <UsuarioLogadoContext.Provider value={{nomeUsuario: 'Mateus', logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}

