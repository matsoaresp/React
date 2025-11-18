
import { useRef } from 'react';
import { Link } from 'react-router-dom'
export const Dashboard = () => {

    const counterRef = useRef({counter: 0});


    return (
        <div>
            <p>Dashboard</p>
            <Link to="/entrar">Exibir</Link>
            <Link to="/entrar">Zerar</Link>
            <p>Contador:  {counterRef.current.counter}</p>
            <button onClick={() => console.log (counterRef.current.counter++)}>Log</button>
            <Link to="/pagina-inicial">Login</Link>
        </div>

    );

}