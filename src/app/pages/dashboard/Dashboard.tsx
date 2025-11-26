
import { count } from 'console';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { UsuarioLogadoContext } from '../../shared/context';
import { useUsuarioLogado } from '../../shared/hooks';
export const Dashboard = () => {

    const counterRef = useRef({ counter: 0 });
    const history = useHistory();
    const usuarioLogadoContext = useContext(UsuarioLogadoContext);

    const {nomeDoUsuario,logout} = useUsuarioLogado(); 

    if (counterRef.current.counter < 0) {
        counterRef.current.counter = 0
    }
    const handleEntrar  = () => {
        history.push('/forms')
    }
   
    return (
        <section className="h-screen flex justify-center items-center">
            <div className="shadow-xl shadow-black/20 border-2
 rounded p-4 p-6 w-80 flex flex-col">
                <nav className='flex justify-center'>
                    <p>Dashboard</p>

                </nav>
                <div className='flex justify-center'>
                    <p>{usuarioLogadoContext.nomeUsuario}</p>
                    </div>

                <p>Contador:  {counterRef.current.counter}</p>
                <div className='flex gap-4 justify-center'>
                    <Link className='bg-red-500 text-white px-4 py-2 rounded' to="/entrar" onClick={() => console.log(counterRef.current.counter--)}>-</Link>
                    <Link className='bg-red-500 text-white px-4 py-2 rounded' to="/entrar" onClick={() => console.log(counterRef.current.counter = 0)}>Zerar</Link>
                    <Link className='bg-green-500 text-white px-4 py-2 rounded' to= "/entrar" onClick={() => console.log(counterRef.current.counter++)}>+</Link>
                </div>


                   <button 
                    className='bg-blue-500 text-white px-4 py-2 rounded mt-6 ' 
                    type="button" 
                    onClick={handleEntrar}
                >
                    Entrar
                </button>
            </div>
        </section>

    );

}