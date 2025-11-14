
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Dashboard } from "..";
import { Login } from "../login/Login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/pagina-inicial" component={Dashboard} />
                <Route path="/entrar" component={Login} />
                <Route path="*" component={() => <Redirect to="/entrar" />} />

            </Switch>
        </BrowserRouter>
    );
}
