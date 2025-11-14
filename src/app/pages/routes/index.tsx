
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { Dashboard } from "..";
import { Login } from "../login/Login";

export const Router = () => {
    return (
            <BrowserRouter>
            <Switch>

            <Route exact path = "/entrar" component={Login}></Route>
            <Route exact path = "/pagina-inicial" component = {Dashboard} />

            <Route path = "*" component={() => <Redirect to ="/pagina-inicial"/>}/>
            
            </Switch>
            </BrowserRouter>
    );
}
