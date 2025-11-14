import { useHistory } from "react-router-dom";

export const Login = () => {

    const history = useHistory();

const handleClick = () =>{
    history.push('/pagina-login')
}

    return (
    <div>
        Login
        <button onClick={handleClick}>Pagina inicial</button>
    </div>
);
}