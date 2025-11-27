import { createContext, useCallback, useEffect, useState } from "react";


interface IUsuarioLogadoContextData {

    nomeUsuario: string;
    logout?: () => void;
    

}

interface IUsuarioLogadoProviderProps {

    children?: React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);


export const UsuarioLogadoProvider = ({children}: IUsuarioLogadoProviderProps) => {
    
    const [nome, setNome] = useState ('');

    useEffect (() => {

        setTimeout (() => {

            setNome("Mateus")
        }, 300);

    });
    const handleLogout = useCallback (() =>{

        console.log("Logout executou")

    },[])
    return (

        <UsuarioLogadoContext.Provider value={{nomeUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}

