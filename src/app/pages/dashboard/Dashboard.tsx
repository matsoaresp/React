
import { useRef } from 'react';
import { Link } from 'react-router-dom'
export const Dashboard = () => {

    const counterRef = useRef({ counter: 0 });


    return (
        <section className="h-screen flex justify-center items-center">
            <div className="border border-blue-500 border border-4 rounded p-4 p-6 w-80 flex flex-col">
                <nav className='flex justify-center'>
                    <p>Dashboard</p>
                </nav>

                <p>Contador:  {counterRef.current.counter}</p>
                <div className='flex gap-4 justify-center'>
                    <Link className='bg-red-500 text-white px-4 py-2 rounded' to="/entrar">Zerar</Link>
                    <Link className='bg-blue-500 text-white px-4 py-2 rounded' to="/entrar">Exibir</Link>
                    <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={() => console.log(counterRef.current.counter++)}>Log</button>
                </div>

                
                <Link className='flex justify-center' to="/pagina-inicial">Pagina de Login</Link>
            </div>
        </section>

    );

}