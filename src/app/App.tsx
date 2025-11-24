import { Router } from "./pages/routes";
import { UsuarioLogadoProvider } from "./shared/context";

export const App =() => {
  return (
    <UsuarioLogadoProvider>
    <Router/>
    </UsuarioLogadoProvider>
    
  );
}

