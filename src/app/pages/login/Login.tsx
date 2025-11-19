import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { InputLogin } from "./components/InputLogin";
import { useHistory } from "react-router-dom";

import {Link} from 'react-router-dom'

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);
    
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const emailLength = useMemo(() => email.length, [email]);

    const handleEntrar = useCallback(() => {
        if (!email.trim && !password.trim ){
              alert("Preencha email e senha.")
              return 
        }

        const emailValido = /\S+@\S+\.\S+/.test(email);
        if (!emailValido){
            alert("Digite um e-mail válido.")
            return
        }

        if (password.length < 4){
            alert("A senha deve ter mais de 4 caracteres")
            return
        }

        history.push('/entrar')
        console.log(email);
        console.log(password);
    }, [email, password]);
  
    return (
        <section className="flex justify-center items-center h-screen">
            <form className="flex flex-col shadow-xl shadow-black/20 p-4 rounded border-2">
                <InputLogin
                    label="Email"
                    value={email}
                    emailLength={emailLength}
                    onChange={setEmail}
                    onEnter={() => inputPasswordRef.current?.focus()}
                />
               <InputLogin
                    label="Senha"
                    type = "password"
                    value={password}
                    onChange={setPassword}
                    ref = {inputPasswordRef}
               />
                <Link to="/entrar" onClick={handleEntrar}>Entrar</Link>
            </form>
        </section>
    );
};
