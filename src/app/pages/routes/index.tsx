
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "..";
import { Login } from "../login/Login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/entrar" component={Dashboard} />
                <Route path="/pagina-inicial" component={Login} />
                <Route path="*" component={() => <Redirect to="/entrar" />} />

            </Switch>
        </BrowserRouter>
    );
}
