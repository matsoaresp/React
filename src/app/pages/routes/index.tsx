
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "..";
import { Login } from "../login/Login";
import {Info} from "../info/Info";
import {ExibirDados} from "../info/ExibirDados"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/pagina-inicial" component={Login} />
                <Route path="/entrar" component={Dashboard} />
                <Route path= "/forms" component={Info} />
                <Route path= "/exibir" component={ExibirDados} />
                <Route path="*" component={() => <Redirect to="/pagina-inicial" />} />
                

            </Switch>
        </BrowserRouter>
    );
}
