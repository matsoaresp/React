import { createContext } from "react";


interface IUsuarioLogadoContextData {

    nomeUsuario: string;
    

}

interface IUsuarioLogadoProviderProps {

    children?: React.ReactNode
}

const UsuarioLogado = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);


export const UsuarioLogadoProvider = ({children}: IUsuarioLogadoProviderProps) => {
    return (
        <UsuarioLogado.Provider value={{nomeUsuario: 'Mateus'}}>
            {children}
        </UsuarioLogado.Provider>
    );
}

